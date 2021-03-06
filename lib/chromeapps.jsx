/***
 * Chrome Apps interface for JSX
 * Some part of this code is generated from IDL in chrome repository.
 *
 * @author Yoshiki Shibukawa
 */
import "js/web.jsx";

native class chrome
{
    static __readonly__ var alarms : _alarms;
    static __readonly__ var app : _app;
    static __readonly__ var audio : _audio;
    static __readonly__ var contextMenus : _contextMenus;
    static __readonly__ var fileSystem : _fileSystem;
    static __readonly__ var i18n : _i18n;
    static __readonly__ var identity : _identity;
    static __readonly__ var idle : _idle;
    static __readonly__ var location : _location;
    static __readonly__ var mediaGalleries : _mediaGalleries;
    static __readonly__ var notifications : _notifications;
    static __readonly__ var permissions : _permissions;
    static __readonly__ var power : _power;
    static __readonly__ var pushMessaging : _pushMessaging;
    static __readonly__ var runtime : _runtime;
    static __readonly__ var serial : _serial;
    static __readonly__ var socket : _socket;
    static __readonly__ var storage : _storage;
    static __readonly__ var syncFileSystem : _syncFileSystem;
    static __readonly__ var system : _system;
    static __readonly__ var tts : _tts;
    static __readonly__ var types : _types;
    static __readonly__ var usb : _usb;
    static __readonly__ var webstore : _webstore;
}

native final class tabs
{
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tabs.json */
    class Tab {

        // The ID of the tab.
        // Tab IDs are unique within a browser session.
        // Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the $ref:sessions API, in which case a session ID may be present.
        var id : Nullable.<int>;
        // The zero-based index of the tab within its window.
        var index : int;
        // The ID of the window the tab is contained within.
        var windowId : int;
        // The ID of the tab that opened this tab, if any.
        // This property is only present if the opener tab still exists.
        var openerTabId : Nullable.<int>;
        // Whether the tab is selected.
        var selected : boolean;
        // Whether the tab is highlighted.
        var highlighted : boolean;
        // Whether the tab is active in its window.
        // (Does not necessarily mean the window is focused.).
        var active : boolean;
        // Whether the tab is pinned.
        var pinned : boolean;
        // The URL the tab is displaying.
        // This property is only present if the extension's manifest includes the <code>"tabs"</code> permission.
        var url : Nullable.<string>;
        // The title of the tab.
        // This property is only present if the extension's manifest includes the <code>"tabs"</code> permission.
        var title : Nullable.<string>;
        // The URL of the tab's favicon.
        // This property is only present if the extension's manifest includes the <code>"tabs"</code> permission.
        // It may also be an empty string if the tab is loading.
        var favIconUrl : Nullable.<string>;
        // Either <em>loading</em> or <em>complete</em>.
        var status : Nullable.<string>;
        // Whether the tab is in an incognito window.
        var incognito : boolean;
        // The width of the tab in pixels.
        var width : Nullable.<int>;
        // The height of the tab in pixels.
        var height : Nullable.<int>;
        // The session ID used to uniquely identify a Tab obtained from the $ref:sessions API.
        var sessionId : Nullable.<string>;

    } // end of Tab
}

// Name spaces

native __fake__ class _alarms
{
    // Creates an alarm.  Near the time(s) specified by <var>alarmInfo</var>,
    // the <code>onAlarm</code> event is fired. If there is another alarm with
    // the same name (or no name if none is specified), it will be cancelled and
    // replaced by this alarm.
    //
    // In order to reduce the load on the user's machine, Chrome limits alarms
    // to at most once every 1 minute but may delay them an arbitrary amount
    // more.  That is, setting <code>delayInMinutes</code> or
    // <code>periodInMinutes</code> to less than <code>1</code> will not be
    // honored and will cause a warning.  <code>when</code> can be set to less
    // than 1 minute after "now" without warning but won't actually cause the
    // alarm to fire for at least 1 minute.
    //
    // To help you debug your app or extension, when you've loaded it unpacked,
    // there's no limit to how often the alarm can fire.
    //
    // |name|: Optional name to identify this alarm. Defaults to the empty
    // string.
    //
    // |alarmInfo|: Describes when the alarm should fire.  The initial time must
    // be specified by either <var>when</var> or <var>delayInMinutes</var> (but
    // not both).  If <var>periodInMinutes</var> is set, the alarm will repeat
    // every <var>periodInMinutes</var> minutes after the initial event.  If
    // neither <var>when</var> or <var>delayInMinutes</var> is set for a
    // repeating alarm, <var>periodInMinutes</var> is used as the default for
    // <var>delayInMinutes</var>.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
    function create(name : string/*DOMString*/, alarmInfo : AlarmCreateInfo) : void;
    // Retrieves details about the specified alarm.
    // |name|: The name of the alarm to get. Defaults to the empty string.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
    function get(name : string/*DOMString*/, callback : function(alarm:Alarm):void/*AlarmCallback*/) : void;
    // Gets an array of all the alarms.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
    function getAll(callback : function(alarms:Alarm[]):void/*AlarmListCallback*/) : void;
    // Clears the alarm with the given name.
    // |name|: The name of the alarm to clear. Defaults to the empty string.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
    function clear() : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
    function clear(name : string/*DOMString*/) : void;
    // Clears all alarms.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
    function clearAll() : void;

    __readonly__ var onAlarm : AlarmEvent;
}

native __fake__ class _app
{
    __readonly__ var runtime : _appruntime;
    __readonly__ var window : _appwindow;
} = 'chrome.app';

native __fake__ class _appruntime
{
    __readonly__ var onLaunched : LaunchDataEvent;
    __readonly__ var onRestarted : VoidEvent;
}

