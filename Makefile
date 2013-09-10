PROVE:=perl -Mlib=extlib/lib/perl5 extlib/bin/prove
JOBS:=4

PORT:=2012

all: lib/chromeapps.jsx doc

## compiler stuff

doc:
	rm -rf doc
	find lib -name '*.jsx' | xargs -n 1 -- jsx --mode doc --output doc

## test stuff

# e.g. make test JOBS=2

# for authors
lib/chromeapps.jsx: idl2jsx/json2idl
	idl2jsx/build.pl
	idl2jsx/maketest.pl > t/lib/001.chromeapps.jsx
	jsx --test --add-search-path . t/lib/001.chromeapps.jsx

idl2jsx/json2idl: idl2jsx/json2idl.jsx
	jsx --release --output $@ --executable node $<

test-run: idl2jsx/json2idl
	idl2jsx/json2idl idl2jsx/spec/runtime

show-todo:
	find t -name '*.todo.*' | grep -v '~'

## cleanup

clean:
	rm -rf idl2jsx/json2idl | true
	rm -rf lib/chromeapps.jsx | true
.PHONY: doc
