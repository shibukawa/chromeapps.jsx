import "js/nodejs.jsx";
import "console.jsx";

class Dictionary
{
    var identifier : string;
    var description : string;
    var properties : Map.<variant>;

    function constructor (json : variant, name : string = '')
    {
        if (name == '')
        {
            name = json['name'] as string;
            name = name.slice(0, 1).toUpperCase() + name.slice(1) + "Type";
        }
        this.identifier = name;
        this.properties = json['properties'] as Map.<variant>;
        this.description = json['description'] as string;
    }
}

class Callback
{
    var identifier : string;
    var description : string;
    var parameters : variant[];
    var returns : variant;

    function constructor (json : variant)
    {
        var params = json['parameters'] as variant[];
        var ids = [] : string[];
        this.parameters = [] : variant[];
        //console.log(JSON.stringify(parameter, null, 4));
        if (params)
        {
            for (var i = 0; i < params.length; i++)
            {
                this.parameters.push(params[i]);
                var param = params[i];
                if (param['$ref'])
                {
                    var ref = params[i]['$ref'] as string;
                    var id = ref.split('.');
                    ids.push(id[id.length - 1]);
                }
                else if (param['type'])
                {
                   ids.push(param['type'] as string);
                }
            }
        }
        if (ids.length == 0)
        {
            this.identifier = 'VoidCallback';
        }
        else
        {
            this.identifier = ids.join('') + 'Callback';
        }
        json['identifier'] = this.identifier;
        this.returns = json['returns'];
        if (json['description'])
        {
            this.description = json['description'] as string;
        }
    }
}

class EnumObj
{
    var enums : string[];
    var type : string;
    var identifier : string;
    var description : string;
    function constructor (key : string, parameter : variant)
    {
        this.enums = parameter['enum'] as string[];
        this.type = parameter['type'] as string;
        this.identifier = key.slice(0, 1).toUpperCase() + key.slice(1) + "Enum";
        parameter['identifier'] = this.identifier;
        if (parameter['description'])
        {
            this.description = parameter['description'] as string;
        }
    }
}

class IDLGenerator
{
    var result : string[];
    var dicts : Map.<Dictionary>;
    var enums : Map.<EnumObj>;
    var callbacks : Map.<Callback>;

    function constructor ()
    {
        this.result = [] : string[];
        this.dicts = {} : Map.<Dictionary>;
        this.enums = {} : Map.<EnumObj>;
        this.callbacks = {} : Map.<Callback>;
    }