native __fake__ class _appwindow
{
    // The size and position of a window can be specified in a number of
    // different ways. The most simple option is not specifying anything at
    // all, in which case a default size and platform dependent position will
    // be used.
    //
    // Another option is to use the bounds property, which will put the window
    // at the specified coordinates with the specified size. If the window has
    // a frame, it's total size will be the size given plus the size of the
    // frame; that is, the size in bounds is the content size, not the window
    // size.
    //
    // To automatically remember the positions of windows you can give them ids.
    // If a window has an id, This id is used to remember the size and position
    // of the window whenever it is moved or resized. This size and position is
    // then used instead of the specified bounds on subsequent opening of a
    // window with the same id. If you need to open a window with an id at a
    // location other than the remembered default, you can create it hidden,
    // move it to the desired location, then show it.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    function create(url : string/*DOMString*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    function create(url : string/*DOMString*/, options : variant) : void;
    function create(url : string/*DOMString*/, options : CreateWindowOptions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    function create(url : string/*DOMString*/, options : variant, callback : function(created_window:Object/*object*/):void/*CreateWindowCallback*/) : void;
    function create(url : string/*DOMString*/, options : CreateWindowOptions, callback : function(created_window:Object/*object*/):void/*CreateWindowCallback*/) : void;
    // Returns an $ref:AppWindow object for the
    // current script context (ie JavaScript 'window' object). This can also be
    // called on a handle to a script context for another page, for example:
    // otherWindow.chrome.app.window.current().
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    function current() : AppWindow;

    __readonly__ var onBoundsChanged : VoidEvent;
    __readonly__ var onClosed : VoidEvent;
    __readonly__ var onFullscreened : VoidEvent;
    __readonly__ var onMaximized : VoidEvent;
    __readonly__ var onMinimized : VoidEvent;
    __readonly__ var onRestored : VoidEvent;
}

native __fake__ class _audio
{
    // Get the information of all audio output and input devices.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/audio.idl */
    function getInfo(callback : function(outputInfo:OutputDeviceInfo[],inputInfo:InputDeviceInfo[]):void/*GetInfoCallback*/) : void;
    // Select a subset of audio devices as active.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/audio.idl */
    function setActiveDevices(ids : string[]/*DOMString[]*/, callback : function():void/*SetActiveDevicesCallback*/) : void;
    // Sets the properties for the input or output device.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/audio.idl */
    function setProperties(id : string/*DOMString*/, properties : DeviceProperties, callback : function():void/*SetPropertiesCallback*/) : void;

    __readonly__ var onDeviceChanged : VoidEvent;
}

native __fake__ class _bluetooth
{
    // Registers the JavaScript application as an implementation for the given
    // Profile; if a channel or PSM is specified, the profile will be exported
    // in the host's SDP and GATT tables and advertised to other devices.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function addProfile(profile : Profile, callback : function():void/*ResultCallback*/) : void;
    // Unregisters the JavaScript application as an implementation for the given
    // Profile; only the uuid field of the Profile object is used.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function removeProfile(profile : Profile, callback : function():void/*ResultCallback*/) : void;
    // Get information about the Bluetooth adapter.
    // |callback| : Called with an AdapterState object describing the adapter
    //              state.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function getAdapterState(callback : function(result:AdapterState):void/*AdapterStateCallback*/) : void;
    // Get a bluetooth devices known to the system.  Known devices are either
    // currently paired, or have been paired in the past.
    // |options|  : Controls which devices are returned and provides
    //              |deviceCallback|, which is called for each matching device.
    // |callback| : Called when the search is completed.
    //              |options.deviceCallback| will not be called after
    //              |callback| has been called.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function getDevices(options : GetDevicesOptions, callback : function():void/*ResultCallback*/) : void;
    // Returns the set of exported profiles for the device specified in options.
    // This function will not initiate a connection to the remote device.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function getProfiles(options : GetProfilesOptions, callback : function(result:Profile[]):void/*ProfilesCallback*/) : void;
    // Get a list of services provided by a device.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function getServices(options : GetServicesOptions, callback : function(result:ServiceRecord[]):void/*ServicesCallback*/) : void;
    // Connect to a service on a device.
    // |options|  : The options for the connection.
    // |callback| : Called to indicate success or failure.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function connect(options : ConnectOptions, callback : function():void/*ResultCallback*/) : void;
    // Close a Bluetooth connection.
    // |options|  : The options for this function.
    // |callback| : Called to indicate success or failure.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function disconnect(options : DisconnectOptions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function disconnect(options : DisconnectOptions, callback : function():void/*ResultCallback*/) : void;
    // Read data from a Bluetooth connection.
    // |options|  : The options for this function.
    // |callback| : Called with the data when it is available.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function read(options : ReadOptions, callback : function(result:ArrayBuffer):void/*DataCallback*/) : void;
    // Write data to a Bluetooth connection.
    // |options|  : The options for this function.
    // |callback| : Called with the number of bytes written.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function write(options : WriteOptions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function write(options : WriteOptions, callback : function(result:number/*long*/):void/*SizeCallback*/) : void;
    // Get the local Out of Band Pairing data.
    // |callback| : Called with the data.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function getLocalOutOfBandPairingData(callback : function(data:OutOfBandPairingData):void/*OutOfBandPairingDataCallback*/) : void;
    // Set the Out of Band Pairing data for a remote device.
    // Any previous Out Of Band Pairing Data for this device is overwritten.
    // |options|  : The options for this function.
    // |callback| : Called to indicate success or failure.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function setOutOfBandPairingData(options : SetOutOfBandPairingDataOptions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function setOutOfBandPairingData(options : SetOutOfBandPairingDataOptions, callback : function():void/*ResultCallback*/) : void;
    // Start discovery. Discovered devices will be returned via the
    // |onDeviceDiscovered| callback.  Discovery will fail to start if it is
    // already in progress.  Discovery can be resource intensive: stopDiscovery
    // should be called as soon as possible.
    // |options|  : The options for this function.
    // |callback| : Called to indicate success or failure.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function startDiscovery(options : StartDiscoveryOptions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function startDiscovery(options : StartDiscoveryOptions, callback : function():void/*ResultCallback*/) : void;
    // Stop discovery.
    // |callback| : Called to indicate success or failure.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function stopDiscovery() : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    function stopDiscovery(callback : function():void/*ResultCallback*/) : void;

    __readonly__ var onAdapterStateChanged : AdapterStateEvent;
    __readonly__ var onConnection : SocketEvent;
}

native __fake__ class _contextMenus
{
    // Creates a new context menu item.
    // Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function create(createProperties : Object/*object*/) : variant/*(integer or string)*/;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function create(createProperties : Object/*object*/, callback : function():void/*VoidCallback*/) : variant/*(integer or string)*/;
    // Updates a previously created context menu item.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function update(id : int, updateProperties : Object/*object*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function update(id : int, updateProperties : Object/*object*/, callback : function():void/*VoidCallback*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function update(id : string, updateProperties : Object/*object*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function update(id : string, updateProperties : Object/*object*/, callback : function():void/*VoidCallback*/) : void;
    // Removes a context menu item.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function remove(menuItemId : int) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function remove(menuItemId : int, callback : function():void/*VoidCallback*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function remove(menuItemId : string) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function remove(menuItemId : string, callback : function():void/*VoidCallback*/) : void;
    // Removes all context menu items added by this extension.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function removeAll() : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
    function removeAll(callback : function():void/*VoidCallback*/) : void;

    __readonly__ var onClicked : OnClickDataTabEvent;
}

native __fake__ class _fileSystem
{
    // Get the display path of an Entry object. The display path is based on
    // the full path of the file or directory on the local file system, but may
    // be made more readable for display purposes.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function getDisplayPath(entry : Object/*object*/, callback : function(displayPath:string/*DOMString*/):void/*GetDisplayPathCallback*/) : void;
    // Get a writable Entry from another Entry. This call will fail if the
    // application does not have the 'write' permission under 'fileSystem'. If
    // entry is a DirectoryEntry, this call will fail if the application does
    // not have the 'directory' permission under 'fileSystem'.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function getWritableEntry(entry : Object/*object*/, callback : function(entry:Object/*object*/):void/*EntryCallback*/) : void;
    // Gets whether this Entry is writable or not.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function isWritableEntry(entry : Object/*object*/, callback : function(isWritable:boolean):void/*IsWritableCallback*/) : void;
    // Ask the user to choose a file or directory.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function chooseEntry(options : ChooseEntryOptions, callback : function(entry:Object/*object*/,fileEntries:Object[]/*object[]*/):void/*EntriesCallback*/) : void;
    // Returns the file entry with the given id if it can be restored. This call
    // will fail otherwise. This method is new in Chrome 30.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function restoreEntry(id : string/*DOMString*/, callback : function(entry:Object/*object*/):void/*EntryCallback*/) : void;
    // Returns whether a file entry for the given id can be restored, i.e.
    // whether restoreEntry would succeed with this id now. This method is new
    // in Chrome 30.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function isRestorable(id : string/*DOMString*/, callback : function(isRestorable:boolean):void/*IsRestorableCallback*/) : void;
    // Returns an id that can be passed to restoreEntry to regain access to a
    // given file entry. Only the 500 most recently used entries are retained,
    // where calls to retainEntry and restoreEntry count as use. If the app has
    // the 'retainEntries' permission under 'fileSystem' (currently restricted
    // to dev channel), entries are retained indefinitely. Otherwise, entries
    // are retained only while the app is running and across restarts. This
    // method is new in Chrome 30.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
    function retainEntry(entry : Object/*object*/) : string/*DOMString*/;
}

native __fake__ class _i18n
{
    // Gets the accept-languages of the browser.
    // This is different from the locale used by the browser; to get the locale, use <code>window.navigator.language</code>.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/i18n.json */
    function getAcceptLanguages(callback : function(languages:string[]):void/*arrayCallback*/) : void;
    // Gets the localized string for the specified message.
    // If the message is missing, this method returns an empty string ('').
    // If the format of the <code>getMessage()</code> call is wrong &mdash; for example, <em>messageName</em> is not a string or the <em>substitutions</em> array has more than 9 elements &mdash; this method returns <code>undefined</code>.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/i18n.json */
    function getMessage(messageName : string) : string;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/i18n.json */
    function getMessage(messageName : string, substitutions : variant/*any*/) : string;
}

native __fake__ class _identity
{
    // Gets an OAuth2 access token using the client ID and scopes
    // specified in the <a
    // href="app_identity.html#update_manifest"><code>oauth2</code>
    // section of manifest.json</a>.
    //
    // The Identity API caches access tokens in memory, so it's ok to
    // call <code>getAuthToken</code> any time a token is
    // required. The token cache automatically handles expiration.
    //
    // |details| : Token options.
    // |callback| : Called with an OAuth2 access token as specified by the
    // manifest, or undefined if there was an error.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/identity.idl */
    function getAuthToken(details : TokenDetails, callback : function(token:string/*DOMString*/):void/*GetAuthTokenCallback*/) : void;
    // Removes an OAuth2 access token from the Identity API's token cache.
    //
    // If an access token is discovered to be invalid, it should be
    // passed to removeCachedAuthToken to remove it from the
    // cache. The app may then retrieve a fresh token with
    // <code>getAuthToken</code>.
    //
    // |details| : Token information.
    // |callback| : Called when the token has been removed from the cache.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/identity.idl */
    function removeCachedAuthToken(details : InvalidTokenDetails, callback : function():void/*InvalidateAuthTokenCallback*/) : void;
    // Starts an auth flow at the specified URL.
    //
    // This method enables auth flows with non-Google identity
    // providers by launching a web view and navigating it to the
    // first URL in the provider's auth flow. When the provider
    // redirects to a URL matching the pattern
    // <code>https://&lt;app-id&gt;.chromiumapp.org/*</code>, the
    // window will close, and the final redirect URL will be passed to
    // the <var>callback</var> function.
    //
    // |details| : WebAuth flow options.
    // |callback| : Called with the URL redirected back to your application.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/identity.idl */
    function launchWebAuthFlow(details : WebAuthFlowDetails, callback : function(responseUrl:string/*DOMString*/):void/*LaunchWebAuthFlowCallback*/) : void;
}

native __fake__ class _idle
{
    // Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/idle.json */
    function queryState(detectionIntervalInSeconds : int, callback : function(newState:string):void/*stringCallback*/) : void;
    // Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events.
    // The default interval is 60 seconds.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/idle.json */
    function setDetectionInterval(intervalInSeconds : int) : void;

    __readonly__ var onStateChanged : StringEvent;
}

native __fake__ class _location
{
    // Starts a location watching request.
    // |name| : Optional name to identify this request. Defaults to the empty
    // string.
    // |requestInfo| : Optional parameters for this request.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/location.idl */
    function watchLocation(name : string/*DOMString*/, requestInfo : WatchLocationRequestInfo) : void;
    // Ends a location watching request.
    // |name| : Optional name to identify the request to remove. Defaults to the
    // empty string.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/location.idl */
    function clearWatch(name : string/*DOMString*/) : void;

    __readonly__ var onLocationUpdate : LocationEvent;
    __readonly__ var onLocationError : StringEvent;
}

native __fake__ class _mediaGalleries
{
    // Get the media galleries configured in this user agent. If none are
    // configured or available, the callback will receive an empty array.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/media_galleries.idl */
    function getMediaFileSystems(details : MediaFileSystemsDetails, callback : function(mediaFileSystems:Object[]/*object[]*/):void/*MediaFileSystemsCallback*/) : void;
    // Get metadata about a specific media file system.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/media_galleries.idl */
    function getMediaFileSystemMetadata(mediaFileSystem : Object/*object*/) : MediaFileSystemMetadata;
}

native __fake__ class _notifications
{
    // Creates and displays a notification having the contents in |options|,
    // identified by the id |notificationId|. If |notificationId| is empty,
    // |create| generates an id. If |notificationId| matches an existing
    // notification, |create| first clears that notification before proceeding
    // with the create operation. |callback| returns the notification id
    // (either supplied or generated) that represents the created notification.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
    function create(notificationId : string/*DOMString*/, options : NotificationOptions, callback : function(notificationId:string/*DOMString*/):void/*CreateCallback*/) : void;
    // Updates an existing notification having the id |notificationId| and the
    // options |options|. |callback| indicates whether a matching notification
    // existed.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
    function update(notificationId : string/*DOMString*/, options : NotificationOptions, callback : function(wasUpdated:boolean):void/*UpdateCallback*/) : void;
    // Given a |notificationId| returned by the |create| method, clears the
    // corresponding notification. |callback| indicates whether a matching
    // notification existed.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
    function clear(notificationId : string/*DOMString*/, callback : function(wasCleared:boolean):void/*ClearCallback*/) : void;
    // |callback| is executed with the set of notification_ids currently in
    // the system.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
    function getAll(callback : function(notifications:Object/*object*/):void/*GetAllCallback*/) : void;

    __readonly__ var onClosed : StringBooleanEvent;
    __readonly__ var onClicked : StringEvent;
    __readonly__ var onButtonClicked : StringIntEvent;
}

native __fake__ class _permissions
{
    // Gets the extension's current set of permissions.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
    function getAll(callback : function(permissions:Permissions):void/*PermissionsCallback*/) : void;
    // Checks if the extension has the specified permissions.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
    function contains(permissions : Permissions, callback : function(removed:boolean):void/*booleanCallback*/) : void;
    // Requests access to the specified permissions.
    // These permissions must be defined in the optional_permissions field of the manifest.
    // If there are any problems requesting the permissions, $ref:runtime.lastError will be set.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
    function request(permissions : Permissions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
    function request(permissions : Permissions, callback : function(removed:boolean):void/*booleanCallback*/) : void;
    // Removes access to the specified permissions.
    // If there are any problems removing the permissions, $ref:runtime.lastError will be set.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
    function remove(permissions : Permissions) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
    function remove(permissions : Permissions, callback : function(removed:boolean):void/*booleanCallback*/) : void;

    __readonly__ var onAdded : PermissionsEvent;
    __readonly__ var onRemoved : PermissionsEvent;
}

native __fake__ class _power
{
    // Requests that power management be temporarily disabled. |level|
    // describes the degree to which power management should be disabled.
    // If a request previously made by the same app is still active, it
    // will be replaced by the new request.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/power.idl */
    function requestKeepAwake(level : string) : void;
    // Releases a request previously made via requestKeepAwake().
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/power.idl */
    function releaseKeepAwake() : void;
}

native __fake__ class _pushMessaging
{
    // Retrieves the channel ID associated with this app or extension.
    // Typically an app or extension will want to send this value
    // to its application server so the server can use it
    // to trigger push messages back to the app or extension.
    // If the interactive flag is set, we will ask the user to log in
    // when they are not already logged in.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/push_messaging.idl */
    function getChannelId(interactive : boolean, callback : function(channelId:ChannelIdResult):void/*ChannelIdCallback*/) : void;

    __readonly__ var onMessage : ChromeMessageEvent;
}

native __fake__ class _runtime
{
    // This will be defined during an API method callback if there was an error
    var lastError : Nullable.<string>;
    // The ID of the extension/app.
    var id : variant;

    // Retrieves the JavaScript 'window' object for the background page running inside the current extension/app.
    // If the background page is an event page, the system will ensure it is loaded before calling the callback.
    // If there is no background page, an error is set.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function getBackgroundPage(callback : function(directoryEntry:Object/*object*/):void/*objectCallback*/) : void;
    // Returns details about the app or extension from the manifest.
    // The object returned is a serialization of the full <a href="manifest.html">manifest file</a>.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function getManifest() : Object/*object*/;
    // Converts a relative path within an app/extension install directory to a fully-qualified URL.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function getURL(path : string) : string;
    // Sets the URL to be visited upon uninstallation.
    // This may be used to clean up server-side data, do analytics, and implement surveys.
    // Maximum 255 characters.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function setUninstallUrl(url : string) : void;
    // Reloads the app or extension.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function reload() : void;
    // Requests an update check for this app/extension.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function requestUpdateCheck(callback : function(status:string,details:Object/*object*/):void/*stringobjectCallback*/) : void;
    // Attempts to connect to other listeners within the extension/app (such as the background page), or other extensions/apps.
    // This is useful for content scripts connecting to their extension processes.
    // Note that this does not connect to any listeners in a content script.
    // Extensions may connect to content scripts embedded in tabs via $ref:tabs.connect.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function connect() : Port;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function connect(extensionId : string) : Port;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function connect(extensionId : string, connectInfo : Object/*object*/) : Port;
    // Connects to a native application in the host machine.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function connectNative(application : string) : Port;
    // Sends a single message to onMessage event listeners within the extension (or another extension/app).
    // Similar to chrome.runtime.connect, but only sends a single message with an optional response.
    // The $ref:runtime.onMessage event is fired in each extension page of the extension.
    // Note that extensions cannot send messages to content scripts using this method.
    // To send messages to content scripts, use $ref:tabs.sendMessage.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function sendMessage(extensionId : string, message : variant/*any*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function sendMessage(extensionId : string, message : variant/*any*/, responseCallback : function(response:variant/*any*/):void/*anyCallback*/) : void;
    // Send a single message to a native application.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function sendNativeMessage(application : string, message : Object/*object*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function sendNativeMessage(application : string, message : Object/*object*/, responseCallback : function(response:variant/*any*/):void/*anyCallback*/) : void;
    // Returns information about the current platform.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function getPlatformInfo(callback : function(directoryEntry:Object/*object*/):void/*objectCallback*/) : void;
    // Returns a DirectoryEntry for the package directory.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
    function getPackageDirectoryEntry(callback : function(directoryEntry:Object/*object*/):void/*objectCallback*/) : void;

    // Fired when a profile that has this extension installed first starts up.
    // This event is not fired when an incognito profile is started,
    // even if this extension is operating in 'split' incognito mode.
    __readonly__ var onStartup : VoidEvent;
    // Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
    __readonly__ var onInstalled : DetailsEvent;

    // Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up.
    // Note that since the page is unloading, any asynchronous operations started while handling this event
    // are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded
    // the onSuspendCanceled event will be sent and the page won't be unloaded.
    __readonly__ var onSuspend : VoidEvent;
    // Sent after onSuspend to indicate that the app won't be unloaded after all.
    __readonly__ var onSuspendCanceled : VoidEvent;
    // Fired when an update is available, but isn't installed immediately because the app is currently
    // running. If you do nothing, the update will be installed the next time the background page gets
    // unloaded, if you want it to be installed sooner you can explicitly call chrome.runtime.reload().
    __readonly__ var onUpdateAvailable : DetailsTypeEvent;
    // Fired when a connection is made from either an extension process or a content script.
    __readonly__ var onConnect : PortEvent;
    // Fired when a connection is made from another extension.
    __readonly__ var onConnectExternal : PortEvent;
    // Fired when a message is sent from either an extension process or a content script.
    __readonly__ var onMessage : AnySenderResponseEvent;
    // Fired when a message is sent from another extension/app. Cannot be used in a content script.
    __readonly__ var onMessageExternal : AnySenderResponseEvent;
    // Fired when an app or the device that it runs on needs to be restarted. The app should close all its
    // windows at its earliest convenient time to let the restart to happen. If the app does nothing, a
    // restart will be enforced after a 24-hour grace period has passed. Currently, this event is only
    // fired for Chrome OS kiosk apps.
    __readonly__ var onRestartRequired : StringEvent;
}

native __fake__ class _serial
{
    // Returns names of valid ports on this machine, each of which is likely to
    // be valid to pass as the port argument to open(). The list is regenerated
    // each time this method is called, as port validity is dynamic.
    //
    // |callback| : Called with the list of ports.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function getPorts(callback : function(ports:string[]/*DOMString[]*/):void/*GetPortsCallback*/) : void;
    // Opens a connection to the given serial port.
    // |port| : The name of the serial port to open.
    // |options| : Connection options.
    // |callback| : Called when the connection has been opened.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function open(port : string/*DOMString*/, options : OpenOptions, callback : function(openInfo:OpenInfo):void/*OpenCallback*/) : void;
    // Closes an open connection.
    // |connectionId| : The id of the opened connection.
    // |callback| : Called when the connection has been closed.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function close(connectionId : number/*long*/, callback : function(result:boolean):void/*CloseCallback*/) : void;
    // Reads a byte from the given connection.
    // |connectionId| : The id of the connection.
    // |bytesToRead| : The number of bytes to read.
    // |callback| : Called when all the requested bytes have been read or
    //              when the read blocks.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function read(connectionId : number/*long*/, bytesToRead : number/*long*/, callback : function(readInfo:ReadInfo):void/*ReadCallback*/) : void;
    // Writes a string to the given connection.
    // |connectionId| : The id of the connection.
    // |data| : The string to write.
    // |callback| : Called when the string has been written.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function write(connectionId : number/*long*/, data : ArrayBuffer, callback : function(writeInfo:WriteInfo):void/*WriteCallback*/) : void;
    // Flushes all bytes in the given connection's input and output buffers.
    // |connectionId| : The id of the connection.
    // |callback| : Called when the flush is complete.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function flush(connectionId : number/*long*/, callback : function(result:boolean):void/*FlushCallback*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function getControlSignals(connectionId : number/*long*/, callback : function(options:ControlSignalOptions):void/*GetControlSignalsCallback*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    function setControlSignals(connectionId : number/*long*/, options : ControlSignalOptions, callback : function(result:boolean):void/*SetControlSignalsCallback*/) : void;
}

native __fake__ class _socket
{
    // Creates a socket of the specified type that will connect to the specified
    // remote machine.
    // |type| : The type of socket to create. Must be <code>tcp</code> or
    // <code>udp</code>.
    // |options| : The socket options.
    // |callback| : Called when the socket has been created.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function create(type : string/*SocketType*/, options : CreateOptions, callback : function(notificationId:string/*DOMString*/):void/*CreateCallback*/) : void;
    // Destroys the socket. Each socket created should be destroyed after use.
    // |socketId| : The socketId.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function destroy(socketId : number/*long*/) : void;
    // Connects the socket to the remote machine (for a <code>tcp</code>
    // socket). For a <code>udp</code> socket, this sets the default address
    // which packets are sent to and read from for <code>read()</code>
    // and <code>write()</code> calls.
    // |socketId| : The socketId.
    // |hostname| : The hostname or IP address of the remote machine.
    // |port| : The port of the remote machine.
    // |callback| : Called when the connection attempt is complete.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function connect(socketId : number/*long*/, hostname : string/*DOMString*/, port : number/*long*/, callback : function(result:number/*long*/):void/*ConnectCallback*/) : void;
    // Binds the local address for socket. Currently, it does not support
    // TCP socket.
    // |socketId| : The socketId.
    // |address| : The address of the local machine.
    // |port| : The port of the local machine.
    // |callback| : Called when the bind attempt is complete.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function bind(socketId : number/*long*/, address : string/*DOMString*/, port : number/*long*/, callback : function(result:number/*long*/):void/*BindCallback*/) : void;
    // Disconnects the socket. For UDP sockets, <code>disconnect</code> is a
    // non-operation but is safe to call.
    // |socketId| : The socketId.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function disconnect(socketId : number/*long*/) : void;
    // Reads data from the given connected socket.
    // |socketId| : The socketId.
    // |bufferSize| : The read buffer size.
    // |callback| : Delivers data that was available to be read without
    // blocking.
    // Writes data on the given connected socket.
    // |socketId| : The socketId.
    // |data| : The data to write.
    // |callback| : Called when the write operation completes without blocking
    // or an error occurs.
    // Receives data from the given UDP socket.
    // |socketId| : The socketId.
    // |bufferSize| : The receive buffer size.
    // |callback| : Returns result of the recvFrom operation.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function recvFrom(socketId : number/*long*/, bufferSize : number/*long*/, callback : function(recvFromInfo:RecvFromInfo):void/*RecvFromCallback*/) : void;
    // Sends data on the given UDP socket to the given address and port.
    // |socketId| : The socketId.
    // |data| : The data to write.
    // |address| : The address of the remote machine.
    // |port| : The port of the remote machine.
    // |callback| : Called when the send operation completes without blocking
    // or an error occurs.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function sendTo(socketId : number/*long*/, data : ArrayBuffer, address : string/*DOMString*/, port : number/*long*/, callback : function(writeInfo:WriteInfo):void/*SendToCallback*/) : void;
    // This method applies to TCP sockets only.
    // Listens for connections on the specified port and address. This
    // effectively makes this a server socket, and client socket
    // functions (connect, read, write) can no longer be used on this socket.
    // |socketId| : The socketId.
    // |address| : The address of the local machine.
    // |port| : The port of the local machine.
    // |backlog| : Length of the socket's listen queue.
    // |callback| : Called when listen operation completes.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function listen(socketId : number/*long*/, address : string/*DOMString*/, port : number/*long*/, backlog : number/*long*/, callback : function(result:number/*long*/):void/*ListenCallback*/) : void;
    // This method applies to TCP sockets only.
    // Registers a callback function to be called when a connection is
    // accepted on this listening server socket. Listen must be called first.
    // If there is already an active accept callback, this callback will be
    // invoked immediately with an error as the resultCode.
    // |socketId| : The socketId.
    // |callback| : The callback is invoked when a new socket is accepted.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function accept(socketId : number/*long*/, callback : function(acceptInfo:AcceptInfo):void/*AcceptCallback*/) : void;
    // Enables or disables the keep-alive functionality for a TCP connection.
    // |socketId| : The socketId.
    // |enable| : If true, enable keep-alive functionality.
    // |delay| : Set the delay seconds between the last data packet received
    // and the first keepalive probe. Default is 0.
    // |callback| : Called when the setKeepAlive attempt is complete.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function setKeepAlive(socketId : number/*long*/, enable : boolean, delay : number/*long*/, callback : function(result:boolean):void/*SetKeepAliveCallback*/) : void;
    // Sets or clears <code>TCP_NODELAY</code> for a TCP connection. Nagle's
    // algorithm will be disabled when <code>TCP_NODELAY</code> is set.
    // |socketId| : The socketId.
    // |noDelay| : If true, disables Nagle's algorithm.
    // |callback| : Called when the setNoDelay attempt is complete.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function setNoDelay(socketId : number/*long*/, noDelay : boolean, callback : function(result:boolean):void/*SetNoDelayCallback*/) : void;
    // Retrieves the state of the given socket.
    // |socketId| : The socketId.
    // |callback| : Called when the state is available.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function getInfo(socketId : number/*long*/, callback : function(outputInfo:OutputDeviceInfo[],inputInfo:InputDeviceInfo[]):void/*GetInfoCallback*/) : void;
    // Retrieves information about local adapters on this system.
    // |callback| : Called when local adapter information is available.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function getNetworkList(callback : function(result:NetworkInterface[]):void/*GetNetworkCallback*/) : void;
    // Join the multicast group and start to receive packets from that group.
    // The socket must be of UDP type and must be bound to a local port
    // before calling this method.
    // |socketId| : The socketId.
    // |address| : The group address to join. Domain names are not supported.
    // |callback| : Called when the join group operation is done with an
    // int parameter indicating the platform-independent error code.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function joinGroup(socketId : number/*long*/, address : string/*DOMString*/, callback : function(result:number/*long*/):void/*JoinGroupCallback*/) : void;
    // Leave the multicast group previously joined using <code>joinGroup</code>.
    // It's not necessary to leave the multicast group before destroying the
    // socket or exiting. This is automatically called by the OS.
    //
    // Leaving the group will prevent the router from sending multicast
    // datagrams to the local host, presuming no other process on the host is
    // still joined to the group.
    //
    // |socketId| : The socketId.
    // |address| : The group address to leave. Domain names are not supported.
    // |callback| : Called when the leave group operation is done with an
    // int parameter indicating the platform-independent error code.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function leaveGroup(socketId : number/*long*/, address : string/*DOMString*/, callback : function(result:number/*long*/):void/*LeaveGroupCallback*/) : void;
    // Set the time-to-live of multicast packets sent to the multicast group.
    //
    // Calling this method does not require multicast permissions.
    //
    // |socketId| : The socketId.
    // |ttl| : The time-to-live value.
    // |callback| : Called when the configuration operation is done.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function setMulticastTimeToLive(socketId : number/*long*/, ttl : number/*long*/, callback : function(result:number/*long*/):void/*SetMulticastTimeToLiveCallback*/) : void;
    // Set whether multicast packets sent from the host to the multicast
    // group will be looped back to the host.
    //
    // Note: the behavior of <code>setMulticastLoopbackMode</code> is slightly
    // different between Windows and Unix-like systems. The inconsistency
    // happens only when there is more than one application on the same host
    // joined to the same multicast group while having different settings on
    // multicast loopback mode. On Windows, the applications with loopback off
    // will not RECEIVE the loopback packets; while on Unix-like systems, the
    // applications with loopback off will not SEND the loopback packets to
    // other applications on the same host. See MSDN: http://goo.gl/6vqbj
    //
    // Calling this method does not require multicast permissions.
    //
    // |socketId| : The socketId.
    // |enabled| : Indicate whether to enable loopback mode.
    // |callback| : Called when the configuration operation is done.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function setMulticastLoopbackMode(socketId : number/*long*/, enabled : boolean, callback : function(result:number/*long*/):void/*SetMulticastLoopbackModeCallback*/) : void;
    // Get the multicast group addresses the socket is currently joined to.
    // |socketId| : The socketId.
    // |callback| : Called with an array of strings of the result.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
    function getJoinedGroups(socketId : number/*long*/, callback : function(groups:string[]/*DOMString[]*/):void/*GetJoinedGroupsCallback*/) : void;
}

native __fake__ class _sync
{
    // The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
    __readonly__ var QUOTA_BYTES : int;
    // The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its value plus its key length. Updates containing items larger than this limit will fail immediately and set runtime.lastError.
    __readonly__ var QUOTA_BYTES_PER_ITEM : int;
    // The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will fail immediately and set runtime.lastError.
    __readonly__ var MAX_ITEM : int;
    // The maximum number of set, remove, or clear operations that can be performed each hour. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
    __readonly__ var MAX_WRITE_OPERATIONS_PER_HOUR : int;
    // The maximum number of set, remove, or clear operations that can be performed each minute, sustained over 10 minutes. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
    __readonly__ var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE : int;
}

native __fake__ class _local
{
    // The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the unlimitedStorage permission. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
    __readonly__ var QUOTA_BYTES : int;
}

native __fake__ class _storage
{
    // Items in the sync storage area are synced using Chrome Sync.
    __readonly__ var sync : _sync;
    // Items in the local storage area are local to each machine.
    __readonly__ var local : _local;

    // Fired when one or more items change.
    __readonly__ var onChanged : StorageChangeMapStringEvent;
}

native __fake__ class _syncFileSystem
{
    // Returns a syncable filesystem backed by Google Drive.
    // The returned <code>DOMFileSystem</code> instance can be operated on
    // in the same way as the Temporary and Persistant file systems (see
    // <a href="http://www.w3.org/TR/file-system-api/">http://www.w3.org/TR/file-system-api/</a>).
    // Calling this multiple times from
    // the same app will return the same handle to the same file system.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function requestFileSystem(callback : function(fileSystem:Object/*object*/):void/*GetFileSystemCallback*/) : void;
    // Sets the default conflict resolution policy
    // for the <code>'syncable'</code> file storage for the app.
    // By default it is set to <code>'last_write_win'</code>.
    // When conflict resolution policy is set to <code>'last_write_win'</code>
    // conflicts for existing files are automatically resolved next time
    // the file is updated.
    // |callback| can be optionally given to know if the request has
    // succeeded or not.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function setConflictResolutionPolicy(policy : string/*ConflictResolutionPolicy*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function setConflictResolutionPolicy(policy : string/*ConflictResolutionPolicy*/, callback : function():void/*ResultCallback*/) : void;
    // Gets the current conflict resolution policy.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function getConflictResolutionPolicy(callback : function(policy:string/*ConflictResolutionPolicy*/):void/*GetConflictResolutionPolicyCallback*/) : void;
    // Returns the current usage and quota in bytes
    // for the <code>'syncable'</code> file storage for the app.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function getUsageAndQuota(fileSystem : Object/*object*/, callback : function(info:StorageInfo):void/*QuotaAndUsageCallback*/) : void;
    // Returns the $ref:FileStatus for the given <code>fileEntry</code>.
    // The status value can be <code>'synced'</code>,
    // <code>'pending'</code> or <code>'conflicting'</code>.
    // Note that <code>'conflicting'</code> state only happens when
    // the service's conflict resolution policy is set to <code>'manual'</code>.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function getFileStatus(fileEntry : Object/*object*/, callback : function(status:string/*FileStatus*/):void/*GetFileStatusCallback*/) : void;
    // Returns each $ref:FileStatus for the given <code>fileEntry</code> array.
    // Typically called with the result from dirReader.readEntries().
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function getFileStatuses(fileEntries : Object[]/*object[]*/, callback : function(status:FileStatusInfo[]):void/*GetFileStatusesCallback*/) : void;
    // Returns the current sync backend status.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
    function getServiceStatus(callback : function(status:string/*ServiceStatus*/):void/*GetServiceStatusCallback*/) : void;

    // Fired when an error or other status change has happened in the sync backend (for example, when the sync is temporarily disabled due to network or authentication error).
    __readonly__ var onServiceStatusChanged : ServiceInfoEvent;
    // Fired when a file has been updated by the background sync service.
    __readonly__ var onFileStatusChanged : FileInfoEvent;
}

native __fake__ class _system
{
    __readonly__ var cpu : _systemcpu;
    __readonly__ var display : _systemdisplay;
    __readonly__ var memory : _systemmemory;
    __readonly__ var storage : _systemstorage;
}

native __fake__ class _systemcpu
{
    // Queries basic CPU information of the system.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_cpu.idl */
    function getInfo(callback : function(info:CpuInfo):void/*CpuInfoCallback*/) : void;
}

native __fake__ class _systemdisplay
{
    // Get the information of all attached display devices.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
    function getInfo(callback : function(displayInfo:DisplayUnitInfo[]):void/*DisplayInfoCallback*/) : void;
    // Updates the properties for the display specified by |id|, according to
    // the information provided in |info|. On failure, $ref:runtime.lastError
    // will be set.
    // |id|: The display's unique identifier.
    // |info|: The information about display properties that should be changed.
    //     A property will be changed only if a new value for it is specified in
    //     |info|.
    // |callback|: Empty function called when the function finishes. To find out
    //     whether the function succeeded, $ref:runtime.lastError should be
    //     queried.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
    function setDisplayProperties(id : string/*DOMString*/, info : DisplayProperties) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
    function setDisplayProperties(id : string/*DOMString*/, info : DisplayProperties, callback : function():void/*SetDisplayUnitInfoCallback*/) : void;

    // Fired when anything changes to the display configuration.
    __readonly__ var onDisplayChanged : VoidEvent;
}

native __fake__ class _systemmemory
{
    // Get physical memory information.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_memory.idl */
    function getInfo(callback : function(info:MemoryInfo):void/*MemoryInfoCallback*/) : void;
}

native __fake__ class _systemstorage
{
    // Get the storage information from the system. The argument passed to the
    // callback is an array of StorageUnitInfo objects.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_storage.idl */
    function getInfo(callback : function(info:StorageUnitInfo[]):void/*StorageInfoCallback*/) : void;
    // Ejects a removable storage device.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_storage.idl */
    function ejectDevice(id : string/*DOMString*/, callback : function(result:string):void/*EjectDeviceCallback*/) : void;

    // Fired when a new removable storage is attached to the system.
    __readonly__ var onAttached : StorageUnitInfoEvent;
    // Fired when a removable storage is detached from the system.
    __readonly__ var onDetached : StringEvent;
}

native __fake__ class _tts
{
    // Speaks text using a text-to-speech engine.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function speak(utterance : string) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function speak(utterance : string, options : Object/*object*/) : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function speak(utterance : string, options : Object/*object*/, callback : function():void/*VoidCallback*/) : void;
    // Stops any current speech and flushes the queue of any pending utterances.
    // In addition, if speech was paused, it will now be un-paused for the next call to speak.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function stop() : void;
    // Pauses speech synthesis, potentially in the middle of an utterance.
    // A call to resume or stop will un-pause speech.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function pause() : void;
    // If speech was paused, resumes speaking where it left off.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function resume() : void;
    // Checks whether the engine is currently speaking.
    // On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function isSpeaking() : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function isSpeaking(callback : function(removed:boolean):void/*booleanCallback*/) : void;
    // Gets an array of all available voices.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function getVoices() : void;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
    function getVoices(callback : function(voices:TtsVoice[]):void/*arrayCallback*/) : void;
}

native __fake__ class _types
{
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/types.json */
    /* dictionary */ class ChromeSetting {
        // Gets the value of a setting.
        function get(detail : ChromeGetParam, callback : (ChromeGetDetail) -> void) : void;
        function get(detail : variant, callback : (ChromeGetDetail) -> void) : void;
        function set(detail : ChromeSetParam) : void;
        function set(detail : variant) : void;
        function set(detail : ChromeSetParam, callback : () -> void) : void;
        function set(detail : variant, callback : () -> void) : void;
        function clear(detail : ChromeClearParam) : void;
        function clear(detail : variant) : void;
        function clear(detail : ChromeClearParam, callback : () -> void) : void;
        function clear(detail : variant, callback : () -> void) : void;
    } = 'chrome.types.ChromeSetting';

    // Fired after the setting changes.
    __readonly__ var onChange : ChromeGetDetailEvent;
}

class ChromeGetParam {
    var incognito : Nullable.<boolean>;
    function constructor(incognito : Nullable.<boolean> = null)
    {
        this.incognito = incognito;
    }
}

native __fake__ class ChromeGetDetail {
    var value : variant;
    var levelOfControl : string;
    var incognitoSpecific : Nullable.<boolean>;
}

class ChromeSetParam {
    var value : variant;
    var levelOfControl : string;
    function constructor(value : variant, scope : string = 'regular')
    {
        this.value = value;
        this.levelOfControl = scope;
    }
}

class ChromeClearParam {
    var levelOfControl : string;
    function constructor(scope : string = 'regular')
    {
        this.levelOfControl = scope;
    }
}

native __fake__ class _usb
{
    // Lists USB devices specified by vendorId/productId/interfaceId tuple.
    // |options|: The properties to search for on target devices.
    // |callback|: Invoked with a list of |Device|s on complete.
    function getDevices(options : EnumerateDevicesOptions, callback : function(devices:Device[]):void/*GetDevicesCallback*/) : void;
    // This method is ChromeOS specific. Calling this method on other platforms
    // will fail.
    // Requests access from the permission broker to an OS claimed device if the
    // given interface on the device is not claimed.
    //
    // |device|: The device to request access to.
    // |interfaceId|:
    function requestAccess(device : Device, interfaceId : number/*long*/, callback : function(sucess:boolean):void/*RequestAccessCallback*/) : void;
    // Opens a USB device returned by |getDevices|.
    // |device|: The device to open.
    // |callback|: Invoked with the created ConnectionHandle on complete.
    function openDevice(device : Device, callback : function(handle:ConnectionHandle):void/*OpenDeviceCallback*/) : void;
    // Finds USB devices specified by the vendorId/productId/interfaceId tuple
    // and, if permissions allow, opens them for use.
    //
    // On Chrome OS, you can specify the interfaceId. In that case the method
    // will request access from permission broker in the same way as in
    // |requestUsbAcess|.
    //
    // If the access request is rejected, or the device is failed to be opened,
    // its connection handle will not be created or returned.
    //
    // Calling this method is equivalent to calling |getDevices| followed by
    // a series of |requestAccess| (if it is on ChromeOs) and |openDevice|
    // calls, and returning all the successfully opened connection handles.
    //
    // |options|: The properties to search for on target devices.
    // |callback|: Invoked with the opened ConnectionHandle on complete.
    function findDevices(options : EnumerateDevicesAndRequestAccessOptions, callback : function(handles:ConnectionHandle[]):void/*FindDevicesCallback*/) : void;
    // Closes a connection handle. Invoking operations on a device after it
    // has been closed is a safe operation, but causes no action to be taken.
    // |handle|: The connection handle to close.
    // |callback|: The callback to invoke once the device is closed.
    function closeDevice(handle : ConnectionHandle) : void;
    function closeDevice(handle : ConnectionHandle, callback : function():void/*CloseDeviceCallback*/) : void;
    // Lists all the interfaces on the USB device.
    // |handle|: The device from which the interfaces should be listed.
    // |callback|: The callback to invoke when the interfaces are enumerated.
    function listInterfaces(handle : ConnectionHandle, callback : function(descriptors:InterfaceDescriptor[]):void/*ListInterfacesCallback*/) : void;
    // Claims an interface on the specified USB device.
    // Before you can transfer data with endpoints, you must claim their parent
    // interfaces. Only one connection handle on the same host can claim each
    // interface. If the interface is already claimed, this call will fail.
    //
    // You shall call releaseInterface when the interface is not needed anymore.
    //
    // |handle|: The device on which the interface is to be claimed.
    // |interface|: The interface number to be claimed.
    // |callback|: The callback to invoke once the interface is claimed.
    function claimInterface(handle : ConnectionHandle, interfaceNumber : number/*long*/, callback : function():void/*VoidCallback*/) : void;
    // Releases a claim to an interface on the provided device.
    // |handle|: The device on which the interface is to be released.
    // |interface|: The interface number to be released.
    // |callback|: The callback to invoke once the interface is released.
    function releaseInterface(handle : ConnectionHandle, interfaceNumber : number/*long*/, callback : function():void/*VoidCallback*/) : void;
    // Selects an alternate setting on a previously claimed interface on a
    // device.
    // |handle|: The device on which the interface settings are to be set.
    // |interface|: The interface number to be set.
    // |alternateSetting|: The alternate setting to set.
    // |callback|: The callback to invoke once the interface setting is set.
    function setInterfaceAlternateSetting(handle : ConnectionHandle, interfaceNumber : number/*long*/, alternateSetting : number/*long*/, callback : function():void/*VoidCallback*/) : void;
    // Performs a control transfer on the specified device. See the
    // ControlTransferInfo structure for the parameters required to make a
    // transfer.
    //
    // Conceptually control transfer talks to the device itself. You do not need
    // to claim interface 0 to perform a control transfer.
    //
    // |handle|: A connection handle to make the transfer on.
    // |transferInfo|: The parameters to the transfer. See ControlTransferInfo.
    // |callback|: Invoked once the transfer has completed.
    function controlTransfer(handle : ConnectionHandle, transferInfo : ControlTransferInfo, callback : function(info:TransferResultInfo):void/*TransferCallback*/) : void;
    // Performs a bulk transfer on the specified device.
    // |handle|: A connection handle to make the transfer on.
    // |transferInfo|: The parameters to the transfer. See GenericTransferInfo.
    // |callback|: Invoked once the transfer has completed.
    function bulkTransfer(handle : ConnectionHandle, transferInfo : GenericTransferInfo, callback : function(info:TransferResultInfo):void/*TransferCallback*/) : void;
    // Performs an interrupt transfer on the specified device.
    // |handle|: A connection handle to make the transfer on.
    // |transferInfo|: The parameters to the transfer. See GenericTransferInfo.
    // |callback|: Invoked once the transfer has completed.
    function interruptTransfer(handle : ConnectionHandle, transferInfo : GenericTransferInfo, callback : function(info:TransferResultInfo):void/*TransferCallback*/) : void;
    // Performs an isochronous transfer on the specific device.
    // |handle|: A connection handle to make the transfer on.
    // |transferInfo|: The parameters to the transfer. See
    // IsochronousTransferInfo.
    // |callback|: Invoked once the transfer has been completed.
    function isochronousTransfer(handle : ConnectionHandle, transferInfo : IsochronousTransferInfo, callback : function(info:TransferResultInfo):void/*TransferCallback*/) : void;
    // Tries to reset the USB device and restores it to the previous status.
    // If the reset fails, the given connection handle will be closed and the
    // USB device will appear to be disconnected then reconnected.
    // In that case you must call |getDevices| or |findDevices| again to acquire
    // the device.
    //
    // |handle|: A connection handle to reset.
    // |callback|: Invoked once the device is reset with a boolean indicating
    // whether the reset is completed successfully.
    function resetDevice(handle : ConnectionHandle, callback : function(result:boolean):void/*ResetDeviceCallback*/) : void;
}

native __fake__ class _webstore
{
    function install(url : string) : void;
    function install(url : string, successCallback : () -> void) : void;
    function install(url : string, successCallback : () -> void, failureCallback : (string) -> void) : void;
}

// Events
native __fake__ class _CommonEvent
{
    function hasListeners() : boolean;
    function addRules(rules : Rule[]) : void;
    function addRules(rules : Rule[], callback : ()->void) : void;
    function getRules(ruleIdentifiers : string[], callback : (Rule[]) -> void) : void;
    function removeRules(ruleIdentifiers : string[]) : void;
    function removeRules(ruleIdentifiers : string[], callback : () -> void) : void;
}

native __fake__ class VoidEvent extends _CommonEvent
{
    function addListener(callback : () -> void) : void;
    function removeListener(callback : () -> void) : void;
    function hasListener(callback : () -> void) : boolean;
}

native __fake__ class AlarmEvent extends _CommonEvent
{
    function addListener(callback : (Alarm) -> void) : void;
    function removeListener(callback : (Alarm) -> void) : void;
    function hasListener(callback : (Alarm) -> void) : boolean;
}

native __fake__ class LaunchDataEvent extends _CommonEvent
{
    function addListener(callback : () -> void) : void;
    function addListener(callback : (LaunchData) -> void) : void;
    function removeListener(callback : () -> void) : void;
    function removeListener(callback : (LaunchData) -> void) : void;
    function hasListener(callback : () -> void) : boolean;
    function hasListener(callback : (LaunchData) -> void) : boolean;
}

native __fake__ class AdapterStateEvent extends _CommonEvent
{
    function addListener(callback : (AdapterState, tabs.Tab) -> void) : void;
    function removeListener(callback : (AdapterState) -> void) : void;
    function hasListener(callback : (AdapterState) -> void) : boolean;
}

native __fake__ class SocketEvent extends _CommonEvent
{
    function addListener(callback : (Socket) -> void) : void;
    function removeListener(callback : (Socket) -> void) : void;
    function hasListener(callback : (Socket) -> void) : boolean;
}

native __fake__ class OnClickDataTabEvent extends _CommonEvent
{
    function addListener(callback : (OnClickData) -> void) : void;
    function addListener(callback : (OnClickData, tabs.Tab) -> void) : void;
    function removeListener(callback : (OnClickData) -> void) : void;
    function removeListener(callback : (OnClickData, tabs.Tab) -> void) : void;
    function hasListener(callback : (OnClickData) -> void) : boolean;
    function hasListener(callback : (OnClickData, tabs.Tab) -> void) : boolean;
}

native __fake__ class StringEvent extends _CommonEvent
{
    function addListener(callback : (string) -> void) : void;
    function removeListener(callback : (string) -> void) : void;
    function hasListener(callback : (string) -> void) : boolean;
}

native __fake__ class StringBooleanEvent extends _CommonEvent
{
    function addListener(callback : (string, boolean) -> void) : void;
    function removeListener(callback : (string, boolean) -> void) : void;
    function hasListener(callback : (string, boolean) -> void) : boolean;
}

native __fake__ class StringIntEvent extends _CommonEvent
{
    function addListener(callback : (string, int) -> void) : void;
    function removeListener(callback : (string, int) -> void) : void;
    function hasListener(callback : (string, int) -> void) : boolean;
}

native __fake__ class LocationEvent extends _CommonEvent
{
    function addListener(callback : (Location) -> void) : void;
    function removeListener(callback : (Location) -> void) : void;
    function hasListener(callback : (Location) -> void) : boolean;
}

native __fake__ class PermissionsEvent extends _CommonEvent
{
    function addListener(callback : (Permissions) -> void) : void;
    function removeListener(callback : (Permissions) -> void) : void;
    function hasListener(callback : (Permissions) -> void) : boolean;
}

native __fake__ class ChromeMessageEvent extends _CommonEvent
{
    function addListener(callback : (Message) -> void) : void;
    function removeListener(callback : (Message) -> void) : void;
    function hasListener(callback : (Message) -> void) : boolean;
}

native __fake__ class DetailsEvent extends _CommonEvent
{
    function addListener(callback : (Details) -> void) : void;
    function removeListener(callback : (Details) -> void) : void;
    function hasListener(callback : (Details) -> void) : boolean;
}

native __fake__ class DetailsTypeEvent extends _CommonEvent
{
    function addListener(callback : (DetailsType) -> void) : void;
    function removeListener(callback : (DetailsType) -> void) : void;
    function hasListener(callback : (DetailsType) -> void) : boolean;
}

native __fake__ class PortEvent extends _CommonEvent
{
    function addListener(callback : (Port) -> void) : void;
    function removeListener(callback : (Port) -> void) : void;
    function hasListener(callback : (Port) -> void) : boolean;
}

native __fake__ class AnySenderResponseEvent extends _CommonEvent
{
    function addListener(callback : (variant, MessageSender, () -> void) -> void) : void;
    function removeListener(callback : (variant, MessageSender, () -> void) -> void) : void;
    function hasListener(callback : (variant, MessageSender, () -> void) -> void) : boolean;
}

native __fake__ class StorageChangeMapStringEvent extends _CommonEvent
{
    function addListener(callback : (Map.<StorageChange>, string) -> void) : void;
    function removeListener(callback : (Map.<StorageChange>, string) -> void) : void;
    function hasListener(callback : (Map.<StorageChange>, string) -> void) : boolean;
}

native __fake__ class ServiceInfoEvent extends _CommonEvent
{
    function addListener(callback : (ServiceInfo) -> void) : void;
    function removeListener(callback : (ServiceInfo) -> void) : void;
    function hasListener(callback : (ServiceInfo) -> void) : boolean;
}

native __fake__ class FileInfoEvent extends _CommonEvent
{
    function addListener(callback : (FileInfo) -> void) : void;
    function removeListener(callback : (FileInfo) -> void) : void;
    function hasListener(callback : (FileInfo) -> void) : boolean;
}

native __fake__ class StorageUnitInfoEvent extends _CommonEvent
{
    function addListener(callback : (StorageUnitInfo) -> void) : void;
    function removeListener(callback : (StorageUnitInfo) -> void) : void;
    function hasListener(callback : (StorageUnitInfo) -> void) : boolean;
}

native __fake__ class ChromeGetDetailEvent extends _CommonEvent
{
    function addListener(callback : (ChromeGetDetail) -> void) : void;
    function removeListener(callback : (ChromeGetDetail) -> void) : void;
    function hasListener(callback : (ChromeGetDetail) -> void) : boolean;
}

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
/* dictionary */ class Alarm {

    // Name of this alarm.
    var name : string/*DOMString*/;
    // Time at which this alarm was scheduled to fire, in milliseconds past the
    // epoch (e.g. <code>Date.now() + n</code>).  For performance reasons, the
    // alarm may have been delayed an arbitrary amount beyond this.
    var scheduledTime : number/*double*/;
    // If not null, the alarm is a repeating alarm and will fire again in
    // <var>periodInMinutes</var> minutes.
    var periodInMinutes : Nullable.<number>/*double?*/;

} // end of Alarm

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/alarms.idl */
/* dictionary */ class AlarmCreateInfo {

    // Time at which the alarm should fire, in milliseconds past the epoch
    // (e.g. <code>Date.now() + n</code>).
    var when : Nullable.<number>/*double?*/;
    // Length of time in minutes after which the <code>onAlarm</code> event
    // should fire.
    //
    // <!-- TODO: need minimum=0 -->
    var delayInMinutes : Nullable.<number>/*double?*/;
    // If set, the onAlarm event should fire every <var>periodInMinutes</var>
    // minutes after the initial event specified by <var>when</var> or
    // <var>delayInMinutes</var>.  If not set, the alarm will only fire once.
    //
    // <!-- TODO: need minimum=0 -->
    var periodInMinutes : Nullable.<number>/*double?*/;

} // end of AlarmCreateInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_runtime.idl */
/* dictionary */ class LaunchItem {

    // FileEntry for the file.
    var entry : Object/*object*/;
    // The MIME type of the file.
    var type : string/*DOMString*/;

} // end of LaunchItem

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_runtime.idl */
/* dictionary */ class LaunchData {

    // The id of the file handler that the app is being invoked with.
    var id : Nullable.<string>/*DOMString?*/;
    var items : Nullable.<LaunchItem[]>;

} // end of LaunchData

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
/* dictionary */ class Bounds {

    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    var left : Nullable.<number>/*long?*/;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    var top : Nullable.<number>/*long?*/;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    var width : Nullable.<number>/*long?*/;
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
    var height : Nullable.<number>/*long?*/;

    // The x-coordinate of the upper-left corner.
    // The y-coordinate of the upper-left corner.
    // The width of the display in pixels.
    // The height of the display in pixels.

    function constructor(left : number, top : number, width : number, height : number)
    {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }

    function constructor(param : variant)
    {
        if (param['left'] != null)
        {
            this.left = param['left'] as number;
        }
        if (param['top'] != null)
        {
            this.top = param['top'] as number;
        }
        if (param['width'] != null)
        {
            this.width = param['width'] as number;
        }
        if (param['height'] != null)
        {
            this.height = param['height'] as number;
        }
    }
} // end of Bounds

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
/* dictionary */ class CreateWindowOptions {

    // Id to identify the window. This will be used to remember the size
    // and position of the window and restore that geometry when a window
    // with the same id is later opened.
    var id : Nullable.<string>/*DOMString?*/;
    // Default width of the window. (Deprecated; regular bounds act like this
    // now.)
    var defaultWidth : Nullable.<number>/*long?*/;
    // Default height of the window. (Deprecated; regular bounds act like this
    // now.)
    var defaultHeight : Nullable.<number>/*long?*/;
    // Default X coordinate of the window. (Deprecated; regular bounds act like
    // this now.)
    var defaultLeft : Nullable.<number>/*long?*/;
    // Default Y coordinate of the window. (Deprecated; regular bounds act like
    // this now.)
    var defaultTop : Nullable.<number>/*long?*/;
    // Width of the window. (Deprecated; use 'bounds'.)
    var width : Nullable.<number>/*long?*/;
    // Height of the window. (Deprecated; use 'bounds'.)
    var height : Nullable.<number>/*long?*/;
    // X coordinate of the window. (Deprecated; use 'bounds'.)
    var left : Nullable.<number>/*long?*/;
    // Y coordinate of the window. (Deprecated; use 'bounds'.)
    var top : Nullable.<number>/*long?*/;
    // Minimum width for the lifetime of the window.
    var minWidth : Nullable.<number>/*long?*/;
    // Minimum height for the lifetime of the window.
    var minHeight : Nullable.<number>/*long?*/;
    // Maximum width for the lifetime of the window.
    var maxWidth : Nullable.<number>/*long?*/;
    // Maximum height for the lifetime of the window.
    var maxHeight : Nullable.<number>/*long?*/;
    // Type of window to create.
    var type : Nullable.<string>;
    // Frame type: 'none' or 'chrome' (defaults to 'chrome').
    var frame : Nullable.<string>/*DOMString?*/;
    // Size and position of the content in the window (excluding the titlebar).
    // If an id is also specified and a window with a matching id has been shown
    // before, the remembered bounds of the window will be used instead.
    var bounds : Nullable.<Bounds>;
    // Enable window background transparency.
    // Only supported in ash. Requires experimental API permission.
    var transparentBackground : Nullable.<boolean>;
    // The initial state of the window, allowing it to be created already
    // fullscreen, maximized, or minimized. Defaults to 'normal'.
    var state : Nullable.<string>/*State?*/;
    // If true, the window will be created in a hidden state. Call show() on
    // the window to show it once it has been created. Defaults to false.
    var hidden : Nullable.<boolean>;
    // If true, the window will be resizable by the user. Defaults to true.
    var resizable : Nullable.<boolean>;
    // By default if you specify an id for the window, the window will only be
    // created if another window with the same id doesn't already exist. If a
    // window with the same id already exists that window is activated instead.
    // If you do want to create multiple windows with the same id, you can
    // set this property to false.
    var singleton : Nullable.<boolean>;

} // end of CreateWindowOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/app_window.idl */
/* dictionary */ native __fake__ class AppWindow {

    // Focus the window.
    function focus() : void;
    // Fullscreens the window.
    function fullscreen() : void;
    // Is the window fullscreen?
    function isFullscreen() : boolean;
    // Minimize the window.
    function minimize() : void;
    // Is the window minimized?
    function isMinimized() : boolean;
    // Maximize the window.
    function maximize() : void;
    // Is the window maximized?
    function isMaximized() : boolean;
    // Restore the window, exiting a maximized, minimized, or fullscreen state.
    function restore() : void;
    // Move the window to the position (|left|, |top|).
    function moveTo(left : number/*long*/, top : number/*long*/) : void;
    // Resize the window to |width|x|height| pixels in size.
    function resizeTo(width : number/*long*/, height : number/*long*/) : void;
    // Draw attention to the window.
    function drawAttention() : void;
    // Clear attention to the window.
    function clearAttention() : void;
    // Close the window.
    function close() : void;
    // Show the window. Does nothing if the window is already visible.
    function show() : void;
    // Hide the window. Does nothing if the window is already hidden.
    function hide() : void;
    // Get the window's bounds as a $ref:Bounds object.
    function getBounds() : Bounds;
    // Set the window's bounds.
    function setBounds(bounds : Bounds) : void;
    // Set the app icon for the window (experimental).
    // Currently this is only being implemented on Ash.
    // TODO(stevenjb): Investigate implementing this on Windows and OSX.
    function setIcon(icon_url : string/*DOMString*/) : void;
    // The JavaScript 'window' object for the created child.
    var contentWindow : Object/*object*/;

} // end of AppWindow

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/audio.idl */
/* dictionary */ class OutputDeviceInfo {

    // The unique identifier of the audio output device.
    var id : string/*DOMString*/;
    // The user-friendly name (e.g. "Bose Amplifier").
    var name : string/*DOMString*/;
    // True if this is the current active device.
    var isActive : boolean;
    // True if this is muted.
    var isMuted : boolean;
    // The output volume ranging from 0.0 to 1.0.
    var volume : number/*double*/;

} // end of OutputDeviceInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/audio.idl */
/* dictionary */ class InputDeviceInfo {

    // The unique identifier of the audio input device.
    var id : string/*DOMString*/;
    // The user-friendly name (e.g. "USB Microphone").
    var name : string/*DOMString*/;
    // True if this is the current active device.
    var isActive : boolean;
    // True if this is muted.
    var isMuted : boolean;
    // The input gain ranging from 0.0 to 1.0.
    var gain : number/*double*/;

} // end of InputDeviceInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/audio.idl */
/* dictionary */ class DeviceProperties {

    // True if this is muted.
    var isMuted : boolean;
    // If this is an output device then this field indicates the output volume.
    // If this is an input device then this field is ignored.
    var volume : Nullable.<number>/*double?*/;
    // If this is an input device then this field indicates the input gain.
    // If this is an output device then this field is ignored.
    var gain : Nullable.<number>/*double?*/;

} // end of DeviceProperties

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class AdapterState {

    // The address of the adapter, in the format 'XX:XX:XX:XX:XX:XX'.
    var address : string/*DOMString*/;
    // The human-readable name of the adapter.
    var name : string/*DOMString*/;
    // Indicates whether or not the adapter has power.
    var powered : boolean;
    // Indicates whether or not the adapter is available (i.e. enabled).
    var available : boolean;
    // Indicates whether or not the adapter is currently discovering.
    var discovering : boolean;

} // end of AdapterState

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class Device {

    // The address of the device, in the format 'XX:XX:XX:XX:XX:XX'.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    var address : string/*DOMString*/;
    // The human-readable name of the device.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    var name : Nullable.<string>/*DOMString?*/;
    // Indicates whether or not the device is paired with the system.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    var paired : Nullable.<boolean>;
    // Indicates whether the device is currently connected to the system.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
    var connected : Nullable.<boolean>;

    // The id of the USB device. It remains unchanged until the device is
    // unplugged.
    var device : number/*long*/;
    var vendorId : number/*long*/;
    var productId : number/*long*/;

} // end of Device

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class Profile {

    // Unique profile identifier, e.g. 00001401-0000-1000-8000-00805F9B23FB
    var uuid : string/*DOMString*/;
    // Human-readable name of the Profile, e.g. "Health Device"
    var name : Nullable.<string>/*DOMString?*/;
    // The RFCOMM channel id, used when the profile is to be exported to remote
    // devices.
    var channel : Nullable.<number>/*long?*/;
    // The LS2CAP PSM number, used when the profile is to be exported to remote
    // deviecs.
    var psm : Nullable.<number>/*long?*/;
    // Specifies whether pairing (and encryption) is required to be able to
    // connect.
    var requireAuthentication : Nullable.<boolean>;
    // Specifies whether user authorization is required to be able to connect.
    var requireAuthorization : Nullable.<boolean>;
    // Specifies whether this profile will be automatically connected if any
    // other profile of device also exporting this profile connects to the host.
    var autoConnect : Nullable.<boolean>;
    // Specifies the implemented version of the profile.
    var version : Nullable.<number>/*long?*/;
    // Specifies the profile-specific bit field of features the implementation
    // supports.
    var features : Nullable.<number>/*long?*/;

} // end of Profile

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class ServiceRecord {

    // The name of the service.
    var name : string/*DOMString*/;
    // The UUID of the service.
    var uuid : Nullable.<string>/*DOMString?*/;

} // end of ServiceRecord

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class Socket {

    // The remote Bluetooth device associated with this socket.
    var device : Device;
    // The remote Bluetooth profile associated with this socket.
    var profile : Profile;
    // An identifier for this socket that should be used with the
    // read/write/disconnect methods.
    var id : number/*long*/;

} // end of Socket

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class OutOfBandPairingData {

    // Simple Pairing Hash C.
    // Always 16 octets long.
    var hash : ArrayBuffer;
    // Simple Pairing Randomizer R.
    // Always 16 octets long.
    var randomizer : ArrayBuffer;

} // end of OutOfBandPairingData

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class GetDevicesOptions {

    // Only devices providing |profile| will be returned.
    var profile : Nullable.<Profile>;
    // Called for each matching device.  Note that a service discovery request
    // must be made to each non-matching device before it can be definitively
    // excluded.  This can take some time.
    var deviceCallback : function(device:Device):void/*DeviceCallback*/;

} // end of GetDevicesOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class GetProfilesOptions {

    // The remote Bluetooth device to retrieve the exported profiles list from.
    var device : Device;

} // end of GetProfilesOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class GetServicesOptions {

    // The address of the device to inquire about. |deviceAddress| should be
    // in the format 'XX:XX:XX:XX:XX:XX'.
    var deviceAddress : string/*DOMString*/;

} // end of GetServicesOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class ConnectOptions {

    // The connection is made to |device|.
    var device : Device;
    // The connection is made to |profile|.
    var profile : Profile;

} // end of ConnectOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class DisconnectOptions {

    // The socket to disconnect.
    var socket : Socket;

} // end of DisconnectOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class ReadOptions {

    // The socket to read from.
    var socket : Socket;

} // end of ReadOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class WriteOptions {

    // The socket to write to.
    var socket : Socket;
    // The data to write.
    var data : ArrayBuffer;

} // end of WriteOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class SetOutOfBandPairingDataOptions {

    // The address of the remote device that the data should be associated
    // with. |deviceAddress| should be in the format 'XX:XX:XX:XX:XX:XX'.
    var address : string/*DOMString*/;
    // The Out Of Band Pairing Data. If this is omitted, the data for the
    // device is cleared instead.
    var data : Nullable.<OutOfBandPairingData>;

} // end of SetOutOfBandPairingDataOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/bluetooth.idl */
/* dictionary */ class StartDiscoveryOptions {

    // Called for each device that is discovered.
    var deviceCallback : function(device:Device):void/*DeviceCallback*/;

} // end of StartDiscoveryOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/context_menus.json */
/* dictionary */ class OnClickData {

    // The ID of the menu item that was clicked.
    var menuItemId : variant/*(integer or string)*/;
    // The parent ID, if any, for the item clicked.
    var parentMenuItemId : variant/*(integer or string)?*/;
    // One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
    var mediaType : Nullable.<string>;
    // If the element is a link, the URL it points to.
    var linkUrl : Nullable.<string>;
    // Will be present for elements with a 'src' URL.
    var srcUrl : Nullable.<string>;
    // The URL of the page where the menu item was clicked.
    // This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu.
    var pageUrl : Nullable.<string>;
    //  The URL of the frame of the element where the context menu was clicked, if it was in a frame.
    var frameUrl : Nullable.<string>;
    // The text for the context selection, if any.
    var selectionText : Nullable.<string>;
    // A flag indicating whether the element is editable (text input, textarea, etc.).
    var editable : boolean;
    // A flag indicating the state of a checkbox or radio item before it was clicked.
    var wasChecked : Nullable.<boolean>;
    // A flag indicating the state of a checkbox or radio item after it is clicked.
    var checked : Nullable.<boolean>;

} // end of OnClickData

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/events.json */
/* dictionary */ class Rule {

    // Optional identifier that allows referencing this rule.
    var id : Nullable.<string>;
    // Tags can be used to annotate rules and perform operations on sets of rules.
    var tags : string[];
    // List of conditions that can trigger the actions.
    var conditions : variant[];
    // List of actions that are triggered if one of the condtions is fulfilled.
    var actions : variant[];
    // Optional priority of this rule.
    // Defaults to 100.
    var priority : Nullable.<int>;

} // end of Rule

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/events.json */
/* dictionary */ class UrlFilter {

    // Matches if the host name of the URL contains a specified string.
    // To test whether a host name component has a prefix 'foo', use hostContains: '.foo'.
    // This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name.
    // Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.').
    // Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.
    var hostContains : Nullable.<string>;
    // Matches if the host name of the URL is equal to a specified string.
    var hostEquals : Nullable.<string>;
    // Matches if the host name of the URL starts with a specified string.
    var hostPrefix : Nullable.<string>;
    // Matches if the host name of the URL ends with a specified string.
    var hostSuffix : Nullable.<string>;
    // Matches if the path segment of the URL contains a specified string.
    var pathContains : Nullable.<string>;
    // Matches if the path segment of the URL is equal to a specified string.
    var pathEquals : Nullable.<string>;
    // Matches if the path segment of the URL starts with a specified string.
    var pathPrefix : Nullable.<string>;
    // Matches if the path segment of the URL ends with a specified string.
    var pathSuffix : Nullable.<string>;
    // Matches if the query segment of the URL contains a specified string.
    var queryContains : Nullable.<string>;
    // Matches if the query segment of the URL is equal to a specified string.
    var queryEquals : Nullable.<string>;
    // Matches if the query segment of the URL starts with a specified string.
    var queryPrefix : Nullable.<string>;
    // Matches if the query segment of the URL ends with a specified string.
    var querySuffix : Nullable.<string>;
    // Matches if the URL (without fragment identifier) contains a specified string.
    // Port numbers are stripped from the URL if they match the default port number.
    var urlContains : Nullable.<string>;
    // Matches if the URL (without fragment identifier) is equal to a specified string.
    // Port numbers are stripped from the URL if they match the default port number.
    var urlEquals : Nullable.<string>;
    // Matches if the URL (without fragment identifier) matches a specified regular expression.
    // Port numbers are stripped from the URL if they match the default port number.
    // The regular expressions use the <a href="http://code.google.com/p/re2/wiki/Syntax">RE2 syntax</a>.
    var urlMatches : Nullable.<string>;
    // Matches if the URL without query segment and fragment identifier matches a specified regular expression.
    // Port numbers are stripped from the URL if they match the default port number.
    // The regular expressions use the <a href="http://code.google.com/p/re2/wiki/Syntax">RE2 syntax</a>.
    var originAndPathMatches : Nullable.<string>;
    // Matches if the URL (without fragment identifier) starts with a specified string.
    // Port numbers are stripped from the URL if they match the default port number.
    var urlPrefix : Nullable.<string>;
    // Matches if the URL (without fragment identifier) ends with a specified string.
    // Port numbers are stripped from the URL if they match the default port number.
    var urlSuffix : Nullable.<string>;
    // Matches if the scheme of the URL is equal to any of the schemes specified in the array.
    var schemes : string[];
    // Matches if the port of the URL is contained in any of the specified port lists.
    // For example <code>[80, 443, [1000, 1200]]</code> matches all requests on port 80, 443 and in the range 1000-1200.
    var ports : variant[];

} // end of UrlFilter

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
/* dictionary */ class AcceptOption {

    // This is the optional text description for this option. If not present,
    // a description will be automatically generated; typically containing an
    // expanded list of valid extensions (e.g. "text/html" may expand to
    // "*.html, *.htm").
    var description : Nullable.<string>/*DOMString?*/;
    // Mime-types to accept, e.g. "image/jpeg" or "audio/*". One of mimeTypes or
    // extensions must contain at least one valid element.
    var mimeTypes : Nullable.<string[]>/*DOMString[]?*/;
    // Extensions to accept, e.g. "jpg", "gif", "crx".
    var extensions : Nullable.<string[]>/*DOMString[]?*/;

} // end of AcceptOption

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/file_system.idl */
/* dictionary */ class ChooseEntryOptions {

    // Type of the prompt to show. The default is 'openFile'. From Chrome 31
    // onwards, 'openWritableFile' is deprecated and 'openFile' will return a
    // writable file entry for apps with the 'write' permission under
    // 'fileSystem'.
    var type : Nullable.<string>/*ChooseEntryType?*/;
    // The suggested file name that will be presented to the user as the
    // default name to read or write. This is optional.
    var suggestedName : Nullable.<string>/*DOMString?*/;
    // The optional list of accept options for this file opener. Each option
    // will be presented as a unique group to the end-user.
    var accepts : Nullable.<AcceptOption[]>;
    // Whether to accept all file types, in addition to the options specified
    // in the accepts argument. The default is true. If the accepts field is
    // unset or contains no valid entries, this will always be reset to true.
    var acceptsAllTypes : Nullable.<boolean>;
    // Whether to accept multiple files. This is only supported for openFile and
    // openWritableFile. The callback to chooseEntry will be called with a list
    // of entries if this is set to true. Otherwise it will be called with a
    // single Entry.
    var acceptsMultiple : Nullable.<boolean>;

} // end of ChooseEntryOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/identity.idl */
/* dictionary */ class TokenDetails {

    // Fetching a token may require the user to sign-in to Chrome, or
    // approve the application's requested scopes. If the interactive
    // flag is <code>true</code>, <code>getAuthToken</code> will
    // prompt the user as necessary. When the flag is
    // <code>false</code> or ommitted, <code>getAuthToken</code> will
    // return failure any time a prompt would be required.
    var interactive : Nullable.<boolean>;

} // end of TokenDetails

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/identity.idl */
/* dictionary */ class InvalidTokenDetails {

    // The specific token that should be removed from the cache.
    var token : string/*DOMString*/;

} // end of InvalidTokenDetails

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/identity.idl */
/* dictionary */ class WebAuthFlowDetails {

    // The URL that initiates the auth flow.
    var url : string/*DOMString*/;
    // Whether to launch auth flow in interactive mode.
    //
    // Since some auth flows may immediately redirect to a result URL,
    // <code>launchWebAuthFlow</code> hides its web view until the
    // first navigation either redirects to the final URL, or finishes
    // loading a page meant to be displayed.
    //
    // If the interactive flag is <code>true</code>, the window will
    // be displayed when a page load completes. If the flag is
    // <code>false</code> or ommitted, <code>launchWebAuthFlow</code>
    // will return with an error if the initial navigation does not
    // complete the flow.
    var interactive : Nullable.<boolean>;

} // end of WebAuthFlowDetails

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/location.idl */
/* dictionary */ class Coordinates {

    // The geographic latitude specified in degrees.
    var latitude : number/*double*/;
    // The geographic longitude specified in degrees.
    var longitude : number/*double*/;
    // The height of the position, specified in meters above the [WGS84]
    // ellipsoid, or null if Chrome cannot provide altitude information.
    var altitude : Nullable.<number>/*double?*/;
    // The accuracy of the latitude and longitude coordinates, in meters. This
    // represents the radius of a circle around the given location.
    var accuracy : number/*double*/;
    // The accuracy in meters of the 'altitude' attribute if it's not null,
    // otherwise, null.
    var altitudeAccuracy : Nullable.<number>/*double?*/;
    // The direction of travel of the hosting device and is specified in
    // degrees, where 0 <= heading < 360, counting clockwise relative to the
    // true north. If the Chrome cannot provide heading information, the value
    // of this attribute is null. If the hosting device is stationary (i.e. the
    // value of the speed attribute is 0), then the value of the heading
    // attribute is NaN.
    var heading : Nullable.<number>/*double?*/;
    // The magnitude of the horizontal component of the hosting device's current
    // velocity and is specified in meters per second. If the Chrome cannot
    // provide speed information, the value of this attribute is null.
    var speed : Nullable.<number>/*double?*/;

} // end of Coordinates

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/location.idl */
/* dictionary */ class Location {

    // Location watch request name.
    var name : string/*DOMString*/;
    // Coordinates and their accuracy.
    var coords : Coordinates;
    // The time when the Location object was acquired in milliseconds since the
    // start of the Unix Epoch.
    var timestamp : number/*double*/;

} // end of Location

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/location.idl */
/* dictionary */ class WatchLocationRequestInfo {

    // Minimum distance between location updates, in meters. Defaults to 0 - any
    // change in location will be reported.
    var minDistanceInMeters : Nullable.<number>/*double?*/;
    // Minimum time interval between location updates, in milliseconds. Defaults
    // to 0 - system-defined frequency of updates will be used.
    var minTimeInMilliseconds : Nullable.<number>/*double?*/;
    // Maximum age of a cached location, in milliseconds, that Chrome can pass
    // to the first onLocationUpdate event for this location watch request.
    // If this value <= 0, Chrome will always attempt to acquire a new location.
    // Defaults to 0.
    var maximumAge : Nullable.<number>/*long?*/;

} // end of WatchLocationRequestInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/media_galleries.idl */
/* dictionary */ class MediaFileSystemsDetails {

    // Whether to prompt the user for permission to additional media galleries
    // before returning the permitted set. Default is silent.  If the value
    // 'yes' is passed, or if the application has not been granted access to
    // any media galleries and the value 'if_needed' is passed, then the
    // media gallery configuration dialog will be displayed.
    var interactive : Nullable.<string>;

} // end of MediaFileSystemsDetails

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/media_galleries.idl */
/* dictionary */ class MediaFileSystemMetadata {

    // The name of the file system.
    var name : string/*DOMString*/;
    // A unique and persistent id for the media gallery.
    var galleryId : string/*DOMString*/;
    // If the media gallery is on a removable device, a unique id for the
    // device.
    var deviceId : Nullable.<string>/*DOMString?*/;
    // True if the media gallery is on a removable device.
    var isRemovable : boolean;
    // True if the device the media gallery is on was detected as a media
    // device.  i.e. a PTP or MTP device, or a DCIM directory is present.
    var isMediaDevice : boolean;

} // end of MediaFileSystemMetadata

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
/* dictionary */ class NotificationItem {

    // Title of one item of a list notification.
    var title : string/*DOMString*/;
    // Additional details about this item.
    var message : string/*DOMString*/;

} // end of NotificationItem

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
/* dictionary */ class NotificationBitmap {

    var width : number/*long*/;
    var height : number/*long*/;
    var data : Nullable.<ArrayBuffer>;

} // end of NotificationBitmap

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
/* dictionary */ class NotificationButton {

    var title : string/*DOMString*/;
    var iconUrl : Nullable.<string>/*DOMString?*/;
    var iconBitmap : Nullable.<NotificationBitmap>;

} // end of NotificationButton

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/notifications.idl */
/* dictionary */ class NotificationOptions {

    // Which type of notification to display.
    var type : Nullable.<string>;
    // Sender's avatar, app icon, or a thumbnail for image notifications.
    var iconUrl : Nullable.<string>/*DOMString?*/;
    var iconBitmap : Nullable.<NotificationBitmap>;
    // Title of the notification (e.g. sender name for email).
    var title : Nullable.<string>/*DOMString?*/;
    // Main notification content.
    var message : Nullable.<string>/*DOMString?*/;
    // Alternate notification content with a lower-weight font.
    var contextMessage : Nullable.<string>/*DOMString?*/;
    // Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero
    // is default.
    var priority : Nullable.<number>/*long?*/;
    // A timestamp associated with the notification, in milliseconds past the
    // epoch (e.g. <code>Date.now() + n</code>).
    var eventTime : Nullable.<number>/*double?*/;
    // Text and icons for up to two notification action buttons.
    var buttons : Nullable.<NotificationButton[]>;
    // Secondary notification content.
    var expandedMessage : Nullable.<string>/*DOMString?*/;
    // Image thumbnail for image-type notifications.
    var imageUrl : Nullable.<string>/*DOMString?*/;
    var imageBitmap : Nullable.<NotificationBitmap>;
    // Items for multi-item notifications.
    var items : Nullable.<NotificationItem[]>;
    // Current progress ranges from 0 to 100.
    var progress : Nullable.<number>/*long?*/;

} // end of NotificationOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/permissions.json */
/* dictionary */ class Permissions {

    // List of named permissions (does not include hosts or origins).
    var permissions : string[];
    // List of origin permissions.
    var origins : string[];

} // end of Permissions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/push_messaging.idl */
/* dictionary */ class Message {

    // The subchannel the message was sent on;
    // only values 0-3 are valid.
    var subchannelId : number/*long*/;
    // The payload associated with the message, if any. This should not contain
    // any personally identifiable information.
    var payload : string/*DOMString*/;

} // end of Message

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
/* dictionary */ class Details {
    // The reason that this event is being dispatched.
    var reason : string;
    // Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'.
    var previousVersion : Nullable.<string>;
} // end of Details


/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/push_messaging.idl */
/* dictionary */ class ChannelIdResult {

    // The channel ID for this app to use for push messaging.
    var channelId : string/*DOMString*/;

} // end of ChannelIdResult

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
/* dictionary */ class Port {

    var name : string;
    var disconnect : function():void/*VoidCallback*/;
    var onDisconnect : Event;
    var onMessage : Event;
    var postMessage : function():void/*VoidCallback*/;
    // This property will <b>only</b> be present on ports passed to onConnect/onConnectExternal listeners.
    var sender : Nullable.<MessageSender>;

} // end of Port

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
/* dictionary */ class MessageSender {

    // The $ref:tabs.Tab which opened the connection, if any.
    // This property will <strong>only</strong> be present when the connection was opened from a tab (including content scripts), and <strong>only</strong> if the receiver is an extension, not an app.
    var tab : Nullable.<tabs.Tab>;
    // The ID of the extension or app that opened the connection, if any.
    var id : Nullable.<string>;
    // The URL of the page or frame that opened the connection, if any.
    // This property will <strong>only</strong> be present when the connection was opened from a tab or content script.
    var url : Nullable.<string>;

} // end of MessageSender

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
/* dictionary */ class MessageType {
}

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/runtime.json */
/* dictionary */ class DetailsType {

    // The version number of the available update.
    var version : string;

} // end of DetailsType

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
/* dictionary */ class OpenOptions {

    // The requested bitrate of the connection to be opened. For compatibility
    // with the widest range of hardware, this number should match one of
    // commonly-available bitrates, such as 110, 300, 1200, 2400, 4800, 9600,
    // 14400, 19200, 38400, 57600, 115200. There is no guarantee, of course,
    // that the device connected to the serial port will support the requested
    // bitrate, even if the port itself supports that bitrate. <code>9600</code>
    // will be passed by default.
    var bitrate : Nullable.<number>/*long?*/;
    // <code>"eightbit"</code> will be passed by default.
    var dataBit : Nullable.<string>/*DataBit?*/;
    // <code>"noparity"</code> will be passed by default.
    var parityBit : Nullable.<string>/*ParityBit?*/;
    // <code>"onestopbit"</code> will be passed by default.
    var stopBit : Nullable.<string>/*StopBit?*/;

} // end of OpenOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
/* dictionary */ class OpenInfo {

    // The id of the opened connection.
    var connectionId : number/*long*/;

} // end of OpenInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
/* dictionary */ class ReadInfo {

    // The number of bytes received, or a negative number if an error occurred.
    // This number will be smaller than the number of bytes requested in the
    // original read call if the call would need to block to read that number
    // of bytes.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    var bytesRead : number/*long*/;
    // The data received.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    var data : ArrayBuffer;

    // The resultCode returned from the underlying read() call.
    var resultCode : number/*long*/;

} // end of ReadInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
/* dictionary */ class WriteInfo {

    // The number of bytes written.
    /** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
    var bytesWritten : number/*long*/;

    // The number of bytes sent, or a negative error code.

} // end of WriteInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/serial.idl */
/* dictionary */ class ControlSignalOptions {

    // Serial control signals that your machine can send. Missing fields will
    // be set to false.
    var dtr : Nullable.<boolean>;
    var rts : Nullable.<boolean>;
    // Serial control signals that your machine can receive. If a get operation
    // fails, success will be false, and these fields will be absent.
    //
    // DCD (Data Carrier Detect) is equivalent to RLSD (Receive Line Signal
    // Detect) on some platforms.
    var dcd : Nullable.<boolean>;
    var cts : Nullable.<boolean>;

} // end of ControlSignalOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
/* dictionary */ class CreateOptions {
}

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
/* dictionary */ class AcceptInfo {

    var resultCode : number/*long*/;
    // The id of the accepted socket.
    var socketId : Nullable.<number>/*long?*/;

} // end of AcceptInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
/* dictionary */ class RecvFromInfo {

    // The resultCode returned from the underlying recvfrom() call.
    var resultCode : number/*long*/;
    var data : ArrayBuffer;
    // The address of the remote machine.
    var address : string/*DOMString*/;
    var port : number/*long*/;

} // end of RecvFromInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/socket.idl */
/* dictionary */ class NetworkInterface {

    // The underlying name of the adapter. On *nix, this will typically be
    // "eth0", "lo", etc.
    var name : string/*DOMString*/;
    // The available IPv4/6 address.
    var address : string/*DOMString*/;

} // end of NetworkInterface

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/storage.json */
/* dictionary */ class StorageChange {

    // The old value of the item, if there was an old value.
    var oldValue : variant/*any?*/;
    // The new value of the item, if there is a new value.
    var newValue : variant/*any?*/;

} // end of StorageChange

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/storage.json */
native __fake__ class StorageArea {
    // Gets one or more items from storage.
    function get(callback : (Map.<variant>) -> void) : void;
    function get(keys : string, callback : (Map.<variant>) -> void) : void;
    function get(keys : string[], callback : (Map.<variant>) -> void) : void;
    function get(keys : Map.<variant>, callback : (Map.<variant>) -> void) : void;
    // Gets the amount of space (in bytes) being used by one or more items.
    function get(callback : (int) -> void) : void;
    function get(keys : string, callback : (int) -> void) : void;
    function get(keys : string[], callback : (int) -> void) : void;
    // Sets multiple items.
    function set(items : Map.<variant>) : void;
    function set(items : Map.<variant>, callback : () -> void) : void;
    // Removes one or more items from storage.
    function remove(key : string) : void;
    function remove(keys: string[]) : void;
    function remove(key : string, callback : (int) -> void) : void;
    function remove(keys : string[], callback : (int) -> void) : void;
    // Removes all items from storage.
    function clear() : void;
    function clear(callback : () -> void) : void;
}

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/storage.json */
/* dictionary */ class ChangesType {
}

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
/* dictionary */ class FileInfo {

    // <code>fileEntry</code> for the target file whose status has changed.
    // Contains name and path information of synchronized file.
    // On file deletion,
    // <code>fileEntry</code> information will still be available
    // but file will no longer exist.
    var fileEntry : Object/*object*/;
    // Resulting file status after $ref:onFileStatusChanged event.
    // The status value can be <code>'synced'</code>,
    // <code>'pending'</code> or <code>'conflicting'</code>.
    var status : string/*FileStatus*/;
    // Sync action taken to fire $ref:onFileStatusChanged event.
    // The action value can be
    // <code>'added'</code>, <code>'updated'</code> or <code>'deleted'</code>.
    // Only applies if status is <code>'synced'</code>.
    var action : Nullable.<string>/*SyncAction?*/;
    // Sync direction for the $ref:onFileStatusChanged event.
    // Sync direction value can be
    // <code>'local_to_remote'</code> or <code>'remote_to_local'</code>.
    // Only applies if status is <code>'synced'</code>.
    var direction : Nullable.<string>/*SyncDirection?*/;

} // end of FileInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
/* dictionary */ class FileStatusInfo {

    // One of the Entry's originally given to getFileStatuses.
    var fileEntry : Object/*object*/;
    // The status value can be <code>'synced'</code>,
    // <code>'pending'</code> or <code>'conflicting'</code>.
    var status : string/*FileStatus*/;
    // Optional error that is only returned if there was a problem retrieving
    // the FileStatus for the given file.
    var error : Nullable.<string>/*DOMString?*/;

} // end of FileStatusInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
/* dictionary */ class StorageInfo {

    var usageBytes : number/*long*/;
    var quotaBytes : number/*long*/;

} // end of StorageInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/sync_file_system.idl */
/* dictionary */ class ServiceInfo {

    var state : string/*ServiceStatus*/;
    var description : string/*DOMString*/;

} // end of ServiceInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_cpu.idl */
/* dictionary */ class CpuInfo {

    // The number of logical processors.
    var numOfProcessors : number/*long*/;
    // The architecture name of the processors.
    var archName : string/*DOMString*/;
    // The model name of the processors.
    var modelName : string/*DOMString*/;

} // end of CpuInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
/* dictionary */ class Insets {

    // The x-axis distance from the left bound.
    var left : number/*long*/;
    // The y-axis distance from the top bound.
    var top : number/*long*/;
    // The x-axis distance from the right bound.
    var right : number/*long*/;
    // The y-axis distance from the bottom bound.
    var bottom : number/*long*/;

} // end of Insets

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
/* dictionary */ class DisplayUnitInfo {

    // The unique identifier of the display.
    var id : string/*DOMString*/;
    // The user-friendly name (e.g. "HP LCD monitor").
    var name : string/*DOMString*/;
    // Identifier of the display that is being mirrored on the display unit.
    // If mirroring is not in progress, set to an empty string.
    // Currently exposed only on ChromeOS. Will be empty string on other
    // platforms.
    var mirroringSourceId : string/*DOMString*/;
    // True if this is the primary display.
    var isPrimary : boolean;
    // True if this is an internal display.
    var isInternal : boolean;
    // True if this display is enabled.
    var isEnabled : boolean;
    // The number of pixels per inch along the x-axis.
    var dpiX : number/*double*/;
    // The number of pixels per inch along the y-axis.
    var dpiY : number/*double*/;
    // The display's clockwise rotation in degrees relative to the vertical
    // position.
    // Currently exposed only on ChromeOS. Will be set to 0 on other platforms.
    var rotation : number/*long*/;
    // The display's logical bounds.
    var bounds : Bounds;
    // The display's insets within its screen's bounds.
    // Currently exposed only on ChromeOS. Will be set to empty insets on
    // other platforms.
    var overscan : Insets;
    // The usable work area of the display within the display bounds. The work
    // area excludes areas of the display reserved for OS, for example taskbar
    // and launcher.
    var workArea : Bounds;

} // end of DisplayUnitInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_display.idl */
/* dictionary */ class DisplayProperties {

    // If set and not empty, starts mirroring between this and the display with
    // the provided id (the system will determine which of the displays is
    // actually mirrored).
    // If set and not empty, stops mirroring between this and the display with
    // the specified id (if mirroring is in progress).
    // If set, no other parameter may be set.
    var mirroringSourceId : Nullable.<string>/*DOMString?*/;
    // If set to true, makes the display primary. No-op if set to false.
    var isPrimary : Nullable.<boolean>;
    // If set, sets the display's overscan insets to the provided values. Note
    // that overscan values may not be negative or larger than a half of the
    // screen's size. Overscan cannot be changed on the internal monitor.
    // It's applied after <code>isPrimary</code> parameter.
    var overscan : Nullable.<Insets>;
    // If set, updates the display's rotation.
    // Legal values are [0, 90, 180, 270]. The rotation is set clockwise,
    // relative to the display's vertical position.
    // It's applied after <code>overscan</code> paramter.
    var rotation : Nullable.<number>/*long?*/;
    // If set, updates the display's logical bounds origin along x-axis. Applied
    // together with <code>boundsOriginY</code>, if <code>boundsOriginY</code>
    // is set. Note that, when updating the display origin, some constraints
    // will be applied, so the final bounds origin may be different than the one
    // set. The final bounds can be retrieved using $ref:getInfo.
    // The bounds origin is applied after <code>rotation</code>.
    // The bounds origin cannot be changed on the primary display. Note that is
    // also invalid to set bounds origin values if <code>isPrimary</code> is
    // also set (as <code>isPrimary</code> parameter is applied first).
    var boundsOriginX : Nullable.<number>/*long?*/;
    // If set, updates the display's logical bounds origin along y-axis.
    // See documentation for <code>boundsOriginX</code> parameter.
    var boundsOriginY : Nullable.<number>/*long?*/;

} // end of DisplayProperties

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_memory.idl */
/* dictionary */ class MemoryInfo {

    // The total amount of physical memory capacity, in bytes.
    var capacity : number/*double*/;
    // The amount of available capacity, in bytes.
    var availableCapacity : number/*double*/;

} // end of MemoryInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/system_storage.idl */
/* dictionary */ class StorageUnitInfo {

    // The transient ID that uniquely identifies the storage device.
    // This ID will be persistent within the same run of a single application.
    // It will not be a persistent identifier between different runs of an
    // application, or between different applications.
    var id : string/*DOMString*/;
    // The name of the storage unit.
    var name : string/*DOMString*/;
    // The media type of the storage unit.
    var type : string/*StorageUnitType*/;
    // The total amount of the storage space, in bytes.
    var capacity : number/*double*/;

} // end of StorageUnitInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
/* dictionary */ class TtsEvent {

    // The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs.
    // When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech.
    // Note that pause and resume events may not fire if speech is paused in-between utterances.
    var type : string;
    // The index of the current character in the utterance.
    var charIndex : Nullable.<number>;
    // The error description, if the event type is 'error'.
    var errorMessage : Nullable.<string>;
    // An ID unique to the calling function's context so that events can get routed back to the correct tts.speak call.
    var srcId : Nullable.<number>;
    // True if this is the final event that will be sent to this handler.
    var isFinalEvent : Nullable.<boolean>;

} // end of TtsEvent

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/tts.json */
/* dictionary */ native __fake__ class TtsVoice {

    // The name of the voice.
    var voiceName : Nullable.<string>;
    // The language that this voice supports, in the form <em>language</em>-<em>region</em>.
    // Examples: 'en', 'en-US', 'en-GB', 'zh-CN'.
    var lang : Nullable.<string>;
    // This voice's gender.
    var gender : Nullable.<string>;
    // The ID of the extension providing this voice.
    var extensionId : Nullable.<string>;
    // All of the callback event types that this voice is capable of sending.
    var eventTypes : string[];

} // end of TtsVoice