    function generate (filename : string) : string
    {
        var jsonorig = node.fs.readFileSync(filename, 'utf8').split('\n');
        var jsonsrc = jsonorig.filter(function (line) {
            return (!/^\s*\/\//.test(line));
        }).join('\n');
        var json = JSON.parse(jsonsrc) as variant[];
        for (var i = 0; i < json.length; i++)
        {
            this.parseRoot(json[i]);
        }
        return this.result.join('');
    }

    function newline(count : int = 1) : void
    {
        for (var i = 0; i < count; i++)
        {
            this.result.push('\n');
        }
    }

    function indent(indent : int) : void
    {
        for (var i = 0; i < indent; i++)
        {
            this.result.push('  ');
        }
    }

    function dumpDescFromObj(json : variant, indent : int = 0) : void
    {
        if (json['description'])
        {
            this.dumpDescription(json['description'] as string, indent);
        }
    }

    function dumpDescription(description : string, indent : int = 0) : void
    {
        if (!description)
        {
            return;
        }
        var descriptions = description.split('. ');
        for (var i = 0; i < descriptions.length; i++)
        {
            this.indent(indent);
            var description = descriptions[i];
            this.result.push('// ' + description);
            if (description.slice(description.length - 1) != '.')
            {
                this.result.push('.');
            }
            this.newline();
        }
    }

    function parseRoot(json : variant) : void
    {
        if (json['namespace'] != null)
        {
            this.dumpDescFromObj(json);
            this.result.push('namespace ', json['namespace'] as string);
            this.result.push(' {');
            this.newline();
            var types = json['types'] as variant[];
            for (var i = 0; i < types.length; i++)
            {
                var dict = new Dictionary(types[i], types[i]['id'] as string);
                this.dicts[dict.identifier] = dict;
            }
            var functions = json['functions'] as variant[];
            if (functions)
            {
                for (var i = 0; i < functions.length; i++)
                {
                    this.parseFunctionParameter(functions[i], 1);
                }
            }
            var events = json['events'] as variant[];
            if (events)
            {
                for (var i = 0; i < events.length; i++)
                {
                    this.parseFunctionParameter(events[i], 1);
                }
            }
            for (var key in this.dicts)
            {
                if (this.dicts.hasOwnProperty(key))
                {
                    this.parseDictionary(this.dicts[key]);
                }
            }

            for (var key in this.dicts)
            {
                if (this.dicts.hasOwnProperty(key))
                {
                    this.dumpDictionary(this.dicts[key]);
                }
            }

            for (var key in this.enums)
            {
                if (this.enums.hasOwnProperty(key))
                {
                    this.dumpEnum(this.enums[key]);
                }
            }

            for (var key in this.callbacks)
            {
                if (this.callbacks.hasOwnProperty(key))
                {
                    this.dumpCallback(this.callbacks[key]);
                }
            }

            if (functions)
            {
                this.indent(1);
                this.result.push('interface Functions {');
                this.newline();
                for (var i = 0; i < functions.length; i++)
                {
                    this.dumpFunction(functions[i]);
                }
                this.indent(1);
                this.result.push('};');
                this.newline(2);
            }

            if (events)
            {
                this.indent(1);
                this.result.push('interface Events {');
                this.newline();
                for (var i = 0; i < events.length; i++)
                {
                    this.dumpFunction(events[i]);
                }
                this.indent(1);
                this.result.push('};');
                this.newline();
            }
            this.result.push('};');
        }
    }

    function parseFunctionParameter(json : variant, indent : int) : void
    {
        var parameters = json['parameters'] as variant[];
        if (parameters)
        {
            for (var i = 0; i < parameters.length; i++)
            {
                var name = parameters[i]['name'] as string;
                this.checkType(parameters[i], name);
            }
        }
    }

    function checkType(json : variant, key : string) : void
    {
        if (json['type'] as string == 'object')
        {
            var dict = new Dictionary(json);
            this.dicts[dict.identifier] = dict;
        }
        else if (json['type'] as string == 'function')
        {
            var callback = new Callback(json);
            this.callbacks[callback.identifier] = callback;
        }
        else if (json['type'] as string == 'array')
        {
            if (json['items']['enum'] != null)
            {
                var enumobj = new EnumObj(key, json['items']);
                if (!this.enums[enumobj.identifier] || enumobj.description)
                {
                    this.enums[enumobj.identifier] = enumobj;
                }
            }
        }
        else if (json['enum'] != null)
        {
            var enumobj = new EnumObj(key, json);
            if (!this.enums[enumobj.identifier] || enumobj.description)
            {
                this.enums[enumobj.identifier] = enumobj;
            }
        }
    }

    function parseDictionary(dict : Dictionary) : void
    {
        for (var key in dict.properties)
        {
            if (dict.properties.hasOwnProperty(key))
            {
                this.checkType(dict.properties[key], key);
            }
        }
    }

    function dumpType(json : variant) : void
    {
        if (!json)
        {
            this.result.push('void');
        }
        else if (json['type'] != null)
        {
            if (json['type'] == 'function')
            {
                this.result.push(json['identifier'] as string);
            }
            else
            {
                this.result.push(json['type'] as string);
            }
        }
        else if (json['$ref'] != null)
        {
            this.result.push(json['$ref'] as string);
        }
        else
        {
            var choices = json['choices'] as variant[];
            this.result.push('(');
            for (var i = 0; i < choices.length; i++)
            {
                if (i != 0)
                {
                    this.result.push(' or ');
                }
                this.result.push(choices[i]['type'] as string);
            }
            this.result.push(')');
        }
    }
    function dumpProperty(key : string, json : variant, indent : int) : void
    {
        this.dumpDescFromObj(json, indent);
        this.indent(indent);
        this.dumpType(json);
        if (json['optional'] as boolean)
        {
            this.result.push('?');
        }
        this.result.push(' ' + key + ';');
        this.newline(2);
    }

    function dumpDictionary(dict : Dictionary) : void
    {
        this.dumpDescription(dict.description, 1);
        this.indent(1);
        this.result.push('dictionary ' + dict.identifier + ' {');
        this.newline();

        for (var key in dict.properties)
        {
            if (dict.properties.hasOwnProperty(key))
            {
                this.dumpProperty(key, dict.properties[key], 2);
            }
        }

        this.indent(1);
        this.result.push('};');
        this.newline();
    }

    function dumpEnum(enumobj : EnumObj) : void
    {
        this.dumpDescription(enumobj.description, 1);
        this.indent(1);
        this.result.push('enum ', enumobj.identifier, ' { ');
        this.result.push(enumobj.enums.join(', '), ' };');
        this.newline(2);
    }

    function dumpFunctionParameters(params : variant[]) : void
    {
        if (!params)
        {
            return;
        }
        if (params.length > 1)
        {
            this.newline();
        }
        for (var i = 0; i < params.length; i++)
        {
            var param = params[i];
            if (params.length > 1)
            {
                this.indent(5);
            }
            if (param['optional'])
            {
                this.result.push('optional ');
            }
            this.dumpType(param);
            this.result.push(' ');
            this.result.push(param['name'] as string);
            if (i != params.length - 1)
            {
                this.result.push(',');
                if (params.length > 1)
                {
                    this.newline();
                }
            }
        }
    }

    function dumpCallback(callback : Callback) : void
    {
        this.dumpDescription(callback.description, 1);
        this.indent(1);
        this.result.push('callback ', callback.identifier, ' =');
        this.newline();
        this.indent(3);
        this.dumpType(callback.returns);
        this.result.push(' (');
        this.dumpFunctionParameters(callback.parameters);
        this.result.push(');');
        this.newline(2);
    }

    function dumpFunction(json : variant) : void
    {
        this.dumpDescFromObj(json, 2);
        this.indent(2);
        this.result.push('static ');
        this.dumpType(json['returns']);
        this.result.push(' ', json['name'] as string, '(');
        var params = json['parameters'] as variant[];
        this.dumpFunctionParameters(params);
        this.result.push(');');
        this.newline(2);
    }
}

class _Main
{
    static function main(argv: string[]) : void
    {
        for (var i = 0; i < argv.length; i++)
        {
            var generator = new IDLGenerator();
            var idlsrc = generator.generate(argv[i]);
            console.log(idlsrc);
        }
    }
}