native __fake__ class SettingChangeDetail {
    // The value of the setting after the change.
    var value : variant;
    // One of
    // not_controllable: cannot be controlled by any extension
    // controlled_by_other_extensions: controlled by extensions with higher precedence
    // controllable_by_this_extension: can be controlled by this extension
    // controlled_by_this_extension: controlled by this extension
    var levelOfControl : string;
    // Whether the value that has changed is specific to the incognito session.
    // This property will only be present if the user has enabled the extension in incognito mode.
    var incognitoSpecific : Nullable.<boolean>;
}

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class ConnectionHandle {

    // The id of the USB connection handle.
    var handle : number/*long*/;
    var vendorId : number/*long*/;
    var productId : number/*long*/;

} // end of ConnectionHandle

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class EndpointDescriptor {

    var address : number/*long*/;
    var type : string/*TransferType*/;
    var direction : string/*Direction*/;
    var maximumPacketSize : number/*long*/;
    // Used for isochronous mode.
    var synchronization : Nullable.<string>/*SynchronizationType?*/;
    var usage : Nullable.<string>/*UsageType?*/;
    // If this is an interrupt endpoint, this will be 1-255.
    var pollingInterval : Nullable.<number>/*long?*/;

} // end of EndpointDescriptor

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class InterfaceDescriptor {

    var interfaceNumber : number/*long*/;
    var alternateSetting : number/*long*/;
    var interfaceClass : number/*long*/;
    var interfaceSubclass : number/*long*/;
    var interfaceProtocol : number/*long*/;
    var description : Nullable.<string>/*DOMString?*/;
    var endpoints : EndpointDescriptor[];

} // end of InterfaceDescriptor

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class ControlTransferInfo {

    // The direction of this transfer.
    var direction : string/*Direction*/;
    // The intended recipient for this transfer.
    var recipient : string/*Recipient*/;
    // The type of this request.
    var requestType : string/*RequestType*/;
    var request : number/*long*/;
    var value : number/*long*/;
    var index : number/*long*/;
    // If this transfer is an input transfer, then this field must be set to
    // indicate the expected data length. If this is an output transfer, then
    // this field is ignored.
    var length : Nullable.<number>/*long?*/;
    // The data payload carried by this transfer. If this is an output transfer
    // then this field must be set.
    var data : Nullable.<ArrayBuffer>;

} // end of ControlTransferInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class GenericTransferInfo {

    // The direction of this transfer.
    var direction : string/*Direction*/;
    var endpoint : number/*long*/;
    // If this is an input transfer then this field indicates the size of the
    // input buffer. If this is an output transfer then this field is ignored.
    var length : Nullable.<number>/*long?*/;
    // If this is an output transfer then this field must be populated.
    // Otherwise, it will be ignored.
    var data : Nullable.<ArrayBuffer>;

} // end of GenericTransferInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class IsochronousTransferInfo {

    // All of the normal transfer parameters are encapsulated in the
    // transferInfo parameters. Note that the data specified in this parameter
    // block is split along packetLength boundaries to form the individual
    // packets of the transfer.
    var transferInfo : GenericTransferInfo;
    // The total number of packets in this transfer.
    var packets : number/*long*/;
    // The length of each of the packets in this transfer.
    var packetLength : number/*long*/;

} // end of IsochronousTransferInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class TransferResultInfo {

    // A value of 0 indicates that the transfer was a success. Other values
    // indicate failure.
    var resultCode : Nullable.<number>/*long?*/;
    // If the transfer was an input transfer then this field will contain all
    // of the input data requested.
    var data : Nullable.<ArrayBuffer>;

} // end of TransferResultInfo

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class EnumerateDevicesOptions {

    var vendorId : number/*long*/;
    var productId : number/*long*/;

} // end of EnumerateDevicesOptions

/** @see http://src.chromium.org/svn/trunk/src/chrome/common/extensions/api/usb.idl */
/* dictionary */ class EnumerateDevicesAndRequestAccessOptions {

    var vendorId : number/*long*/;
    var productId : number/*long*/;
    // The interface id to request access against.
    // Only available on ChromeOS. It has no effect on other platforms.
    var interfaceId : Nullable.<number>/*long?*/;

} // end of EnumerateDevicesAndRequestAccessOptions

