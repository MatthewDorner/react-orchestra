import _Symbol$species from'babel-runtime/core-js/symbol/species';import _Set from'babel-runtime/core-js/set';import _getIterator from'babel-runtime/core-js/get-iterator';import _Array$from from'babel-runtime/core-js/array/from';import _Symbol$iterator from'babel-runtime/core-js/symbol/iterator';import _Symbol from'babel-runtime/core-js/symbol';import _Map from'babel-runtime/core-js/map';import _Object$getPrototypeOf from'babel-runtime/core-js/object/get-prototype-of';import _Object$getOwnPropertyNames from'babel-runtime/core-js/object/get-own-property-names';import _Object$getOwnPropertyDescriptor from'babel-runtime/core-js/object/get-own-property-descriptor';import _Object$defineProperty from'babel-runtime/core-js/object/define-property';import _Object$freeze from'babel-runtime/core-js/object/freeze';import _Object$create from'babel-runtime/core-js/object/create';import _Object$defineProperties from'babel-runtime/core-js/object/define-properties';import _Object$keys from'babel-runtime/core-js/object/keys';import _Promise from'babel-runtime/core-js/promise';import _JSON$stringify from'babel-runtime/core-js/json/stringify';import _Object$assign2 from'babel-runtime/core-js/object/assign';import _typeof2 from'babel-runtime/helpers/typeof';/*!
 * InstrumentJS v1.0.1
 * MIT Licensed
 */(function webpackUniversalModuleDefinition(root,factory){if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object'&&(typeof module==='undefined'?'undefined':_typeof2(module))==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object')exports["InstrumentJS"]=factory();else root["InstrumentJS"]=factory();})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******/// The require function
/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
/******/module.loaded=true;/******/// Return the exports of the module
/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
/******/__webpack_require__.p="";/******/// Load entry module and return exports
/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(1);/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.InstrumentHelpers=exports.INSTRUMENT_NAMES=exports.Note=exports.Instrument=exports.AudioContext=undefined;var _AudioContext=__webpack_require__(2);var _AudioContext2=_interopRequireDefault(_AudioContext);var _Instruments=__webpack_require__(3);var _Instruments2=_interopRequireDefault(_Instruments);var _Note=__webpack_require__(35);var _Note2=_interopRequireDefault(_Note);var _INSTRUMENTS=__webpack_require__(60);var _INSTRUMENTS2=_interopRequireDefault(_INSTRUMENTS);var _helpers=__webpack_require__(39);var _helpers2=_interopRequireDefault(_helpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.AudioContext=_AudioContext2.default;exports.Instrument=_Instruments2.default;exports.Note=_Note2.default;exports.INSTRUMENT_NAMES=_INSTRUMENTS2.default;exports.InstrumentHelpers=_helpers2.default;// import Melody from './Melody';
// import Musician from './Musician';
/***/},/* 2 *//***/function(module,exports){'use strict';exports.__esModule=true;var getAudioContext=function getAudioContext(){var AudioContext=window.AudioContext// Default
||window.webkitAudioContext// Safari and old versions of Chrome
||false;if(!AudioContext){alert('Sorry but the WebAudio API is not supported on this browser. Please consider using Chrome or Safari for the best experience ');return null;}return new AudioContext();};var audioContext=getAudioContext();exports.default=audioContext;/***/},/* 3 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=_Object$assign2||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _soundfontPlayer=__webpack_require__(4);var _soundfontPlayer2=_interopRequireDefault(_soundfontPlayer);var _bluebird=__webpack_require__(19);var _bluebird2=_interopRequireDefault(_bluebird);var _lodash=__webpack_require__(23);var _lodash2=_interopRequireDefault(_lodash);var _MidiIO=__webpack_require__(25);var _MidiIO2=_interopRequireDefault(_MidiIO);var _immutabilityHelper=__webpack_require__(33);var _immutabilityHelper2=_interopRequireDefault(_immutabilityHelper);var _Note=__webpack_require__(35);var _Note2=_interopRequireDefault(_Note);var _AudioContext=__webpack_require__(2);var _AudioContext2=_interopRequireDefault(_AudioContext);var _NOTES=__webpack_require__(36);var _NOTES2=_interopRequireDefault(_NOTES);var _SCALES=__webpack_require__(37);var _SCALES2=_interopRequireDefault(_SCALES);var _CHORDS=__webpack_require__(38);var _CHORDS2=_interopRequireDefault(_CHORDS);var _helpers=__webpack_require__(39);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var delay=function delay(ms){return new _bluebird2.default(function(resolve){return setTimeout(resolve,ms);});};// const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
window.delay=function(ms){return new _bluebird2.default(function(resolve){return setTimeout(resolve,ms);});};/** Instrument Class. Use it to play music from the browser */var Instrument=function(){/**
	   * Create an instrument. It will import audio context and prepare its internal state.
	   */function Instrument(){_classCallCheck(this,Instrument);this.instruments={};this.ac=_AudioContext2.default;this.playingNotes={};this.isPlayingMelody=false;}/**
	   * Loads instrument from the web and stores it as a resolvable promise
	   * @param instrumentName. List of all instrument names in src/constants/INSTRUMENTS
	   * @returns Promise<musicPlayer>
	   */Instrument.prototype.get=function get(instrumentName){var _this=this;return new _bluebird2.default(function(resolve,reject){if(_lodash2.default.has(_this.instruments,instrumentName)){if(_this.instruments[instrumentName].promise.done){return resolve(_this.instruments[instrumentName].instrument);}return _this.instruments[instrumentName].promise.then(function(instrument){return resolve(instrument);});}_this.instruments[instrumentName]={};_this.instruments[instrumentName].isLoading=true;_this.instruments[instrumentName].instrument={};_this.instruments[instrumentName].promise=_soundfontPlayer2.default.instrument(_AudioContext2.default,instrumentName,{nameToUrl:function nameToUrl(name,sf,format){format=format==='ogg'?format:'mp3';sf=sf==='FluidR3_GM'?sf:'MusyngKite';var url='https://d2ovwkm0xvqw0n.cloudfront.net/';// `https://raw.githubusercontent.com/RakanNimer/midi-js-soundfonts/master/`;// 'https://s3-eu-west-1.amazonaws.com/ut-music-player/midi-js-soundfonts/'
var fullPath=''+url+sf+'/'+name+'-'+format+'.js';return fullPath;}}).then(function(instrument){_this.instruments[instrumentName].instrument=instrument;_this.instruments[instrumentName].promise.done=true;_this.instruments[instrumentName].isLoading=false;resolve(instrument);return instrument;}).catch(function(err){console.log('ERRROR ',err);reject('Couldn\'t load instrument '+instrumentName+'. Error : '+_JSON$stringify(err));});_this.instruments[instrumentName].promise.done=false;return _this.instruments[instrumentName].promise;});};/**
	   * Start playing note, if note.payload.durationInMS is -1 it will keep playing infinitely until it is explicitly stopped.
	   * { payload: { id, instrumentName, startTimeInMS, instrumentName, name, gain, duration }}
	   * @param note
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.startPlayingNote=function startPlayingNote(note){var _this2=this;var noteID=note.payload.id;// `${note.payload.noteName}_${note.payload.instrumentName}`;
if(!(noteID in this.playingNotes)){this.playingNotes[noteID]=[];}return delay(note.payload.startTimeInMS).then(function(){_this2.playingNotes[noteID].push(_this2.get(note.payload.instrumentName).then(function(instrument){return instrument.start(note.payload.name,null,{loop:true,gain:note.payload.gain,duration:note.payload.duration===-1?9999999:note.payload.duration/1000});}));var currentNotePromise=_this2.playingNotes[noteID][_this2.playingNotes[noteID].length-1];if(note.payload.durationInMS!==-1){return delay(note.payload.durationInMS).then(function(){return currentNotePromise;}).then(function(notePlayer){return notePlayer.stop();});}return currentNotePromise;});};/**
	   * Stop playing note
	   * { payload: { id, instrumentName, startTimeInMS, instrumentName, name, gain, duration }}
	   * @param note
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.stopPlayingNote=function stopPlayingNote(note){if(!note.payload){return _bluebird2.default.resolve(false);}var noteID=note.payload.id;// note.payload.id ? note.payload.id : `${note.payload.noteName}_${note.payload.instrumentName}`;
if(typeof this.playingNotes[noteID]==='undefined'){return _bluebird2.default.resolve(true);}// 'Cloning' promise before deleting note.
var playingNotes=this.playingNotes[noteID];var playingNote=playingNotes[playingNotes.length-1].then();this.playingNotes[noteID].pop();if(this.playingNotes[noteID].length===0){delete this.playingNotes[noteID];}return delay(note.payload.fadeDurationInMS).then(function(){return playingNote;}).then(function(notePlayer){notePlayer.stop();}).catch(function(error){alert('Failed stopping audio. Unsupported Browser ?'+_JSON$stringify(error));});};/**
	   * Start playing chord by note names
	   * @param noteNames
	   * @param note settings
	   * @example
	   * const instrument = new Instrument();
	   * instrument.startPlayingChordByNoteNames(['A3','C3','E3'], {instrumentName: 'acoustic_grand_piano', startTimeInMS: 0, durationInMS: 1000, endTimeInMS: 1000})
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.startPlayingChordByNoteNames=function startPlayingChordByNoteNames(noteNames,settings){var _this3=this;return _bluebird2.default.map(noteNames,function(noteName){var note=new _Note2.default(_extends({},settings,{name:noteName}));return _this3.startPlayingNote(note);});};/**
	   * Stop playing chord by note names
	   * @param noteNames
	   * @param note settings
	   * @example
	   * const instrument = new Instrument();
	   * instrument.stopPlayingChordByNoteNames(['A3','C3','E3'], {instrumentName: 'acoustic_grand_piano', startTimeInMS: 0, durationInMS: 1000, endTimeInMS: 1000})
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.stopPlayingChordByNoteNames=function stopPlayingChordByNoteNames(noteNames,settings){var _this4=this;return _bluebird2.default.map(noteNames,function(noteName){var note=new _Note2.default(_extends({},settings,{name:noteName}));return _this4.stopPlayingNote(note);});};/**
	   * startPlayingChordByChordName
	   * @param firstNoteName
	   * @param chordName
	   * @param note settings
	   * @example
	   * const instrument = new Instrument();
	   * instrument.startPlayingChordByChordName('A3', 'maj', {instrumentName: 'acoustic_grand_piano', startTimeInMS: 0, durationInMS: 1000, endTimeInMS: 1000})
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.startPlayingChordByChordName=function startPlayingChordByChordName(firstNoteName,chordName){var noteSettings=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var noteNames=(0,_helpers.getNoteNamesFromChordName)(firstNoteName,chordName);// console.log({ firstNoteName, noteNames });
return this.startPlayingChordByNoteNames(noteNames,noteSettings);};/**
	   * stopPlayingChordByChordName
	   * @param firstNoteName
	   * @param chordName
	   * @param note settings
	   * @example
	   * const instrument = new Instrument();
	   * instrument.stopPlayingChordByChordName('A3', 'maj', {instrumentName: 'acoustic_grand_piano', startTimeInMS: 0, durationInMS: 1000, endTimeInMS: 1000})
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.stopPlayingChordByChordName=function stopPlayingChordByChordName(firstNoteName,chordName){var noteSettings=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var noteNames=(0,_helpers.getNoteNamesFromChordName)(firstNoteName,chordName);// console.log({ firstNoteName, noteNames });
return this.stopPlayingChordByNoteNames(noteNames,noteSettings);};/**
	   * play array of notes
	   * @param notes
	   * @param meta
	   * @param note settings
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.play=function play(notes,meta){var _this5=this;this.isPlayingMelody=true;var melodyStartTime=notes[0].payload.startTimeInMS;return _bluebird2.default.map(notes,function(note,i){var currentStartTime=note.payload.startTimeInMS-melodyStartTime;return window.delay(currentStartTime).then(function(){if(_this5.isPlayingMelody===false){throw new function(){return{code:'STOPPED_PLAYING'};}();}return _this5.startPlayingNote(note);}).then(function(){return window.delay(note.payload.durationInMS);}).then(function(){return _this5.stopPlayingNote(note);}).catch(function(error){if(error.code&&error.code==='STOPPED_PLAYING'){return null;}throw error;});});};/**
	   * stop playing array of notes
	   * @param notes
	   * @param meta
	   * @param note settings
	   * @returns Promise<notePlayer>
	   */Instrument.prototype.stop=function stop(notes,meta){var _this6=this;this.isPlayingMelody=false;return _bluebird2.default.map(notes,function(note,i){return _this6.stopPlayingNote(note.payload.instrumentName,note.payload.noteName);});};return Instrument;}();exports.default=Instrument;/***/},/* 4 *//***/function(module,exports,__webpack_require__){'use strict';var load=__webpack_require__(5);var player=__webpack_require__(8);/**
	 * Load a soundfont instrument. It returns a promise that resolves to a
	 * instrument object.
	 *
	 * The instrument object returned by the promise has the following properties:
	 *
	 * - name: the instrument name
	 * - play: A function to play notes from the buffer with the signature
	 * `play(note, time, duration, options)`
	 *
	 *
	 * The valid options are:
	 *
	 * - `format`: the soundfont format. 'mp3' by default. Can be 'ogg'
	 * - `soundfont`: the soundfont name. 'MusyngKite' by default. Can be 'FluidR3_GM'
	 * - `nameToUrl` <Function>: a function to convert from instrument names to URL
	 * - `destination`: by default Soundfont uses the `audioContext.destination` but you can override it.
	 * - `gain`: the gain of the player (1 by default)
	 * - `notes`: an array of the notes to decode. It can be an array of strings
	 * with note names or an array of numbers with midi note numbers. This is a
	 * performance option: since decoding mp3 is a cpu intensive process, you can limit
	 * limit the number of notes you want and reduce the time to load the instrument.
	 *
	 * @param {AudioContext} ac - the audio context
	 * @param {String} name - the instrument name. For example: 'acoustic_grand_piano'
	 * @param {Object} options - (Optional) the same options as Soundfont.loadBuffers
	 * @return {Promise}
	 *
	 * @example
	 * var Soundfont = require('sounfont-player')
	 * Soundfont.instrument('marimba').then(function (marimba) {
	 *   marimba.play('C4')
	 * })
	 */function instrument(ac,name,options){if(arguments.length===1)return function(n,o){return instrument(ac,n,o);};var opts=options||{};var isUrl=opts.isSoundfontURL||isSoundfontURL;var toUrl=opts.nameToUrl||nameToUrl;var url=isUrl(name)?name:toUrl(name,opts.soundfont,opts.format);return load(ac,url,{only:opts.only||opts.notes}).then(function(buffers){var p=player(ac,buffers,opts).connect(ac.destination);p.url=url;p.name=name;return p;});}function isSoundfontURL(name){return /\.js(\?.*)?$/i.test(name);}/**
	 * Given an instrument name returns a URL to to the Benjamin Gleitzman's
	 * package of [pre-rendered sound fonts](https://github.com/gleitz/midi-js-soundfonts)
	 *
	 * @param {String} name - instrument name
	 * @param {String} soundfont - (Optional) the soundfont name. One of 'FluidR3_GM'
	 * or 'MusyngKite' ('MusyngKite' by default)
	 * @param {String} format - (Optional) Can be 'mp3' or 'ogg' (mp3 by default)
	 * @returns {String} the Soundfont file url
	 * @example
	 * var Soundfont = require('soundfont-player')
	 * Soundfont.nameToUrl('marimba', 'mp3')
	 */function nameToUrl(name,sf,format){format=format==='ogg'?format:'mp3';sf=sf==='FluidR3_GM'?sf:'MusyngKite';return'https://gleitz.github.io/midi-js-soundfonts/'+sf+'/'+name+'-'+format+'.js';}// In the 1.0.0 release it will be:
// var Soundfont = {}
var Soundfont=__webpack_require__(17);Soundfont.instrument=instrument;Soundfont.nameToUrl=nameToUrl;if((typeof module==='undefined'?'undefined':_typeof2(module))==='object'&&module.exports)module.exports=Soundfont;if(typeof window!=='undefined')window.Soundfont=Soundfont;/***/},/* 5 *//***/function(module,exports,__webpack_require__){'use strict';var base64=__webpack_require__(6);var fetch=__webpack_require__(7);// Given a regex, return a function that test if against a string
function fromRegex(r){return function(o){return typeof o==='string'&&r.test(o);};}// Try to apply a prefix to a name
function prefix(pre,name){return typeof pre==='string'?pre+name:typeof pre==='function'?pre(name):name;}/**
	 * Load one or more audio files
	 *
	 *
	 * Possible option keys:
	 *
	 * - __from__ {Function|String}: a function or string to convert from file names to urls.
	 * If is a string it will be prefixed to the name:
	 * `load(ac, 'snare.mp3', { from: 'http://audio.net/samples/' })`
	 * If it's a function it receives the file name and should return the url as string.
	 * - __only__ {Array} - when loading objects, if provided, only the given keys
	 * will be included in the decoded object:
	 * `load(ac, 'piano.json', { only: ['C2', 'D2'] })`
	 *
	 * @param {AudioContext} ac - the audio context
	 * @param {Object} source - the object to be loaded
	 * @param {Object} options - (Optional) the load options for that object
	 * @param {Object} defaultValue - (Optional) the default value to return as
	 * in a promise if not valid loader found
	 */function load(ac,source,options,defVal){var loader=// Basic audio loading
isArrayBuffer(source)?loadArrayBuffer:isAudioFileName(source)?loadAudioFile:isPromise(source)?loadPromise// Compound objects
:isArray(source)?loadArrayData:isObject(source)?loadObjectData:isJsonFileName(source)?loadJsonFile// Base64 encoded audio
:isBase64Audio(source)?loadBase64Audio:isJsFileName(source)?loadMidiJSFile:null;var opts=options||{};return loader?loader(ac,source,opts):defVal?_Promise.resolve(defVal):_Promise.reject('Source not valid ('+source+')');}load.fetch=fetch;// BASIC AUDIO LOADING
// ===================
// Load (decode) an array buffer
function isArrayBuffer(o){return o instanceof ArrayBuffer;}function loadArrayBuffer(ac,array,options){return new _Promise(function(done,reject){ac.decodeAudioData(array,function(buffer){done(buffer);},function(){reject("Can't decode audio data ("+array.slice(0,30)+'...)');});});}// Load an audio filename
var isAudioFileName=fromRegex(/\.(mp3|wav|ogg)(\?.*)?$/i);function loadAudioFile(ac,name,options){var url=prefix(options.from,name);return load(ac,load.fetch(url,'arraybuffer'),options);}// Load the result of a promise
function isPromise(o){return o&&typeof o.then==='function';}function loadPromise(ac,promise,options){return promise.then(function(value){return load(ac,value,options);});}// COMPOUND OBJECTS
// ================
// Try to load all the items of an array
var isArray=Array.isArray;function loadArrayData(ac,array,options){return _Promise.all(array.map(function(data){return load(ac,data,options,data);}));}// Try to load all the values of a key/value object
function isObject(o){return o&&(typeof o==='undefined'?'undefined':_typeof2(o))==='object';}function loadObjectData(ac,obj,options){var dest={};var promises=_Object$keys(obj).map(function(key){if(options.only&&options.only.indexOf(key)===-1)return null;var value=obj[key];return load(ac,value,options,value).then(function(audio){dest[key]=audio;});});return _Promise.all(promises).then(function(){return dest;});}// Load the content of a JSON file
var isJsonFileName=fromRegex(/\.json(\?.*)?$/i);function loadJsonFile(ac,name,options){var url=prefix(options.from,name);return load(ac,load.fetch(url,'text').then(JSON.parse),options);}// BASE64 ENCODED FORMATS
// ======================
// Load strings with Base64 encoded audio
var isBase64Audio=fromRegex(/^data:audio/);function loadBase64Audio(ac,source,options){var i=source.indexOf(',');return load(ac,base64.decode(source.slice(i+1)).buffer,options);}// Load .js files with MidiJS soundfont prerendered audio
var isJsFileName=fromRegex(/\.js(\?.*)?$/i);function loadMidiJSFile(ac,name,options){var url=prefix(options.from,name);return load(ac,load.fetch(url,'text').then(midiJsToJson),options);}// convert a MIDI.js javascript soundfont file to json
function midiJsToJson(data){var begin=data.indexOf('MIDI.Soundfont.');if(begin<0)throw Error('Invalid MIDI.js Soundfont format');begin=data.indexOf('=',begin)+2;var end=data.lastIndexOf(',');return JSON.parse(data.slice(begin,end)+'}');}if((typeof module==='undefined'?'undefined':_typeof2(module))==='object'&&module.exports)module.exports=load;if(typeof window!=='undefined')window.loadAudio=load;/***/},/* 6 *//***/function(module,exports){'use strict';// DECODE UTILITIES
function b64ToUint6(nChr){return nChr>64&&nChr<91?nChr-65:nChr>96&&nChr<123?nChr-71:nChr>47&&nChr<58?nChr+4:nChr===43?62:nChr===47?63:0;}// Decode Base64 to Uint8Array
// ---------------------------
function decode(sBase64,nBlocksSize){var sB64Enc=sBase64.replace(/[^A-Za-z0-9\+\/]/g,'');var nInLen=sB64Enc.length;var nOutLen=nBlocksSize?Math.ceil((nInLen*3+1>>2)/nBlocksSize)*nBlocksSize:nInLen*3+1>>2;var taBytes=new Uint8Array(nOutLen);for(var nMod3,nMod4,nUint24=0,nOutIdx=0,nInIdx=0;nInIdx<nInLen;nInIdx++){nMod4=nInIdx&3;nUint24|=b64ToUint6(sB64Enc.charCodeAt(nInIdx))<<18-6*nMod4;if(nMod4===3||nInLen-nInIdx===1){for(nMod3=0;nMod3<3&&nOutIdx<nOutLen;nMod3++,nOutIdx++){taBytes[nOutIdx]=nUint24>>>(16>>>nMod3&24)&255;}nUint24=0;}}return taBytes;}module.exports={decode:decode};/***/},/* 7 *//***/function(module,exports){/* global XMLHttpRequest */'use strict';/**
	 * Given a url and a return type, returns a promise to the content of the url
	 * Basically it wraps a XMLHttpRequest into a Promise
	 *
	 * @param {String} url
	 * @param {String} type - can be 'text' or 'arraybuffer'
	 * @return {Promise}
	 */module.exports=function(url,type){return new _Promise(function(done,reject){var req=new XMLHttpRequest();if(type)req.responseType=type;req.open('GET',url);req.onload=function(){req.status===200?done(req.response):reject(Error(req.statusText));};req.onerror=function(){reject(Error('Network Error'));};req.send();});};/***/},/* 8 *//***/function(module,exports,__webpack_require__){'use strict';var player=__webpack_require__(9);var events=__webpack_require__(11);var notes=__webpack_require__(12);var scheduler=__webpack_require__(14);var midi=__webpack_require__(15);function SamplePlayer(ac,source,options){return midi(scheduler(notes(events(player(ac,source,options)))));}if((typeof module==='undefined'?'undefined':_typeof2(module))==='object'&&module.exports)module.exports=SamplePlayer;if(typeof window!=='undefined')window.SamplePlayer=SamplePlayer;/***/},/* 9 *//***/function(module,exports,__webpack_require__){/* global AudioBuffer */'use strict';var ADSR=__webpack_require__(10);var EMPTY={};var DEFAULTS={gain:1,attack:0.01,decay:0.1,sustain:0.9,release:0.3,loop:false,cents:0,loopStart:0,loopEnd:0};/**
	 * Create a sample player.
	 *
	 * @param {AudioContext} ac - the audio context
	 * @param {ArrayBuffer|Object<String,ArrayBuffer>} source
	 * @param {Onject} options - (Optional) an options object
	 * @return {player} the player
	 * @example
	 * var SamplePlayer = require('sample-player')
	 * var ac = new AudioContext()
	 * var snare = SamplePlayer(ac, <AudioBuffer>)
	 * snare.play()
	 */function SamplePlayer(ac,source,options){var connected=false;var nextId=0;var tracked={};var out=ac.createGain();out.gain.value=1;var opts=_Object$assign2({},DEFAULTS,options);/**
	   * @namespace
	   */var player={context:ac,out:out,opts:opts};if(source instanceof AudioBuffer)player.buffer=source;else player.buffers=source;/**
	   * Start a sample buffer.
	   *
	   * The returned object has a function `stop(when)` to stop the sound.
	   *
	   * @param {String} name - the name of the buffer. If the source of the
	   * SamplePlayer is one sample buffer, this parameter is not required
	   * @param {Float} when - (Optional) when to start (current time if by default)
	   * @param {Object} options - additional sample playing options
	   * @return {AudioNode} an audio node with a `stop` function
	   * @example
	   * var sample = player(ac, <AudioBuffer>).connect(ac.destination)
	   * sample.start()
	   * sample.start(5, { gain: 0.7 }) // name not required since is only one AudioBuffer
	   * @example
	   * var drums = player(ac, { snare: <AudioBuffer>, kick: <AudioBuffer>, ... }).connect(ac.destination)
	   * drums.start('snare')
	   * drums.start('snare', 0, { gain: 0.3 })
	   */player.start=function(name,when,options){// if only one buffer, reorder arguments
if(player.buffer&&name!==null)return player.start(null,name,when);var buffer=name?player.buffers[name]:player.buffer;if(!buffer){console.warn('Buffer '+name+' not found.');return;}else if(!connected){console.warn('SamplePlayer not connected to any node.');return;}var opts=options||EMPTY;when=Math.max(ac.currentTime,when||0);player.emit('start',when,name,opts);var node=createNode(name,buffer,opts);node.id=track(name,node);node.env.start(when);node.source.start(when);player.emit('started',when,node.id,node);if(opts.duration)node.stop(when+opts.duration);return node;};// NOTE: start will be override so we can't copy the function reference
// this is obviously not a good design, so this code will be gone soon.
/**
	   * An alias for `player.start`
	   * @see player.start
	   * @since 0.3.0
	   */player.play=function(name,when,options){return player.start(name,when,options);};/**
	   * Stop some or all samples
	   *
	   * @param {Float} when - (Optional) an absolute time in seconds (or currentTime
	   * if not specified)
	   * @param {Array} nodes - (Optional) an array of nodes or nodes ids to stop
	   * @return {Array} an array of ids of the stoped samples
	   *
	   * @example
	   * var longSound = player(ac, <AudioBuffer>).connect(ac.destination)
	   * longSound.start(ac.currentTime)
	   * longSound.start(ac.currentTime + 1)
	   * longSound.start(ac.currentTime + 2)
	   * longSound.stop(ac.currentTime + 3) // stop the three sounds
	   */player.stop=function(when,ids){var node;ids=ids||_Object$keys(tracked);return ids.map(function(id){node=tracked[id];if(!node)return null;node.stop(when);return node.id;});};/**
	   * Connect the player to a destination node
	   *
	   * @param {AudioNode} destination - the destination node
	   * @return {AudioPlayer} the player
	   * @chainable
	   * @example
	   * var sample = player(ac, <AudioBuffer>).connect(ac.destination)
	   */player.connect=function(dest){connected=true;out.connect(dest);return player;};player.emit=function(event,when,obj,opts){if(player.onevent)player.onevent(event,when,obj,opts);var fn=player['on'+event];if(fn)fn(when,obj,opts);};return player;// =============== PRIVATE FUNCTIONS ============== //
function track(name,node){node.id=nextId++;tracked[node.id]=node;node.source.onended=function(){var now=ac.currentTime;node.source.disconnect();node.env.disconnect();node.disconnect();player.emit('ended',now,node.id,node);};return node.id;}function createNode(name,buffer,options){var node=ac.createGain();node.gain.value=0;// the envelope will control the gain
node.connect(out);node.env=envelope(ac,options,opts);node.env.connect(node.gain);node.source=ac.createBufferSource();node.source.buffer=buffer;node.source.connect(node);node.source.loop=options.loop||opts.loop;node.source.playbackRate.value=centsToRate(options.cents||opts.cents);node.source.loopStart=options.loopStart||opts.loopStart;node.source.loopEnd=options.loopEnd||opts.loopEnd;node.stop=function(when){var time=when||ac.currentTime;player.emit('stop',time,name);var stopAt=node.env.stop(time);node.source.stop(stopAt);};return node;}}function isNum(x){return typeof x==='number';}var PARAMS=['attack','decay','sustain','release'];function envelope(ac,options,opts){var env=ADSR(ac);var adsr=options.adsr||opts.adsr;PARAMS.forEach(function(name,i){if(adsr)env[name]=adsr[i];else env[name]=options[name]||opts[name];});env.value.value=isNum(options.gain)?options.gain:isNum(opts.gain)?opts.gain:1;return env;}/*
	 * Get playback rate for a given pitch change (in cents)
	 * Basic [math](http://www.birdsoft.demon.co.uk/music/samplert.htm):
	 * f2 = f1 * 2^( C / 1200 )
	 */function centsToRate(cents){return cents?Math.pow(2,cents/1200):1;}module.exports=SamplePlayer;/***/},/* 10 *//***/function(module,exports){module.exports=ADSR;function ADSR(audioContext){var node=audioContext.createGain();var voltage=node._voltage=getVoltage(audioContext);var value=scale(voltage);var startValue=scale(voltage);var endValue=scale(voltage);node._startAmount=scale(startValue);node._endAmount=scale(endValue);node._multiplier=scale(value);node._multiplier.connect(node);node._startAmount.connect(node);node._endAmount.connect(node);node.value=value.gain;node.startValue=startValue.gain;node.endValue=endValue.gain;node.startValue.value=0;node.endValue.value=0;_Object$defineProperties(node,props);return node;}var props={attack:{value:0,writable:true},decay:{value:0,writable:true},sustain:{value:1,writable:true},release:{value:0,writable:true},getReleaseDuration:{value:function value(){return this.release;}},start:{value:function value(at){var target=this._multiplier.gain;var startAmount=this._startAmount.gain;var endAmount=this._endAmount.gain;this._voltage.start(at);this._decayFrom=this._decayFrom=at+this.attack;this._startedAt=at;var sustain=this.sustain;target.cancelScheduledValues(at);startAmount.cancelScheduledValues(at);endAmount.cancelScheduledValues(at);endAmount.setValueAtTime(0,at);if(this.attack){target.setValueAtTime(0,at);target.linearRampToValueAtTime(1,at+this.attack);startAmount.setValueAtTime(1,at);startAmount.linearRampToValueAtTime(0,at+this.attack);}else{target.setValueAtTime(1,at);startAmount.setValueAtTime(0,at);}if(this.decay){target.setTargetAtTime(sustain,this._decayFrom,getTimeConstant(this.decay));}}},stop:{value:function value(at,isTarget){if(isTarget){at=at-this.release;}var endTime=at+this.release;if(this.release){var target=this._multiplier.gain;var startAmount=this._startAmount.gain;var endAmount=this._endAmount.gain;target.cancelScheduledValues(at);startAmount.cancelScheduledValues(at);endAmount.cancelScheduledValues(at);var expFalloff=getTimeConstant(this.release);// truncate attack (required as linearRamp is removed by cancelScheduledValues)
if(this.attack&&at<this._decayFrom){var valueAtTime=getValue(0,1,this._startedAt,this._decayFrom,at);target.linearRampToValueAtTime(valueAtTime,at);startAmount.linearRampToValueAtTime(1-valueAtTime,at);startAmount.setTargetAtTime(0,at,expFalloff);}endAmount.setTargetAtTime(1,at,expFalloff);target.setTargetAtTime(0,at,expFalloff);}this._voltage.stop(endTime);return endTime;}},onended:{get:function get(){return this._voltage.onended;},set:function set(value){this._voltage.onended=value;}}};var flat=new Float32Array([1,1]);function getVoltage(context){var voltage=context.createBufferSource();var buffer=context.createBuffer(1,2,context.sampleRate);buffer.getChannelData(0).set(flat);voltage.buffer=buffer;voltage.loop=true;return voltage;}function scale(node){var gain=node.context.createGain();node.connect(gain);return gain;}function getTimeConstant(time){return Math.log(time+1)/Math.log(100);}function getValue(start,end,fromTime,toTime,at){var difference=end-start;var time=toTime-fromTime;var truncateTime=at-fromTime;var phase=truncateTime/time;var value=start+phase*difference;if(value<=start){value=start;}if(value>=end){value=end;}return value;}/***/},/* 11 *//***/function(module,exports){module.exports=function(player){/**
	   * Adds a listener of an event
	   * @chainable
	   * @param {String} event - the event name
	   * @param {Function} callback - the event handler
	   * @return {SamplePlayer} the player
	   * @example
	   * player.on('start', function(time, note) {
	   *   console.log(time, note)
	   * })
	   */player.on=function(event,cb){if(arguments.length===1&&typeof event==='function')return player.on('event',event);var prop='on'+event;var old=player[prop];player[prop]=old?chain(old,cb):cb;return player;};return player;};function chain(fn1,fn2){return function(a,b,c,d){fn1(a,b,c,d);fn2(a,b,c,d);};}/***/},/* 12 *//***/function(module,exports,__webpack_require__){'use strict';var note=__webpack_require__(13);var isMidi=function isMidi(n){return n!==null&&n!==[]&&n>=0&&n<129;};var toMidi=function toMidi(n){return isMidi(n)?+n:note.midi(n);};// Adds note name to midi conversion
module.exports=function(player){if(player.buffers){var map=player.opts.map;var toKey=typeof map==='function'?map:toMidi;var mapper=function mapper(name){return name?toKey(name)||name:null;};player.buffers=mapBuffers(player.buffers,mapper);var start=player.start;player.start=function(name,when,options){var key=mapper(name);var dec=key%1;if(dec){key=Math.floor(key);options=_Object$assign2(options||{},{cents:Math.floor(dec*100)});}return start(key,when,options);};}return player;};function mapBuffers(buffers,toKey){return _Object$keys(buffers).reduce(function(mapped,name){mapped[toKey(name)]=buffers[name];return mapped;},{});}/***/},/* 13 *//***/function(module,exports){'use strict';var REGEX=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;/**
	 * A regex for matching note strings in scientific notation.
	 *
	 * @name regex
	 * @function
	 * @return {RegExp} the regexp used to parse the note name
	 *
	 * The note string should have the form `letter[accidentals][octave][element]`
	 * where:
	 *
	 * - letter: (Required) is a letter from A to G either upper or lower case
	 * - accidentals: (Optional) can be one or more `b` (flats), `#` (sharps) or `x` (double sharps).
	 * They can NOT be mixed.
	 * - octave: (Optional) a positive or negative integer
	 * - element: (Optional) additionally anything after the duration is considered to
	 * be the element name (for example: 'C2 dorian')
	 *
	 * The executed regex contains (by array index):
	 *
	 * - 0: the complete string
	 * - 1: the note letter
	 * - 2: the optional accidentals
	 * - 3: the optional octave
	 * - 4: the rest of the string (trimmed)
	 *
	 * @example
	 * var parser = require('note-parser')
	 * parser.regex.exec('c#4')
	 * // => ['c#4', 'c', '#', '4', '']
	 * parser.regex.exec('c#4 major')
	 * // => ['c#4major', 'c', '#', '4', 'major']
	 * parser.regex().exec('CMaj7')
	 * // => ['CMaj7', 'C', '', '', 'Maj7']
	 */function regex(){return REGEX;}var SEMITONES=[0,2,4,5,7,9,11];/**
	 * Parse a note name in scientific notation an return it's components,
	 * and some numeric properties including midi number and frequency.
	 *
	 * @name parse
	 * @function
	 * @param {String} note - the note string to be parsed
	 * @param {Boolean} isTonic - true if the note is the tonic of something.
	 * If true, en extra tonicOf property is returned. It's false by default.
	 * @param {Float} tunning - The frequency of A4 note to calculate frequencies.
	 * By default it 440.
	 * @return {Object} the parsed note name or null if not a valid note
	 *
	 * The parsed note name object will ALWAYS contains:
	 * - letter: the uppercase letter of the note
	 * - acc: the accidentals of the note (only sharps or flats)
	 * - pc: the pitch class (letter + acc)
	 * - step: s a numeric representation of the letter. It's an integer from 0 to 6
	 * where 0 = C, 1 = D ... 6 = B
	 * - alt: a numeric representation of the accidentals. 0 means no alteration,
	 * positive numbers are for sharps and negative for flats
	 * - chroma: a numeric representation of the pitch class. It's like midi for
	 * pitch classes. 0 = C, 1 = C#, 2 = D ... It can have negative values: -1 = Cb.
	 * Can detect pitch class enhramonics.
	 *
	 * If the note has octave, the parser object will contain:
	 * - oct: the octave number (as integer)
	 * - midi: the midi number
	 * - freq: the frequency (using tuning parameter as base)
	 *
	 * If the parameter `isTonic` is set to true, the parsed object will contain:
	 * - tonicOf: the rest of the string that follows note name (left and right trimmed)
	 *
	 * @example
	 * var parse = require('note-parser').parse
	 * parse('Cb4')
	 * // => { letter: 'C', acc: 'b', pc: 'Cb', step: 0, alt: -1, chroma: -1,
	 *         oct: 4, midi: 59, freq: 246.94165062806206 }
	 * // if no octave, no midi, no freq
	 * parse('fx')
	 * // => { letter: 'F', acc: '##', pc: 'F##', step: 3, alt: 2, chroma: 7 })
	 */function parse(str,isTonic,tuning){if(typeof str!=='string')return null;var m=REGEX.exec(str);if(!m||!isTonic&&m[4])return null;var p={letter:m[1].toUpperCase(),acc:m[2].replace(/x/g,'##')};p.pc=p.letter+p.acc;p.step=(p.letter.charCodeAt(0)+3)%7;p.alt=p.acc[0]==='b'?-p.acc.length:p.acc.length;p.chroma=SEMITONES[p.step]+p.alt;if(m[3]){p.oct=+m[3];p.midi=p.chroma+12*(p.oct+1);p.freq=midiToFreq(p.midi,tuning);}if(isTonic)p.tonicOf=m[4];return p;}/**
	 * Given a midi number, return its frequency
	 * @param {Integer} midi - midi note number
	 * @param {Float} tuning - (Optional) the A4 tuning (440Hz by default)
	 * @return {Float} frequency in hertzs
	 */function midiToFreq(midi,tuning){return Math.pow(2,(midi-69)/12)*(tuning||440);}var parser={parse:parse,regex:regex,midiToFreq:midiToFreq};var FNS=['letter','acc','pc','step','alt','chroma','oct','midi','freq'];FNS.forEach(function(name){parser[name]=function(src){var p=parse(src);return p&&typeof p[name]!=='undefined'?p[name]:null;};});module.exports=parser;// extra API docs
/**
	 * Get midi of a note
	 *
	 * @name midi
	 * @function
	 * @param {String} note - the note name
	 * @return {Integer} the midi number of the note or null if not a valid note
	 * or the note does NOT contains octave
	 * @example
	 * var parser = require('note-parser')
	 * parser.midi('A4') // => 69
	 * parser.midi('A') // => null
	 *//**
	 * Get freq of a note in hertzs (in a well tempered 440Hz A4)
	 *
	 * @name freq
	 * @function
	 * @param {String} note - the note name
	 * @return {Float} the freq of the number if hertzs or null if not valid note
	 * or the note does NOT contains octave
	 * @example
	 * var parser = require('note-parser')
	 * parser.freq('A4') // => 440
	 * parser.freq('A') // => null
	 *//***/},/* 14 *//***/function(module,exports){'use strict';var isArr=Array.isArray;var isObj=function isObj(o){return o&&(typeof o==='undefined'?'undefined':_typeof2(o))==='object';};var OPTS={};module.exports=function(player){/**
	   * Schedule a list of events to be played at specific time.
	   *
	   * It supports three formats of events for the events list:
	   *
	   * - An array with [time, note]
	   * - An array with [time, object]
	   * - An object with { time: ?, [name|note|midi|key]: ? }
	   *
	   * @param {Float} time - an absolute time to start (or AudioContext's
	   * currentTime if provided number is 0)
	   * @param {Array} events - the events list.
	   * @return {Array} an array of ids
	   *
	   * @example
	   * // Event format: [time, note]
	   * var piano = player(ac, ...).connect(ac.destination)
	   * piano.schedule(0, [ [0, 'C2'], [0.5, 'C3'], [1, 'C4'] ])
	   *
	   * @example
	   * // Event format: an object { time: ?, name: ? }
	   * var drums = player(ac, ...).connect(ac.destination)
	   * drums.schedule(0, [
	   *   { name: 'kick', time: 0 },
	   *   { name: 'snare', time: 0.5 },
	   *   { name: 'kick', time: 1 },
	   *   { name: 'snare', time: 1.5 }
	   * ])
	   */player.schedule=function(time,events){var now=player.context.currentTime;var when=time<now?now:time;player.emit('schedule',when,events);var t,o,note,opts;return events.map(function(event){if(!event)return null;else if(isArr(event)){t=event[0];o=event[1];}else{t=event.time;o=event;}if(isObj(o)){note=o.name||o.key||o.note||o.midi||null;opts=o;}else{note=o;opts=OPTS;}return player.start(note,when+(t||0),opts);});};return player;};/***/},/* 15 *//***/function(module,exports,__webpack_require__){var midimessage=__webpack_require__(16);module.exports=function(player){/**
	  * Connect a player to a midi input
	  *
	  * The options accepts:
	  *
	  * - channel: the channel to listen to. Listen to all channels by default.
	  *
	  * @param {MIDIInput} input
	  * @param {Object} options - (Optional)
	  * @return {SamplePlayer} the player
	  * @example
	  * var piano = player(...)
	  * window.navigator.requestMIDIAccess().then(function (midiAccess) {
	  *   midiAccess.inputs.forEach(function (midiInput) {
	  *     piano.listenToMidi(midiInput)
	  *   })
	  * })
	  */player.listenToMidi=function(input,options){var started={};var opts=options||{};var gain=opts.gain||function(vel){return vel/127;};input.onmidimessage=function(msg){var mm=msg.messageType?msg:midimessage(msg);if(mm.messageType==='noteon'&&mm.velocity===0){mm.messageType='noteoff';}if(opts.channel&&mm.channel!==opts.channel)return;switch(mm.messageType){case'noteon':started[mm.key]=player.play(mm.key,0,{gain:gain(mm.velocity)});break;case'noteoff':if(started[mm.key]){started[mm.key].stop();delete started[mm.key];}break;}};return player;};return player;};/***/},/* 16 *//***/function(module,exports,__webpack_require__){var require;var require;(function(e){if(true){module.exports=e();}else if(typeof define==="function"&&define.amd){define([],e);}else{var t;if(typeof window!=="undefined"){t=window;}else if(typeof global!=="undefined"){t=global;}else if(typeof self!=="undefined"){t=self;}else{t=this;}t.midimessage=e();}})(function(){var e,t,s;return function o(e,t,s){function a(n,i){if(!t[n]){if(!e[n]){var l=typeof require=="function"&&require;if(!i&&l)return require(n,!0);if(r)return r(n,!0);var h=new Error("Cannot find module '"+n+"'");throw h.code="MODULE_NOT_FOUND",h;}var c=t[n]={exports:{}};e[n][0].call(c.exports,function(t){var s=e[n][1][t];return a(s?s:t);},c,c.exports,o,e,t,s);}return t[n].exports;}var r=typeof require=="function"&&require;for(var n=0;n<s.length;n++){a(s[n]);}return a;}({1:[function(e,t,s){"use strict";Object.defineProperty(s,"__esModule",{value:true});s["default"]=function(e){function t(e){this._event=e;this._data=e.data;this.receivedTime=e.receivedTime;if(this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return;}this._messageCode=e.data[0]&240;this.channel=e.data[0]&15;switch(this._messageCode){case 128:this.messageType="noteoff";this.key=e.data[1]&127;this.velocity=e.data[2]&127;break;case 144:this.messageType="noteon";this.key=e.data[1]&127;this.velocity=e.data[2]&127;break;case 160:this.messageType="keypressure";this.key=e.data[1]&127;this.pressure=e.data[2]&127;break;case 176:this.messageType="controlchange";this.controllerNumber=e.data[1]&127;this.controllerValue=e.data[2]&127;if(this.controllerNumber===120&&this.controllerValue===0){this.channelModeMessage="allsoundoff";}else if(this.controllerNumber===121){this.channelModeMessage="resetallcontrollers";}else if(this.controllerNumber===122){if(this.controllerValue===0){this.channelModeMessage="localcontroloff";}else{this.channelModeMessage="localcontrolon";}}else if(this.controllerNumber===123&&this.controllerValue===0){this.channelModeMessage="allnotesoff";}else if(this.controllerNumber===124&&this.controllerValue===0){this.channelModeMessage="omnimodeoff";}else if(this.controllerNumber===125&&this.controllerValue===0){this.channelModeMessage="omnimodeon";}else if(this.controllerNumber===126){this.channelModeMessage="monomodeon";}else if(this.controllerNumber===127){this.channelModeMessage="polymodeon";}break;case 192:this.messageType="programchange";this.program=e.data[1];break;case 208:this.messageType="channelpressure";this.pressure=e.data[1]&127;break;case 224:this.messageType="pitchbendchange";var t=e.data[2]&127;var s=e.data[1]&127;this.pitchBend=(t<<8)+s;break;}}return new t(e);};t.exports=s["default"];},{}]},{},[1])(1);});//# sourceMappingURL=dist/index.js.map
/***/},/* 17 *//***/function(module,exports,__webpack_require__){'use strict';var parser=__webpack_require__(18);/**
	 * Create a Soundfont object
	 *
	 * @param {AudioContext} context - the [audio context](https://developer.mozilla.org/en/docs/Web/API/AudioContext)
	 * @param {Function} nameToUrl - (Optional) a function that maps the sound font name to the url
	 * @return {Soundfont} a soundfont object
	 */function Soundfont(ctx,nameToUrl){console.warn('new Soundfont() is deprected');console.log('Please use Soundfont.instrument() instead of new Soundfont().instrument()');if(!(this instanceof Soundfont))return new Soundfont(ctx);this.nameToUrl=nameToUrl||Soundfont.nameToUrl;this.ctx=ctx;this.instruments={};this.promises=[];}Soundfont.prototype.onready=function(callback){console.warn('deprecated API');console.log('Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()');_Promise.all(this.promises).then(callback);};Soundfont.prototype.instrument=function(name,options){console.warn('new Soundfont().instrument() is deprecated.');console.log('Please use Soundfont.instrument() instead.');var ctx=this.ctx;name=name||'default';if(name in this.instruments)return this.instruments[name];var inst={name:name,play:oscillatorPlayer(ctx,options)};this.instruments[name]=inst;if(name!=='default'){var promise=Soundfont.instrument(ctx,name,options).then(function(instrument){inst.play=instrument.play;return inst;});this.promises.push(promise);inst.onready=function(cb){console.warn('onready is deprecated. Use Soundfont.instrument().then()');promise.then(cb);};}else{inst.onready=function(cb){console.warn('onready is deprecated. Use Soundfont.instrument().then()');cb();};}return inst;};/*
	 * Load the buffers of a given instrument name. It returns a promise that resolves
	 * to a hash with midi note numbers as keys, and audio buffers as values.
	 *
	 * @param {AudioContext} ac - the audio context
	 * @param {String} name - the instrument name (it accepts an url if starts with "http")
	 * @param {Object} options - (Optional) options object
	 * @return {Promise} a promise that resolves to a Hash of { midiNoteNum: <AudioBuffer> }
	 *
	 * The options object accepts the following keys:
	 *
	 * - nameToUrl {Function}: a function to convert from instrument names to urls.
	 * By default it uses Benjamin Gleitzman's package of
	 * [pre-rendered sound fonts](https://github.com/gleitz/midi-js-soundfonts)
	 * - notes {Array}: the list of note names to be decoded (all by default)
	 *
	 * @example
	 * var Soundfont = require('soundfont-player')
	 * Soundfont.loadBuffers(ctx, 'acoustic_grand_piano').then(function(buffers) {
	 *  buffers[60] // => An <AudioBuffer> corresponding to note C4
	 * })
	 */function loadBuffers(ac,name,options){console.warn('Soundfont.loadBuffers is deprecate.');console.log('Use Soundfont.instrument(..) and get buffers properties from the result.');return Soundfont.instrument(ac,name,options).then(function(inst){return inst.buffers;});}Soundfont.loadBuffers=loadBuffers;/**
	 * Returns a function that plays an oscillator
	 *
	 * @param {AudioContext} ac - the audio context
	 * @param {Hash} defaultOptions - (Optional) a hash of options:
	 * - vcoType: the oscillator type (default: 'sine')
	 * - gain: the output gain value (default: 0.4)
	  * - destination: the player destination (default: ac.destination)
	 */function oscillatorPlayer(ctx,defaultOptions){defaultOptions=defaultOptions||{};return function(note,time,duration,options){console.warn('The oscillator player is deprecated.');console.log('Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.');var midi=note>0&&note<129?+note:parser.midi(note);var freq=midi?parser.midiToFreq(midi,440):null;if(!freq)return;duration=duration||0.2;options=options||{};var destination=options.destination||defaultOptions.destination||ctx.destination;var vcoType=options.vcoType||defaultOptions.vcoType||'sine';var gain=options.gain||defaultOptions.gain||0.4;var vco=ctx.createOscillator();vco.type=vcoType;vco.frequency.value=freq;/* VCA */var vca=ctx.createGain();vca.gain.value=gain;/* Connections */vco.connect(vca);vca.connect(destination);vco.start(time);if(duration>0)vco.stop(time+duration);return vco;};}/**
	 * Given a note name, return the note midi number
	 *
	 * @name noteToMidi
	 * @function
	 * @param {String} noteName
	 * @return {Integer} the note midi number or null if not a valid note name
	 */Soundfont.noteToMidi=parser.midi;module.exports=Soundfont;/***/},/* 18 *//***/function(module,exports){'use strict';// util
function fillStr(s,num){return Array(num+1).join(s);}function isNum(x){return typeof x==='number';}function isStr(x){return typeof x==='string';}function isDef(x){return typeof x!=='undefined';}function midiToFreq(midi,tuning){return Math.pow(2,(midi-69)/12)*(tuning||440);}var REGEX=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;/**
	 * A regex for matching note strings in scientific notation.
	 *
	 * @name regex
	 * @function
	 * @return {RegExp} the regexp used to parse the note name
	 *
	 * The note string should have the form `letter[accidentals][octave][element]`
	 * where:
	 *
	 * - letter: (Required) is a letter from A to G either upper or lower case
	 * - accidentals: (Optional) can be one or more `b` (flats), `#` (sharps) or `x` (double sharps).
	 * They can NOT be mixed.
	 * - octave: (Optional) a positive or negative integer
	 * - element: (Optional) additionally anything after the duration is considered to
	 * be the element name (for example: 'C2 dorian')
	 *
	 * The executed regex contains (by array index):
	 *
	 * - 0: the complete string
	 * - 1: the note letter
	 * - 2: the optional accidentals
	 * - 3: the optional octave
	 * - 4: the rest of the string (trimmed)
	 *
	 * @example
	 * var parser = require('note-parser')
	 * parser.regex.exec('c#4')
	 * // => ['c#4', 'c', '#', '4', '']
	 * parser.regex.exec('c#4 major')
	 * // => ['c#4major', 'c', '#', '4', 'major']
	 * parser.regex().exec('CMaj7')
	 * // => ['CMaj7', 'C', '', '', 'Maj7']
	 */function regex(){return REGEX;}var SEMITONES=[0,2,4,5,7,9,11];/**
	 * Parse a note name in scientific notation an return it's components,
	 * and some numeric properties including midi number and frequency.
	 *
	 * @name parse
	 * @function
	 * @param {String} note - the note string to be parsed
	 * @param {Boolean} isTonic - true the strings it's supposed to contain a note number
	 * and some category (for example an scale: 'C# major'). It's false by default,
	 * but when true, en extra tonicOf property is returned with the category ('major')
	 * @param {Float} tunning - The frequency of A4 note to calculate frequencies.
	 * By default it 440.
	 * @return {Object} the parsed note name or null if not a valid note
	 *
	 * The parsed note name object will ALWAYS contains:
	 * - letter: the uppercase letter of the note
	 * - acc: the accidentals of the note (only sharps or flats)
	 * - pc: the pitch class (letter + acc)
	 * - step: s a numeric representation of the letter. It's an integer from 0 to 6
	 * where 0 = C, 1 = D ... 6 = B
	 * - alt: a numeric representation of the accidentals. 0 means no alteration,
	 * positive numbers are for sharps and negative for flats
	 * - chroma: a numeric representation of the pitch class. It's like midi for
	 * pitch classes. 0 = C, 1 = C#, 2 = D ... 11 = B. Can be used to find enharmonics
	 * since, for example, chroma of 'Cb' and 'B' are both 11
	 *
	 * If the note has octave, the parser object will contain:
	 * - oct: the octave number (as integer)
	 * - midi: the midi number
	 * - freq: the frequency (using tuning parameter as base)
	 *
	 * If the parameter `isTonic` is set to true, the parsed object will contain:
	 * - tonicOf: the rest of the string that follows note name (left and right trimmed)
	 *
	 * @example
	 * var parse = require('note-parser').parse
	 * parse('Cb4')
	 * // => { letter: 'C', acc: 'b', pc: 'Cb', step: 0, alt: -1, chroma: -1,
	 *         oct: 4, midi: 59, freq: 246.94165062806206 }
	 * // if no octave, no midi, no freq
	 * parse('fx')
	 * // => { letter: 'F', acc: '##', pc: 'F##', step: 3, alt: 2, chroma: 7 })
	 */function parse(str,isTonic,tuning){if(typeof str!=='string')return null;var m=REGEX.exec(str);if(!m||!isTonic&&m[4])return null;var p={letter:m[1].toUpperCase(),acc:m[2].replace(/x/g,'##')};p.pc=p.letter+p.acc;p.step=(p.letter.charCodeAt(0)+3)%7;p.alt=p.acc[0]==='b'?-p.acc.length:p.acc.length;var pos=SEMITONES[p.step]+p.alt;p.chroma=pos<0?12+pos:pos%12;if(m[3]){// has octave
p.oct=+m[3];p.midi=pos+12*(p.oct+1);p.freq=midiToFreq(p.midi,tuning);}if(isTonic)p.tonicOf=m[4];return p;}var LETTERS='CDEFGAB';function acc(n){return!isNum(n)?'':n<0?fillStr('b',-n):fillStr('#',n);}function oct(n){return!isNum(n)?'':''+n;}/**
	 * Create a string from a parsed object or `step, alteration, octave` parameters
	 * @param {Object} obj - the parsed data object
	 * @return {String} a note string or null if not valid parameters
	 * @since 1.2
	 * @example
	 * parser.build(parser.parse('cb2')) // => 'Cb2'
	 *
	 * @example
	 * // it accepts (step, alteration, octave) parameters:
	 * parser.build(3) // => 'F'
	 * parser.build(3, -1) // => 'Fb'
	 * parser.build(3, -1, 4) // => 'Fb4'
	 */function build(s,a,o){if(s===null||typeof s==='undefined')return null;if(s.step)return build(s.step,s.alt,s.oct);if(s<0||s>6)return null;return LETTERS.charAt(s)+acc(a)+oct(o);}/**
	 * Get midi of a note
	 *
	 * @name midi
	 * @function
	 * @param {String|Integer} note - the note name or midi number
	 * @return {Integer} the midi number of the note or null if not a valid note
	 * or the note does NOT contains octave
	 * @example
	 * var parser = require('note-parser')
	 * parser.midi('A4') // => 69
	 * parser.midi('A') // => null
	 * @example
	 * // midi numbers are bypassed (even as strings)
	 * parser.midi(60) // => 60
	 * parser.midi('60') // => 60
	 */function midi(note){if((isNum(note)||isStr(note))&&note>=0&&note<128)return+note;var p=parse(note);return p&&isDef(p.midi)?p.midi:null;}/**
	 * Get freq of a note in hertzs (in a well tempered 440Hz A4)
	 *
	 * @name freq
	 * @function
	 * @param {String} note - the note name or note midi number
	 * @param {String} tuning - (Optional) the A4 frequency (440 by default)
	 * @return {Float} the freq of the number if hertzs or null if not valid note
	 * @example
	 * var parser = require('note-parser')
	 * parser.freq('A4') // => 440
	 * parser.freq('A') // => null
	 * @example
	 * // can change tuning (440 by default)
	 * parser.freq('A4', 444) // => 444
	 * parser.freq('A3', 444) // => 222
	 * @example
	 * // it accepts midi numbers (as numbers and as strings)
	 * parser.freq(69) // => 440
	 * parser.freq('69', 442) // => 442
	 */function freq(note,tuning){var m=midi(note);return m===null?null:midiToFreq(m,tuning);}var parser={parse:parse,build:build,regex:regex,midi:midi,freq:freq};// add additional functions, one for each object property
var FNS=['letter','acc','pc','step','alt','chroma','oct'];FNS.forEach(function(name){parser[name]=function(src){var p=parse(src);return p&&isDef(p[name])?p[name]:null;};});module.exports=parser;/***/},/* 19 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process,global,setImmediate){/* @preserve
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2013-2015 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 *//**
	 * bluebird build version 3.4.6
	 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
	*/!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e();}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var SomePromiseArray=Promise._SomePromiseArray;function any(promises){var ret=new SomePromiseArray(promises);var promise=ret.promise();ret.setHowMany(1);ret.setUnwrap();ret.init();return promise;}Promise.any=function(promises){return any(promises);};Promise.prototype.any=function(){return any(this);};};},{}],2:[function(_dereq_,module,exports){"use strict";var firstLineError;try{throw new Error();}catch(e){firstLineError=e;}var schedule=_dereq_("./schedule");var Queue=_dereq_("./queue");var util=_dereq_("./util");function Async(){this._customScheduler=false;this._isTickUsed=false;this._lateQueue=new Queue(16);this._normalQueue=new Queue(16);this._haveDrainedQueues=false;this._trampolineEnabled=true;var self=this;this.drainQueues=function(){self._drainQueues();};this._schedule=schedule;}Async.prototype.setScheduler=function(fn){var prev=this._schedule;this._schedule=fn;this._customScheduler=true;return prev;};Async.prototype.hasCustomScheduler=function(){return this._customScheduler;};Async.prototype.enableTrampoline=function(){this._trampolineEnabled=true;};Async.prototype.disableTrampolineIfNecessary=function(){if(util.hasDevTools){this._trampolineEnabled=false;}};Async.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues;};Async.prototype.fatalError=function(e,isNode){if(isNode){process.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n");process.exit(2);}else{this.throwLater(e);}};Async.prototype.throwLater=function(fn,arg){if(arguments.length===1){arg=fn;fn=function fn(){throw arg;};}if(typeof setTimeout!=="undefined"){setTimeout(function(){fn(arg);},0);}else try{this._schedule(function(){fn(arg);});}catch(e){throw new Error('No async scheduler available\n\n    See http://goo.gl/MqrFmX\n');}};function AsyncInvokeLater(fn,receiver,arg){this._lateQueue.push(fn,receiver,arg);this._queueTick();}function AsyncInvoke(fn,receiver,arg){this._normalQueue.push(fn,receiver,arg);this._queueTick();}function AsyncSettlePromises(promise){this._normalQueue._pushOne(promise);this._queueTick();}if(!util.hasDevTools){Async.prototype.invokeLater=AsyncInvokeLater;Async.prototype.invoke=AsyncInvoke;Async.prototype.settlePromises=AsyncSettlePromises;}else{Async.prototype.invokeLater=function(fn,receiver,arg){if(this._trampolineEnabled){AsyncInvokeLater.call(this,fn,receiver,arg);}else{this._schedule(function(){setTimeout(function(){fn.call(receiver,arg);},100);});}};Async.prototype.invoke=function(fn,receiver,arg){if(this._trampolineEnabled){AsyncInvoke.call(this,fn,receiver,arg);}else{this._schedule(function(){fn.call(receiver,arg);});}};Async.prototype.settlePromises=function(promise){if(this._trampolineEnabled){AsyncSettlePromises.call(this,promise);}else{this._schedule(function(){promise._settlePromises();});}};}Async.prototype.invokeFirst=function(fn,receiver,arg){this._normalQueue.unshift(fn,receiver,arg);this._queueTick();};Async.prototype._drainQueue=function(queue){while(queue.length()>0){var fn=queue.shift();if(typeof fn!=="function"){fn._settlePromises();continue;}var receiver=queue.shift();var arg=queue.shift();fn.call(receiver,arg);}};Async.prototype._drainQueues=function(){this._drainQueue(this._normalQueue);this._reset();this._haveDrainedQueues=true;this._drainQueue(this._lateQueue);};Async.prototype._queueTick=function(){if(!this._isTickUsed){this._isTickUsed=true;this._schedule(this.drainQueues);}};Async.prototype._reset=function(){this._isTickUsed=false;};module.exports=Async;module.exports.firstLineError=firstLineError;},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,debug){var calledBind=false;var rejectThis=function rejectThis(_,e){this._reject(e);};var targetRejected=function targetRejected(e,context){context.promiseRejectionQueued=true;context.bindingPromise._then(rejectThis,rejectThis,null,this,e);};var bindingResolved=function bindingResolved(thisArg,context){if((this._bitField&50397184)===0){this._resolveCallback(context.target);}};var bindingRejected=function bindingRejected(e,context){if(!context.promiseRejectionQueued)this._reject(e);};Promise.prototype.bind=function(thisArg){if(!calledBind){calledBind=true;Promise.prototype._propagateFrom=debug.propagateFromFunction();Promise.prototype._boundValue=debug.boundValueFunction();}var maybePromise=tryConvertToPromise(thisArg);var ret=new Promise(INTERNAL);ret._propagateFrom(this,1);var target=this._target();ret._setBoundTo(maybePromise);if(maybePromise instanceof Promise){var context={promiseRejectionQueued:false,promise:ret,target:target,bindingPromise:maybePromise};target._then(INTERNAL,targetRejected,undefined,ret,context);maybePromise._then(bindingResolved,bindingRejected,undefined,ret,context);ret._setOnCancel(maybePromise);}else{ret._resolveCallback(target);}return ret;};Promise.prototype._setBoundTo=function(obj){if(obj!==undefined){this._bitField=this._bitField|2097152;this._boundTo=obj;}else{this._bitField=this._bitField&~2097152;}};Promise.prototype._isBound=function(){return(this._bitField&2097152)===2097152;};Promise.bind=function(thisArg,value){return Promise.resolve(value).bind(thisArg);};};},{}],4:[function(_dereq_,module,exports){"use strict";var old;if(typeof _Promise!=="undefined")old=_Promise;function noConflict(){try{if(_Promise===bluebird)Promise=old;}catch(e){}return bluebird;}var bluebird=_dereq_("./promise")();bluebird.noConflict=noConflict;module.exports=bluebird;},{"./promise":22}],5:[function(_dereq_,module,exports){"use strict";var cr=_Object$create;if(cr){var callerCache=cr(null);var getterCache=cr(null);callerCache[" size"]=getterCache[" size"]=0;}module.exports=function(Promise){var util=_dereq_("./util");var canEvaluate=util.canEvaluate;var isIdentifier=util.isIdentifier;var getMethodCaller;var getGetter;if(false){var makeMethodCaller=function makeMethodCaller(methodName){return new Function("ensureMethod","                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g,methodName))(ensureMethod);};var makeGetter=function makeGetter(propertyName){return new Function("obj","                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName",propertyName));};var getCompiled=function getCompiled(name,compiler,cache){var ret=cache[name];if(typeof ret!=="function"){if(!isIdentifier(name)){return null;}ret=compiler(name);cache[name]=ret;cache[" size"]++;if(cache[" size"]>512){var keys=_Object$keys(cache);for(var i=0;i<256;++i){delete cache[keys[i]];}cache[" size"]=keys.length-256;}}return ret;};getMethodCaller=function getMethodCaller(name){return getCompiled(name,makeMethodCaller,callerCache);};getGetter=function getGetter(name){return getCompiled(name,makeGetter,getterCache);};}function ensureMethod(obj,methodName){var fn;if(obj!=null)fn=obj[methodName];if(typeof fn!=="function"){var message="Object "+util.classString(obj)+" has no method '"+util.toString(methodName)+"'";throw new Promise.TypeError(message);}return fn;}function caller(obj){var methodName=this.pop();var fn=ensureMethod(obj,methodName);return fn.apply(obj,this);}Promise.prototype.call=function(methodName){var args=[].slice.call(arguments,1);;if(false){if(canEvaluate){var maybeCaller=getMethodCaller(methodName);if(maybeCaller!==null){return this._then(maybeCaller,undefined,undefined,args,undefined);}}}args.push(methodName);return this._then(caller,undefined,undefined,args,undefined);};function namedGetter(obj){return obj[this];}function indexedGetter(obj){var index=+this;if(index<0)index=Math.max(0,index+obj.length);return obj[index];}Promise.prototype.get=function(propertyName){var isIndex=typeof propertyName==="number";var getter;if(!isIndex){if(canEvaluate){var maybeGetter=getGetter(propertyName);getter=maybeGetter!==null?maybeGetter:namedGetter;}else{getter=namedGetter;}}else{getter=indexedGetter;}return this._then(getter,undefined,undefined,propertyName,undefined);};};},{"./util":36}],6:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,debug){var util=_dereq_("./util");var tryCatch=util.tryCatch;var errorObj=util.errorObj;var async=Promise._async;Promise.prototype["break"]=Promise.prototype.cancel=function(){if(!debug.cancellation())return this._warn("cancellation is disabled");var promise=this;var child=promise;while(promise._isCancellable()){if(!promise._cancelBy(child)){if(child._isFollowing()){child._followee().cancel();}else{child._cancelBranched();}break;}var parent=promise._cancellationParent;if(parent==null||!parent._isCancellable()){if(promise._isFollowing()){promise._followee().cancel();}else{promise._cancelBranched();}break;}else{if(promise._isFollowing())promise._followee().cancel();promise._setWillBeCancelled();child=promise;promise=parent;}}};Promise.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--;};Promise.prototype._enoughBranchesHaveCancelled=function(){return this._branchesRemainingToCancel===undefined||this._branchesRemainingToCancel<=0;};Promise.prototype._cancelBy=function(canceller){if(canceller===this){this._branchesRemainingToCancel=0;this._invokeOnCancel();return true;}else{this._branchHasCancelled();if(this._enoughBranchesHaveCancelled()){this._invokeOnCancel();return true;}}return false;};Promise.prototype._cancelBranched=function(){if(this._enoughBranchesHaveCancelled()){this._cancel();}};Promise.prototype._cancel=function(){if(!this._isCancellable())return;this._setCancelled();async.invoke(this._cancelPromises,this,undefined);};Promise.prototype._cancelPromises=function(){if(this._length()>0)this._settlePromises();};Promise.prototype._unsetOnCancel=function(){this._onCancelField=undefined;};Promise.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled();};Promise.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled();};Promise.prototype._doInvokeOnCancel=function(onCancelCallback,internalOnly){if(util.isArray(onCancelCallback)){for(var i=0;i<onCancelCallback.length;++i){this._doInvokeOnCancel(onCancelCallback[i],internalOnly);}}else if(onCancelCallback!==undefined){if(typeof onCancelCallback==="function"){if(!internalOnly){var e=tryCatch(onCancelCallback).call(this._boundValue());if(e===errorObj){this._attachExtraTrace(e.e);async.throwLater(e.e);}}}else{onCancelCallback._resultCancelled(this);}}};Promise.prototype._invokeOnCancel=function(){var onCancelCallback=this._onCancel();this._unsetOnCancel();async.invoke(this._doInvokeOnCancel,this,onCancelCallback);};Promise.prototype._invokeInternalOnCancel=function(){if(this._isCancellable()){this._doInvokeOnCancel(this._onCancel(),true);this._unsetOnCancel();}};Promise.prototype._resultCancelled=function(){this.cancel();};};},{"./util":36}],7:[function(_dereq_,module,exports){"use strict";module.exports=function(NEXT_FILTER){var util=_dereq_("./util");var getKeys=_dereq_("./es5").keys;var tryCatch=util.tryCatch;var errorObj=util.errorObj;function catchFilter(instances,cb,promise){return function(e){var boundTo=promise._boundValue();predicateLoop:for(var i=0;i<instances.length;++i){var item=instances[i];if(item===Error||item!=null&&item.prototype instanceof Error){if(e instanceof item){return tryCatch(cb).call(boundTo,e);}}else if(typeof item==="function"){var matchesPredicate=tryCatch(item).call(boundTo,e);if(matchesPredicate===errorObj){return matchesPredicate;}else if(matchesPredicate){return tryCatch(cb).call(boundTo,e);}}else if(util.isObject(e)){var keys=getKeys(item);for(var j=0;j<keys.length;++j){var key=keys[j];if(item[key]!=e[key]){continue predicateLoop;}}return tryCatch(cb).call(boundTo,e);}}return NEXT_FILTER;};}return catchFilter;};},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var longStackTraces=false;var contextStack=[];Promise.prototype._promiseCreated=function(){};Promise.prototype._pushContext=function(){};Promise.prototype._popContext=function(){return null;};Promise._peekContext=Promise.prototype._peekContext=function(){};function Context(){this._trace=new Context.CapturedTrace(peekContext());}Context.prototype._pushContext=function(){if(this._trace!==undefined){this._trace._promiseCreated=null;contextStack.push(this._trace);}};Context.prototype._popContext=function(){if(this._trace!==undefined){var trace=contextStack.pop();var ret=trace._promiseCreated;trace._promiseCreated=null;return ret;}return null;};function createContext(){if(longStackTraces)return new Context();}function peekContext(){var lastIndex=contextStack.length-1;if(lastIndex>=0){return contextStack[lastIndex];}return undefined;}Context.CapturedTrace=null;Context.create=createContext;Context.deactivateLongStackTraces=function(){};Context.activateLongStackTraces=function(){var Promise_pushContext=Promise.prototype._pushContext;var Promise_popContext=Promise.prototype._popContext;var Promise_PeekContext=Promise._peekContext;var Promise_peekContext=Promise.prototype._peekContext;var Promise_promiseCreated=Promise.prototype._promiseCreated;Context.deactivateLongStackTraces=function(){Promise.prototype._pushContext=Promise_pushContext;Promise.prototype._popContext=Promise_popContext;Promise._peekContext=Promise_PeekContext;Promise.prototype._peekContext=Promise_peekContext;Promise.prototype._promiseCreated=Promise_promiseCreated;longStackTraces=false;};longStackTraces=true;Promise.prototype._pushContext=Context.prototype._pushContext;Promise.prototype._popContext=Context.prototype._popContext;Promise._peekContext=Promise.prototype._peekContext=peekContext;Promise.prototype._promiseCreated=function(){var ctx=this._peekContext();if(ctx&&ctx._promiseCreated==null)ctx._promiseCreated=this;};};return Context;};},{}],9:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,Context){var getDomain=Promise._getDomain;var async=Promise._async;var Warning=_dereq_("./errors").Warning;var util=_dereq_("./util");var canAttachTrace=util.canAttachTrace;var unhandledRejectionHandled;var possiblyUnhandledRejection;var bluebirdFramePattern=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;var nodeFramePattern=/\((?:timers\.js):\d+:\d+\)/;var parseLinePattern=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;var stackFramePattern=null;var formatStack=null;var indentStackFrames=false;var printWarning;var debugging=!!(util.env("BLUEBIRD_DEBUG")!=0&&(true||util.env("BLUEBIRD_DEBUG")||util.env("NODE_ENV")==="development"));var warnings=!!(util.env("BLUEBIRD_WARNINGS")!=0&&(debugging||util.env("BLUEBIRD_WARNINGS")));var longStackTraces=!!(util.env("BLUEBIRD_LONG_STACK_TRACES")!=0&&(debugging||util.env("BLUEBIRD_LONG_STACK_TRACES")));var wForgottenReturn=util.env("BLUEBIRD_W_FORGOTTEN_RETURN")!=0&&(warnings||!!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));Promise.prototype.suppressUnhandledRejections=function(){var target=this._target();target._bitField=target._bitField&~1048576|524288;};Promise.prototype._ensurePossibleRejectionHandled=function(){if((this._bitField&524288)!==0)return;this._setRejectionIsUnhandled();async.invokeLater(this._notifyUnhandledRejection,this,undefined);};Promise.prototype._notifyUnhandledRejectionIsHandled=function(){fireRejectionEvent("rejectionHandled",unhandledRejectionHandled,undefined,this);};Promise.prototype._setReturnedNonUndefined=function(){this._bitField=this._bitField|268435456;};Promise.prototype._returnedNonUndefined=function(){return(this._bitField&268435456)!==0;};Promise.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var reason=this._settledValue();this._setUnhandledRejectionIsNotified();fireRejectionEvent("unhandledRejection",possiblyUnhandledRejection,reason,this);}};Promise.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=this._bitField|262144;};Promise.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=this._bitField&~262144;};Promise.prototype._isUnhandledRejectionNotified=function(){return(this._bitField&262144)>0;};Promise.prototype._setRejectionIsUnhandled=function(){this._bitField=this._bitField|1048576;};Promise.prototype._unsetRejectionIsUnhandled=function(){this._bitField=this._bitField&~1048576;if(this._isUnhandledRejectionNotified()){this._unsetUnhandledRejectionIsNotified();this._notifyUnhandledRejectionIsHandled();}};Promise.prototype._isRejectionUnhandled=function(){return(this._bitField&1048576)>0;};Promise.prototype._warn=function(message,shouldUseOwnTrace,promise){return warn(message,shouldUseOwnTrace,promise||this);};Promise.onPossiblyUnhandledRejection=function(fn){var domain=getDomain();possiblyUnhandledRejection=typeof fn==="function"?domain===null?fn:util.domainBind(domain,fn):undefined;};Promise.onUnhandledRejectionHandled=function(fn){var domain=getDomain();unhandledRejectionHandled=typeof fn==="function"?domain===null?fn:util.domainBind(domain,fn):undefined;};var disableLongStackTraces=function disableLongStackTraces(){};Promise.longStackTraces=function(){if(async.haveItemsQueued()&&!config.longStackTraces){throw new Error('cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n');}if(!config.longStackTraces&&longStackTracesIsSupported()){var Promise_captureStackTrace=Promise.prototype._captureStackTrace;var Promise_attachExtraTrace=Promise.prototype._attachExtraTrace;config.longStackTraces=true;disableLongStackTraces=function disableLongStackTraces(){if(async.haveItemsQueued()&&!config.longStackTraces){throw new Error('cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n');}Promise.prototype._captureStackTrace=Promise_captureStackTrace;Promise.prototype._attachExtraTrace=Promise_attachExtraTrace;Context.deactivateLongStackTraces();async.enableTrampoline();config.longStackTraces=false;};Promise.prototype._captureStackTrace=longStackTracesCaptureStackTrace;Promise.prototype._attachExtraTrace=longStackTracesAttachExtraTrace;Context.activateLongStackTraces();async.disableTrampolineIfNecessary();}};Promise.hasLongStackTraces=function(){return config.longStackTraces&&longStackTracesIsSupported();};var fireDomEvent=function(){try{if(typeof CustomEvent==="function"){var event=new CustomEvent("CustomEvent");util.global.dispatchEvent(event);return function(name,event){var domEvent=new CustomEvent(name.toLowerCase(),{detail:event,cancelable:true});return!util.global.dispatchEvent(domEvent);};}else if(typeof Event==="function"){var event=new Event("CustomEvent");util.global.dispatchEvent(event);return function(name,event){var domEvent=new Event(name.toLowerCase(),{cancelable:true});domEvent.detail=event;return!util.global.dispatchEvent(domEvent);};}else{var event=document.createEvent("CustomEvent");event.initCustomEvent("testingtheevent",false,true,{});util.global.dispatchEvent(event);return function(name,event){var domEvent=document.createEvent("CustomEvent");domEvent.initCustomEvent(name.toLowerCase(),false,true,event);return!util.global.dispatchEvent(domEvent);};}}catch(e){}return function(){return false;};}();var fireGlobalEvent=function(){if(util.isNode){return function(){return process.emit.apply(process,arguments);};}else{if(!util.global){return function(){return false;};}return function(name){var methodName="on"+name.toLowerCase();var method=util.global[methodName];if(!method)return false;method.apply(util.global,[].slice.call(arguments,1));return true;};}}();function generatePromiseLifecycleEventObject(name,promise){return{promise:promise};}var eventToObjectGenerator={promiseCreated:generatePromiseLifecycleEventObject,promiseFulfilled:generatePromiseLifecycleEventObject,promiseRejected:generatePromiseLifecycleEventObject,promiseResolved:generatePromiseLifecycleEventObject,promiseCancelled:generatePromiseLifecycleEventObject,promiseChained:function promiseChained(name,promise,child){return{promise:promise,child:child};},warning:function warning(name,_warning){return{warning:_warning};},unhandledRejection:function unhandledRejection(name,reason,promise){return{reason:reason,promise:promise};},rejectionHandled:generatePromiseLifecycleEventObject};var activeFireEvent=function activeFireEvent(name){var globalEventFired=false;try{globalEventFired=fireGlobalEvent.apply(null,arguments);}catch(e){async.throwLater(e);globalEventFired=true;}var domEventFired=false;try{domEventFired=fireDomEvent(name,eventToObjectGenerator[name].apply(null,arguments));}catch(e){async.throwLater(e);domEventFired=true;}return domEventFired||globalEventFired;};Promise.config=function(opts){opts=Object(opts);if("longStackTraces"in opts){if(opts.longStackTraces){Promise.longStackTraces();}else if(!opts.longStackTraces&&Promise.hasLongStackTraces()){disableLongStackTraces();}}if("warnings"in opts){var warningsOption=opts.warnings;config.warnings=!!warningsOption;wForgottenReturn=config.warnings;if(util.isObject(warningsOption)){if("wForgottenReturn"in warningsOption){wForgottenReturn=!!warningsOption.wForgottenReturn;}}}if("cancellation"in opts&&opts.cancellation&&!config.cancellation){if(async.haveItemsQueued()){throw new Error("cannot enable cancellation after promises are in use");}Promise.prototype._clearCancellationData=cancellationClearCancellationData;Promise.prototype._propagateFrom=cancellationPropagateFrom;Promise.prototype._onCancel=cancellationOnCancel;Promise.prototype._setOnCancel=cancellationSetOnCancel;Promise.prototype._attachCancellationCallback=cancellationAttachCancellationCallback;Promise.prototype._execute=cancellationExecute;_propagateFromFunction=cancellationPropagateFrom;config.cancellation=true;}if("monitoring"in opts){if(opts.monitoring&&!config.monitoring){config.monitoring=true;Promise.prototype._fireEvent=activeFireEvent;}else if(!opts.monitoring&&config.monitoring){config.monitoring=false;Promise.prototype._fireEvent=defaultFireEvent;}}};function defaultFireEvent(){return false;}Promise.prototype._fireEvent=defaultFireEvent;Promise.prototype._execute=function(executor,resolve,reject){try{executor(resolve,reject);}catch(e){return e;}};Promise.prototype._onCancel=function(){};Promise.prototype._setOnCancel=function(handler){;};Promise.prototype._attachCancellationCallback=function(onCancel){;};Promise.prototype._captureStackTrace=function(){};Promise.prototype._attachExtraTrace=function(){};Promise.prototype._clearCancellationData=function(){};Promise.prototype._propagateFrom=function(parent,flags){;;};function cancellationExecute(executor,resolve,reject){var promise=this;try{executor(resolve,reject,function(onCancel){if(typeof onCancel!=="function"){throw new TypeError("onCancel must be a function, got: "+util.toString(onCancel));}promise._attachCancellationCallback(onCancel);});}catch(e){return e;}}function cancellationAttachCancellationCallback(onCancel){if(!this._isCancellable())return this;var previousOnCancel=this._onCancel();if(previousOnCancel!==undefined){if(util.isArray(previousOnCancel)){previousOnCancel.push(onCancel);}else{this._setOnCancel([previousOnCancel,onCancel]);}}else{this._setOnCancel(onCancel);}}function cancellationOnCancel(){return this._onCancelField;}function cancellationSetOnCancel(onCancel){this._onCancelField=onCancel;}function cancellationClearCancellationData(){this._cancellationParent=undefined;this._onCancelField=undefined;}function cancellationPropagateFrom(parent,flags){if((flags&1)!==0){this._cancellationParent=parent;var branchesRemainingToCancel=parent._branchesRemainingToCancel;if(branchesRemainingToCancel===undefined){branchesRemainingToCancel=0;}parent._branchesRemainingToCancel=branchesRemainingToCancel+1;}if((flags&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}}function bindingPropagateFrom(parent,flags){if((flags&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}}var _propagateFromFunction=bindingPropagateFrom;function _boundValueFunction(){var ret=this._boundTo;if(ret!==undefined){if(ret instanceof Promise){if(ret.isFulfilled()){return ret.value();}else{return undefined;}}}return ret;}function longStackTracesCaptureStackTrace(){this._trace=new CapturedTrace(this._peekContext());}function longStackTracesAttachExtraTrace(error,ignoreSelf){if(canAttachTrace(error)){var trace=this._trace;if(trace!==undefined){if(ignoreSelf)trace=trace._parent;}if(trace!==undefined){trace.attachExtraTrace(error);}else if(!error.__stackCleaned__){var parsed=parseStackAndMessage(error);util.notEnumerableProp(error,"stack",parsed.message+"\n"+parsed.stack.join("\n"));util.notEnumerableProp(error,"__stackCleaned__",true);}}}function checkForgottenReturns(returnValue,promiseCreated,name,promise,parent){if(returnValue===undefined&&promiseCreated!==null&&wForgottenReturn){if(parent!==undefined&&parent._returnedNonUndefined())return;if((promise._bitField&65535)===0)return;if(name)name=name+" ";var handlerLine="";var creatorLine="";if(promiseCreated._trace){var traceLines=promiseCreated._trace.stack.split("\n");var stack=cleanStack(traceLines);for(var i=stack.length-1;i>=0;--i){var line=stack[i];if(!nodeFramePattern.test(line)){var lineMatches=line.match(parseLinePattern);if(lineMatches){handlerLine="at "+lineMatches[1]+":"+lineMatches[2]+":"+lineMatches[3]+" ";}break;}}if(stack.length>0){var firstUserLine=stack[0];for(var i=0;i<traceLines.length;++i){if(traceLines[i]===firstUserLine){if(i>0){creatorLine="\n"+traceLines[i-1];}break;}}}}var msg="a promise was created in a "+name+"handler "+handlerLine+"but was not returned from it, "+"see http://goo.gl/rRqMUw"+creatorLine;promise._warn(msg,true,promiseCreated);}}function deprecated(name,replacement){var message=name+" is deprecated and will be removed in a future version.";if(replacement)message+=" Use "+replacement+" instead.";return warn(message);}function warn(message,shouldUseOwnTrace,promise){if(!config.warnings)return;var warning=new Warning(message);var ctx;if(shouldUseOwnTrace){promise._attachExtraTrace(warning);}else if(config.longStackTraces&&(ctx=Promise._peekContext())){ctx.attachExtraTrace(warning);}else{var parsed=parseStackAndMessage(warning);warning.stack=parsed.message+"\n"+parsed.stack.join("\n");}if(!activeFireEvent("warning",warning)){formatAndLogError(warning,"",true);}}function reconstructStack(message,stacks){for(var i=0;i<stacks.length-1;++i){stacks[i].push("From previous event:");stacks[i]=stacks[i].join("\n");}if(i<stacks.length){stacks[i]=stacks[i].join("\n");}return message+"\n"+stacks.join("\n");}function removeDuplicateOrEmptyJumps(stacks){for(var i=0;i<stacks.length;++i){if(stacks[i].length===0||i+1<stacks.length&&stacks[i][0]===stacks[i+1][0]){stacks.splice(i,1);i--;}}}function removeCommonRoots(stacks){var current=stacks[0];for(var i=1;i<stacks.length;++i){var prev=stacks[i];var currentLastIndex=current.length-1;var currentLastLine=current[currentLastIndex];var commonRootMeetPoint=-1;for(var j=prev.length-1;j>=0;--j){if(prev[j]===currentLastLine){commonRootMeetPoint=j;break;}}for(var j=commonRootMeetPoint;j>=0;--j){var line=prev[j];if(current[currentLastIndex]===line){current.pop();currentLastIndex--;}else{break;}}current=prev;}}function cleanStack(stack){var ret=[];for(var i=0;i<stack.length;++i){var line=stack[i];var isTraceLine="    (No stack trace)"===line||stackFramePattern.test(line);var isInternalFrame=isTraceLine&&shouldIgnore(line);if(isTraceLine&&!isInternalFrame){if(indentStackFrames&&line.charAt(0)!==" "){line="    "+line;}ret.push(line);}}return ret;}function stackFramesAsArray(error){var stack=error.stack.replace(/\s+$/g,"").split("\n");for(var i=0;i<stack.length;++i){var line=stack[i];if("    (No stack trace)"===line||stackFramePattern.test(line)){break;}}if(i>0){stack=stack.slice(i);}return stack;}function parseStackAndMessage(error){var stack=error.stack;var message=error.toString();stack=typeof stack==="string"&&stack.length>0?stackFramesAsArray(error):["    (No stack trace)"];return{message:message,stack:cleanStack(stack)};}function formatAndLogError(error,title,isSoft){if(typeof console!=="undefined"){var message;if(util.isObject(error)){var stack=error.stack;message=title+formatStack(stack,error);}else{message=title+String(error);}if(typeof printWarning==="function"){printWarning(message,isSoft);}else if(typeof console.log==="function"||_typeof2(console.log)==="object"){console.log(message);}}}function fireRejectionEvent(name,localHandler,reason,promise){var localEventFired=false;try{if(typeof localHandler==="function"){localEventFired=true;if(name==="rejectionHandled"){localHandler(promise);}else{localHandler(reason,promise);}}}catch(e){async.throwLater(e);}if(name==="unhandledRejection"){if(!activeFireEvent(name,reason,promise)&&!localEventFired){formatAndLogError(reason,"Unhandled rejection ");}}else{activeFireEvent(name,promise);}}function formatNonError(obj){var str;if(typeof obj==="function"){str="[function "+(obj.name||"anonymous")+"]";}else{str=obj&&typeof obj.toString==="function"?obj.toString():util.toString(obj);var ruselessToString=/\[object [a-zA-Z0-9$_]+\]/;if(ruselessToString.test(str)){try{var newStr=_JSON$stringify(obj);str=newStr;}catch(e){}}if(str.length===0){str="(empty array)";}}return"(<"+snip(str)+">, no stack trace)";}function snip(str){var maxChars=41;if(str.length<maxChars){return str;}return str.substr(0,maxChars-3)+"...";}function longStackTracesIsSupported(){return typeof captureStackTrace==="function";}var shouldIgnore=function shouldIgnore(){return false;};var parseLineInfoRegex=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function parseLineInfo(line){var matches=line.match(parseLineInfoRegex);if(matches){return{fileName:matches[1],line:parseInt(matches[2],10)};}}function setBounds(firstLineError,lastLineError){if(!longStackTracesIsSupported())return;var firstStackLines=firstLineError.stack.split("\n");var lastStackLines=lastLineError.stack.split("\n");var firstIndex=-1;var lastIndex=-1;var firstFileName;var lastFileName;for(var i=0;i<firstStackLines.length;++i){var result=parseLineInfo(firstStackLines[i]);if(result){firstFileName=result.fileName;firstIndex=result.line;break;}}for(var i=0;i<lastStackLines.length;++i){var result=parseLineInfo(lastStackLines[i]);if(result){lastFileName=result.fileName;lastIndex=result.line;break;}}if(firstIndex<0||lastIndex<0||!firstFileName||!lastFileName||firstFileName!==lastFileName||firstIndex>=lastIndex){return;}shouldIgnore=function shouldIgnore(line){if(bluebirdFramePattern.test(line))return true;var info=parseLineInfo(line);if(info){if(info.fileName===firstFileName&&firstIndex<=info.line&&info.line<=lastIndex){return true;}}return false;};}function CapturedTrace(parent){this._parent=parent;this._promisesCreated=0;var length=this._length=1+(parent===undefined?0:parent._length);captureStackTrace(this,CapturedTrace);if(length>32)this.uncycle();}util.inherits(CapturedTrace,Error);Context.CapturedTrace=CapturedTrace;CapturedTrace.prototype.uncycle=function(){var length=this._length;if(length<2)return;var nodes=[];var stackToIndex={};for(var i=0,node=this;node!==undefined;++i){nodes.push(node);node=node._parent;}length=this._length=i;for(var i=length-1;i>=0;--i){var stack=nodes[i].stack;if(stackToIndex[stack]===undefined){stackToIndex[stack]=i;}}for(var i=0;i<length;++i){var currentStack=nodes[i].stack;var index=stackToIndex[currentStack];if(index!==undefined&&index!==i){if(index>0){nodes[index-1]._parent=undefined;nodes[index-1]._length=1;}nodes[i]._parent=undefined;nodes[i]._length=1;var cycleEdgeNode=i>0?nodes[i-1]:this;if(index<length-1){cycleEdgeNode._parent=nodes[index+1];cycleEdgeNode._parent.uncycle();cycleEdgeNode._length=cycleEdgeNode._parent._length+1;}else{cycleEdgeNode._parent=undefined;cycleEdgeNode._length=1;}var currentChildLength=cycleEdgeNode._length+1;for(var j=i-2;j>=0;--j){nodes[j]._length=currentChildLength;currentChildLength++;}return;}}};CapturedTrace.prototype.attachExtraTrace=function(error){if(error.__stackCleaned__)return;this.uncycle();var parsed=parseStackAndMessage(error);var message=parsed.message;var stacks=[parsed.stack];var trace=this;while(trace!==undefined){stacks.push(cleanStack(trace.stack.split("\n")));trace=trace._parent;}removeCommonRoots(stacks);removeDuplicateOrEmptyJumps(stacks);util.notEnumerableProp(error,"stack",reconstructStack(message,stacks));util.notEnumerableProp(error,"__stackCleaned__",true);};var captureStackTrace=function stackDetection(){var v8stackFramePattern=/^\s*at\s*/;var v8stackFormatter=function v8stackFormatter(stack,error){if(typeof stack==="string")return stack;if(error.name!==undefined&&error.message!==undefined){return error.toString();}return formatNonError(error);};if(typeof Error.stackTraceLimit==="number"&&typeof Error.captureStackTrace==="function"){Error.stackTraceLimit+=6;stackFramePattern=v8stackFramePattern;formatStack=v8stackFormatter;var captureStackTrace=Error.captureStackTrace;shouldIgnore=function shouldIgnore(line){return bluebirdFramePattern.test(line);};return function(receiver,ignoreUntil){Error.stackTraceLimit+=6;captureStackTrace(receiver,ignoreUntil);Error.stackTraceLimit-=6;};}var err=new Error();if(typeof err.stack==="string"&&err.stack.split("\n")[0].indexOf("stackDetection@")>=0){stackFramePattern=/@/;formatStack=v8stackFormatter;indentStackFrames=true;return function captureStackTrace(o){o.stack=new Error().stack;};}var hasStackAfterThrow;try{throw new Error();}catch(e){hasStackAfterThrow="stack"in e;}if(!("stack"in err)&&hasStackAfterThrow&&typeof Error.stackTraceLimit==="number"){stackFramePattern=v8stackFramePattern;formatStack=v8stackFormatter;return function captureStackTrace(o){Error.stackTraceLimit+=6;try{throw new Error();}catch(e){o.stack=e.stack;}Error.stackTraceLimit-=6;};}formatStack=function formatStack(stack,error){if(typeof stack==="string")return stack;if(((typeof error==='undefined'?'undefined':_typeof2(error))==="object"||typeof error==="function")&&error.name!==undefined&&error.message!==undefined){return error.toString();}return formatNonError(error);};return null;}([]);if(typeof console!=="undefined"&&typeof console.warn!=="undefined"){printWarning=function printWarning(message){console.warn(message);};if(util.isNode&&process.stderr.isTTY){printWarning=function printWarning(message,isSoft){var color=isSoft?'\x1B[33m':'\x1B[31m';console.warn(color+message+'\x1B[0m\n');};}else if(!util.isNode&&typeof new Error().stack==="string"){printWarning=function printWarning(message,isSoft){console.warn("%c"+message,isSoft?"color: darkorange":"color: red");};}}var config={warnings:warnings,longStackTraces:false,cancellation:false,monitoring:false};if(longStackTraces)Promise.longStackTraces();return{longStackTraces:function longStackTraces(){return config.longStackTraces;},warnings:function warnings(){return config.warnings;},cancellation:function cancellation(){return config.cancellation;},monitoring:function monitoring(){return config.monitoring;},propagateFromFunction:function propagateFromFunction(){return _propagateFromFunction;},boundValueFunction:function boundValueFunction(){return _boundValueFunction;},checkForgottenReturns:checkForgottenReturns,setBounds:setBounds,warn:warn,deprecated:deprecated,CapturedTrace:CapturedTrace,fireDomEvent:fireDomEvent,fireGlobalEvent:fireGlobalEvent};};},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){function returner(){return this.value;}function thrower(){throw this.reason;}Promise.prototype["return"]=Promise.prototype.thenReturn=function(value){if(value instanceof Promise)value.suppressUnhandledRejections();return this._then(returner,undefined,undefined,{value:value},undefined);};Promise.prototype["throw"]=Promise.prototype.thenThrow=function(reason){return this._then(thrower,undefined,undefined,{reason:reason},undefined);};Promise.prototype.catchThrow=function(reason){if(arguments.length<=1){return this._then(undefined,thrower,undefined,{reason:reason},undefined);}else{var _reason=arguments[1];var handler=function handler(){throw _reason;};return this.caught(reason,handler);}};Promise.prototype.catchReturn=function(value){if(arguments.length<=1){if(value instanceof Promise)value.suppressUnhandledRejections();return this._then(undefined,returner,undefined,{value:value},undefined);}else{var _value=arguments[1];if(_value instanceof Promise)_value.suppressUnhandledRejections();var handler=function handler(){return _value;};return this.caught(value,handler);}};};},{}],11:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var PromiseReduce=Promise.reduce;var PromiseAll=Promise.all;function promiseAllThis(){return PromiseAll(this);}function PromiseMapSeries(promises,fn){return PromiseReduce(promises,fn,INTERNAL,INTERNAL);}Promise.prototype.each=function(fn){return PromiseReduce(this,fn,INTERNAL,0)._then(promiseAllThis,undefined,undefined,this,undefined);};Promise.prototype.mapSeries=function(fn){return PromiseReduce(this,fn,INTERNAL,INTERNAL);};Promise.each=function(promises,fn){return PromiseReduce(promises,fn,INTERNAL,0)._then(promiseAllThis,undefined,undefined,promises,undefined);};Promise.mapSeries=PromiseMapSeries;};},{}],12:[function(_dereq_,module,exports){"use strict";var es5=_dereq_("./es5");var Objectfreeze=es5.freeze;var util=_dereq_("./util");var inherits=util.inherits;var notEnumerableProp=util.notEnumerableProp;function subError(nameProperty,defaultMessage){function SubError(message){if(!(this instanceof SubError))return new SubError(message);notEnumerableProp(this,"message",typeof message==="string"?message:defaultMessage);notEnumerableProp(this,"name",nameProperty);if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}else{Error.call(this);}}inherits(SubError,Error);return SubError;}var _TypeError,_RangeError;var Warning=subError("Warning","warning");var CancellationError=subError("CancellationError","cancellation error");var TimeoutError=subError("TimeoutError","timeout error");var AggregateError=subError("AggregateError","aggregate error");try{_TypeError=TypeError;_RangeError=RangeError;}catch(e){_TypeError=subError("TypeError","type error");_RangeError=subError("RangeError","range error");}var methods=("join pop push shift unshift slice filter forEach some "+"every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");for(var i=0;i<methods.length;++i){if(typeof Array.prototype[methods[i]]==="function"){AggregateError.prototype[methods[i]]=Array.prototype[methods[i]];}}es5.defineProperty(AggregateError.prototype,"length",{value:0,configurable:false,writable:true,enumerable:true});AggregateError.prototype["isOperational"]=true;var level=0;AggregateError.prototype.toString=function(){var indent=Array(level*4+1).join(" ");var ret="\n"+indent+"AggregateError of:"+"\n";level++;indent=Array(level*4+1).join(" ");for(var i=0;i<this.length;++i){var str=this[i]===this?"[Circular AggregateError]":this[i]+"";var lines=str.split("\n");for(var j=0;j<lines.length;++j){lines[j]=indent+lines[j];}str=lines.join("\n");ret+=str+"\n";}level--;return ret;};function OperationalError(message){if(!(this instanceof OperationalError))return new OperationalError(message);notEnumerableProp(this,"name","OperationalError");notEnumerableProp(this,"message",message);this.cause=message;this["isOperational"]=true;if(message instanceof Error){notEnumerableProp(this,"message",message.message);notEnumerableProp(this,"stack",message.stack);}else if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}}inherits(OperationalError,Error);var errorTypes=Error["__BluebirdErrorTypes__"];if(!errorTypes){errorTypes=Objectfreeze({CancellationError:CancellationError,TimeoutError:TimeoutError,OperationalError:OperationalError,RejectionError:OperationalError,AggregateError:AggregateError});es5.defineProperty(Error,"__BluebirdErrorTypes__",{value:errorTypes,writable:false,enumerable:false,configurable:false});}module.exports={Error:Error,TypeError:_TypeError,RangeError:_RangeError,CancellationError:errorTypes.CancellationError,OperationalError:errorTypes.OperationalError,TimeoutError:errorTypes.TimeoutError,AggregateError:errorTypes.AggregateError,Warning:Warning};},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){var isES5=function(){"use strict";return this===undefined;}();if(isES5){module.exports={freeze:_Object$freeze,defineProperty:_Object$defineProperty,getDescriptor:_Object$getOwnPropertyDescriptor,keys:_Object$keys,names:_Object$getOwnPropertyNames,getPrototypeOf:_Object$getPrototypeOf,isArray:Array.isArray,isES5:isES5,propertyIsWritable:function propertyIsWritable(obj,prop){var descriptor=_Object$getOwnPropertyDescriptor(obj,prop);return!!(!descriptor||descriptor.writable||descriptor.set);}};}else{var has={}.hasOwnProperty;var str={}.toString;var proto={}.constructor.prototype;var ObjectKeys=function ObjectKeys(o){var ret=[];for(var key in o){if(has.call(o,key)){ret.push(key);}}return ret;};var ObjectGetDescriptor=function ObjectGetDescriptor(o,key){return{value:o[key]};};var ObjectDefineProperty=function ObjectDefineProperty(o,key,desc){o[key]=desc.value;return o;};var ObjectFreeze=function ObjectFreeze(obj){return obj;};var ObjectGetPrototypeOf=function ObjectGetPrototypeOf(obj){try{return Object(obj).constructor.prototype;}catch(e){return proto;}};var ArrayIsArray=function ArrayIsArray(obj){try{return str.call(obj)==="[object Array]";}catch(e){return false;}};module.exports={isArray:ArrayIsArray,keys:ObjectKeys,names:ObjectKeys,defineProperty:ObjectDefineProperty,getDescriptor:ObjectGetDescriptor,freeze:ObjectFreeze,getPrototypeOf:ObjectGetPrototypeOf,isES5:isES5,propertyIsWritable:function propertyIsWritable(){return true;}};}},{}],14:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var PromiseMap=Promise.map;Promise.prototype.filter=function(fn,options){return PromiseMap(this,fn,options,INTERNAL);};Promise.filter=function(promises,fn,options){return PromiseMap(promises,fn,options,INTERNAL);};};},{}],15:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,tryConvertToPromise){var util=_dereq_("./util");var CancellationError=Promise.CancellationError;var errorObj=util.errorObj;function PassThroughHandlerContext(promise,type,handler){this.promise=promise;this.type=type;this.handler=handler;this.called=false;this.cancelPromise=null;}PassThroughHandlerContext.prototype.isFinallyHandler=function(){return this.type===0;};function FinallyHandlerCancelReaction(finallyHandler){this.finallyHandler=finallyHandler;}FinallyHandlerCancelReaction.prototype._resultCancelled=function(){checkCancel(this.finallyHandler);};function checkCancel(ctx,reason){if(ctx.cancelPromise!=null){if(arguments.length>1){ctx.cancelPromise._reject(reason);}else{ctx.cancelPromise._cancel();}ctx.cancelPromise=null;return true;}return false;}function succeed(){return finallyHandler.call(this,this.promise._target()._settledValue());}function fail(reason){if(checkCancel(this,reason))return;errorObj.e=reason;return errorObj;}function finallyHandler(reasonOrValue){var promise=this.promise;var handler=this.handler;if(!this.called){this.called=true;var ret=this.isFinallyHandler()?handler.call(promise._boundValue()):handler.call(promise._boundValue(),reasonOrValue);if(ret!==undefined){promise._setReturnedNonUndefined();var maybePromise=tryConvertToPromise(ret,promise);if(maybePromise instanceof Promise){if(this.cancelPromise!=null){if(maybePromise._isCancelled()){var reason=new CancellationError("late cancellation observer");promise._attachExtraTrace(reason);errorObj.e=reason;return errorObj;}else if(maybePromise.isPending()){maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));}}return maybePromise._then(succeed,fail,undefined,this,undefined);}}}if(promise.isRejected()){checkCancel(this);errorObj.e=reasonOrValue;return errorObj;}else{checkCancel(this);return reasonOrValue;}}Promise.prototype._passThrough=function(handler,type,success,fail){if(typeof handler!=="function")return this.then();return this._then(success,fail,undefined,new PassThroughHandlerContext(this,type,handler),undefined);};Promise.prototype.lastly=Promise.prototype["finally"]=function(handler){return this._passThrough(handler,0,finallyHandler,finallyHandler);};Promise.prototype.tap=function(handler){return this._passThrough(handler,1,finallyHandler);};return PassThroughHandlerContext;};},{"./util":36}],16:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,apiRejection,INTERNAL,tryConvertToPromise,Proxyable,debug){var errors=_dereq_("./errors");var TypeError=errors.TypeError;var util=_dereq_("./util");var errorObj=util.errorObj;var tryCatch=util.tryCatch;var yieldHandlers=[];function promiseFromYieldHandler(value,yieldHandlers,traceParent){for(var i=0;i<yieldHandlers.length;++i){traceParent._pushContext();var result=tryCatch(yieldHandlers[i])(value);traceParent._popContext();if(result===errorObj){traceParent._pushContext();var ret=Promise.reject(errorObj.e);traceParent._popContext();return ret;}var maybePromise=tryConvertToPromise(result,traceParent);if(maybePromise instanceof Promise)return maybePromise;}return null;}function PromiseSpawn(generatorFunction,receiver,yieldHandler,stack){if(debug.cancellation()){var internal=new Promise(INTERNAL);var _finallyPromise=this._finallyPromise=new Promise(INTERNAL);this._promise=internal.lastly(function(){return _finallyPromise;});internal._captureStackTrace();internal._setOnCancel(this);}else{var promise=this._promise=new Promise(INTERNAL);promise._captureStackTrace();}this._stack=stack;this._generatorFunction=generatorFunction;this._receiver=receiver;this._generator=undefined;this._yieldHandlers=typeof yieldHandler==="function"?[yieldHandler].concat(yieldHandlers):yieldHandlers;this._yieldedPromise=null;this._cancellationPhase=false;}util.inherits(PromiseSpawn,Proxyable);PromiseSpawn.prototype._isResolved=function(){return this._promise===null;};PromiseSpawn.prototype._cleanup=function(){this._promise=this._generator=null;if(debug.cancellation()&&this._finallyPromise!==null){this._finallyPromise._fulfill();this._finallyPromise=null;}};PromiseSpawn.prototype._promiseCancelled=function(){if(this._isResolved())return;var implementsReturn=typeof this._generator["return"]!=="undefined";var result;if(!implementsReturn){var reason=new Promise.CancellationError("generator .return() sentinel");Promise.coroutine.returnSentinel=reason;this._promise._attachExtraTrace(reason);this._promise._pushContext();result=tryCatch(this._generator["throw"]).call(this._generator,reason);this._promise._popContext();}else{this._promise._pushContext();result=tryCatch(this._generator["return"]).call(this._generator,undefined);this._promise._popContext();}this._cancellationPhase=true;this._yieldedPromise=null;this._continue(result);};PromiseSpawn.prototype._promiseFulfilled=function(value){this._yieldedPromise=null;this._promise._pushContext();var result=tryCatch(this._generator.next).call(this._generator,value);this._promise._popContext();this._continue(result);};PromiseSpawn.prototype._promiseRejected=function(reason){this._yieldedPromise=null;this._promise._attachExtraTrace(reason);this._promise._pushContext();var result=tryCatch(this._generator["throw"]).call(this._generator,reason);this._promise._popContext();this._continue(result);};PromiseSpawn.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof Promise){var promise=this._yieldedPromise;this._yieldedPromise=null;promise.cancel();}};PromiseSpawn.prototype.promise=function(){return this._promise;};PromiseSpawn.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver);this._receiver=this._generatorFunction=undefined;this._promiseFulfilled(undefined);};PromiseSpawn.prototype._continue=function(result){var promise=this._promise;if(result===errorObj){this._cleanup();if(this._cancellationPhase){return promise.cancel();}else{return promise._rejectCallback(result.e,false);}}var value=result.value;if(result.done===true){this._cleanup();if(this._cancellationPhase){return promise.cancel();}else{return promise._resolveCallback(value);}}else{var maybePromise=tryConvertToPromise(value,this._promise);if(!(maybePromise instanceof Promise)){maybePromise=promiseFromYieldHandler(maybePromise,this._yieldHandlers,this._promise);if(maybePromise===null){this._promiseRejected(new TypeError('A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n'.replace("%s",value)+'From coroutine:\n'+this._stack.split("\n").slice(1,-7).join("\n")));return;}}maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){this._yieldedPromise=maybePromise;maybePromise._proxy(this,null);}else if((bitField&33554432)!==0){Promise._async.invoke(this._promiseFulfilled,this,maybePromise._value());}else if((bitField&16777216)!==0){Promise._async.invoke(this._promiseRejected,this,maybePromise._reason());}else{this._promiseCancelled();}}};Promise.coroutine=function(generatorFunction,options){if(typeof generatorFunction!=="function"){throw new TypeError('generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n');}var yieldHandler=Object(options).yieldHandler;var PromiseSpawn$=PromiseSpawn;var stack=new Error().stack;return function(){var generator=generatorFunction.apply(this,arguments);var spawn=new PromiseSpawn$(undefined,undefined,yieldHandler,stack);var ret=spawn.promise();spawn._generator=generator;spawn._promiseFulfilled(undefined);return ret;};};Promise.coroutine.addYieldHandler=function(fn){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}yieldHandlers.push(fn);};Promise.spawn=function(generatorFunction){debug.deprecated("Promise.spawn()","Promise.coroutine()");if(typeof generatorFunction!=="function"){return apiRejection('generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n');}var spawn=new PromiseSpawn(generatorFunction,this);var ret=spawn.promise();spawn._run(Promise.spawn);return ret;};};},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,tryConvertToPromise,INTERNAL,async,getDomain){var util=_dereq_("./util");var canEvaluate=util.canEvaluate;var tryCatch=util.tryCatch;var errorObj=util.errorObj;var reject;if(false){if(canEvaluate){var thenCallback=function thenCallback(i){return new Function("value","holder","                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g,i));};var promiseSetter=function promiseSetter(i){return new Function("promise","holder","                           \n\
	            'use strict';                                                    \n\
	            holder.pIndex = promise;                                         \n\
	            ".replace(/Index/g,i));};var generateHolderClass=function generateHolderClass(total){var props=new Array(total);for(var i=0;i<props.length;++i){props[i]="this.p"+(i+1);}var assignment=props.join(" = ")+" = null;";var cancellationCode="var promise;\n"+props.map(function(prop){return"                                                         \n\
	                promise = "+prop+";                                      \n\
	                if (promise instanceof Promise) {                            \n\
	                    promise.cancel();                                        \n\
	                }                                                            \n\
	            ";}).join("\n");var passedArguments=props.join(", ");var name="Holder$"+total;var code="return function(tryCatch, errorObj, Promise, async) {    \n\
	            'use strict';                                                    \n\
	            function [TheName](fn) {                                         \n\
	                [TheProperties]                                              \n\
	                this.fn = fn;                                                \n\
	                this.asyncNeeded = true;                                     \n\
	                this.now = 0;                                                \n\
	            }                                                                \n\
	                                                                             \n\
	            [TheName].prototype._callFunction = function(promise) {          \n\
	                promise._pushContext();                                      \n\
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
	                promise._popContext();                                       \n\
	                if (ret === errorObj) {                                      \n\
	                    promise._rejectCallback(ret.e, false);                   \n\
	                } else {                                                     \n\
	                    promise._resolveCallback(ret);                           \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype.checkFulfillment = function(promise) {       \n\
	                var now = ++this.now;                                        \n\
	                if (now === [TheTotal]) {                                    \n\
	                    if (this.asyncNeeded) {                                  \n\
	                        async.invoke(this._callFunction, this, promise);     \n\
	                    } else {                                                 \n\
	                        this._callFunction(promise);                         \n\
	                    }                                                        \n\
	                                                                             \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype._resultCancelled = function() {              \n\
	                [CancellationCode]                                           \n\
	            };                                                               \n\
	                                                                             \n\
	            return [TheName];                                                \n\
	        }(tryCatch, errorObj, Promise, async);                               \n\
	        ";code=code.replace(/\[TheName\]/g,name).replace(/\[TheTotal\]/g,total).replace(/\[ThePassedArguments\]/g,passedArguments).replace(/\[TheProperties\]/g,assignment).replace(/\[CancellationCode\]/g,cancellationCode);return new Function("tryCatch","errorObj","Promise","async",code)(tryCatch,errorObj,Promise,async);};var holderClasses=[];var thenCallbacks=[];var promiseSetters=[];for(var i=0;i<8;++i){holderClasses.push(generateHolderClass(i+1));thenCallbacks.push(thenCallback(i+1));promiseSetters.push(promiseSetter(i+1));}reject=function reject(reason){this._reject(reason);};}}Promise.join=function(){var last=arguments.length-1;var fn;if(last>0&&typeof arguments[last]==="function"){fn=arguments[last];if(false){if(last<=8&&canEvaluate){var ret=new Promise(INTERNAL);ret._captureStackTrace();var HolderClass=holderClasses[last-1];var holder=new HolderClass(fn);var callbacks=thenCallbacks;for(var i=0;i<last;++i){var maybePromise=tryConvertToPromise(arguments[i],ret);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){maybePromise._then(callbacks[i],reject,undefined,ret,holder);promiseSetters[i](maybePromise,holder);holder.asyncNeeded=false;}else if((bitField&33554432)!==0){callbacks[i].call(ret,maybePromise._value(),holder);}else if((bitField&16777216)!==0){ret._reject(maybePromise._reason());}else{ret._cancel();}}else{callbacks[i].call(ret,maybePromise,holder);}}if(!ret._isFateSealed()){if(holder.asyncNeeded){var domain=getDomain();if(domain!==null){holder.fn=util.domainBind(domain,holder.fn);}}ret._setAsyncGuaranteed();ret._setOnCancel(holder);}return ret;}}}var args=[].slice.call(arguments);;if(fn)args.pop();var ret=new PromiseArray(args).promise();return fn!==undefined?ret.spread(fn):ret;};};},{"./util":36}],18:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug){var getDomain=Promise._getDomain;var util=_dereq_("./util");var tryCatch=util.tryCatch;var errorObj=util.errorObj;var async=Promise._async;function MappingPromiseArray(promises,fn,limit,_filter){this.constructor$(promises);this._promise._captureStackTrace();var domain=getDomain();this._callback=domain===null?fn:util.domainBind(domain,fn);this._preservedValues=_filter===INTERNAL?new Array(this.length()):null;this._limit=limit;this._inFlight=0;this._queue=[];async.invoke(this._asyncInit,this,undefined);}util.inherits(MappingPromiseArray,PromiseArray);MappingPromiseArray.prototype._asyncInit=function(){this._init$(undefined,-2);};MappingPromiseArray.prototype._init=function(){};MappingPromiseArray.prototype._promiseFulfilled=function(value,index){var values=this._values;var length=this.length();var preservedValues=this._preservedValues;var limit=this._limit;if(index<0){index=index*-1-1;values[index]=value;if(limit>=1){this._inFlight--;this._drainQueue();if(this._isResolved())return true;}}else{if(limit>=1&&this._inFlight>=limit){values[index]=value;this._queue.push(index);return false;}if(preservedValues!==null)preservedValues[index]=value;var promise=this._promise;var callback=this._callback;var receiver=promise._boundValue();promise._pushContext();var ret=tryCatch(callback).call(receiver,value,index,length);var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,preservedValues!==null?"Promise.filter":"Promise.map",promise);if(ret===errorObj){this._reject(ret.e);return true;}var maybePromise=tryConvertToPromise(ret,this._promise);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){if(limit>=1)this._inFlight++;values[index]=maybePromise;maybePromise._proxy(this,(index+1)*-1);return false;}else if((bitField&33554432)!==0){ret=maybePromise._value();}else if((bitField&16777216)!==0){this._reject(maybePromise._reason());return true;}else{this._cancel();return true;}}values[index]=ret;}var totalResolved=++this._totalResolved;if(totalResolved>=length){if(preservedValues!==null){this._filter(values,preservedValues);}else{this._resolve(values);}return true;}return false;};MappingPromiseArray.prototype._drainQueue=function(){var queue=this._queue;var limit=this._limit;var values=this._values;while(queue.length>0&&this._inFlight<limit){if(this._isResolved())return;var index=queue.pop();this._promiseFulfilled(values[index],index);}};MappingPromiseArray.prototype._filter=function(booleans,values){var len=values.length;var ret=new Array(len);var j=0;for(var i=0;i<len;++i){if(booleans[i])ret[j++]=values[i];}ret.length=j;this._resolve(ret);};MappingPromiseArray.prototype.preservedValues=function(){return this._preservedValues;};function map(promises,fn,options,_filter){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var limit=0;if(options!==undefined){if((typeof options==='undefined'?'undefined':_typeof2(options))==="object"&&options!==null){if(typeof options.concurrency!=="number"){return Promise.reject(new TypeError("'concurrency' must be a number but it is "+util.classString(options.concurrency)));}limit=options.concurrency;}else{return Promise.reject(new TypeError("options argument must be an object but it is "+util.classString(options)));}}limit=typeof limit==="number"&&isFinite(limit)&&limit>=1?limit:0;return new MappingPromiseArray(promises,fn,limit,_filter).promise();}Promise.prototype.map=function(fn,options){return map(this,fn,options,null);};Promise.map=function(promises,fn,options,_filter){return map(promises,fn,options,_filter);};};},{"./util":36}],19:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection,debug){var util=_dereq_("./util");var tryCatch=util.tryCatch;Promise.method=function(fn){if(typeof fn!=="function"){throw new Promise.TypeError("expecting a function but got "+util.classString(fn));}return function(){var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._pushContext();var value=tryCatch(fn).apply(this,arguments);var promiseCreated=ret._popContext();debug.checkForgottenReturns(value,promiseCreated,"Promise.method",ret);ret._resolveFromSyncValue(value);return ret;};};Promise.attempt=Promise["try"]=function(fn){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._pushContext();var value;if(arguments.length>1){debug.deprecated("calling Promise.try with more than 1 argument");var arg=arguments[1];var ctx=arguments[2];value=util.isArray(arg)?tryCatch(fn).apply(ctx,arg):tryCatch(fn).call(ctx,arg);}else{value=tryCatch(fn)();}var promiseCreated=ret._popContext();debug.checkForgottenReturns(value,promiseCreated,"Promise.try",ret);ret._resolveFromSyncValue(value);return ret;};Promise.prototype._resolveFromSyncValue=function(value){if(value===util.errorObj){this._rejectCallback(value.e,false);}else{this._resolveCallback(value,true);}};};},{"./util":36}],20:[function(_dereq_,module,exports){"use strict";var util=_dereq_("./util");var maybeWrapAsError=util.maybeWrapAsError;var errors=_dereq_("./errors");var OperationalError=errors.OperationalError;var es5=_dereq_("./es5");function isUntypedError(obj){return obj instanceof Error&&es5.getPrototypeOf(obj)===Error.prototype;}var rErrorKey=/^(?:name|message|stack|cause)$/;function wrapAsOperationalError(obj){var ret;if(isUntypedError(obj)){ret=new OperationalError(obj);ret.name=obj.name;ret.message=obj.message;ret.stack=obj.stack;var keys=es5.keys(obj);for(var i=0;i<keys.length;++i){var key=keys[i];if(!rErrorKey.test(key)){ret[key]=obj[key];}}return ret;}util.markAsOriginatingFromRejection(obj);return obj;}function nodebackForPromise(promise,multiArgs){return function(err,value){if(promise===null)return;if(err){var wrapped=wrapAsOperationalError(maybeWrapAsError(err));promise._attachExtraTrace(wrapped);promise._reject(wrapped);}else if(!multiArgs){promise._fulfill(value);}else{var args=[].slice.call(arguments,1);;promise._fulfill(args);}promise=null;};}module.exports=nodebackForPromise;},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var util=_dereq_("./util");var async=Promise._async;var tryCatch=util.tryCatch;var errorObj=util.errorObj;function spreadAdapter(val,nodeback){var promise=this;if(!util.isArray(val))return successAdapter.call(promise,val,nodeback);var ret=tryCatch(nodeback).apply(promise._boundValue(),[null].concat(val));if(ret===errorObj){async.throwLater(ret.e);}}function successAdapter(val,nodeback){var promise=this;var receiver=promise._boundValue();var ret=val===undefined?tryCatch(nodeback).call(receiver,null):tryCatch(nodeback).call(receiver,null,val);if(ret===errorObj){async.throwLater(ret.e);}}function errorAdapter(reason,nodeback){var promise=this;if(!reason){var newReason=new Error(reason+"");newReason.cause=reason;reason=newReason;}var ret=tryCatch(nodeback).call(promise._boundValue(),reason);if(ret===errorObj){async.throwLater(ret.e);}}Promise.prototype.asCallback=Promise.prototype.nodeify=function(nodeback,options){if(typeof nodeback=="function"){var adapter=successAdapter;if(options!==undefined&&Object(options).spread){adapter=spreadAdapter;}this._then(adapter,errorAdapter,undefined,this,nodeback);}return this;};};},{"./util":36}],22:[function(_dereq_,module,exports){"use strict";module.exports=function(){var makeSelfResolutionError=function makeSelfResolutionError(){return new TypeError('circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n');};var reflectHandler=function reflectHandler(){return new Promise.PromiseInspection(this._target());};var apiRejection=function apiRejection(msg){return Promise.reject(new TypeError(msg));};function Proxyable(){}var UNDEFINED_BINDING={};var util=_dereq_("./util");var getDomain;if(util.isNode){getDomain=function getDomain(){var ret=process.domain;if(ret===undefined)ret=null;return ret;};}else{getDomain=function getDomain(){return null;};}util.notEnumerableProp(Promise,"_getDomain",getDomain);var es5=_dereq_("./es5");var Async=_dereq_("./async");var async=new Async();es5.defineProperty(Promise,"_async",{value:async});var errors=_dereq_("./errors");var TypeError=Promise.TypeError=errors.TypeError;Promise.RangeError=errors.RangeError;var CancellationError=Promise.CancellationError=errors.CancellationError;Promise.TimeoutError=errors.TimeoutError;Promise.OperationalError=errors.OperationalError;Promise.RejectionError=errors.OperationalError;Promise.AggregateError=errors.AggregateError;var INTERNAL=function INTERNAL(){};var APPLY={};var NEXT_FILTER={};var tryConvertToPromise=_dereq_("./thenables")(Promise,INTERNAL);var PromiseArray=_dereq_("./promise_array")(Promise,INTERNAL,tryConvertToPromise,apiRejection,Proxyable);var Context=_dereq_("./context")(Promise);/*jshint unused:false*/var createContext=Context.create;var debug=_dereq_("./debuggability")(Promise,Context);var CapturedTrace=debug.CapturedTrace;var PassThroughHandlerContext=_dereq_("./finally")(Promise,tryConvertToPromise);var catchFilter=_dereq_("./catch_filter")(NEXT_FILTER);var nodebackForPromise=_dereq_("./nodeback");var errorObj=util.errorObj;var tryCatch=util.tryCatch;function check(self,executor){if(typeof executor!=="function"){throw new TypeError("expecting a function but got "+util.classString(executor));}if(self.constructor!==Promise){throw new TypeError('the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n');}}function Promise(executor){this._bitField=0;this._fulfillmentHandler0=undefined;this._rejectionHandler0=undefined;this._promise0=undefined;this._receiver0=undefined;if(executor!==INTERNAL){check(this,executor);this._resolveFromExecutor(executor);}this._promiseCreated();this._fireEvent("promiseCreated",this);}Promise.prototype.toString=function(){return"[object Promise]";};Promise.prototype.caught=Promise.prototype["catch"]=function(fn){var len=arguments.length;if(len>1){var catchInstances=new Array(len-1),j=0,i;for(i=0;i<len-1;++i){var item=arguments[i];if(util.isObject(item)){catchInstances[j++]=item;}else{return apiRejection("expecting an object but got "+"A catch statement predicate "+util.classString(item));}}catchInstances.length=j;fn=arguments[i];return this.then(undefined,catchFilter(catchInstances,fn,this));}return this.then(undefined,fn);};Promise.prototype.reflect=function(){return this._then(reflectHandler,reflectHandler,undefined,this,undefined);};Promise.prototype.then=function(didFulfill,didReject){if(debug.warnings()&&arguments.length>0&&typeof didFulfill!=="function"&&typeof didReject!=="function"){var msg=".then() only accepts functions but was passed: "+util.classString(didFulfill);if(arguments.length>1){msg+=", "+util.classString(didReject);}this._warn(msg);}return this._then(didFulfill,didReject,undefined,undefined,undefined);};Promise.prototype.done=function(didFulfill,didReject){var promise=this._then(didFulfill,didReject,undefined,undefined,undefined);promise._setIsFinal();};Promise.prototype.spread=function(fn){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}return this.all()._then(fn,undefined,undefined,APPLY,undefined);};Promise.prototype.toJSON=function(){var ret={isFulfilled:false,isRejected:false,fulfillmentValue:undefined,rejectionReason:undefined};if(this.isFulfilled()){ret.fulfillmentValue=this.value();ret.isFulfilled=true;}else if(this.isRejected()){ret.rejectionReason=this.reason();ret.isRejected=true;}return ret;};Promise.prototype.all=function(){if(arguments.length>0){this._warn(".all() was passed arguments but it does not take any");}return new PromiseArray(this).promise();};Promise.prototype.error=function(fn){return this.caught(util.originatesFromRejection,fn);};Promise.getNewLibraryCopy=module.exports;Promise.is=function(val){return val instanceof Promise;};Promise.fromNode=Promise.fromCallback=function(fn){var ret=new Promise(INTERNAL);ret._captureStackTrace();var multiArgs=arguments.length>1?!!Object(arguments[1]).multiArgs:false;var result=tryCatch(fn)(nodebackForPromise(ret,multiArgs));if(result===errorObj){ret._rejectCallback(result.e,true);}if(!ret._isFateSealed())ret._setAsyncGuaranteed();return ret;};Promise.all=function(promises){return new PromiseArray(promises).promise();};Promise.cast=function(obj){var ret=tryConvertToPromise(obj);if(!(ret instanceof Promise)){ret=new Promise(INTERNAL);ret._captureStackTrace();ret._setFulfilled();ret._rejectionHandler0=obj;}return ret;};Promise.resolve=Promise.fulfilled=Promise.cast;Promise.reject=Promise.rejected=function(reason){var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._rejectCallback(reason,true);return ret;};Promise.setScheduler=function(fn){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}return async.setScheduler(fn);};Promise.prototype._then=function(didFulfill,didReject,_,receiver,internalData){var haveInternalData=internalData!==undefined;var promise=haveInternalData?internalData:new Promise(INTERNAL);var target=this._target();var bitField=target._bitField;if(!haveInternalData){promise._propagateFrom(this,3);promise._captureStackTrace();if(receiver===undefined&&(this._bitField&2097152)!==0){if(!((bitField&50397184)===0)){receiver=this._boundValue();}else{receiver=target===this?undefined:this._boundTo;}}this._fireEvent("promiseChained",this,promise);}var domain=getDomain();if(!((bitField&50397184)===0)){var handler,value,settler=target._settlePromiseCtx;if((bitField&33554432)!==0){value=target._rejectionHandler0;handler=didFulfill;}else if((bitField&16777216)!==0){value=target._fulfillmentHandler0;handler=didReject;target._unsetRejectionIsUnhandled();}else{settler=target._settlePromiseLateCancellationObserver;value=new CancellationError("late cancellation observer");target._attachExtraTrace(value);handler=didReject;}async.invoke(settler,target,{handler:domain===null?handler:typeof handler==="function"&&util.domainBind(domain,handler),promise:promise,receiver:receiver,value:value});}else{target._addCallbacks(didFulfill,didReject,promise,receiver,domain);}return promise;};Promise.prototype._length=function(){return this._bitField&65535;};Promise.prototype._isFateSealed=function(){return(this._bitField&117506048)!==0;};Promise.prototype._isFollowing=function(){return(this._bitField&67108864)===67108864;};Promise.prototype._setLength=function(len){this._bitField=this._bitField&-65536|len&65535;};Promise.prototype._setFulfilled=function(){this._bitField=this._bitField|33554432;this._fireEvent("promiseFulfilled",this);};Promise.prototype._setRejected=function(){this._bitField=this._bitField|16777216;this._fireEvent("promiseRejected",this);};Promise.prototype._setFollowing=function(){this._bitField=this._bitField|67108864;this._fireEvent("promiseResolved",this);};Promise.prototype._setIsFinal=function(){this._bitField=this._bitField|4194304;};Promise.prototype._isFinal=function(){return(this._bitField&4194304)>0;};Promise.prototype._unsetCancelled=function(){this._bitField=this._bitField&~65536;};Promise.prototype._setCancelled=function(){this._bitField=this._bitField|65536;this._fireEvent("promiseCancelled",this);};Promise.prototype._setWillBeCancelled=function(){this._bitField=this._bitField|8388608;};Promise.prototype._setAsyncGuaranteed=function(){if(async.hasCustomScheduler())return;this._bitField=this._bitField|134217728;};Promise.prototype._receiverAt=function(index){var ret=index===0?this._receiver0:this[index*4-4+3];if(ret===UNDEFINED_BINDING){return undefined;}else if(ret===undefined&&this._isBound()){return this._boundValue();}return ret;};Promise.prototype._promiseAt=function(index){return this[index*4-4+2];};Promise.prototype._fulfillmentHandlerAt=function(index){return this[index*4-4+0];};Promise.prototype._rejectionHandlerAt=function(index){return this[index*4-4+1];};Promise.prototype._boundValue=function(){};Promise.prototype._migrateCallback0=function(follower){var bitField=follower._bitField;var fulfill=follower._fulfillmentHandler0;var reject=follower._rejectionHandler0;var promise=follower._promise0;var receiver=follower._receiverAt(0);if(receiver===undefined)receiver=UNDEFINED_BINDING;this._addCallbacks(fulfill,reject,promise,receiver,null);};Promise.prototype._migrateCallbackAt=function(follower,index){var fulfill=follower._fulfillmentHandlerAt(index);var reject=follower._rejectionHandlerAt(index);var promise=follower._promiseAt(index);var receiver=follower._receiverAt(index);if(receiver===undefined)receiver=UNDEFINED_BINDING;this._addCallbacks(fulfill,reject,promise,receiver,null);};Promise.prototype._addCallbacks=function(fulfill,reject,promise,receiver,domain){var index=this._length();if(index>=65535-4){index=0;this._setLength(0);}if(index===0){this._promise0=promise;this._receiver0=receiver;if(typeof fulfill==="function"){this._fulfillmentHandler0=domain===null?fulfill:util.domainBind(domain,fulfill);}if(typeof reject==="function"){this._rejectionHandler0=domain===null?reject:util.domainBind(domain,reject);}}else{var base=index*4-4;this[base+2]=promise;this[base+3]=receiver;if(typeof fulfill==="function"){this[base+0]=domain===null?fulfill:util.domainBind(domain,fulfill);}if(typeof reject==="function"){this[base+1]=domain===null?reject:util.domainBind(domain,reject);}}this._setLength(index+1);return index;};Promise.prototype._proxy=function(proxyable,arg){this._addCallbacks(undefined,undefined,arg,proxyable,null);};Promise.prototype._resolveCallback=function(value,shouldBind){if((this._bitField&117506048)!==0)return;if(value===this)return this._rejectCallback(makeSelfResolutionError(),false);var maybePromise=tryConvertToPromise(value,this);if(!(maybePromise instanceof Promise))return this._fulfill(value);if(shouldBind)this._propagateFrom(maybePromise,2);var promise=maybePromise._target();if(promise===this){this._reject(makeSelfResolutionError());return;}var bitField=promise._bitField;if((bitField&50397184)===0){var len=this._length();if(len>0)promise._migrateCallback0(this);for(var i=1;i<len;++i){promise._migrateCallbackAt(this,i);}this._setFollowing();this._setLength(0);this._setFollowee(promise);}else if((bitField&33554432)!==0){this._fulfill(promise._value());}else if((bitField&16777216)!==0){this._reject(promise._reason());}else{var reason=new CancellationError("late cancellation observer");promise._attachExtraTrace(reason);this._reject(reason);}};Promise.prototype._rejectCallback=function(reason,synchronous,ignoreNonErrorWarnings){var trace=util.ensureErrorObject(reason);var hasStack=trace===reason;if(!hasStack&&!ignoreNonErrorWarnings&&debug.warnings()){var message="a promise was rejected with a non-error: "+util.classString(reason);this._warn(message,true);}this._attachExtraTrace(trace,synchronous?hasStack:false);this._reject(reason);};Promise.prototype._resolveFromExecutor=function(executor){var promise=this;this._captureStackTrace();this._pushContext();var synchronous=true;var r=this._execute(executor,function(value){promise._resolveCallback(value);},function(reason){promise._rejectCallback(reason,synchronous);});synchronous=false;this._popContext();if(r!==undefined){promise._rejectCallback(r,true);}};Promise.prototype._settlePromiseFromHandler=function(handler,receiver,value,promise){var bitField=promise._bitField;if((bitField&65536)!==0)return;promise._pushContext();var x;if(receiver===APPLY){if(!value||typeof value.length!=="number"){x=errorObj;x.e=new TypeError("cannot .spread() a non-array: "+util.classString(value));}else{x=tryCatch(handler).apply(this._boundValue(),value);}}else{x=tryCatch(handler).call(receiver,value);}var promiseCreated=promise._popContext();bitField=promise._bitField;if((bitField&65536)!==0)return;if(x===NEXT_FILTER){promise._reject(value);}else if(x===errorObj){promise._rejectCallback(x.e,false);}else{debug.checkForgottenReturns(x,promiseCreated,"",promise,this);promise._resolveCallback(x);}};Promise.prototype._target=function(){var ret=this;while(ret._isFollowing()){ret=ret._followee();}return ret;};Promise.prototype._followee=function(){return this._rejectionHandler0;};Promise.prototype._setFollowee=function(promise){this._rejectionHandler0=promise;};Promise.prototype._settlePromise=function(promise,handler,receiver,value){var isPromise=promise instanceof Promise;var bitField=this._bitField;var asyncGuaranteed=(bitField&134217728)!==0;if((bitField&65536)!==0){if(isPromise)promise._invokeInternalOnCancel();if(receiver instanceof PassThroughHandlerContext&&receiver.isFinallyHandler()){receiver.cancelPromise=promise;if(tryCatch(handler).call(receiver,value)===errorObj){promise._reject(errorObj.e);}}else if(handler===reflectHandler){promise._fulfill(reflectHandler.call(receiver));}else if(receiver instanceof Proxyable){receiver._promiseCancelled(promise);}else if(isPromise||promise instanceof PromiseArray){promise._cancel();}else{receiver.cancel();}}else if(typeof handler==="function"){if(!isPromise){handler.call(receiver,value,promise);}else{if(asyncGuaranteed)promise._setAsyncGuaranteed();this._settlePromiseFromHandler(handler,receiver,value,promise);}}else if(receiver instanceof Proxyable){if(!receiver._isResolved()){if((bitField&33554432)!==0){receiver._promiseFulfilled(value,promise);}else{receiver._promiseRejected(value,promise);}}}else if(isPromise){if(asyncGuaranteed)promise._setAsyncGuaranteed();if((bitField&33554432)!==0){promise._fulfill(value);}else{promise._reject(value);}}};Promise.prototype._settlePromiseLateCancellationObserver=function(ctx){var handler=ctx.handler;var promise=ctx.promise;var receiver=ctx.receiver;var value=ctx.value;if(typeof handler==="function"){if(!(promise instanceof Promise)){handler.call(receiver,value,promise);}else{this._settlePromiseFromHandler(handler,receiver,value,promise);}}else if(promise instanceof Promise){promise._reject(value);}};Promise.prototype._settlePromiseCtx=function(ctx){this._settlePromise(ctx.promise,ctx.handler,ctx.receiver,ctx.value);};Promise.prototype._settlePromise0=function(handler,value,bitField){var promise=this._promise0;var receiver=this._receiverAt(0);this._promise0=undefined;this._receiver0=undefined;this._settlePromise(promise,handler,receiver,value);};Promise.prototype._clearCallbackDataAtIndex=function(index){var base=index*4-4;this[base+2]=this[base+3]=this[base+0]=this[base+1]=undefined;};Promise.prototype._fulfill=function(value){var bitField=this._bitField;if((bitField&117506048)>>>16)return;if(value===this){var err=makeSelfResolutionError();this._attachExtraTrace(err);return this._reject(err);}this._setFulfilled();this._rejectionHandler0=value;if((bitField&65535)>0){if((bitField&134217728)!==0){this._settlePromises();}else{async.settlePromises(this);}}};Promise.prototype._reject=function(reason){var bitField=this._bitField;if((bitField&117506048)>>>16)return;this._setRejected();this._fulfillmentHandler0=reason;if(this._isFinal()){return async.fatalError(reason,util.isNode);}if((bitField&65535)>0){async.settlePromises(this);}else{this._ensurePossibleRejectionHandled();}};Promise.prototype._fulfillPromises=function(len,value){for(var i=1;i<len;i++){var handler=this._fulfillmentHandlerAt(i);var promise=this._promiseAt(i);var receiver=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(promise,handler,receiver,value);}};Promise.prototype._rejectPromises=function(len,reason){for(var i=1;i<len;i++){var handler=this._rejectionHandlerAt(i);var promise=this._promiseAt(i);var receiver=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(promise,handler,receiver,reason);}};Promise.prototype._settlePromises=function(){var bitField=this._bitField;var len=bitField&65535;if(len>0){if((bitField&16842752)!==0){var reason=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,reason,bitField);this._rejectPromises(len,reason);}else{var value=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,value,bitField);this._fulfillPromises(len,value);}this._setLength(0);}this._clearCancellationData();};Promise.prototype._settledValue=function(){var bitField=this._bitField;if((bitField&33554432)!==0){return this._rejectionHandler0;}else if((bitField&16777216)!==0){return this._fulfillmentHandler0;}};function deferResolve(v){this.promise._resolveCallback(v);}function deferReject(v){this.promise._rejectCallback(v,false);}Promise.defer=Promise.pending=function(){debug.deprecated("Promise.defer","new Promise");var promise=new Promise(INTERNAL);return{promise:promise,resolve:deferResolve,reject:deferReject};};util.notEnumerableProp(Promise,"_makeSelfResolutionError",makeSelfResolutionError);_dereq_("./method")(Promise,INTERNAL,tryConvertToPromise,apiRejection,debug);_dereq_("./bind")(Promise,INTERNAL,tryConvertToPromise,debug);_dereq_("./cancel")(Promise,PromiseArray,apiRejection,debug);_dereq_("./direct_resolve")(Promise);_dereq_("./synchronous_inspection")(Promise);_dereq_("./join")(Promise,PromiseArray,tryConvertToPromise,INTERNAL,async,getDomain);Promise.Promise=Promise;Promise.version="3.4.6";_dereq_('./map.js')(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug);_dereq_('./call_get.js')(Promise);_dereq_('./using.js')(Promise,apiRejection,tryConvertToPromise,createContext,INTERNAL,debug);_dereq_('./timers.js')(Promise,INTERNAL,debug);_dereq_('./generators.js')(Promise,apiRejection,INTERNAL,tryConvertToPromise,Proxyable,debug);_dereq_('./nodeify.js')(Promise);_dereq_('./promisify.js')(Promise,INTERNAL);_dereq_('./props.js')(Promise,PromiseArray,tryConvertToPromise,apiRejection);_dereq_('./race.js')(Promise,INTERNAL,tryConvertToPromise,apiRejection);_dereq_('./reduce.js')(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug);_dereq_('./settle.js')(Promise,PromiseArray,debug);_dereq_('./some.js')(Promise,PromiseArray,apiRejection);_dereq_('./filter.js')(Promise,INTERNAL);_dereq_('./each.js')(Promise,INTERNAL);_dereq_('./any.js')(Promise);util.toFastProperties(Promise);util.toFastProperties(Promise.prototype);function fillTypes(value){var p=new Promise(INTERNAL);p._fulfillmentHandler0=value;p._rejectionHandler0=value;p._promise0=value;p._receiver0=value;}// Complete slack tracking, opt out of field-type tracking and           
// stabilize map                                                         
fillTypes({a:1});fillTypes({b:2});fillTypes({c:3});fillTypes(1);fillTypes(function(){});fillTypes(undefined);fillTypes(false);fillTypes(new Promise(INTERNAL));debug.setBounds(Async.firstLineError,util.lastLineError);return Promise;};},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection,Proxyable){var util=_dereq_("./util");var isArray=util.isArray;function toResolutionValue(val){switch(val){case-2:return[];case-3:return{};}}function PromiseArray(values){var promise=this._promise=new Promise(INTERNAL);if(values instanceof Promise){promise._propagateFrom(values,3);}promise._setOnCancel(this);this._values=values;this._length=0;this._totalResolved=0;this._init(undefined,-2);}util.inherits(PromiseArray,Proxyable);PromiseArray.prototype.length=function(){return this._length;};PromiseArray.prototype.promise=function(){return this._promise;};PromiseArray.prototype._init=function init(_,resolveValueIfEmpty){var values=tryConvertToPromise(this._values,this._promise);if(values instanceof Promise){values=values._target();var bitField=values._bitField;;this._values=values;if((bitField&50397184)===0){this._promise._setAsyncGuaranteed();return values._then(init,this._reject,undefined,this,resolveValueIfEmpty);}else if((bitField&33554432)!==0){values=values._value();}else if((bitField&16777216)!==0){return this._reject(values._reason());}else{return this._cancel();}}values=util.asArray(values);if(values===null){var err=apiRejection("expecting an array or an iterable object but got "+util.classString(values)).reason();this._promise._rejectCallback(err,false);return;}if(values.length===0){if(resolveValueIfEmpty===-5){this._resolveEmptyArray();}else{this._resolve(toResolutionValue(resolveValueIfEmpty));}return;}this._iterate(values);};PromiseArray.prototype._iterate=function(values){var len=this.getActualLength(values.length);this._length=len;this._values=this.shouldCopyValues()?new Array(len):this._values;var result=this._promise;var isResolved=false;var bitField=null;for(var i=0;i<len;++i){var maybePromise=tryConvertToPromise(values[i],result);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();bitField=maybePromise._bitField;}else{bitField=null;}if(isResolved){if(bitField!==null){maybePromise.suppressUnhandledRejections();}}else if(bitField!==null){if((bitField&50397184)===0){maybePromise._proxy(this,i);this._values[i]=maybePromise;}else if((bitField&33554432)!==0){isResolved=this._promiseFulfilled(maybePromise._value(),i);}else if((bitField&16777216)!==0){isResolved=this._promiseRejected(maybePromise._reason(),i);}else{isResolved=this._promiseCancelled(i);}}else{isResolved=this._promiseFulfilled(maybePromise,i);}}if(!isResolved)result._setAsyncGuaranteed();};PromiseArray.prototype._isResolved=function(){return this._values===null;};PromiseArray.prototype._resolve=function(value){this._values=null;this._promise._fulfill(value);};PromiseArray.prototype._cancel=function(){if(this._isResolved()||!this._promise._isCancellable())return;this._values=null;this._promise._cancel();};PromiseArray.prototype._reject=function(reason){this._values=null;this._promise._rejectCallback(reason,false);};PromiseArray.prototype._promiseFulfilled=function(value,index){this._values[index]=value;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){this._resolve(this._values);return true;}return false;};PromiseArray.prototype._promiseCancelled=function(){this._cancel();return true;};PromiseArray.prototype._promiseRejected=function(reason){this._totalResolved++;this._reject(reason);return true;};PromiseArray.prototype._resultCancelled=function(){if(this._isResolved())return;var values=this._values;this._cancel();if(values instanceof Promise){values.cancel();}else{for(var i=0;i<values.length;++i){if(values[i]instanceof Promise){values[i].cancel();}}}};PromiseArray.prototype.shouldCopyValues=function(){return true;};PromiseArray.prototype.getActualLength=function(len){return len;};return PromiseArray;};},{"./util":36}],24:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var THIS={};var util=_dereq_("./util");var nodebackForPromise=_dereq_("./nodeback");var withAppended=util.withAppended;var maybeWrapAsError=util.maybeWrapAsError;var canEvaluate=util.canEvaluate;var TypeError=_dereq_("./errors").TypeError;var defaultSuffix="Async";var defaultPromisified={__isPromisified__:true};var noCopyProps=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"];var noCopyPropsPattern=new RegExp("^(?:"+noCopyProps.join("|")+")$");var defaultFilter=function defaultFilter(name){return util.isIdentifier(name)&&name.charAt(0)!=="_"&&name!=="constructor";};function propsFilter(key){return!noCopyPropsPattern.test(key);}function isPromisified(fn){try{return fn.__isPromisified__===true;}catch(e){return false;}}function hasPromisified(obj,key,suffix){var val=util.getDataPropertyOrDefault(obj,key+suffix,defaultPromisified);return val?isPromisified(val):false;}function checkValid(ret,suffix,suffixRegexp){for(var i=0;i<ret.length;i+=2){var key=ret[i];if(suffixRegexp.test(key)){var keyWithoutAsyncSuffix=key.replace(suffixRegexp,"");for(var j=0;j<ret.length;j+=2){if(ret[j]===keyWithoutAsyncSuffix){throw new TypeError('Cannot promisify an API that has normal methods with \'%s\'-suffix\n\n    See http://goo.gl/MqrFmX\n'.replace("%s",suffix));}}}}}function promisifiableMethods(obj,suffix,suffixRegexp,filter){var keys=util.inheritedDataKeys(obj);var ret=[];for(var i=0;i<keys.length;++i){var key=keys[i];var value=obj[key];var passesDefaultFilter=filter===defaultFilter?true:defaultFilter(key,value,obj);if(typeof value==="function"&&!isPromisified(value)&&!hasPromisified(obj,key,suffix)&&filter(key,value,obj,passesDefaultFilter)){ret.push(key,value);}}checkValid(ret,suffix,suffixRegexp);return ret;}var escapeIdentRegex=function escapeIdentRegex(str){return str.replace(/([$])/,"\\$");};var makeNodePromisifiedEval;if(false){var switchCaseArgumentOrder=function switchCaseArgumentOrder(likelyArgumentCount){var ret=[likelyArgumentCount];var min=Math.max(0,likelyArgumentCount-1-3);for(var i=likelyArgumentCount-1;i>=min;--i){ret.push(i);}for(var i=likelyArgumentCount+1;i<=3;++i){ret.push(i);}return ret;};var argumentSequence=function argumentSequence(argumentCount){return util.filledRange(argumentCount,"_arg","");};var parameterDeclaration=function parameterDeclaration(parameterCount){return util.filledRange(Math.max(parameterCount,3),"_arg","");};var parameterCount=function parameterCount(fn){if(typeof fn.length==="number"){return Math.max(Math.min(fn.length,1023+1),0);}return 0;};makeNodePromisifiedEval=function makeNodePromisifiedEval(callback,receiver,originalName,fn,_,multiArgs){var newParameterCount=Math.max(0,parameterCount(fn)-1);var argumentOrder=switchCaseArgumentOrder(newParameterCount);var shouldProxyThis=typeof callback==="string"||receiver===THIS;function generateCallForArgumentCount(count){var args=argumentSequence(count).join(", ");var comma=count>0?", ":"";var ret;if(shouldProxyThis){ret="ret = callback.call(this, {{args}}, nodeback); break;\n";}else{ret=receiver===undefined?"ret = callback({{args}}, nodeback); break;\n":"ret = callback.call(receiver, {{args}}, nodeback); break;\n";}return ret.replace("{{args}}",args).replace(", ",comma);}function generateArgumentSwitchCase(){var ret="";for(var i=0;i<argumentOrder.length;++i){ret+="case "+argumentOrder[i]+":"+generateCallForArgumentCount(argumentOrder[i]);}ret+="                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]",shouldProxyThis?"ret = callback.apply(this, args);\n":"ret = callback.apply(receiver, args);\n");return ret;}var getFunctionCode=typeof callback==="string"?"this != null ? this['"+callback+"'] : fn":"fn";var body="'use strict';                                                \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise, "+multiArgs+");   \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	    ".replace("[CodeForSwitchCase]",generateArgumentSwitchCase()).replace("[GetFunctionCode]",getFunctionCode);body=body.replace("Parameters",parameterDeclaration(newParameterCount));return new Function("Promise","fn","receiver","withAppended","maybeWrapAsError","nodebackForPromise","tryCatch","errorObj","notEnumerableProp","INTERNAL",body)(Promise,fn,receiver,withAppended,maybeWrapAsError,nodebackForPromise,util.tryCatch,util.errorObj,util.notEnumerableProp,INTERNAL);};}function makeNodePromisifiedClosure(callback,receiver,_,fn,__,multiArgs){var defaultThis=function(){return this;}();var method=callback;if(typeof method==="string"){callback=fn;}function promisified(){var _receiver=receiver;if(receiver===THIS)_receiver=this;var promise=new Promise(INTERNAL);promise._captureStackTrace();var cb=typeof method==="string"&&this!==defaultThis?this[method]:callback;var fn=nodebackForPromise(promise,multiArgs);try{cb.apply(_receiver,withAppended(arguments,fn));}catch(e){promise._rejectCallback(maybeWrapAsError(e),true,true);}if(!promise._isFateSealed())promise._setAsyncGuaranteed();return promise;}util.notEnumerableProp(promisified,"__isPromisified__",true);return promisified;}var makeNodePromisified=canEvaluate?makeNodePromisifiedEval:makeNodePromisifiedClosure;function promisifyAll(obj,suffix,filter,promisifier,multiArgs){var suffixRegexp=new RegExp(escapeIdentRegex(suffix)+"$");var methods=promisifiableMethods(obj,suffix,suffixRegexp,filter);for(var i=0,len=methods.length;i<len;i+=2){var key=methods[i];var fn=methods[i+1];var promisifiedKey=key+suffix;if(promisifier===makeNodePromisified){obj[promisifiedKey]=makeNodePromisified(key,THIS,key,fn,suffix,multiArgs);}else{var promisified=promisifier(fn,function(){return makeNodePromisified(key,THIS,key,fn,suffix,multiArgs);});util.notEnumerableProp(promisified,"__isPromisified__",true);obj[promisifiedKey]=promisified;}}util.toFastProperties(obj);return obj;}function promisify(callback,receiver,multiArgs){return makeNodePromisified(callback,receiver,undefined,callback,null,multiArgs);}Promise.promisify=function(fn,options){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}if(isPromisified(fn)){return fn;}options=Object(options);var receiver=options.context===undefined?THIS:options.context;var multiArgs=!!options.multiArgs;var ret=promisify(fn,receiver,multiArgs);util.copyDescriptors(fn,ret,propsFilter);return ret;};Promise.promisifyAll=function(target,options){if(typeof target!=="function"&&(typeof target==='undefined'?'undefined':_typeof2(target))!=="object"){throw new TypeError('the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n');}options=Object(options);var multiArgs=!!options.multiArgs;var suffix=options.suffix;if(typeof suffix!=="string")suffix=defaultSuffix;var filter=options.filter;if(typeof filter!=="function")filter=defaultFilter;var promisifier=options.promisifier;if(typeof promisifier!=="function")promisifier=makeNodePromisified;if(!util.isIdentifier(suffix)){throw new RangeError('suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n');}var keys=util.inheritedDataKeys(target);for(var i=0;i<keys.length;++i){var value=target[keys[i]];if(keys[i]!=="constructor"&&util.isClass(value)){promisifyAll(value.prototype,suffix,filter,promisifier,multiArgs);promisifyAll(value,suffix,filter,promisifier,multiArgs);}}return promisifyAll(target,suffix,filter,promisifier,multiArgs);};};},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,tryConvertToPromise,apiRejection){var util=_dereq_("./util");var isObject=util.isObject;var es5=_dereq_("./es5");var Es6Map;if(typeof _Map==="function")Es6Map=_Map;var mapToEntries=function(){var index=0;var size=0;function extractEntry(value,key){this[index]=value;this[index+size]=key;index++;}return function mapToEntries(map){size=map.size;index=0;var ret=new Array(map.size*2);map.forEach(extractEntry,ret);return ret;};}();var entriesToMap=function entriesToMap(entries){var ret=new Es6Map();var length=entries.length/2|0;for(var i=0;i<length;++i){var key=entries[length+i];var value=entries[i];ret.set(key,value);}return ret;};function PropertiesPromiseArray(obj){var isMap=false;var entries;if(Es6Map!==undefined&&obj instanceof Es6Map){entries=mapToEntries(obj);isMap=true;}else{var keys=es5.keys(obj);var len=keys.length;entries=new Array(len*2);for(var i=0;i<len;++i){var key=keys[i];entries[i]=obj[key];entries[i+len]=key;}}this.constructor$(entries);this._isMap=isMap;this._init$(undefined,-3);}util.inherits(PropertiesPromiseArray,PromiseArray);PropertiesPromiseArray.prototype._init=function(){};PropertiesPromiseArray.prototype._promiseFulfilled=function(value,index){this._values[index]=value;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){var val;if(this._isMap){val=entriesToMap(this._values);}else{val={};var keyOffset=this.length();for(var i=0,len=this.length();i<len;++i){val[this._values[i+keyOffset]]=this._values[i];}}this._resolve(val);return true;}return false;};PropertiesPromiseArray.prototype.shouldCopyValues=function(){return false;};PropertiesPromiseArray.prototype.getActualLength=function(len){return len>>1;};function props(promises){var ret;var castValue=tryConvertToPromise(promises);if(!isObject(castValue)){return apiRejection('cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n');}else if(castValue instanceof Promise){ret=castValue._then(Promise.props,undefined,undefined,undefined,undefined);}else{ret=new PropertiesPromiseArray(castValue).promise();}if(castValue instanceof Promise){ret._propagateFrom(castValue,2);}return ret;}Promise.prototype.props=function(){return props(this);};Promise.props=function(promises){return props(promises);};};},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){"use strict";function arrayMove(src,srcIndex,dst,dstIndex,len){for(var j=0;j<len;++j){dst[j+dstIndex]=src[j+srcIndex];src[j+srcIndex]=void 0;}}function Queue(capacity){this._capacity=capacity;this._length=0;this._front=0;}Queue.prototype._willBeOverCapacity=function(size){return this._capacity<size;};Queue.prototype._pushOne=function(arg){var length=this.length();this._checkCapacity(length+1);var i=this._front+length&this._capacity-1;this[i]=arg;this._length=length+1;};Queue.prototype._unshiftOne=function(value){var capacity=this._capacity;this._checkCapacity(this.length()+1);var front=this._front;var i=(front-1&capacity-1^capacity)-capacity;this[i]=value;this._front=i;this._length=this.length()+1;};Queue.prototype.unshift=function(fn,receiver,arg){this._unshiftOne(arg);this._unshiftOne(receiver);this._unshiftOne(fn);};Queue.prototype.push=function(fn,receiver,arg){var length=this.length()+3;if(this._willBeOverCapacity(length)){this._pushOne(fn);this._pushOne(receiver);this._pushOne(arg);return;}var j=this._front+length-3;this._checkCapacity(length);var wrapMask=this._capacity-1;this[j+0&wrapMask]=fn;this[j+1&wrapMask]=receiver;this[j+2&wrapMask]=arg;this._length=length;};Queue.prototype.shift=function(){var front=this._front,ret=this[front];this[front]=undefined;this._front=front+1&this._capacity-1;this._length--;return ret;};Queue.prototype.length=function(){return this._length;};Queue.prototype._checkCapacity=function(size){if(this._capacity<size){this._resizeTo(this._capacity<<1);}};Queue.prototype._resizeTo=function(capacity){var oldCapacity=this._capacity;this._capacity=capacity;var front=this._front;var length=this._length;var moveItemsCount=front+length&oldCapacity-1;arrayMove(this,0,this,oldCapacity,moveItemsCount);};module.exports=Queue;},{}],27:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection){var util=_dereq_("./util");var raceLater=function raceLater(promise){return promise.then(function(array){return race(array,promise);});};function race(promises,parent){var maybePromise=tryConvertToPromise(promises);if(maybePromise instanceof Promise){return raceLater(maybePromise);}else{promises=util.asArray(promises);if(promises===null)return apiRejection("expecting an array or an iterable object but got "+util.classString(promises));}var ret=new Promise(INTERNAL);if(parent!==undefined){ret._propagateFrom(parent,3);}var fulfill=ret._fulfill;var reject=ret._reject;for(var i=0,len=promises.length;i<len;++i){var val=promises[i];if(val===undefined&&!(i in promises)){continue;}Promise.cast(val)._then(fulfill,reject,undefined,ret,null);}return ret;}Promise.race=function(promises){return race(promises,undefined);};Promise.prototype.race=function(){return race(this,undefined);};};},{"./util":36}],28:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug){var getDomain=Promise._getDomain;var util=_dereq_("./util");var tryCatch=util.tryCatch;function ReductionPromiseArray(promises,fn,initialValue,_each){this.constructor$(promises);var domain=getDomain();this._fn=domain===null?fn:util.domainBind(domain,fn);if(initialValue!==undefined){initialValue=Promise.resolve(initialValue);initialValue._attachCancellationCallback(this);}this._initialValue=initialValue;this._currentCancellable=null;if(_each===INTERNAL){this._eachValues=Array(this._length);}else if(_each===0){this._eachValues=null;}else{this._eachValues=undefined;}this._promise._captureStackTrace();this._init$(undefined,-5);}util.inherits(ReductionPromiseArray,PromiseArray);ReductionPromiseArray.prototype._gotAccum=function(accum){if(this._eachValues!==undefined&&this._eachValues!==null&&accum!==INTERNAL){this._eachValues.push(accum);}};ReductionPromiseArray.prototype._eachComplete=function(value){if(this._eachValues!==null){this._eachValues.push(value);}return this._eachValues;};ReductionPromiseArray.prototype._init=function(){};ReductionPromiseArray.prototype._resolveEmptyArray=function(){this._resolve(this._eachValues!==undefined?this._eachValues:this._initialValue);};ReductionPromiseArray.prototype.shouldCopyValues=function(){return false;};ReductionPromiseArray.prototype._resolve=function(value){this._promise._resolveCallback(value);this._values=null;};ReductionPromiseArray.prototype._resultCancelled=function(sender){if(sender===this._initialValue)return this._cancel();if(this._isResolved())return;this._resultCancelled$();if(this._currentCancellable instanceof Promise){this._currentCancellable.cancel();}if(this._initialValue instanceof Promise){this._initialValue.cancel();}};ReductionPromiseArray.prototype._iterate=function(values){this._values=values;var value;var i;var length=values.length;if(this._initialValue!==undefined){value=this._initialValue;i=0;}else{value=Promise.resolve(values[0]);i=1;}this._currentCancellable=value;if(!value.isRejected()){for(;i<length;++i){var ctx={accum:null,value:values[i],index:i,length:length,array:this};value=value._then(gotAccum,undefined,undefined,ctx,undefined);}}if(this._eachValues!==undefined){value=value._then(this._eachComplete,undefined,undefined,this,undefined);}value._then(completed,completed,undefined,value,this);};Promise.prototype.reduce=function(fn,initialValue){return reduce(this,fn,initialValue,null);};Promise.reduce=function(promises,fn,initialValue,_each){return reduce(promises,fn,initialValue,_each);};function completed(valueOrReason,array){if(this.isFulfilled()){array._resolve(valueOrReason);}else{array._reject(valueOrReason);}}function reduce(promises,fn,initialValue,_each){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var array=new ReductionPromiseArray(promises,fn,initialValue,_each);return array.promise();}function gotAccum(accum){this.accum=accum;this.array._gotAccum(accum);var value=tryConvertToPromise(this.value,this.array._promise);if(value instanceof Promise){this.array._currentCancellable=value;return value._then(gotValue,undefined,undefined,this,undefined);}else{return gotValue.call(this,value);}}function gotValue(value){var array=this.array;var promise=array._promise;var fn=tryCatch(array._fn);promise._pushContext();var ret;if(array._eachValues!==undefined){ret=fn.call(promise._boundValue(),value,this.index,this.length);}else{ret=fn.call(promise._boundValue(),this.accum,value,this.index,this.length);}if(ret instanceof Promise){array._currentCancellable=ret;}var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,array._eachValues!==undefined?"Promise.each":"Promise.reduce",promise);return ret;}};},{"./util":36}],29:[function(_dereq_,module,exports){"use strict";var util=_dereq_("./util");var schedule;var noAsyncScheduler=function noAsyncScheduler(){throw new Error('No async scheduler available\n\n    See http://goo.gl/MqrFmX\n');};var NativePromise=util.getNativePromise();if(util.isNode&&typeof MutationObserver==="undefined"){var GlobalSetImmediate=global.setImmediate;var ProcessNextTick=process.nextTick;schedule=util.isRecentNode?function(fn){GlobalSetImmediate.call(global,fn);}:function(fn){ProcessNextTick.call(process,fn);};}else if(typeof NativePromise==="function"&&typeof NativePromise.resolve==="function"){var nativePromise=NativePromise.resolve();schedule=function schedule(fn){nativePromise.then(fn);};}else if(typeof MutationObserver!=="undefined"&&!(typeof window!=="undefined"&&window.navigator&&(window.navigator.standalone||window.cordova))){schedule=function(){var div=document.createElement("div");var opts={attributes:true};var toggleScheduled=false;var div2=document.createElement("div");var o2=new MutationObserver(function(){div.classList.toggle("foo");toggleScheduled=false;});o2.observe(div2,opts);var scheduleToggle=function scheduleToggle(){if(toggleScheduled)return;toggleScheduled=true;div2.classList.toggle("foo");};return function schedule(fn){var o=new MutationObserver(function(){o.disconnect();fn();});o.observe(div,opts);scheduleToggle();};}();}else if(typeof setImmediate!=="undefined"){schedule=function schedule(fn){setImmediate(fn);};}else if(typeof setTimeout!=="undefined"){schedule=function schedule(fn){setTimeout(fn,0);};}else{schedule=noAsyncScheduler;}module.exports=schedule;},{"./util":36}],30:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,debug){var PromiseInspection=Promise.PromiseInspection;var util=_dereq_("./util");function SettledPromiseArray(values){this.constructor$(values);}util.inherits(SettledPromiseArray,PromiseArray);SettledPromiseArray.prototype._promiseResolved=function(index,inspection){this._values[index]=inspection;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){this._resolve(this._values);return true;}return false;};SettledPromiseArray.prototype._promiseFulfilled=function(value,index){var ret=new PromiseInspection();ret._bitField=33554432;ret._settledValueField=value;return this._promiseResolved(index,ret);};SettledPromiseArray.prototype._promiseRejected=function(reason,index){var ret=new PromiseInspection();ret._bitField=16777216;ret._settledValueField=reason;return this._promiseResolved(index,ret);};Promise.settle=function(promises){debug.deprecated(".settle()",".reflect()");return new SettledPromiseArray(promises).promise();};Promise.prototype.settle=function(){return Promise.settle(this);};};},{"./util":36}],31:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection){var util=_dereq_("./util");var RangeError=_dereq_("./errors").RangeError;var AggregateError=_dereq_("./errors").AggregateError;var isArray=util.isArray;var CANCELLATION={};function SomePromiseArray(values){this.constructor$(values);this._howMany=0;this._unwrap=false;this._initialized=false;}util.inherits(SomePromiseArray,PromiseArray);SomePromiseArray.prototype._init=function(){if(!this._initialized){return;}if(this._howMany===0){this._resolve([]);return;}this._init$(undefined,-5);var isArrayResolved=isArray(this._values);if(!this._isResolved()&&isArrayResolved&&this._howMany>this._canPossiblyFulfill()){this._reject(this._getRangeError(this.length()));}};SomePromiseArray.prototype.init=function(){this._initialized=true;this._init();};SomePromiseArray.prototype.setUnwrap=function(){this._unwrap=true;};SomePromiseArray.prototype.howMany=function(){return this._howMany;};SomePromiseArray.prototype.setHowMany=function(count){this._howMany=count;};SomePromiseArray.prototype._promiseFulfilled=function(value){this._addFulfilled(value);if(this._fulfilled()===this.howMany()){this._values.length=this.howMany();if(this.howMany()===1&&this._unwrap){this._resolve(this._values[0]);}else{this._resolve(this._values);}return true;}return false;};SomePromiseArray.prototype._promiseRejected=function(reason){this._addRejected(reason);return this._checkOutcome();};SomePromiseArray.prototype._promiseCancelled=function(){if(this._values instanceof Promise||this._values==null){return this._cancel();}this._addRejected(CANCELLATION);return this._checkOutcome();};SomePromiseArray.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){var e=new AggregateError();for(var i=this.length();i<this._values.length;++i){if(this._values[i]!==CANCELLATION){e.push(this._values[i]);}}if(e.length>0){this._reject(e);}else{this._cancel();}return true;}return false;};SomePromiseArray.prototype._fulfilled=function(){return this._totalResolved;};SomePromiseArray.prototype._rejected=function(){return this._values.length-this.length();};SomePromiseArray.prototype._addRejected=function(reason){this._values.push(reason);};SomePromiseArray.prototype._addFulfilled=function(value){this._values[this._totalResolved++]=value;};SomePromiseArray.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected();};SomePromiseArray.prototype._getRangeError=function(count){var message="Input array must contain at least "+this._howMany+" items but contains only "+count+" items";return new RangeError(message);};SomePromiseArray.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0));};function some(promises,howMany){if((howMany|0)!==howMany||howMany<0){return apiRejection('expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n');}var ret=new SomePromiseArray(promises);var promise=ret.promise();ret.setHowMany(howMany);ret.init();return promise;}Promise.some=function(promises,howMany){return some(promises,howMany);};Promise.prototype.some=function(howMany){return some(this,howMany);};Promise._SomePromiseArray=SomePromiseArray;};},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){function PromiseInspection(promise){if(promise!==undefined){promise=promise._target();this._bitField=promise._bitField;this._settledValueField=promise._isFateSealed()?promise._settledValue():undefined;}else{this._bitField=0;this._settledValueField=undefined;}}PromiseInspection.prototype._settledValue=function(){return this._settledValueField;};var value=PromiseInspection.prototype.value=function(){if(!this.isFulfilled()){throw new TypeError('cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n');}return this._settledValue();};var reason=PromiseInspection.prototype.error=PromiseInspection.prototype.reason=function(){if(!this.isRejected()){throw new TypeError('cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n');}return this._settledValue();};var isFulfilled=PromiseInspection.prototype.isFulfilled=function(){return(this._bitField&33554432)!==0;};var isRejected=PromiseInspection.prototype.isRejected=function(){return(this._bitField&16777216)!==0;};var isPending=PromiseInspection.prototype.isPending=function(){return(this._bitField&50397184)===0;};var isResolved=PromiseInspection.prototype.isResolved=function(){return(this._bitField&50331648)!==0;};PromiseInspection.prototype.isCancelled=function(){return(this._bitField&8454144)!==0;};Promise.prototype.__isCancelled=function(){return(this._bitField&65536)===65536;};Promise.prototype._isCancelled=function(){return this._target().__isCancelled();};Promise.prototype.isCancelled=function(){return(this._target()._bitField&8454144)!==0;};Promise.prototype.isPending=function(){return isPending.call(this._target());};Promise.prototype.isRejected=function(){return isRejected.call(this._target());};Promise.prototype.isFulfilled=function(){return isFulfilled.call(this._target());};Promise.prototype.isResolved=function(){return isResolved.call(this._target());};Promise.prototype.value=function(){return value.call(this._target());};Promise.prototype.reason=function(){var target=this._target();target._unsetRejectionIsUnhandled();return reason.call(target);};Promise.prototype._value=function(){return this._settledValue();};Promise.prototype._reason=function(){this._unsetRejectionIsUnhandled();return this._settledValue();};Promise.PromiseInspection=PromiseInspection;};},{}],33:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var util=_dereq_("./util");var errorObj=util.errorObj;var isObject=util.isObject;function tryConvertToPromise(obj,context){if(isObject(obj)){if(obj instanceof Promise)return obj;var then=getThen(obj);if(then===errorObj){if(context)context._pushContext();var ret=Promise.reject(then.e);if(context)context._popContext();return ret;}else if(typeof then==="function"){if(isAnyBluebirdPromise(obj)){var ret=new Promise(INTERNAL);obj._then(ret._fulfill,ret._reject,undefined,ret,null);return ret;}return doThenable(obj,then,context);}}return obj;}function doGetThen(obj){return obj.then;}function getThen(obj){try{return doGetThen(obj);}catch(e){errorObj.e=e;return errorObj;}}var hasProp={}.hasOwnProperty;function isAnyBluebirdPromise(obj){try{return hasProp.call(obj,"_promise0");}catch(e){return false;}}function doThenable(x,then,context){var promise=new Promise(INTERNAL);var ret=promise;if(context)context._pushContext();promise._captureStackTrace();if(context)context._popContext();var synchronous=true;var result=util.tryCatch(then).call(x,resolve,reject);synchronous=false;if(promise&&result===errorObj){promise._rejectCallback(result.e,true,true);promise=null;}function resolve(value){if(!promise)return;promise._resolveCallback(value);promise=null;}function reject(reason){if(!promise)return;promise._rejectCallback(reason,synchronous,true);promise=null;}return ret;}return tryConvertToPromise;};},{"./util":36}],34:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,debug){var util=_dereq_("./util");var TimeoutError=Promise.TimeoutError;function HandleWrapper(handle){this.handle=handle;}HandleWrapper.prototype._resultCancelled=function(){clearTimeout(this.handle);};var afterValue=function afterValue(value){return delay(+this).thenReturn(value);};var delay=Promise.delay=function(ms,value){var ret;var handle;if(value!==undefined){ret=Promise.resolve(value)._then(afterValue,null,null,ms,undefined);if(debug.cancellation()&&value instanceof Promise){ret._setOnCancel(value);}}else{ret=new Promise(INTERNAL);handle=setTimeout(function(){ret._fulfill();},+ms);if(debug.cancellation()){ret._setOnCancel(new HandleWrapper(handle));}ret._captureStackTrace();}ret._setAsyncGuaranteed();return ret;};Promise.prototype.delay=function(ms){return delay(ms,this);};var afterTimeout=function afterTimeout(promise,message,parent){var err;if(typeof message!=="string"){if(message instanceof Error){err=message;}else{err=new TimeoutError("operation timed out");}}else{err=new TimeoutError(message);}util.markAsOriginatingFromRejection(err);promise._attachExtraTrace(err);promise._reject(err);if(parent!=null){parent.cancel();}};function successClear(value){clearTimeout(this.handle);return value;}function failureClear(reason){clearTimeout(this.handle);throw reason;}Promise.prototype.timeout=function(ms,message){ms=+ms;var ret,parent;var handleWrapper=new HandleWrapper(setTimeout(function timeoutTimeout(){if(ret.isPending()){afterTimeout(ret,message,parent);}},ms));if(debug.cancellation()){parent=this.then();ret=parent._then(successClear,failureClear,undefined,handleWrapper,undefined);ret._setOnCancel(handleWrapper);}else{ret=this._then(successClear,failureClear,undefined,handleWrapper,undefined);}return ret;};};},{"./util":36}],35:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,apiRejection,tryConvertToPromise,createContext,INTERNAL,debug){var util=_dereq_("./util");var TypeError=_dereq_("./errors").TypeError;var inherits=_dereq_("./util").inherits;var errorObj=util.errorObj;var tryCatch=util.tryCatch;var NULL={};function thrower(e){setTimeout(function(){throw e;},0);}function castPreservingDisposable(thenable){var maybePromise=tryConvertToPromise(thenable);if(maybePromise!==thenable&&typeof thenable._isDisposable==="function"&&typeof thenable._getDisposer==="function"&&thenable._isDisposable()){maybePromise._setDisposable(thenable._getDisposer());}return maybePromise;}function dispose(resources,inspection){var i=0;var len=resources.length;var ret=new Promise(INTERNAL);function iterator(){if(i>=len)return ret._fulfill();var maybePromise=castPreservingDisposable(resources[i++]);if(maybePromise instanceof Promise&&maybePromise._isDisposable()){try{maybePromise=tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection),resources.promise);}catch(e){return thrower(e);}if(maybePromise instanceof Promise){return maybePromise._then(iterator,thrower,null,null,null);}}iterator();}iterator();return ret;}function Disposer(data,promise,context){this._data=data;this._promise=promise;this._context=context;}Disposer.prototype.data=function(){return this._data;};Disposer.prototype.promise=function(){return this._promise;};Disposer.prototype.resource=function(){if(this.promise().isFulfilled()){return this.promise().value();}return NULL;};Disposer.prototype.tryDispose=function(inspection){var resource=this.resource();var context=this._context;if(context!==undefined)context._pushContext();var ret=resource!==NULL?this.doDispose(resource,inspection):null;if(context!==undefined)context._popContext();this._promise._unsetDisposable();this._data=null;return ret;};Disposer.isDisposer=function(d){return d!=null&&typeof d.resource==="function"&&typeof d.tryDispose==="function";};function FunctionDisposer(fn,promise,context){this.constructor$(fn,promise,context);}inherits(FunctionDisposer,Disposer);FunctionDisposer.prototype.doDispose=function(resource,inspection){var fn=this.data();return fn.call(resource,resource,inspection);};function maybeUnwrapDisposer(value){if(Disposer.isDisposer(value)){this.resources[this.index]._setDisposable(value);return value.promise();}return value;}function ResourceList(length){this.length=length;this.promise=null;this[length-1]=null;}ResourceList.prototype._resultCancelled=function(){var len=this.length;for(var i=0;i<len;++i){var item=this[i];if(item instanceof Promise){item.cancel();}}};Promise.using=function(){var len=arguments.length;if(len<2)return apiRejection("you must pass at least 2 arguments to Promise.using");var fn=arguments[len-1];if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var input;var spreadArgs=true;if(len===2&&Array.isArray(arguments[0])){input=arguments[0];len=input.length;spreadArgs=false;}else{input=arguments;len--;}var resources=new ResourceList(len);for(var i=0;i<len;++i){var resource=input[i];if(Disposer.isDisposer(resource)){var disposer=resource;resource=resource.promise();resource._setDisposable(disposer);}else{var maybePromise=tryConvertToPromise(resource);if(maybePromise instanceof Promise){resource=maybePromise._then(maybeUnwrapDisposer,null,null,{resources:resources,index:i},undefined);}}resources[i]=resource;}var reflectedResources=new Array(resources.length);for(var i=0;i<reflectedResources.length;++i){reflectedResources[i]=Promise.resolve(resources[i]).reflect();}var resultPromise=Promise.all(reflectedResources).then(function(inspections){for(var i=0;i<inspections.length;++i){var inspection=inspections[i];if(inspection.isRejected()){errorObj.e=inspection.error();return errorObj;}else if(!inspection.isFulfilled()){resultPromise.cancel();return;}inspections[i]=inspection.value();}promise._pushContext();fn=tryCatch(fn);var ret=spreadArgs?fn.apply(undefined,inspections):fn(inspections);var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,"Promise.using",promise);return ret;});var promise=resultPromise.lastly(function(){var inspection=new Promise.PromiseInspection(resultPromise);return dispose(resources,inspection);});resources.promise=promise;promise._setOnCancel(resources);return promise;};Promise.prototype._setDisposable=function(disposer){this._bitField=this._bitField|131072;this._disposer=disposer;};Promise.prototype._isDisposable=function(){return(this._bitField&131072)>0;};Promise.prototype._getDisposer=function(){return this._disposer;};Promise.prototype._unsetDisposable=function(){this._bitField=this._bitField&~131072;this._disposer=undefined;};Promise.prototype.disposer=function(fn){if(typeof fn==="function"){return new FunctionDisposer(fn,this,createContext());}throw new TypeError();};};},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){"use strict";var es5=_dereq_("./es5");var canEvaluate=typeof navigator=="undefined";var errorObj={e:{}};var tryCatchTarget;var globalObject=typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this!==undefined?this:null;function tryCatcher(){try{var target=tryCatchTarget;tryCatchTarget=null;return target.apply(this,arguments);}catch(e){errorObj.e=e;return errorObj;}}function tryCatch(fn){tryCatchTarget=fn;return tryCatcher;}var inherits=function inherits(Child,Parent){var hasProp={}.hasOwnProperty;function T(){this.constructor=Child;this.constructor$=Parent;for(var propertyName in Parent.prototype){if(hasProp.call(Parent.prototype,propertyName)&&propertyName.charAt(propertyName.length-1)!=="$"){this[propertyName+"$"]=Parent.prototype[propertyName];}}}T.prototype=Parent.prototype;Child.prototype=new T();return Child.prototype;};function isPrimitive(val){return val==null||val===true||val===false||typeof val==="string"||typeof val==="number";}function isObject(value){return typeof value==="function"||(typeof value==='undefined'?'undefined':_typeof2(value))==="object"&&value!==null;}function maybeWrapAsError(maybeError){if(!isPrimitive(maybeError))return maybeError;return new Error(safeToString(maybeError));}function withAppended(target,appendee){var len=target.length;var ret=new Array(len+1);var i;for(i=0;i<len;++i){ret[i]=target[i];}ret[i]=appendee;return ret;}function getDataPropertyOrDefault(obj,key,defaultValue){if(es5.isES5){var desc=_Object$getOwnPropertyDescriptor(obj,key);if(desc!=null){return desc.get==null&&desc.set==null?desc.value:defaultValue;}}else{return{}.hasOwnProperty.call(obj,key)?obj[key]:undefined;}}function notEnumerableProp(obj,name,value){if(isPrimitive(obj))return obj;var descriptor={value:value,configurable:true,enumerable:false,writable:true};es5.defineProperty(obj,name,descriptor);return obj;}function thrower(r){throw r;}var inheritedDataKeys=function(){var excludedPrototypes=[Array.prototype,Object.prototype,Function.prototype];var isExcludedProto=function isExcludedProto(val){for(var i=0;i<excludedPrototypes.length;++i){if(excludedPrototypes[i]===val){return true;}}return false;};if(es5.isES5){var getKeys=_Object$getOwnPropertyNames;return function(obj){var ret=[];var visitedKeys=_Object$create(null);while(obj!=null&&!isExcludedProto(obj)){var keys;try{keys=getKeys(obj);}catch(e){return ret;}for(var i=0;i<keys.length;++i){var key=keys[i];if(visitedKeys[key])continue;visitedKeys[key]=true;var desc=_Object$getOwnPropertyDescriptor(obj,key);if(desc!=null&&desc.get==null&&desc.set==null){ret.push(key);}}obj=es5.getPrototypeOf(obj);}return ret;};}else{var hasProp={}.hasOwnProperty;return function(obj){if(isExcludedProto(obj))return[];var ret=[];/*jshint forin:false */enumeration:for(var key in obj){if(hasProp.call(obj,key)){ret.push(key);}else{for(var i=0;i<excludedPrototypes.length;++i){if(hasProp.call(excludedPrototypes[i],key)){continue enumeration;}}ret.push(key);}}return ret;};}}();var thisAssignmentPattern=/this\s*\.\s*\S+\s*=/;function isClass(fn){try{if(typeof fn==="function"){var keys=es5.names(fn.prototype);var hasMethods=es5.isES5&&keys.length>1;var hasMethodsOtherThanConstructor=keys.length>0&&!(keys.length===1&&keys[0]==="constructor");var hasThisAssignmentAndStaticMethods=thisAssignmentPattern.test(fn+"")&&es5.names(fn).length>0;if(hasMethods||hasMethodsOtherThanConstructor||hasThisAssignmentAndStaticMethods){return true;}}return false;}catch(e){return false;}}function toFastProperties(obj){/*jshint -W027,-W055,-W031*/function FakeConstructor(){}FakeConstructor.prototype=obj;var l=8;while(l--){new FakeConstructor();}return obj;eval(obj);}var rident=/^[a-z$_][a-z$_0-9]*$/i;function isIdentifier(str){return rident.test(str);}function filledRange(count,prefix,suffix){var ret=new Array(count);for(var i=0;i<count;++i){ret[i]=prefix+i+suffix;}return ret;}function safeToString(obj){try{return obj+"";}catch(e){return"[no string representation]";}}function isError(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof2(obj))==="object"&&typeof obj.message==="string"&&typeof obj.name==="string";}function markAsOriginatingFromRejection(e){try{notEnumerableProp(e,"isOperational",true);}catch(ignore){}}function originatesFromRejection(e){if(e==null)return false;return e instanceof Error["__BluebirdErrorTypes__"].OperationalError||e["isOperational"]===true;}function canAttachTrace(obj){return isError(obj)&&es5.propertyIsWritable(obj,"stack");}var ensureErrorObject=function(){if(!("stack"in new Error())){return function(value){if(canAttachTrace(value))return value;try{throw new Error(safeToString(value));}catch(err){return err;}};}else{return function(value){if(canAttachTrace(value))return value;return new Error(safeToString(value));};}}();function classString(obj){return{}.toString.call(obj);}function copyDescriptors(from,to,filter){var keys=es5.names(from);for(var i=0;i<keys.length;++i){var key=keys[i];if(filter(key)){try{es5.defineProperty(to,key,es5.getDescriptor(from,key));}catch(ignore){}}}}var asArray=function asArray(v){if(es5.isArray(v)){return v;}return null;};if(typeof _Symbol!=="undefined"&&_Symbol$iterator){var ArrayFrom=typeof _Array$from==="function"?function(v){return _Array$from(v);}:function(v){var ret=[];var it=_getIterator(v);var itResult;while(!(itResult=it.next()).done){ret.push(itResult.value);}return ret;};asArray=function asArray(v){if(es5.isArray(v)){return v;}else if(v!=null&&typeof v[_Symbol$iterator]==="function"){return ArrayFrom(v);}return null;};}var isNode=typeof process!=="undefined"&&classString(process).toLowerCase()==="[object process]";function env(key,def){return isNode?process.env[key]:def;}function getNativePromise(){if(typeof _Promise==="function"){try{var promise=new _Promise(function(){});if({}.toString.call(promise)==="[object Promise]"){return _Promise;}}catch(e){}}}function domainBind(self,cb){return self.bind(cb);}var ret={isClass:isClass,isIdentifier:isIdentifier,inheritedDataKeys:inheritedDataKeys,getDataPropertyOrDefault:getDataPropertyOrDefault,thrower:thrower,isArray:es5.isArray,asArray:asArray,notEnumerableProp:notEnumerableProp,isPrimitive:isPrimitive,isObject:isObject,isError:isError,canEvaluate:canEvaluate,errorObj:errorObj,tryCatch:tryCatch,inherits:inherits,withAppended:withAppended,maybeWrapAsError:maybeWrapAsError,toFastProperties:toFastProperties,filledRange:filledRange,toString:safeToString,canAttachTrace:canAttachTrace,ensureErrorObject:ensureErrorObject,originatesFromRejection:originatesFromRejection,markAsOriginatingFromRejection:markAsOriginatingFromRejection,classString:classString,copyDescriptors:copyDescriptors,hasDevTools:typeof chrome!=="undefined"&&chrome&&typeof chrome.loadTimes==="function",isNode:isNode,env:env,global:globalObject,getNativePromise:getNativePromise,domainBind:domainBind};ret.isRecentNode=ret.isNode&&function(){var version=process.versions.node.split(".").map(Number);return version[0]===0&&version[1]>10||version[0]>0;}();if(ret.isNode)ret.toFastProperties(process);try{throw new Error();}catch(e){ret.lastLineError=e;}module.exports=ret;},{"./es5":13}]},{},[4])(4);});;if(typeof window!=='undefined'&&window!==null){window.P=window.Promise;}else if(typeof self!=='undefined'&&self!==null){self.P=self.Promise;}/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(20),function(){return this;}(),__webpack_require__(21).setImmediate);/***/},/* 20 *//***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 21 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(setImmediate,clearImmediate){var nextTick=__webpack_require__(22).nextTick;var apply=Function.prototype.apply;var slice=Array.prototype.slice;var immediateIds={};var nextImmediateId=0;// DOM APIs, for completeness
exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,window,arguments),clearTimeout);};exports.setInterval=function(){return new Timeout(apply.call(setInterval,window,arguments),clearInterval);};exports.clearTimeout=exports.clearInterval=function(timeout){timeout.close();};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn;}Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(window,this._id);};// Does not start the time, just sets up the members needed.
exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs;};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1;};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)item._onTimeout();},msecs);}};// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate=typeof setImmediate==="function"?setImmediate:function(fn){var id=nextImmediateId++;var args=arguments.length<2?false:slice.call(arguments,1);immediateIds[id]=true;nextTick(function onNextTick(){if(immediateIds[id]){// fn.call() is faster so we optimize for the common use-case
// @see http://jsperf.com/call-apply-segu
if(args){fn.apply(null,args);}else{fn.call(null);}// Prevent ids from leaking
exports.clearImmediate(id);}});return id;};exports.clearImmediate=typeof clearImmediate==="function"?clearImmediate:function(id){delete immediateIds[id];};/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(21).setImmediate,__webpack_require__(21).clearImmediate);/***/},/* 22 *//***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 23 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global,module){/**
	 * @license
	 * lodash <https://lodash.com/>
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.16.4';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://github.com/es-shims.',FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for function metadata. */var BIND_FLAG=1,BIND_KEY_FLAG=2,CURRY_BOUND_FLAG=4,CURRY_FLAG=8,CURRY_RIGHT_FLAG=16,PARTIAL_FLAG=32,PARTIAL_RIGHT_FLAG=64,ARY_FLAG=128,REARG_FLAG=256,FLIP_FLAG=512;/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=500,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',ARY_FLAG],['bind',BIND_FLAG],['bindKey',BIND_KEY_FLAG],['curry',CURRY_FLAG],['curryRight',CURRY_RIGHT_FLAG],['flip',FLIP_FLAG],['partial',PARTIAL_FLAG],['partialRight',PARTIAL_RIGHT_FLAG],['rearg',REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f\\ufe20-\\ufe23',rsComboSymbolsRange='\\u20d0-\\u20f0',rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos='[\'\u2019]',rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboMarksRange+rsComboSymbolsRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var rsLowerMisc='(?:'+rsLower+'|'+rsMisc+')',rsUpperMisc='(?:'+rsUpper+'|'+rsMisc+')',rsOptLowerContr='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptUpperContr='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptLowerContr+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsUpperMisc+'+'+rsOptUpperContr+'(?='+[rsBreak,rsUpper+rsLowerMisc,'$'].join('|')+')',rsUpper+'?'+rsLowerMisc+'+'+rsOptLowerContr,rsUpper+'+'+rsOptUpperContr,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboMarksRange+rsComboSymbolsRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010A':'C','\u010C':'C','\u0107':'c','\u0109':'c','\u010B':'c','\u010D':'c','\u010E':'D','\u0110':'D','\u010F':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011A':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011B':'e','\u011C':'G','\u011E':'G','\u0120':'G','\u0122':'G','\u011D':'g','\u011F':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012A':'I','\u012C':'I','\u012E':'I','\u0130':'I','\u0129':'i','\u012B':'i','\u012D':'i','\u012F':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013B':'L','\u013D':'L','\u013F':'L','\u0141':'L','\u013A':'l','\u013C':'l','\u013E':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014A':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014B':'n','\u014C':'O','\u014E':'O','\u0150':'O','\u014D':'o','\u014F':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015A':'S','\u015C':'S','\u015E':'S','\u0160':'S','\u015B':'s','\u015D':'s','\u015F':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016A':'U','\u016C':'U','\u016E':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016B':'u','\u016D':'u','\u016F':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017B':'Z','\u017D':'Z','\u017A':'z','\u017C':'z','\u017E':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017F':'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof2(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(typeof exports==='undefined'?'undefined':_typeof2(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==='undefined'?'undefined':_typeof2(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*//**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array?array.length:0;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEachRight(array,iteratee){var length=array?array.length:0;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */function arrayEvery(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */function arrayFilter(array,predicate){var index=-1,length=array?array.length:0,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludes(array,value){var length=array?array.length:0;return!!length&&baseIndexOf(array,value,0)>-1;}/**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array?array.length:0;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array?array.length:0;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */function arraySome(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */var asciiSize=baseProperty('length');/**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function asciiToArray(string){return string.split('');}/**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */function baseIsNaN(value){return value!==value;}/**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */function baseMean(array,iteratee){var length=array?array.length:0;return length?baseSum(array,iteratee)/length:NAN;}/**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}/**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */function baseUnary(func){return function(value){return func(value);};}/**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
	   * Checks if a `cache` value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function cacheHas(cache,key){return cache.has(key);}/**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */var deburrLetter=basePropertyOf(deburredLetters);/**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */function getValue(object,key){return object==null?undefined:object[key];}/**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */function hasUnicode(string){return reHasUnicode.test(string);}/**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
	   * A specialized version of `_.indexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
	   * A specialized version of `_.lastIndexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*//**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */var runInContext=function runInContext(context){context=context?_.defaults(root.Object(),context,_.pick(root,contextProps)):root;/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */var objectToString=objectProto.toString;/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,_Symbol2=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),iteratorSymbol=_Symbol2?_Symbol2.iterator:undefined,objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=_Symbol2?_Symbol2.isConcatSpreadable:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol2?_Symbol2.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*//**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array of at least `200` elements
	     * and any iteratees accept only one argument. The heuristic for whether a
	     * section qualifies for shortcut fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} proto The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();/**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */function baseLodash(){}// No operation performed.
/**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}/**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */lodash.templateSettings={/**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'escape':reEscape,/**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'evaluate':reEvaluate,/**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'interpolate':reInterpolate,/**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */'variable':'',/**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */'imports':{/**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*//**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||arrLength<LARGE_ARRAY_SIZE||arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*//**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*//**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */function listCacheClear(){this.__data__=[];this.size=0;}/**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*//**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*//**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*//**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function stackGet(key){return this.__data__.get(key);}/**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function stackHas(key){return this.__data__.has(key);}/**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*//**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
	     * A specialized version of `_.sample` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @returns {*} Returns the random element.
	     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}/**
	     * A specialized version of `_.sampleSize` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
	     * A specialized version of `_.shuffle` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
	     * Used by `_.defaults` to customize its `_.assignIn` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */function assignInDefaults(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths of elements to pick.
	     * @returns {Array} Returns the picked elements.
	     */function baseAt(object,paths){var index=-1,isNil=object==null,length=paths.length,result=Array(length);while(++index<length){result[index]=isNil?undefined:get(object,paths[index]);}return result;}/**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}/**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {boolean} [isFull] Specify a clone including symbols.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);var props=isArr?undefined:(isFull?getAllKeys:keys)(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}/**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEach=createBaseEach(baseForOwn);/**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseFor=createBaseFor();/**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseForRight=createBaseFor(true);/**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
	     * The base implementation of `getTag`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */function baseGetTag(value){return objectToString.call(value);}/**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */function baseGt(value,other){return value>other;}/**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */function baseInvoke(object,path,args){if(!isKey(path,object)){path=castPath(path);object=parent(object,path);path=last(path);}var func=object==null?object:object[toKey(path)];return func==null?undefined:apply(func,object,args);}/**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */function baseIsArguments(value){return isObjectLike(value)&&objectToString.call(value)==argsTag;}/**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */function baseIsArrayBuffer(value){return isObjectLike(value)&&objectToString.call(value)==arrayBufferTag;}/**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */function baseIsDate(value){return isObjectLike(value)&&objectToString.call(value)==dateTag;}/**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {boolean} [bitmask] The bitmask of comparison flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - Unordered comparison
	     *     2 - Partial comparison
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}/**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}/**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}return true;}/**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */function baseIsRegExp(value){return isObject(value)&&objectToString.call(value)==regexpTag;}/**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}/**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof2(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */function baseLt(value,other){return value<other;}/**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}/**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}/**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     */function basePick(object,props){object=Object(object);return basePickBy(object,props,function(value,key){return key in object;});}/**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick from.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */function basePickBy(object,props,predicate){var index=-1,length=props.length,result={};while(++index<length){var key=props[index],value=object[key];if(predicate(value,key)){baseAssignValue(result,key,value);}}return result;}/**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else if(!isKey(index,array)){var path=castPath(index),object=parent(array,path);if(object!=null){delete object[toKey(last(path))];}}else{delete array[toKey(index)];}}}return array;}/**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
	     * The base implementation of `_.sample`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     */function baseSample(collection){return arraySample(values(collection));}/**
	     * The base implementation of `_.sampleSize` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
	     * The base implementation of `setData` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
	     * The base implementation of `setToString` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
	     * The base implementation of `_.shuffle`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */function baseUnset(object,path){path=isKey(path,object)?[path]:castPath(path);object=parent(object,path);var key=toKey(last(path));return!(object!=null&&hasOwnProperty.call(object,key))||delete object[key];}/**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */function baseXor(arrays,iteratee,comparator){var index=-1,length=arrays.length;while(++index<length){var result=result?arrayPush(baseDifference(result,arrays[index],iteratee,comparator),baseDifference(arrays[index],result,iteratee,comparator)):arrays[index];}return result&&result.length?baseUniq(result,iteratee,comparator):[];}/**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}/**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */function castFunction(value){return typeof value=='function'?value:identity;}/**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast property path array.
	     */function castPath(value){return isArray(value)?value:stringToPath(value);}/**
	     * A `baseRest` alias which can be replaced with `identity` by module
	     * replacement plugins.
	     *
	     * @private
	     * @type {Function}
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */var castRest=baseRest;/**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}/**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
	     * Copies own symbol properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createBind(func,bitmask,thisArg){var isBind=bitmask&BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(ARY_FLAG|CURRY_FLAG|PARTIAL_FLAG|REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)&&value.length>=LARGE_ARRAY_SIZE){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&ARY_FLAG,isBind=bitmask&BIND_FLAG,isBindKey=bitmask&BIND_KEY_FLAG,isCurried=bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG),isFlip=bitmask&FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?PARTIAL_FLAG:PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?PARTIAL_RIGHT_FLAG:PARTIAL_FLAG);if(!(bitmask&CURRY_BOUND_FLAG)){bitmask&=~(BIND_FLAG|BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=nativeMin(toInteger(precision),292);if(precision){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     *   512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]==null?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG)){bitmask&=~(CURRY_FLAG|CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==CURRY_FLAG||bitmask==CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==PARTIAL_FLAG||bitmask==(BIND_FLAG|PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&UNORDERED_COMPARE_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=UNORDERED_COMPARE_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
	     * A specialized version of `baseRest` which flattens the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}/**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
	     * Creates an array of the own enumerable symbol properties of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
	     * Creates an array of the own and inherited enumerable symbol properties
	     * of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof2(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof2(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof2(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */var isMaskable=coreJsData?isFunction:stubFalse;/**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
	     * A specialized version of `_.memoize` which clears the memoized function's
	     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	     *
	     * @private
	     * @param {Function} func The function to have its output memoized.
	     * @returns {Function} Returns the new memoized function.
	     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(BIND_FLAG|BIND_KEY_FLAG|ARY_FLAG);var isCombo=srcBitmask==ARY_FLAG&&bitmask==CURRY_FLAG||srcBitmask==ARY_FLAG&&bitmask==REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(ARY_FLAG|REARG_FLAG)&&source[7].length<=source[8]&&bitmask==CURRY_FLAG;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&BIND_FLAG?0:CURRY_BOUND_FLAG;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}/**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */function mergeDefaults(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,mergeDefaults,stack);stack['delete'](srcValue);}return objValue;}/**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
	     * A specialized version of `baseRest` which transforms the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @param {Function} transform The rest array transform.
	     * @returns {Function} Returns the new function.
	     */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */function parent(object,path){return path.length==1?object:baseGet(object,baseSlice(path,0,-1));}/**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var setData=shortOut(baseSetData);/**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
	     * Sets the `toString` method of `func` to return `string`.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */var setToString=shortOut(baseSetToString);/**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
	     * Creates a function that'll short out and invoke `identity` instead
	     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	     * milliseconds.
	     *
	     * @private
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new shortable function.
	     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
	     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @param {number} [size=array.length] The size of `array`.
	     * @returns {Array} Returns `array`.
	     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */var stringToPath=memoizeCapped(function(string){string=toString(string);var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to process.
	     * @returns {string} Returns the source code.
	     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*//**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array?array.length:0;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */function compact(array){var index=-1,length=array?array.length:0,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. The order and
	     * references of result values are determined by the first array. The comparator
	     * is invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});/**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function drop(array,n,guard){var length=array?array.length:0;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function dropRight(array,n,guard){var length=array?array.length:0;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */function fill(array,value,start,end){var length=array?array.length:0;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */function findIndex(array,predicate,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */function findLastIndex(array,predicate,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */function flatten(array){var length=array?array.length:0;return length?baseFlatten(array,1):[];}/**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */function flattenDeep(array){var length=array?array.length:0;return length?baseFlatten(array,INFINITY):[];}/**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */function flattenDepth(array,depth){var length=array?array.length:0;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}/**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */function fromPairs(pairs){var index=-1,length=pairs?pairs.length:0,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */function head(array){return array&&array.length?array[0]:undefined;}/**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */function initial(array){var length=array?array.length:0;return length?baseSlice(array,0,-1):[];}/**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. The order and references
	     * of result values are determined by the first array. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(comparator===last(mapped)){comparator=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});/**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */function join(array,separator){return array?nativeJoin.call(array,separator):'';}/**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */function last(array){var length=array?array.length:0;return length?array[length-1]:undefined;}/**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */function lastIndexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}/**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */var pull=baseRest(pullAll);/**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}/**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */var pullAt=flatRest(function(array,indexes){var length=array?array.length:0,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function reverse(array){return array?nativeReverse.call(array):array;}/**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function slice(array,start,end){var length=array?array.length:0;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}/**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */function sortedIndexOf(array,value){var length=array?array.length:0;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */function sortedLastIndexOf(array,value){var length=array?array.length:0;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */function tail(array){var length=array?array.length:0;return length?baseSlice(array,1,length):[];}/**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */function takeRight(array,n,guard){var length=array?array.length:0;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);if(isArrayLikeObject(comparator)){comparator=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});/**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each element
	     * is kept. The order of result values is determined by the order they occur
	     * in the array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The order of result values is determined by the
	     * order they occur in the array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The order of result values is
	     * determined by the order they occur in the array.The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */function uniqWith(array,comparator){return array&&array.length?baseUniq(array,undefined,comparator):[];}/**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}/**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The order of result values is determined
	     * by the order they occur in the arrays. The iteratee is invoked with one
	     * argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The order of result values is
	     * determined by the order they occur in the arrays. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);if(isArrayLikeObject(comparator)){comparator=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});/**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */var zip=baseRest(unzip);/**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*//**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */function tap(value,interceptor){interceptor(value);return value;}/**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */function thru(value,interceptor){return interceptor(value);}/**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths of elements to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});/**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */function wrapperChain(){return chain(this);}/**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */function wrapperToIterator(){return this;}/**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*//**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});/**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */var find=createFind(findIndex);/**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */var findLast=createFind(findLastIndex);/**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _.forEach([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});/**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',isProp=isKey(path),result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){var func=isFunc?path:isProp&&value!=null?value[path]:undefined;result[++index]=func?apply(func,value,args):baseInvoke(value,path,args);});return result;});/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, [function(o) { return o.user; }]);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*//**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred invocation.
	     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*//**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}/**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */var bind=baseRest(function(func,thisArg,partials){var bitmask=BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */var bindKey=baseRest(function(object,key,partials){var bitmask=BIND_FLAG|BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}/**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide `options` to indicate whether `func` should be invoked on the
	     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent
	     * calls to the debounced function return the result of the last `func`
	     * invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the debounced function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one millisecond.
	     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */function flip(func){return createWrap(func,FLIP_FLAG);}/**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided, it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoized function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */function once(func){return before(2,func);}/**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
	     * Creates a function that invokes `func` with `partials` prepended to the
	     * arguments it receives. This method is like `_.bind` except it does **not**
	     * alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,PARTIAL_FLAG,undefined,partials,holders);});/**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to the arguments it receives.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified `indexes` where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, [2, 0, 1]);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */var rearg=flatRest(function(func,indexes){return createWrap(func,REARG_FLAG,undefined,undefined,undefined,indexes);});/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide `options` to indicate whether `func`
	     * should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */function unary(func){return ary(func,1);}/**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */function wrap(value,wrapper){wrapper=wrapper==null?identity:wrapper;return partial(wrapper,value);}/*------------------------------------------------------------------------*//**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */function clone(value){return baseClone(value,false,true);}/**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */function cloneWith(value,customizer){return baseClone(value,false,true,customizer);}/**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.clone
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */function cloneDeep(value){return baseClone(value,true,true);}/**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */function cloneDeepWith(value,customizer){return baseClone(value,true,true,customizer);}/**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @see _.lt
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */var gt=createRelationalOperation(baseGt);/**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @see _.lte
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */var isArray=Array.isArray;/**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&objectToString.call(value)==boolTag;}/**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */var isBuffer=nativeIsBuffer||stubFalse;/**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */function isElement(value){return value!=null&&value.nodeType===1&&isObjectLike(value)&&!isPlainObject(value);}/**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */function isEmpty(value){if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are **not** supported.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */function isEqual(value,other){return baseIsEqual(value,other);}/**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,customizer):!!result;}/**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */function isError(value){if(!isObjectLike(value)){return false;}return objectToString.call(value)==errorTag||typeof value.message=='string'&&typeof value.name=='string';}/**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag||tag==proxyTag;}/**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof2(value);return value!=null&&(type=='object'||type=='function');}/**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */function isObjectLike(value){return value!=null&&(typeof value==='undefined'?'undefined':_typeof2(value))=='object';}/**
	     * Checks if `value` is classified as a `Map` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     * @example
	     *
	     * _.isMap(new Map);
	     * // => true
	     *
	     * _.isMap(new WeakMap);
	     * // => false
	     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}/**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */function isNull(value){return value===null;}/**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */function isNil(value){return value==null;}/**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&objectToString.call(value)==numberTag;}/**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
	     * Checks if `value` is classified as a `Set` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     * @example
	     *
	     * _.isSet(new Set);
	     * // => true
	     *
	     * _.isSet(new WeakSet);
	     * // => false
	     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}/**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof2(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */function isUndefined(value){return value===undefined;}/**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */function isWeakSet(value){return isObjectLike(value)&&objectToString.call(value)==weakSetTag;}/**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @see _.gt
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */var lt=createRelationalOperation(baseLt);/**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @see _.gte
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(iteratorSymbol&&value[iteratorSymbol]){return iteratorToArray(value[iteratorSymbol]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */function toSafeInteger(value){return baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER);}/**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*//**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assignIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assign({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3 }
	     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assign
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignInWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths of elements to pick.
	     * @returns {Array} Returns the picked values.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     */var at=flatRest(baseAt);/**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */function create(prototype,properties){var result=baseCreate(prototype);return properties?baseAssign(result,properties):result;}/**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaultsDeep
	     * @example
	     *
	     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var defaults=baseRest(function(args){args.push(undefined,assignInDefaults);return apply(assignInWith,undefined,args);});/**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaults
	     * @example
	     *
	     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	     * // => { 'a': { 'b': 2, 'c': 3 } }
	     */var defaultsDeep=baseRest(function(args){args.push(undefined,mergeDefaults);return apply(mergeWith,undefined,args);});/**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
	     * Iterates over own enumerable string keyed properties of an object and
	     * invokes `iteratee` for each property. The iteratee is invoked with three
	     * arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwnRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined`, the `defaultValue` is returned in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));/**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` thru `iteratee`. The
	     * corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */var invoke=baseRest(baseInvoke);/**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively. Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {
	     *   'a': [{ 'b': 2 }, { 'd': 4 }]
	     * };
	     *
	     * var other = {
	     *   'a': [{ 'c': 3 }, { 'e': 5 }]
	     * };
	     *
	     * _.merge(object, other);
	     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined`, merging is handled by the
	     * method instead. The `customizer` is invoked with six arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = { 'a': [1], 'b': [2] };
	     * var other = { 'a': [3], 'b': [4] };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'a': [1, 3], 'b': [2, 4] }
	     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable string keyed properties of `object` that are
	     * not omitted.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to omit.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */var omit=flatRest(function(object,props){if(object==null){return{};}props=arrayMap(props,toKey);return basePick(object,baseDifference(getAllKeysIn(object),props));});/**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */var pick=flatRest(function(object,props){return object==null?{}:basePick(object,arrayMap(props,toKey));});/**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */function pickBy(object,predicate){return object==null?{}:basePickBy(object,getAllKeysIn(object),getIteratee(predicate));}/**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */function result(object,path,defaultValue){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){object=undefined;length=1;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}/**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	     * entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */var toPairs=createToPairs(keys);/**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	     * or set, its entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
	     */var toPairsIn=createToPairs(keysIn);/**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */function values(object){return object?baseValues(object,keys(object)):[];}/**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*//**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*//**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
	     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	     * corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */var lowerFirst=createCaseFirst('toLowerCase');/**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */function startsWith(string,target,position){string=toString(string);position=baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES template literal delimiter as an "interpolate" delimiter.
	     * // Disable support by replacing the "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,assignInDefaults);var imports=assignInWith({},options.imports,settings.imports,assignInDefaults),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
var sourceURL='//# sourceURL='+('sourceURL'in options?options.sourceURL:'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */function toLower(value){return toString(value).toLowerCase();}/**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */function toUpper(value){return toString(value).toUpperCase();}/**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */var upperFirst=createCaseFirst('toUpperCase');/**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*//**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'click': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, ['click']);
	     * jQuery(element).on('click', view.click);
	     * // => Logs 'clicked docs' when clicked.
	     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */function cond(pairs){var length=pairs?pairs.length:0,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */function conforms(source){return baseConforms(baseClone(source,true));}/**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */function constant(value){return function(){return value;};}/**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flowRight
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow([_.add, square]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flow=createFlow();/**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 3.0.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flow
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight([square, _.add]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flowRight=createFlow(true);/**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */function identity(value){return value;}/**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,true));}/**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     */function matches(source){return baseMatches(baseClone(source,true));}/**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,true));}/**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': _.constant(2) } },
	     *   { 'a': { 'b': _.constant(1) } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b']));
	     * // => [2, 1]
	     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */function noop(){}// No operation performed.
/**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
	     * Creates a function that invokes `iteratees` with the arguments it receives
	     * and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over([Math.max, Math.min]);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */var over=createOver(arrayMap);/**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */var overEvery=createOver(arrayEvery);/**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     */var overSome=createOver(arraySome);/**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': 2 } },
	     *   { 'a': { 'b': 1 } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	     * // => [1, 2]
	     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}/**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified,
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.rangeRight
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */var range=createRange();/**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.range
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */var rangeRight=createRange(true);/**
	     * This method returns a new empty array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Array} Returns the new empty array.
	     * @example
	     *
	     * var arrays = _.times(2, _.stubArray);
	     *
	     * console.log(arrays);
	     * // => [[], []]
	     *
	     * console.log(arrays[0] === arrays[1]);
	     * // => false
	     */function stubArray(){return[];}/**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */function stubFalse(){return false;}/**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */function stubObject(){return{};}/**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */function stubString(){return'';}/**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */function stubTrue(){return true;}/**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(value));}/**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*//**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */var ceil=createRound('ceil');/**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */var floor=createRound('floor');/**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */function mean(array){return baseMean(array,identity);}/**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}/**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */var round=createRound('round');/**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*//**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){var filtered=this.__filtered__;if(filtered&&!index){return new LazyWrapper(this);}n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.clone();if(filtered){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'',names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(iteratorSymbol){lodash.prototype[iteratorSymbol]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/// Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if(true){// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
!(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _;}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}// Check for `exports` after `define` in case a build optimizer adds it.
else if(freeModule){// Export for Node.js.
(freeModule.exports=_)._=_;// Export for CommonJS support.
freeExports._=_;}else{// Export to the global object.
root._=_;}}).call(this);/* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}(),__webpack_require__(24)(module));/***/},/* 24 *//***/function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
module.children=[];module.webpackPolyfill=1;}return module;};/***/},/* 25 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.default=undefined;var _extends=_Object$assign2||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _midiFileParser=__webpack_require__(26);var _midiFileParser2=_interopRequireDefault(_midiFileParser);var _midiWriterJs=__webpack_require__(27);var _midiWriterJs2=_interopRequireDefault(_midiWriterJs);var _lodash=__webpack_require__(23);var _lodash2=_interopRequireDefault(_lodash);var _INSTRUMENT_MIDI_MAPPING=__webpack_require__(32);var _INSTRUMENT_MIDI_MAPPING2=_interopRequireDefault(_INSTRUMENT_MIDI_MAPPING);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var minutesInMS=60000000;var MidiIO=function(){MidiIO.getWriter=function getWriter(){return _midiWriterJs2.default;};MidiIO.getUniqueFromMidiNotes=function getUniqueFromMidiNotes(notes){var set=new _Set();notes.forEach(function(note){set.add(note.payload.noteName);});return _Array$from(set);};MidiIO.midiNoteNumberToName=function midiNoteNumberToName(midi){var scaleIndexToNote=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];var octave=Math.floor(midi/12)-1;var note=midi%12;return scaleIndexToNote[note]+octave;};MidiIO.urlToJSON=function urlToJSON(midiURL){return MidiIO.urlToBinaryString(midiURL).then(function(binaryStringMidi){return MidiIO.binaryStringToJSON(binaryStringMidi);});};MidiIO.getAllMetadata=function getAllMetadata(parsedMidi,tracks){var metaTrack=parsedMidi.tracks[0];var indexedMeta=metaTrack.reduce(function(prev,current,i){var _Object$assign;var updated=_Object$assign2({},prev,(_Object$assign={},_Object$assign[current.type+'_'+current.subtype]=current,_Object$assign));return updated;},{});var meta_setTempo=indexedMeta.meta_setTempo;var meta_keySignature=indexedMeta.meta_keySignature;var meta_timeSignature=indexedMeta.meta_timeSignature;var meta_endOfTrack=indexedMeta.meta_endOfTrack;var ticksPerBeat=parsedMidi.header.ticksPerBeat;var microsecondsPerBeat=meta_setTempo.microsecondsPerBeat;var millisecondsPerTick=MidiIO.getMillisecondsPerTick(microsecondsPerBeat,ticksPerBeat);var tempo=meta_setTempo;var timeSignature=meta_timeSignature;var keySignature=meta_keySignature;var endOfTrack=meta_endOfTrack;var timeSignatureNumerator=timeSignature.numerator;var timeSignatureDenominator=timeSignature.denominator;var timeSignatureMetronome=timeSignature.metronome;var timeSignatureThirtyseconds=timeSignature.thirtyseconds;var instrumentNumbers=tracks.map(function(track){return track.programChange[0].programNumber;});// [0].programNumber
var instrumentNames=instrumentNumbers.map(function(instrumentNumber){return _Object$keys(_INSTRUMENT_MIDI_MAPPING2.default).find(function(instrumentKey){return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey]===instrumentNumber;});});var _MidiIO$getBPMData=MidiIO.getBPMData(microsecondsPerBeat,ticksPerBeat,timeSignature);var BPM=_MidiIO$getBPMData.BPM;var metaObject={tempo:tempo,keySignature:keySignature,timeSignature:timeSignature,timeSignatureNumerator:timeSignatureNumerator,timeSignatureDenominator:timeSignatureDenominator,timeSignatureMetronome:timeSignatureMetronome,timeSignatureThirtyseconds:timeSignatureThirtyseconds,endOfTrack:endOfTrack,trackCount:tracks.length,microsecondsPerBeat:microsecondsPerBeat,instrumentNumbers:instrumentNumbers,instrumentNames:instrumentNames,millisecondsPerTick:millisecondsPerTick,ticksPerBeat:ticksPerBeat,BPM:BPM};return metaObject;};MidiIO.getAllTracks=function getAllTracks(parsedMidi){var tracks=parsedMidi.tracks.filter(function(track,i){return i>=1;});var indexedTracks=tracks.map(function(track,i){var indexedTrack=track.reduce(function(prev,current){var currentIndex=current.type+'_'+current.subtype;var updated=_Object$assign2({},prev);if(!updated[currentIndex]){updated[currentIndex]=[];}updated[currentIndex].push(current);return updated;},{});var instrumentNumber=indexedTrack.channel_programChange[0].programNumber;var instrumentName=_Object$keys(_INSTRUMENT_MIDI_MAPPING2.default).find(function(instrumentKey){return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey]===instrumentNumber;});return{controller:indexedTrack.channel_controller,programChange:indexedTrack.channel_programChange,trackname:indexedTrack.meta_trackName,noteOn:indexedTrack.channel_noteOn,noteOnValid:indexedTrack.channel_noteOn.filter(function(event){return event.deltaTime>0;}),noteOnInvalid:indexedTrack.channel_noteOn.filter(function(event){return event.deltaTime===0;}),noteOff:indexedTrack.channel_noteOff,endOfTrack:indexedTrack.meta_endOfTrack,noteCount:indexedTrack.channel_noteOn.filter(function(event){return event.deltaTime>0;}).length,instrumentNumber:instrumentNumber,instrumentName:instrumentName};});var meta=MidiIO.getAllMetadata(parsedMidi,indexedTracks);return{meta:meta,musicTracks:indexedTracks};};MidiIO.getInstrumentNameFromMidiTrack=function getInstrumentNameFromMidiTrack(track){var instrument=track.find(function(event){return event.type==='channel'&&event.subtype==='programChange';});// alert(`instrumentNumber ${instrument}`);
var instrumentNumber=instrument.programNumber;// alert(`instrumentNumber ${instrumentNumber}`);
var instrumentName=_Object$keys(_INSTRUMENT_MIDI_MAPPING2.default).find(function(instrumentKey){return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey]===instrumentNumber;});return instrumentName;};MidiIO.getInstrumentNumberFromMidiTrack=function getInstrumentNumberFromMidiTrack(track){var instrument=track.find(function(event){return event.type==='channel'&&event.subtype==='programChange';});var instrumentNumber=void 0;try{instrumentNumber=instrument.programNumber;}catch(err){instrumentNumber=0;console.warn('COULDN\'T FIND INSTRUMENT NUMBER '+instrumentNumber+' defaulting to '+instrumentNumber);}return instrumentNumber;};MidiIO.binaryStringToJSON=function binaryStringToJSON(binaryStringMidi){var parsedMidi=(0,_midiFileParser2.default)(binaryStringMidi);return parsedMidi;};MidiIO.getNoteOnEvents=function getNoteOnEvents(track){var noteOnEvents=track.filter(function(event){return event.type==='channel'&&event.subtype==='noteOn';});var invalidNoteOnEvents=noteOnEvents.filter(function(event){return event.deltaTime===0;});var validNoteOnEvents=noteOnEvents.filter(function(event){return event.deltaTime>0;});return{noteOnEvents:noteOnEvents,validNoteOnEvents:validNoteOnEvents,invalidNoteOnEvents:invalidNoteOnEvents};};MidiIO.getNoteOffEvents=function getNoteOffEvents(track){var noteOffEvents=track.filter(function(event){return event.type==='channel'&&event.subtype==='noteOff';});var invalidNoteOffEvents=noteOffEvents.filter(function(event){return event.deltaTime===0;});var validNoteOffEvents=noteOffEvents.filter(function(event){return event.deltaTime>0;});return{noteOffEvents:noteOffEvents,validNoteOffEvents:validNoteOffEvents,invalidNoteOffEvents:invalidNoteOffEvents};};MidiIO.getTempoFromTrack=function getTempoFromTrack(track){var setTempoEvent=track.find(function(event){return event.type==='meta'&&event.subtype==='setTempo';});var deltaTime=setTempoEvent.deltaTime;var microsecondsPerBeat=setTempoEvent.microsecondsPerBeat;return{deltaTime:deltaTime,microsecondsPerBeat:microsecondsPerBeat};};MidiIO.getMetadataFromTrack=function getMetadataFromTrack(track){var _ref;var microsecondsPerBeat=void 0,keySignature=void 0,timeSignature=void 0,endOfTrack=void 0;track.filter(function(event){return event.type==='meta';}).forEach(function(event){switch(event.subtype){case'setTempo':microsecondsPerBeat=event.microsecondsPerBeat;break;case'keySignature':keySignature={key:event.key,scale:event.scale};break;case'timeSignature':timeSignature={numerator:event.numerator,denominator:event.denominator,metronome:event.metronome,thirtyseconds:event.thirtyseconds};break;case'endOfTrack':endOfTrack={};default:return{name:event.subtype,payload:_extends({},event)};}});return _ref={microsecondsPerBeat:microsecondsPerBeat,keySignature:keySignature,timeSignature:timeSignature,endOfTrack:endOfTrack},_ref[event.subtype]=_extends({},event),_ref;};MidiIO.urlToBinaryString=function urlToBinaryString(midiURL){return _Promise.resolve(true).then(function(){return fetch(midiURL,{method:'GET',headers:{Accept:'audio/mid'}});}).then(function(response){return response.blob();}).then(function(response){return new _Promise(function(resolve){var reader=new FileReader();reader.onloadend=function(){var blob=reader.result;resolve(blob);};reader.readAsBinaryString(response);});}).catch(function(err){console.warn('ERROR IN URLTOBINARYSTRING, '+_JSON$stringify(err));});};MidiIO.noteOffEventToNote=function noteOffEventToNote(noteOffEvent,noteInstrumentName,previousEndTime,msPerTick){var noteNumber=noteOffEvent.noteNumber;var deltaTime=noteOffEvent.deltaTime;var noteName=MidiIO.midiNoteNumberToName(noteNumber);var startTimeInMS=previousEndTime;var durationInMS=deltaTime*msPerTick;var endTimeInMS=startTimeInMS+durationInMS;return{noteNumber:noteNumber,noteName:noteName,startTimeInMS:startTimeInMS,durationInMS:durationInMS,endTimeInMS:endTimeInMS,noteInstrumentName:noteInstrumentName,deltaTime:deltaTime,msPerTick:msPerTick};};MidiIO.getMillisecondsPerTick=function getMillisecondsPerTick(microsecondsPerBeat,ticksPerBeat){var secondsPerBeat=microsecondsPerBeat/1000000;var secondsPerTick=secondsPerBeat/ticksPerBeat;var millisecondsPerTick=secondsPerTick*1000;return millisecondsPerTick;};MidiIO.getBPMData=function getBPMData(microSecondsPerBeat,ticksPerBeat,timeSignature){// const ticksPerBeat = parsedMidi.header.ticksPerBeat;
var timeSignatureNumerator=timeSignature.numerator;var timeSignatureDenominator=timeSignature.denominator;var secondsPerBeat=microSecondsPerBeat/1000000;var secondsPerTick=secondsPerBeat/ticksPerBeat;var BPM=minutesInMS/microSecondsPerBeat*(timeSignatureDenominator/timeSignatureNumerator);// const millisecondsPerTick = secondsPerTick * 1000;
return{BPM:BPM};};MidiIO.bpmToMSPerBeat=function bpmToMSPerBeat(BPM){var timeSignatureNumerator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:4;var timeSignatureDenominator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:4;return minutesInMS/BPM*(timeSignatureNumerator/timeSignatureDenominator);};MidiIO.prototype.setBPM=function setBPM(){var BPM=arguments.length>0&&arguments[0]!==undefined?arguments[0]:60;this.millisecondsPerTick=MidiIO.getMillisecondsPerTick(MidiIO.bpmToMSPerBeat(BPM,this.timeSignatureNumerator,this.timeSignatureDenominator),this.ticksPerBeat);this.BPM=BPM;};function MidiIO(userSettings){_classCallCheck(this,MidiIO);this.settings=_lodash2.default.defaultsDeep(userSettings,{midiURL:null,parsedMidi:null,BPM:-1});this.isInitialised=false;}MidiIO.prototype.parseMidiOld=function parseMidiOld(parsedMidi){var bpm=arguments.length>1&&arguments[1]!==undefined?arguments[1]:-1;this.parsedMidi=parsedMidi;this.ticksPerBeat=parsedMidi.header.ticksPerBeat;var trackMetadata=MidiIO.getMetadataFromTrack(parsedMidi.tracks[0]);var microsecondsPerBeat=trackMetadata.microsecondsPerBeat;var keySignature=trackMetadata.keySignature;var timeSignature=trackMetadata.timeSignature;var endOfTrack=trackMetadata.endOfTrack;this.noteOnEvents=MidiIO.getNoteOnEvents(parsedMidi.tracks[1]);this.noteOffEvents=MidiIO.getNoteOffEvents(parsedMidi.tracks[1]);this.millisecondsPerTick=MidiIO.getMillisecondsPerTick(microsecondsPerBeat,this.ticksPerBeat);// this.secondsPerTick = this.millisecondsPerTick * 10;
try{this.mainInstrumentNumber=MidiIO.getInstrumentNumberFromMidiTrack(parsedMidi.tracks[1]);}catch(err){}try{this.mainInstrumentName=MidiIO.getInstrumentNameFromMidiTrack(parsedMidi.tracks[1]);}catch(err){this.mainInstrumentName='acoustic_grand_piano';}// this.mainInstrumentName = MidiIO.getInstrumentNameFromMidiTrack(parsedMidi.tracks[1]);
this.isInitialised=true;this.timeSignature=timeSignature;this.timeSignatureNumerator=timeSignature.numerator;this.timeSignatureDenominator=timeSignature.denominator;var _MidiIO$getBPMData2=MidiIO.getBPMData(microsecondsPerBeat,this.ticksPerBeat,timeSignature);var BPM=_MidiIO$getBPMData2.BPM;this.BPM=BPM;if(bpm!==-1){this.setBPM(bpm);}return this;};MidiIO.parseMidi=function parseMidi(url){return MidiIO.urlToJSON(url).then(function(parsedMidi){var _MidiIO$getAllTracks=MidiIO.getAllTracks(parsedMidi);var meta=_MidiIO$getAllTracks.meta;var musicTracks=_MidiIO$getAllTracks.musicTracks;return{meta:meta,musicTracks:musicTracks};});};MidiIO.prototype.init=function init(){var _this=this;if(this.settings.midiURL){return MidiIO.urlToJSON(this.settings.midiURL).then(function(parsedMidi){// return this.getAllTracks,
return _this.parseMidi(parsedMidi,_this.settings.BPM);}).catch();}return _Promise.resolve(false);};return MidiIO;}();exports.default=MidiIO;module.exports=exports['default'];/***/},/* 26 *//***/function(module,exports){// https://github.com/gasman/jasmid
//
//
module.exports=function(file){return MidiFile(file);};function MidiFile(data){function readChunk(stream){var id=stream.read(4);var length=stream.readInt32();return{'id':id,'length':length,'data':stream.read(length)};}var lastEventTypeByte;function readEvent(stream){var event={};event.deltaTime=stream.readVarInt();var eventTypeByte=stream.readInt8();if((eventTypeByte&0xf0)==0xf0){/* system / meta event */if(eventTypeByte==0xff){/* meta event */event.type='meta';var subtypeByte=stream.readInt8();var length=stream.readVarInt();switch(subtypeByte){case 0x00:event.subtype='sequenceNumber';if(length!=2)throw"Expected length for sequenceNumber event is 2, got "+length;event.number=stream.readInt16();return event;case 0x01:event.subtype='text';event.text=stream.read(length);return event;case 0x02:event.subtype='copyrightNotice';event.text=stream.read(length);return event;case 0x03:event.subtype='trackName';event.text=stream.read(length);return event;case 0x04:event.subtype='instrumentName';event.text=stream.read(length);return event;case 0x05:event.subtype='lyrics';event.text=stream.read(length);return event;case 0x06:event.subtype='marker';event.text=stream.read(length);return event;case 0x07:event.subtype='cuePoint';event.text=stream.read(length);return event;case 0x20:event.subtype='midiChannelPrefix';if(length!=1)throw"Expected length for midiChannelPrefix event is 1, got "+length;event.channel=stream.readInt8();return event;case 0x2f:event.subtype='endOfTrack';if(length!=0)throw"Expected length for endOfTrack event is 0, got "+length;return event;case 0x51:event.subtype='setTempo';if(length!=3)throw"Expected length for setTempo event is 3, got "+length;event.microsecondsPerBeat=(stream.readInt8()<<16)+(stream.readInt8()<<8)+stream.readInt8();return event;case 0x54:event.subtype='smpteOffset';if(length!=5)throw"Expected length for smpteOffset event is 5, got "+length;var hourByte=stream.readInt8();event.frameRate={0x00:24,0x20:25,0x40:29,0x60:30}[hourByte&0x60];event.hour=hourByte&0x1f;event.min=stream.readInt8();event.sec=stream.readInt8();event.frame=stream.readInt8();event.subframe=stream.readInt8();return event;case 0x58:event.subtype='timeSignature';if(length!=4)throw"Expected length for timeSignature event is 4, got "+length;event.numerator=stream.readInt8();event.denominator=Math.pow(2,stream.readInt8());event.metronome=stream.readInt8();event.thirtyseconds=stream.readInt8();return event;case 0x59:event.subtype='keySignature';if(length!=2)throw"Expected length for keySignature event is 2, got "+length;event.key=stream.readInt8(true);event.scale=stream.readInt8();return event;case 0x7f:event.subtype='sequencerSpecific';event.data=stream.read(length);return event;default:// console.log("Unrecognised meta event subtype: " + subtypeByte);
event.subtype='unknown';event.data=stream.read(length);return event;}event.data=stream.read(length);return event;}else if(eventTypeByte==0xf0){event.type='sysEx';var length=stream.readVarInt();event.data=stream.read(length);return event;}else if(eventTypeByte==0xf7){event.type='dividedSysEx';var length=stream.readVarInt();event.data=stream.read(length);return event;}else{throw"Unrecognised MIDI event type byte: "+eventTypeByte;}}else{/* channel event */var param1;if((eventTypeByte&0x80)==0){/* running status - reuse lastEventTypeByte as the event type.
						eventTypeByte is actually the first parameter
					*/param1=eventTypeByte;eventTypeByte=lastEventTypeByte;}else{param1=stream.readInt8();lastEventTypeByte=eventTypeByte;}var eventType=eventTypeByte>>4;event.channel=eventTypeByte&0x0f;event.type='channel';switch(eventType){case 0x08:event.subtype='noteOff';event.noteNumber=param1;event.velocity=stream.readInt8();return event;case 0x09:event.noteNumber=param1;event.velocity=stream.readInt8();if(event.velocity==0){event.subtype='noteOff';}else{event.subtype='noteOn';}return event;case 0x0a:event.subtype='noteAftertouch';event.noteNumber=param1;event.amount=stream.readInt8();return event;case 0x0b:event.subtype='controller';event.controllerType=param1;event.value=stream.readInt8();return event;case 0x0c:event.subtype='programChange';event.programNumber=param1;return event;case 0x0d:event.subtype='channelAftertouch';event.amount=param1;return event;case 0x0e:event.subtype='pitchBend';event.value=param1+(stream.readInt8()<<7);return event;default:throw"Unrecognised MIDI event type: "+eventType;/* 
						console.log("Unrecognised MIDI event type: " + eventType);
						stream.readInt8();
						event.subtype = 'unknown';
						return event;
						*/}}}stream=Stream(data);var headerChunk=readChunk(stream);if(headerChunk.id!='MThd'||headerChunk.length!=6){throw"Bad .mid file - header not found";}var headerStream=Stream(headerChunk.data);var formatType=headerStream.readInt16();var trackCount=headerStream.readInt16();var timeDivision=headerStream.readInt16();if(timeDivision&0x8000){throw"Expressing time division in SMTPE frames is not supported yet";}else{ticksPerBeat=timeDivision;}var header={'formatType':formatType,'trackCount':trackCount,'ticksPerBeat':ticksPerBeat};var tracks=[];for(var i=0;i<header.trackCount;i++){tracks[i]=[];var trackChunk=readChunk(stream);if(trackChunk.id!='MTrk'){throw"Unexpected chunk - expected MTrk, got "+trackChunk.id;}var trackStream=Stream(trackChunk.data);while(!trackStream.eof()){var event=readEvent(trackStream);tracks[i].push(event);//console.log(event);
}}return{'header':header,'tracks':tracks};};/* Wrapper for accessing strings through sequential reads */function Stream(str){var position=0;function read(length){var result=str.substr(position,length);position+=length;return result;}/* read a big-endian 32-bit integer */function readInt32(){var result=(str.charCodeAt(position)<<24)+(str.charCodeAt(position+1)<<16)+(str.charCodeAt(position+2)<<8)+str.charCodeAt(position+3);position+=4;return result;}/* read a big-endian 16-bit integer */function readInt16(){var result=(str.charCodeAt(position)<<8)+str.charCodeAt(position+1);position+=2;return result;}/* read an 8-bit integer */function readInt8(signed){var result=str.charCodeAt(position);if(signed&&result>127)result-=256;position+=1;return result;}function eof(){return position>=str.length;}/* read a MIDI-style variable-length integer
			(big-endian value in groups of 7 bits,
			with top bit set to signify that another byte follows)
		*/function readVarInt(){var result=0;while(true){var b=readInt8();if(b&0x80){result+=b&0x7f;result<<=7;}else{/* b is the last byte */return result+b;}}}return{'eof':eof,'read':read,'readInt32':readInt32,'readInt16':readInt16,'readInt8':readInt8,'readVarInt':readVarInt};}/***/},/* 27 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(Buffer){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Chunk=function Chunk(fields){_classCallCheck(this,Chunk);this.type=fields.type;this.data=fields.data;this.size=[0,0,0,fields.data.length];};exports.Chunk=Chunk;'use strict';var Constants={VERSION:'1.3.2',HEADER_CHUNK_TYPE:[0x4d,0x54,0x68,0x64],HEADER_CHUNK_LENGTH:[0x00,0x00,0x00,0x06],HEADER_CHUNK_FORMAT0:[0x00,0x00],HEADER_CHUNK_FORMAT1:[0x00,0x01],HEADER_CHUNK_DIVISION:[0x00,0x80],TRACK_CHUNK_TYPE:[0x4d,0x54,0x72,0x6b],META_EVENT_ID:0xFF,META_TEXT_ID:0x01,META_COPYRIGHT_ID:0x02,META_TRACK_NAME_ID:0x03,META_INSTRUMENT_NAME_ID:0x04,META_LYRIC_ID:0x05,META_MARKER_ID:0x06,META_CUE_POINT:0x07,META_TEMPO_ID:0x51,META_SMTPE_OFFSET:0x54,META_TIME_SIGNATURE_ID:0x58,META_KEY_SIGNATURE_ID:0x59,META_END_OF_TRACK_ID:[0x2F,0x00],PROGRAM_CHANGE_STATUS:0xC0,NOTES:{}};(function(){var allNotes=[['C'],['C#','Db'],['D'],['D#','Eb'],['E'],['F'],['F#','Gb'],['G'],['G#','Ab'],['A'],['A#','Bb'],['B']];var counter=0;for(var i=-1;i<=9;i++){allNotes.forEach(function(noteGroup){noteGroup.forEach(function(note){Constants.NOTES[note+i]=counter;});counter++;});}})();exports.Constants=Constants;'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var MetaEvent=function MetaEvent(fields){_classCallCheck(this,MetaEvent);this.type='meta';this.data=Utils.numberToVariableLength(0x00);this.data=this.data.concat(Constants.META_EVENT_ID,fields.data);};exports.MetaEvent=MetaEvent;'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;_Object$defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var NoteEvent=function(){function NoteEvent(fields){_classCallCheck(this,NoteEvent);this.type='note';this.pitch=fields.pitch;this.wait=fields.wait||0;this.duration=fields.duration;this.sequential=fields.sequential||false;this.velocity=fields.velocity||50;this.channel=fields.channel||1;this.repeat=fields.repeat||1;this.velocity=this.convertVelocity(this.velocity);this.buildData();}_createClass(NoteEvent,[{key:'buildData',value:function buildData(){this.data=[];var quarterTicks=Utils.numberFromBytes(Constants.HEADER_CHUNK_DIVISION);var tickDuration=Math.round(quarterTicks*this.getDurationMultiplier(this.duration,'note'));var restDuration=Math.round(quarterTicks*this.getDurationMultiplier(this.wait,'rest'));var noteOn,noteOff;if(Array.isArray(this.pitch)){if(!this.sequential){for(var j=0;j<this.repeat;j++){this.pitch.forEach(function(p,i){if(i==0){noteOn=new NoteOnEvent({data:Utils.numberToVariableLength(restDuration).concat(this.getNoteOnStatus(),Utils.getPitch(p),this.velocity)});}else{noteOn=new NoteOnEvent({data:[0,Utils.getPitch(p),this.velocity]});}this.data=this.data.concat(noteOn.data);},this);this.pitch.forEach(function(p,i){if(i==0){noteOff=new NoteOffEvent({data:Utils.numberToVariableLength(tickDuration).concat(this.getNoteOffStatus(),Utils.getPitch(p),this.velocity)});}else{noteOff=new NoteOffEvent({data:[0,Utils.getPitch(p),this.velocity]});}this.data=this.data.concat(noteOff.data);},this);}}else{for(var j=0;j<this.repeat;j++){this.pitch.forEach(function(p,i){if(i>0){restDuration=0;}if(this.duration==='8t'&&i==this.pitch.length-1){tickDuration=quarterTicks-tickDuration*2;}noteOn=new NoteOnEvent({data:Utils.numberToVariableLength(restDuration).concat([this.getNoteOnStatus(),Utils.getPitch(p),this.velocity])});noteOff=new NoteOffEvent({data:Utils.numberToVariableLength(tickDuration).concat([this.getNoteOffStatus(),Utils.getPitch(p),this.velocity])});this.data=this.data.concat(noteOn.data,noteOff.data);},this);}}}else{console.error('pitch must be an array.');}}},{key:'convertVelocity',value:function convertVelocity(velocity){velocity=velocity>100?100:velocity;return Math.round(velocity/100*127);}},{key:'getDurationMultiplier',value:function getDurationMultiplier(duration,type){switch(duration){case'0':return 0;case'1':return 4;case'2':return 2;case'd2':return 3;case'4':return 1;case'd4':return 1.5;case'8':return 0.5;case'8t':return 0.33;case'd8':return 0.75;case'16':return 0.25;default:return type==='note'?1:0;}}},{key:'getNoteOnStatus',value:function getNoteOnStatus(){return 144+this.channel-1;}},{key:'getNoteOffStatus',value:function getNoteOffStatus(){return 128+this.channel-1;}}]);return NoteEvent;}();exports.NoteEvent=NoteEvent;"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var NoteOffEvent=function NoteOffEvent(fields){_classCallCheck(this,NoteOffEvent);this.data=fields.data;};exports.NoteOffEvent=NoteOffEvent;"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var NoteOnEvent=function NoteOnEvent(fields){_classCallCheck(this,NoteOnEvent);this.data=fields.data;};exports.NoteOnEvent=NoteOnEvent;'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ProgramChangeEvent=function ProgramChangeEvent(fields){_classCallCheck(this,ProgramChangeEvent);this.type='program';this.data=Utils.numberToVariableLength(0x00).concat(Constants.PROGRAM_CHANGE_STATUS,fields.instrument);};exports.ProgramChangeEvent=ProgramChangeEvent;'use strict';var _typeof=typeof _Symbol==="function"&&_typeof2(_Symbol$iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof _Symbol==="function"&&obj.constructor===_Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;_Object$defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Track=function(){function Track(){_classCallCheck(this,Track);this.type=Constants.TRACK_CHUNK_TYPE;this.data=[];this.size=[];this.events=[];}_createClass(Track,[{key:'addEvent',value:function addEvent(event,mapFunction){if(Array.isArray(event)){event.forEach(function(e,i){if(typeof mapFunction==='function'&&e.type==='note'){var properties=mapFunction(i,e);if((typeof properties==='undefined'?'undefined':_typeof(properties))==='object'){for(var j in properties){switch(j){case'duration':e.duration=properties[j];break;case'sequential':e.sequential=properties[j];break;case'velocity':e.velocity=e.convertVelocity(properties[j]);break;}}e.buildData();}}this.data=this.data.concat(e.data);this.size=Utils.numberToBytes(this.data.length,4);this.events.push(e);},this);}else{this.data=this.data.concat(event.data);this.size=Utils.numberToBytes(this.data.length,4);this.events.push(event);}return this;}},{key:'setTempo',value:function setTempo(bpm){var event=new MetaEvent({data:[Constants.META_TEMPO_ID]});event.data.push(0x03);var tempo=Math.round(60000000/bpm);event.data=event.data.concat(Utils.numberToBytes(tempo,3));return this.addEvent(event);}},{key:'setTimeSignature',value:function setTimeSignature(numerator,denominator,midiclockspertick,notespermidiclock){var event=new MetaEvent({data:[Constants.META_TIME_SIGNATURE_ID]});event.data.push(0x04);event.data=event.data.concat(Utils.numberToBytes(numerator,1));var _denominator=denominator<4?denominator-1:Math.sqrt(denominator);event.data=event.data.concat(Utils.numberToBytes(_denominator,1));midiclockspertick=midiclockspertick||24;event.data=event.data.concat(Utils.numberToBytes(midiclockspertick,1));notespermidiclock=notespermidiclock||8;event.data=event.data.concat(Utils.numberToBytes(notespermidiclock,1));return this.addEvent(event);}},{key:'setKeySignature',value:function setKeySignature(sf,mi){var event=new MetaEvent({data:[Constants.META_KEY_SIGNATURE_ID]});event.data.push(0x02);var mode=mi||0;sf=sf||0;if(typeof mi==='undefined'){var fifths=[['Cb','Gb','Db','Ab','Eb','Bb','F','C','G','D','A','E','B','F#','C#'],['ab','eb','bb','f','c','g','d','a','e','b','f#','c#','g#','d#','a#']];var _sflen=sf.length;var note=sf||'C';if(sf[0]===sf[0].toLowerCase())mode=1;if(_sflen>1){switch(sf.charAt(_sflen-1)){case'm':mode=1;note=sf.charAt(0).toLowerCase();note=note.concat(sf.substring(1,_sflen-1));break;case'-':mode=1;note=sf.charAt(0).toLowerCase();note=note.concat(sf.substring(1,_sflen-1));break;case'M':mode=0;note=sf.charAt(0).toUpperCase();note=note.concat(sf.substring(1,_sflen-1));break;case'+':mode=0;note=sf.charAt(0).toUpperCase();note=note.concat(sf.substring(1,_sflen-1));break;}}var fifthindex=fifths[mode].indexOf(note);sf=fifthindex===-1?0:fifthindex-7;}event.data=event.data.concat(Utils.numberToBytes(sf,1));event.data=event.data.concat(Utils.numberToBytes(mode,1));return this.addEvent(event);}},{key:'addText',value:function addText(text){var event=new MetaEvent({data:[Constants.META_TEXT_ID]});var stringBytes=Utils.stringToBytes(text);event.data=event.data.concat(Utils.numberToVariableLength(stringBytes.length));event.data=event.data.concat(stringBytes);return this.addEvent(event);}},{key:'addCopyright',value:function addCopyright(text){var event=new MetaEvent({data:[Constants.META_COPYRIGHT_ID]});var stringBytes=Utils.stringToBytes(text);event.data=event.data.concat(Utils.numberToVariableLength(stringBytes.length));event.data=event.data.concat(stringBytes);return this.addEvent(event);}},{key:'addInstrumentName',value:function addInstrumentName(text){var event=new MetaEvent({data:[Constants.META_INSTRUMENT_NAME_ID]});var stringBytes=Utils.stringToBytes(text);event.data=event.data.concat(Utils.numberToVariableLength(stringBytes.length));event.data=event.data.concat(stringBytes);return this.addEvent(event);}},{key:'addMarker',value:function addMarker(text){var event=new MetaEvent({data:[Constants.META_MARKER_ID]});var stringBytes=Utils.stringToBytes(text);event.data=event.data.concat(Utils.numberToVariableLength(stringBytes.length));event.data=event.data.concat(stringBytes);return this.addEvent(event);}},{key:'addCuePoint',value:function addCuePoint(text){var event=new MetaEvent({data:[Constants.META_CUE_POINT]});var stringBytes=Utils.stringToBytes(text);event.data=event.data.concat(Utils.numberToVariableLength(stringBytes.length));event.data=event.data.concat(stringBytes);return this.addEvent(event);}},{key:'addLyric',value:function addLyric(lyric){var event=new MetaEvent({data:[Constants.META_LYRIC_ID]});var stringBytes=Utils.stringToBytes(lyric);event.data=event.data.concat(Utils.numberToVariableLength(stringBytes.length));event.data=event.data.concat(stringBytes);return this.addEvent(event);}},{key:'polyModeOn',value:function polyModeOn(){var event=new NoteOnEvent({data:[0x00,0xB0,0x7E,0x00]});this.addEvent(event);console.log(event);}}]);return Track;}();exports.Track=Track;'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;_Object$defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Utils=function(){function Utils(){_classCallCheck(this,Utils);}_createClass(Utils,null,[{key:'version',value:function version(){return Constants.VERSION;}},{key:'stringToBytes',value:function stringToBytes(string){return string.split('').map(function(char){return char.charCodeAt();});}},{key:'isNumeric',value:function isNumeric(n){return!isNaN(parseFloat(n))&&isFinite(n);}},{key:'getPitch',value:function getPitch(pitch){if(this.isNumeric(pitch)){if(pitch>=0&&pitch<=127)console.error(pitch+' is not within MIDI note range (0-127).');return pitch;}pitch=pitch.charAt(0).toUpperCase()+pitch.substring(1);return Constants.NOTES[pitch];}},{key:'numberToVariableLength',value:function numberToVariableLength(ticks){var buffer=ticks&0x7F;while(ticks=ticks>>7){buffer<<=8;buffer|=ticks&0x7F|0x80;}var bList=[];while(true){bList.push(buffer&0xff);if(buffer&0x80)buffer>>=8;else{break;}}return bList;}},{key:'stringByteCount',value:function stringByteCount(s){return encodeURI(s).split(/%..|./).length-1;}},{key:'numberFromBytes',value:function numberFromBytes(bytes){var hex='';var stringResult;bytes.forEach(function(byte){stringResult=byte.toString(16);if(stringResult.length==1)stringResult="0"+stringResult;hex+=stringResult;});return parseInt(hex,16);}},{key:'numberToBytes',value:function numberToBytes(number,bytesNeeded){bytesNeeded=bytesNeeded||1;var hexString=number.toString(16);if(hexString.length&1){hexString='0'+hexString;}var hexArray=hexString.match(/.{2}/g);hexArray=hexArray.map(function(item){return parseInt(item,16);});if(hexArray.length<bytesNeeded){while(bytesNeeded-hexArray.length>0){hexArray.unshift(0);}}return hexArray;}}]);return Utils;}();exports.Utils=Utils;'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;_Object$defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var VexFlow=function(){function VexFlow(){_classCallCheck(this,VexFlow);}_createClass(VexFlow,[{key:'trackFromVoice',value:function trackFromVoice(voice){var track=new Track();var wait;var pitches=[];voice.tickables.forEach(function(tickable,i){pitches=[];if(tickable.noteType==='n'){notes[i].keys.forEach(function(key){pitches.push(this.convertPitch(key));});}else if(tickable.noteType==='r'){wait=this.convertDuration(tickable);return;}track.addEvent(new NoteEvent({pitch:pitches,duration:this.convertDuration(voice.tickables[i]),wait:wait}));wait=0;});return track;}},{key:'convertPitch',value:function convertPitch(pitch){return pitch.replace('/','');}},{key:'convertDuration',value:function convertDuration(note){switch(note.duration){case'w':return'1';case'h':return note.isDotted()?'d2':'2';case'q':return note.isDotted()?'d4':'4';case'8':return note.isDotted()?'d8':'8';}return note.duration;}}]);return VexFlow;}();exports.VexFlow=VexFlow;'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;_Object$defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Writer=function(){function Writer(tracks){_classCallCheck(this,Writer);this.data=[];var trackType=tracks.length>1?Constants.HEADER_CHUNK_FORMAT1:Constants.HEADER_CHUNK_FORMAT0;var numberOfTracks=Utils.numberToBytes(tracks.length,2);this.data.push(new Chunk({type:Constants.HEADER_CHUNK_TYPE,data:trackType.concat(numberOfTracks,Constants.HEADER_CHUNK_DIVISION)}));tracks.forEach(function(track,i){track.addEvent(new MetaEvent({data:Constants.META_END_OF_TRACK_ID}));this.data.push(track);},this);}_createClass(Writer,[{key:'buildFile',value:function buildFile(){var build=[];this.data.forEach(function(d){return build=build.concat(d.type,d.size,d.data);});return new Uint8Array(build);}},{key:'base64',value:function base64(){if(typeof btoa==='function')return btoa(String.fromCharCode.apply(null,this.buildFile()));return new Buffer(this.buildFile()).toString('base64');}},{key:'dataUri',value:function dataUri(){return'data:audio/midi;base64,'+this.base64();}}]);return Writer;}();exports.Writer=Writer;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(28).Buffer);/***/},/* 28 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(Buffer,global){/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 *//* eslint-disable no-proto */'use strict';var base64=__webpack_require__(29);var ieee754=__webpack_require__(30);var isArray=__webpack_require__(31);exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */Buffer.TYPED_ARRAY_SUPPORT=global.TYPED_ARRAY_SUPPORT!==undefined?global.TYPED_ARRAY_SUPPORT:typedArraySupport();/*
	 * Export kMaxLength after typed array support is determined.
	 */exports.kMaxLength=kMaxLength();function typedArraySupport(){try{var arr=new Uint8Array(1);arr.__proto__={__proto__:Uint8Array.prototype,foo:function foo(){return 42;}};return arr.foo()===42&&// typed array instances can be augmented
typeof arr.subarray==='function'&&// chrome 9-10 lack `subarray`
arr.subarray(1,1).byteLength===0;// ie10 has broken `subarray`
}catch(e){return false;}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?0x7fffffff:0x3fffffff;}function createBuffer(that,length){if(kMaxLength()<length){throw new RangeError('Invalid typed array length');}if(Buffer.TYPED_ARRAY_SUPPORT){// Return an augmented `Uint8Array` instance, for best performance
that=new Uint8Array(length);that.__proto__=Buffer.prototype;}else{// Fallback: Return an object instance of the Buffer class
if(that===null){that=new Buffer(length);}that.length=length;}return that;}/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */function Buffer(arg,encodingOrOffset,length){if(!Buffer.TYPED_ARRAY_SUPPORT&&!(this instanceof Buffer)){return new Buffer(arg,encodingOrOffset,length);}// Common case.
if(typeof arg==='number'){if(typeof encodingOrOffset==='string'){throw new Error('If encoding is specified then the first argument must be a string');}return allocUnsafe(this,arg);}return from(this,arg,encodingOrOffset,length);}Buffer.poolSize=8192;// not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment=function(arr){arr.__proto__=Buffer.prototype;return arr;};function from(that,value,encodingOrOffset,length){if(typeof value==='number'){throw new TypeError('"value" argument must not be a number');}if(typeof ArrayBuffer!=='undefined'&&value instanceof ArrayBuffer){return fromArrayBuffer(that,value,encodingOrOffset,length);}if(typeof value==='string'){return fromString(that,value,encodingOrOffset);}return fromObject(that,value);}/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/Buffer.from=function(value,encodingOrOffset,length){return from(null,value,encodingOrOffset,length);};if(Buffer.TYPED_ARRAY_SUPPORT){Buffer.prototype.__proto__=Uint8Array.prototype;Buffer.__proto__=Uint8Array;if(typeof _Symbol!=='undefined'&&_Symbol$species&&Buffer[_Symbol$species]===Buffer){// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
_Object$defineProperty(Buffer,_Symbol$species,{value:null,configurable:true});}}function assertSize(size){if(typeof size!=='number'){throw new TypeError('"size" argument must be a number');}else if(size<0){throw new RangeError('"size" argument must not be negative');}}function alloc(that,size,fill,encoding){assertSize(size);if(size<=0){return createBuffer(that,size);}if(fill!==undefined){// Only pay attention to encoding if it's a string. This
// prevents accidentally sending in a number that would
// be interpretted as a start offset.
return typeof encoding==='string'?createBuffer(that,size).fill(fill,encoding):createBuffer(that,size).fill(fill);}return createBuffer(that,size);}/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/Buffer.alloc=function(size,fill,encoding){return alloc(null,size,fill,encoding);};function allocUnsafe(that,size){assertSize(size);that=createBuffer(that,size<0?0:checked(size)|0);if(!Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i<size;++i){that[i]=0;}}return that;}/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */Buffer.allocUnsafe=function(size){return allocUnsafe(null,size);};/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */Buffer.allocUnsafeSlow=function(size){return allocUnsafe(null,size);};function fromString(that,string,encoding){if(typeof encoding!=='string'||encoding===''){encoding='utf8';}if(!Buffer.isEncoding(encoding)){throw new TypeError('"encoding" must be a valid string encoding');}var length=byteLength(string,encoding)|0;that=createBuffer(that,length);var actual=that.write(string,encoding);if(actual!==length){// Writing a hex string, for example, that contains invalid characters will
// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
that=that.slice(0,actual);}return that;}function fromArrayLike(that,array){var length=array.length<0?0:checked(array.length)|0;that=createBuffer(that,length);for(var i=0;i<length;i+=1){that[i]=array[i]&255;}return that;}function fromArrayBuffer(that,array,byteOffset,length){array.byteLength;// this throws if `array` is not a valid ArrayBuffer
if(byteOffset<0||array.byteLength<byteOffset){throw new RangeError('\'offset\' is out of bounds');}if(array.byteLength<byteOffset+(length||0)){throw new RangeError('\'length\' is out of bounds');}if(byteOffset===undefined&&length===undefined){array=new Uint8Array(array);}else if(length===undefined){array=new Uint8Array(array,byteOffset);}else{array=new Uint8Array(array,byteOffset,length);}if(Buffer.TYPED_ARRAY_SUPPORT){// Return an augmented `Uint8Array` instance, for best performance
that=array;that.__proto__=Buffer.prototype;}else{// Fallback: Return an object instance of the Buffer class
that=fromArrayLike(that,array);}return that;}function fromObject(that,obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length)|0;that=createBuffer(that,len);if(that.length===0){return that;}obj.copy(that,0,0,len);return that;}if(obj){if(typeof ArrayBuffer!=='undefined'&&obj.buffer instanceof ArrayBuffer||'length'in obj){if(typeof obj.length!=='number'||isnan(obj.length)){return createBuffer(that,0);}return fromArrayLike(that,obj);}if(obj.type==='Buffer'&&isArray(obj.data)){return fromArrayLike(that,obj.data);}}throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');}function checked(length){// Note: cannot use `length < kMaxLength()` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(length>=kMaxLength()){throw new RangeError('Attempt to allocate Buffer larger than maximum '+'size: 0x'+kMaxLength().toString(16)+' bytes');}return length|0;}function SlowBuffer(length){if(+length!=length){// eslint-disable-line eqeqeq
length=0;}return Buffer.alloc(+length);}Buffer.isBuffer=function isBuffer(b){return!!(b!=null&&b._isBuffer);};Buffer.compare=function compare(a,b){if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('Arguments must be Buffers');}if(a===b)return 0;var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i];y=b[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'latin1':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return true;default:return false;}};Buffer.concat=function concat(list,length){if(!isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers');}if(list.length===0){return Buffer.alloc(0);}var i;if(length===undefined){length=0;for(i=0;i<list.length;++i){length+=list[i].length;}}var buffer=Buffer.allocUnsafe(length);var pos=0;for(i=0;i<list.length;++i){var buf=list[i];if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers');}buf.copy(buffer,pos);pos+=buf.length;}return buffer;};function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length;}if(typeof ArrayBuffer!=='undefined'&&typeof ArrayBuffer.isView==='function'&&(ArrayBuffer.isView(string)||string instanceof ArrayBuffer)){return string.byteLength;}if(typeof string!=='string'){string=''+string;}var len=string.length;if(len===0)return 0;// Use a for loop to avoid recursion
var loweredCase=false;for(;;){switch(encoding){case'ascii':case'latin1':case'binary':return len;case'utf8':case'utf-8':case undefined:return utf8ToBytes(string).length;case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return len*2;case'hex':return len>>>1;case'base64':return base64ToBytes(string).length;default:if(loweredCase)return utf8ToBytes(string).length;// assume utf8
encoding=(''+encoding).toLowerCase();loweredCase=true;}}}Buffer.byteLength=byteLength;function slowToString(encoding,start,end){var loweredCase=false;// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
// property of a typed array.
// This behaves neither like String nor Uint8Array in that we set start/end
// to their upper/lower bounds if the value passed is out of range.
// undefined is handled specially as per ECMA-262 6th Edition,
// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
if(start===undefined||start<0){start=0;}// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if(start>this.length){return'';}if(end===undefined||end>this.length){end=this.length;}if(end<=0){return'';}// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
end>>>=0;start>>>=0;if(end<=start){return'';}if(!encoding)encoding='utf8';while(true){switch(encoding){case'hex':return hexSlice(this,start,end);case'utf8':case'utf-8':return utf8Slice(this,start,end);case'ascii':return asciiSlice(this,start,end);case'latin1':case'binary':return latin1Slice(this,start,end);case'base64':return base64Slice(this,start,end);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(encoding+'').toLowerCase();loweredCase=true;}}}// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer=true;function swap(b,n,m){var i=b[n];b[n]=b[m];b[m]=i;}Buffer.prototype.swap16=function swap16(){var len=this.length;if(len%2!==0){throw new RangeError('Buffer size must be a multiple of 16-bits');}for(var i=0;i<len;i+=2){swap(this,i,i+1);}return this;};Buffer.prototype.swap32=function swap32(){var len=this.length;if(len%4!==0){throw new RangeError('Buffer size must be a multiple of 32-bits');}for(var i=0;i<len;i+=4){swap(this,i,i+3);swap(this,i+1,i+2);}return this;};Buffer.prototype.swap64=function swap64(){var len=this.length;if(len%8!==0){throw new RangeError('Buffer size must be a multiple of 64-bits');}for(var i=0;i<len;i+=8){swap(this,i,i+7);swap(this,i+1,i+6);swap(this,i+2,i+5);swap(this,i+3,i+4);}return this;};Buffer.prototype.toString=function toString(){var length=this.length|0;if(length===0)return'';if(arguments.length===0)return utf8Slice(this,0,length);return slowToString.apply(this,arguments);};Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this===b)return true;return Buffer.compare(this,b)===0;};Buffer.prototype.inspect=function inspect(){var str='';var max=exports.INSPECT_MAX_BYTES;if(this.length>0){str=this.toString('hex',0,max).match(/.{2}/g).join(' ');if(this.length>max)str+=' ... ';}return'<Buffer '+str+'>';};Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(!Buffer.isBuffer(target)){throw new TypeError('Argument must be a Buffer');}if(start===undefined){start=0;}if(end===undefined){end=target?target.length:0;}if(thisStart===undefined){thisStart=0;}if(thisEnd===undefined){thisEnd=this.length;}if(start<0||end>target.length||thisStart<0||thisEnd>this.length){throw new RangeError('out of range index');}if(thisStart>=thisEnd&&start>=end){return 0;}if(thisStart>=thisEnd){return-1;}if(start>=end){return 1;}start>>>=0;end>>>=0;thisStart>>>=0;thisEnd>>>=0;if(this===target)return 0;var x=thisEnd-thisStart;var y=end-start;var len=Math.min(x,y);var thisCopy=this.slice(thisStart,thisEnd);var targetCopy=target.slice(start,end);for(var i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i];y=targetCopy[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){// Empty buffer means no match
if(buffer.length===0)return-1;// Normalize byteOffset
if(typeof byteOffset==='string'){encoding=byteOffset;byteOffset=0;}else if(byteOffset>0x7fffffff){byteOffset=0x7fffffff;}else if(byteOffset<-0x80000000){byteOffset=-0x80000000;}byteOffset=+byteOffset;// Coerce to Number.
if(isNaN(byteOffset)){// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
byteOffset=dir?0:buffer.length-1;}// Normalize byteOffset: negative offsets start from the end of the buffer
if(byteOffset<0)byteOffset=buffer.length+byteOffset;if(byteOffset>=buffer.length){if(dir)return-1;else byteOffset=buffer.length-1;}else if(byteOffset<0){if(dir)byteOffset=0;else return-1;}// Normalize val
if(typeof val==='string'){val=Buffer.from(val,encoding);}// Finally, search either indexOf (if dir is true) or lastIndexOf
if(Buffer.isBuffer(val)){// Special case: looking for empty string/buffer always fails
if(val.length===0){return-1;}return arrayIndexOf(buffer,val,byteOffset,encoding,dir);}else if(typeof val==='number'){val=val&0xFF;// Search for a byte value [0-255]
if(Buffer.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf==='function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset);}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset);}}return arrayIndexOf(buffer,[val],byteOffset,encoding,dir);}throw new TypeError('val must be string, number or Buffer');}function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1;var arrLength=arr.length;var valLength=val.length;if(encoding!==undefined){encoding=String(encoding).toLowerCase();if(encoding==='ucs2'||encoding==='ucs-2'||encoding==='utf16le'||encoding==='utf-16le'){if(arr.length<2||val.length<2){return-1;}indexSize=2;arrLength/=2;valLength/=2;byteOffset/=2;}}function read(buf,i){if(indexSize===1){return buf[i];}else{return buf.readUInt16BE(i*indexSize);}}var i;if(dir){var foundIndex=-1;for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,foundIndex===-1?0:i-foundIndex)){if(foundIndex===-1)foundIndex=i;if(i-foundIndex+1===valLength)return foundIndex*indexSize;}else{if(foundIndex!==-1)i-=i-foundIndex;foundIndex=-1;}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength;for(i=byteOffset;i>=0;i--){var found=true;for(var j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=false;break;}}if(found)return i;}}return-1;}Buffer.prototype.includes=function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding)!==-1;};Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,true);};Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,false);};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining;}else{length=Number(length);if(length>remaining){length=remaining;}}// must be an even number of digits
var strLen=string.length;if(strLen%2!==0)throw new TypeError('Invalid hex string');if(length>strLen/2){length=strLen/2;}for(var i=0;i<length;++i){var parsed=parseInt(string.substr(i*2,2),16);if(isNaN(parsed))return i;buf[offset+i]=parsed;}return i;}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length);}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length);}function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length);}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length);}Buffer.prototype.write=function write(string,offset,length,encoding){// Buffer#write(string)
if(offset===undefined){encoding='utf8';length=this.length;offset=0;// Buffer#write(string, encoding)
}else if(length===undefined&&typeof offset==='string'){encoding=offset;length=this.length;offset=0;// Buffer#write(string, offset[, length][, encoding])
}else if(isFinite(offset)){offset=offset|0;if(isFinite(length)){length=length|0;if(encoding===undefined)encoding='utf8';}else{encoding=length;length=undefined;}// legacy write(string, encoding, offset, length) - remove in v0.13
}else{throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');}var remaining=this.length-offset;if(length===undefined||length>remaining)length=remaining;if(string.length>0&&(length<0||offset<0)||offset>this.length){throw new RangeError('Attempt to write outside buffer bounds');}if(!encoding)encoding='utf8';var loweredCase=false;for(;;){switch(encoding){case'hex':return hexWrite(this,string,offset,length);case'utf8':case'utf-8':return utf8Write(this,string,offset,length);case'ascii':return asciiWrite(this,string,offset,length);case'latin1':case'binary':return latin1Write(this,string,offset,length);case'base64':// Warning: maxLength not taken into account in base64Write
return base64Write(this,string,offset,length);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(''+encoding).toLowerCase();loweredCase=true;}}};Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)};};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf);}else{return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){end=Math.min(buf.length,end);var res=[];var i=start;while(i<end){var firstByte=buf[i];var codePoint=null;var bytesPerSequence=firstByte>0xEF?4:firstByte>0xDF?3:firstByte>0xBF?2:1;if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte;}break;case 2:secondByte=buf[i+1];if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|secondByte&0x3F;if(tempCodePoint>0x7F){codePoint=tempCodePoint;}}break;case 3:secondByte=buf[i+1];thirdByte=buf[i+2];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|thirdByte&0x3F;if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint;}}break;case 4:secondByte=buf[i+1];thirdByte=buf[i+2];fourthByte=buf[i+3];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|fourthByte&0x3F;if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint;}}}}if(codePoint===null){// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
codePoint=0xFFFD;bytesPerSequence=1;}else if(codePoint>0xFFFF){// encode to utf16 (surrogate pair dance)
codePoint-=0x10000;res.push(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}res.push(codePoint);i+=bytesPerSequence;}return decodeCodePointsArray(res);}// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH=0x1000;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints);// avoid extra slice()
}// Decode in chunks to avoid "call stack size exceeded".
var res='';var i=0;while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH));}return res;}function asciiSlice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]&0x7F);}return ret;}function latin1Slice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]);}return ret;}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out='';for(var i=start;i<end;++i){out+=toHex(buf[i]);}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256);}return res;}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0;}else if(start>len){start=len;}if(end<0){end+=len;if(end<0)end=0;}else if(end>len){end=len;}if(end<start)end=start;var newBuf;if(Buffer.TYPED_ARRAY_SUPPORT){newBuf=this.subarray(start,end);newBuf.__proto__=Buffer.prototype;}else{var sliceLen=end-start;newBuf=new Buffer(sliceLen,undefined);for(var i=0;i<sliceLen;++i){newBuf[i]=this[i+start];}}return newBuf;};/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */function checkOffset(offset,ext,length){if(offset%1!==0||offset<0)throw new RangeError('offset is not uint');if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}return val;};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert){checkOffset(offset,byteLength,this.length);}var val=this[offset+--byteLength];var mul=1;while(byteLength>0&&(mul*=0x100)){val+=this[offset+--byteLength]*mul;}return val;};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8;};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1];};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+this[offset+3]*0x1000000;};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]*0x1000000+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3]);};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset+--i];while(i>0&&(mul*=0x100)){val+=this[offset+--i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readInt8=function readInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset]&0x80))return this[offset];return(0xff-this[offset]+1)*-1;};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24;};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3];};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance');if(value>max||value<min)throw new RangeError('"value" argument is out of bounds');if(offset+ext>buf.length)throw new RangeError('Index out of range');}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;byteLength=byteLength|0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var mul=1;var i=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;byteLength=byteLength|0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var i=byteLength-1;var mul=1;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);this[offset]=value&0xff;return offset+1;};function objectWriteUInt16(buf,value,offset,littleEndian){if(value<0)value=0xffff+value+1;for(var i=0,j=Math.min(buf.length-offset,2);i<j;++i){buf[offset+i]=(value&0xff<<8*(littleEndian?i:1-i))>>>(littleEndian?i:1-i)*8;}}Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;}else{objectWriteUInt16(this,value,offset,true);}return offset+2;};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value&0xff;}else{objectWriteUInt16(this,value,offset,false);}return offset+2;};function objectWriteUInt32(buf,value,offset,littleEndian){if(value<0)value=0xffffffff+value+1;for(var i=0,j=Math.min(buf.length-offset,4);i<j;++i){buf[offset+i]=value>>>(littleEndian?i:3-i)*8&0xff;}}Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=value&0xff;}else{objectWriteUInt32(this,value,offset,true);}return offset+4;};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;}else{objectWriteUInt32(this,value,offset,false);}return offset+4;};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=0;var mul=1;var sub=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i-1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=byteLength-1;var mul=1;var sub=0;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i+1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);if(value<0)value=0xff+value+1;this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;}else{objectWriteUInt16(this,value,offset,true);}return offset+2;};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value&0xff;}else{objectWriteUInt16(this,value,offset,false);}return offset+2;};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24;}else{objectWriteUInt32(this,value,offset,true);}return offset+4;};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value<0)value=0xffffffff+value+1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;}else{objectWriteUInt32(this,value,offset,false);}return offset+4;};function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('Index out of range');if(offset<0)throw new RangeError('Index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4;}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8;}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);};// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!start)start=0;if(!end&&end!==0)end=this.length;if(targetStart>=target.length)targetStart=target.length;if(!targetStart)targetStart=0;if(end>0&&end<start)end=start;// Copy 0 bytes; we're done
if(end===start)return 0;if(target.length===0||this.length===0)return 0;// Fatal error conditions
if(targetStart<0){throw new RangeError('targetStart out of bounds');}if(start<0||start>=this.length)throw new RangeError('sourceStart out of bounds');if(end<0)throw new RangeError('sourceEnd out of bounds');// Are we oob?
if(end>this.length)end=this.length;if(target.length-targetStart<end-start){end=target.length-targetStart+start;}var len=end-start;var i;if(this===target&&start<targetStart&&targetStart<end){// descending copy from end
for(i=len-1;i>=0;--i){target[i+targetStart]=this[i+start];}}else if(len<1000||!Buffer.TYPED_ARRAY_SUPPORT){// ascending copy from start
for(i=0;i<len;++i){target[i+targetStart]=this[i+start];}}else{Uint8Array.prototype.set.call(target,this.subarray(start,start+len),targetStart);}return len;};// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill=function fill(val,start,end,encoding){// Handle string cases:
if(typeof val==='string'){if(typeof start==='string'){encoding=start;start=0;end=this.length;}else if(typeof end==='string'){encoding=end;end=this.length;}if(val.length===1){var code=val.charCodeAt(0);if(code<256){val=code;}}if(encoding!==undefined&&typeof encoding!=='string'){throw new TypeError('encoding must be a string');}if(typeof encoding==='string'&&!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding);}}else if(typeof val==='number'){val=val&255;}// Invalid ranges are not set to a default, so can range check early.
if(start<0||this.length<start||this.length<end){throw new RangeError('Out of range index');}if(end<=start){return this;}start=start>>>0;end=end===undefined?this.length:end>>>0;if(!val)val=0;var i;if(typeof val==='number'){for(i=start;i<end;++i){this[i]=val;}}else{var bytes=Buffer.isBuffer(val)?val:utf8ToBytes(new Buffer(val,encoding).toString());var len=bytes.length;for(i=0;i<end-start;++i){this[i+start]=bytes[i%len];}}return this;};// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;function base64clean(str){// Node strips out invalid characters like \n and \t from the string, base64-js does not
str=stringtrim(str).replace(INVALID_BASE64_RE,'');// Node converts strings with length < 2 to ''
if(str.length<2)return'';// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
while(str.length%4!==0){str=str+'=';}return str;}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,'');}function toHex(n){if(n<16)return'0'+n.toString(16);return n.toString(16);}function utf8ToBytes(string,units){units=units||Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];for(var i=0;i<length;++i){codePoint=string.charCodeAt(i);// is surrogate component
if(codePoint>0xD7FF&&codePoint<0xE000){// last char was a lead
if(!leadSurrogate){// no lead yet
if(codePoint>0xDBFF){// unexpected trail
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}else if(i+1===length){// unpaired lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}// valid lead
leadSurrogate=codePoint;continue;}// 2 leads in a row
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);leadSurrogate=codePoint;continue;}// valid surrogate pair
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000;}else if(leadSurrogate){// valid bmp char, but last char was a lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);}leadSurrogate=null;// encode utf8
if(codePoint<0x80){if((units-=1)<0)break;bytes.push(codePoint);}else if(codePoint<0x800){if((units-=2)<0)break;bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80);}else if(codePoint<0x10000){if((units-=3)<0)break;bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else if(codePoint<0x110000){if((units-=4)<0)break;bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else{throw new Error('Invalid code point');}}return bytes;}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;++i){// Node's code seems to be doing this and not & 0x7F..
byteArray.push(str.charCodeAt(i)&0xFF);}return byteArray;}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;++i){if((units-=2)<0)break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(base64clean(str));}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i];}return i;}function isnan(val){return val!==val;// eslint-disable-line no-self-compare
}/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(28).Buffer,function(){return this;}());/***/},/* 29 *//***/function(module,exports){'use strict';exports.byteLength=byteLength;exports.toByteArray=toByteArray;exports.fromByteArray=fromByteArray;var lookup=[];var revLookup=[];var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array;var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';for(var i=0,len=code.length;i<len;++i){lookup[i]=code[i];revLookup[code.charCodeAt(i)]=i;}revLookup['-'.charCodeAt(0)]=62;revLookup['_'.charCodeAt(0)]=63;function placeHoldersCount(b64){var len=b64.length;if(len%4>0){throw new Error('Invalid string. Length must be a multiple of 4');}// the number of equal signs (place holders)
// if there are two placeholders, than the two characters before it
// represent one byte
// if there is only one, then the three characters before it represent 2 bytes
// this is just a cheap hack to not do indexOf twice
return b64[len-2]==='='?2:b64[len-1]==='='?1:0;}function byteLength(b64){// base64 is 4/3 + up to two characters of the original data
return b64.length*3/4-placeHoldersCount(b64);}function toByteArray(b64){var i,j,l,tmp,placeHolders,arr;var len=b64.length;placeHolders=placeHoldersCount(b64);arr=new Arr(len*3/4-placeHolders);// if there are placeholders, only get up to the last complete 4 chars
l=placeHolders>0?len-4:len;var L=0;for(i=0,j=0;i<l;i+=4,j+=3){tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)];arr[L++]=tmp>>16&0xFF;arr[L++]=tmp>>8&0xFF;arr[L++]=tmp&0xFF;}if(placeHolders===2){tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4;arr[L++]=tmp&0xFF;}else if(placeHolders===1){tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2;arr[L++]=tmp>>8&0xFF;arr[L++]=tmp&0xFF;}return arr;}function tripletToBase64(num){return lookup[num>>18&0x3F]+lookup[num>>12&0x3F]+lookup[num>>6&0x3F]+lookup[num&0x3F];}function encodeChunk(uint8,start,end){var tmp;var output=[];for(var i=start;i<end;i+=3){tmp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output.push(tripletToBase64(tmp));}return output.join('');}function fromByteArray(uint8){var tmp;var len=uint8.length;var extraBytes=len%3;// if we have 1 byte left, pad 2 bytes
var output='';var parts=[];var maxChunkLength=16383;// must be multiple of 3
// go through the array every three bytes, we'll deal with trailing stuff later
for(var i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,i+maxChunkLength>len2?len2:i+maxChunkLength));}// pad the end with zeros, but make sure to not forget the extra bytes
if(extraBytes===1){tmp=uint8[len-1];output+=lookup[tmp>>2];output+=lookup[tmp<<4&0x3F];output+='==';}else if(extraBytes===2){tmp=(uint8[len-2]<<8)+uint8[len-1];output+=lookup[tmp>>10];output+=lookup[tmp>>4&0x3F];output+=lookup[tmp<<2&0x3F];output+='=';}parts.push(output);return parts.join('');}/***/},/* 30 *//***/function(module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=-7;var i=isLE?nBytes-1:0;var d=isLE?-1:1;var s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity;}else{m=m+Math.pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*Math.pow(2,e-mLen);};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0;var i=isLE?0:nBytes-1;var d=isLE?1:-1;var s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax;}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*Math.pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias;}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0;}}for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}buffer[offset+i-d]|=s*128;};/***/},/* 31 *//***/function(module,exports){var toString={}.toString;module.exports=Array.isArray||function(arr){return toString.call(arr)=='[object Array]';};/***/},/* 32 *//***/function(module,exports){"use strict";exports.__esModule=true;exports.default={accordion:22-1,acoustic_bass:33-1,acoustic_grand_piano:1-1,acoustic_guitar_nylon:25-1,acoustic_guitar_steel:26-1,agogo:114-1,alto_sax:66-1,applause:127-1,bagpipe:110-1,banjo:106-1,baritone_sax:68-1,bassoon:71-1,bird_tweet:124-1,blown_bottle:77-1,brass_section:62-1,breath_noise:122-1,bright_acoustic_piano:2-1,celesta:9-1,cello:43-1,choir_aahs:53-1,church_organ:20-1,clarinet:72-1,clavinet:8-1,contrabass:44-1,distortion_guitar:31-1,drawbar_organ:17-1,dulcimer:16-1,electric_bass_finger:34-1,electric_bass_pick:35-1,electric_grand_piano:3-1,electric_guitar_clean:28-1,electric_guitar_jazz:27-1,electric_guitar_muted:29-1,electric_piano_1:5-1,electric_piano_2:6-1,english_horn:70-1,fiddle:111-1,flute:74-1,french_horn:61-1,fretless_bass:36-1,fx_1_rain:97-1,fx_2_soundtrack:98-1,fx_3_crystal:99-1,fx_4_atmosphere:100-1,fx_5_brightness:101-1,fx_6_goblins:102-1,fx_7_echoes:102-1,fx_8_scifi:104-1,glockenspiel:10-1,guitar_fret_noise:121-1,guitar_harmonics:32-1,gunshot:128-1,harmonica:23-1,harpsichord:7-1,helicopter:126-1,honkytonk_piano:4-1,kalimba:109-1,koto:108-1,lead_1_square:81-1,lead_2_sawtooth:82-1,lead_3_calliope:83-1,lead_4_chiff:84-1,lead_5_charang:85-1,lead_6_voice:86-1,lead_7_fifths:87-1,lead_8_bass__lead:88-1,marimba:13-1,melodic_tom:118-1,music_box:11-1,muted_trumpet:60-1,oboe:69-1,ocarina:80-1,orchestra_hit:56-1,orchestral_harp:47-1,overdriven_guitar:30-1,pad_1_new_age:89-1,pad_2_warm:90-1,pad_3_polysynth:91-1,pad_4_choir:92-1,pad_5_bowed:93-1,pad_6_metallic:94-1,pad_7_halo:95-1,pad_8_sweep:96-1,pan_flute:76-1,percussive_organ:18-1,piccolo:73-1,pizzicato_strings:46-1,recorder:75-1,reed_organ:21-1,reverse_cymbal:120-1,rock_organ:19-1,seashore:123-1,shakuhachi:78-1,shamisen:107-1,shanai:112-1,sitar:105-1,slap_bass_1:37-1,slap_bass_2:38-1,soprano_sax:65-1,steel_drums:115-1,string_ensemble_1:49-1,string_ensemble_2:50-1,synth_bass_1:39-1,synth_bass_2:40-1,synth_brass_1:63-1,synth_brass_2:64-1,synth_choir:92-1,synth_drum:119-1,synth_strings_1:51-1,synth_strings_2:52-1,taiko_drum:117-1,tango_accordion:24-1,telephone_ring:125-1,tenor_sax:67-1,timpani:48-1,tinkle_bell:113-1,tremolo_strings:45-1,trombone:58-1,trumpet:57-1,tuba:59-1,tubular_bells:15-1,vibraphone:12-1,viola:42-1,violin:41-1,voice_oohs:54-1,whistle:79-1,woodblock:116-1,xylophone:14-1};module.exports=exports["default"];/***/},/* 33 *//***/function(module,exports,__webpack_require__){var invariant=__webpack_require__(34);var hasOwnProperty=Object.prototype.hasOwnProperty;var splice=Array.prototype.splice;function assign(target,source){for(var key in source){if(hasOwnProperty.call(source,key)){target[key]=source[key];}}return target;}function copy(object){if(object instanceof Array){return object.slice();}else if(object&&(typeof object==='undefined'?'undefined':_typeof2(object))==='object'){return assign(new object.constructor(),object);}else{return object;}}function newContext(){var commands=assign({},defaultCommands);update.extend=function(directive,fn){commands[directive]=fn;};return update;function update(object,spec){invariant((typeof spec==='undefined'?'undefined':_typeof2(spec))==='object','update(): You provided a key path to update() that did not contain one '+'of %s. Did you forget to include {%s: ...}?',_Object$keys(commands).join(', '),'$set');var newObject=object;for(var key in spec){if(hasOwnProperty.call(commands,key)){return commands[key](spec[key],newObject,spec,object);}}for(var key in spec){var nextValueForKey=update(object[key],spec[key]);if(nextValueForKey===object[key]){continue;}if(newObject===object){newObject=copy(object);}newObject[key]=nextValueForKey;}return newObject;}}var defaultCommands={$push:function $push(value,original,spec){invariantPushAndUnshift(original,spec,'$push');return original.concat(value);},$unshift:function $unshift(value,original,spec){invariantPushAndUnshift(original,spec,'$unshift');return value.concat(original);},$splice:function $splice(value,newObject,spec,object){var originalValue=newObject===object?copy(object):newObject;invariantSplices(originalValue,spec);value.forEach(function(args){invariantSplice(args);splice.apply(originalValue,args);});return originalValue;},$set:function $set(value,original,spec){invariantSet(spec);return value;},$merge:function $merge(value,newObject,spec,object){var originalValue=newObject===object?copy(object):newObject;invariantMerge(originalValue,value);_Object$keys(value).forEach(function(key){originalValue[key]=value[key];});return originalValue;},$apply:function $apply(value,original){invariantApply(value);return value(original);}};module.exports=newContext();module.exports.newContext=newContext;// invariants
function invariantPushAndUnshift(value,spec,command){invariant(Array.isArray(value),'update(): expected target of %s to be an array; got %s.',command,value);var specValue=spec[command];invariant(Array.isArray(specValue),'update(): expected spec of %s to be an array; got %s. '+'Did you forget to wrap your parameter in an array?',command,specValue);}function invariantSplices(value,spec){invariant(Array.isArray(value),'Expected $splice target to be an array; got %s',value);invariantSplice(spec['$splice']);}function invariantSplice(value){invariant(Array.isArray(value),'update(): expected spec of $splice to be an array of arrays; got %s. '+'Did you forget to wrap your parameters in an array?',value);}function invariantApply(fn){invariant(typeof fn==='function','update(): expected spec of $apply to be a function; got %s.',fn);}function invariantSet(spec){invariant(_Object$keys(spec).length===1,'Cannot have more than one key in an object with $set');}function invariantMerge(target,specValue){invariant(specValue&&(typeof specValue==='undefined'?'undefined':_typeof2(specValue))==='object','update(): $merge expects a spec of type \'object\'; got %s',specValue);invariant(target&&(typeof target==='undefined'?'undefined':_typeof2(target))==='object','update(): $merge expects a target of type \'object\'; got %s',target);}/***/},/* 34 *//***/function(module,exports,__webpack_require__){/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */'use strict';/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(true){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
throw error;}};module.exports=invariant;/***/},/* 35 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _lodash=__webpack_require__(23);var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/** Note class. Must be used to create and play notes. */var Note=function(){function Note(){var note=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Note);this.payload=_lodash2.default.defaultsDeep(note,{name:'A3',noteNumber:-1,gain:1,instrumentName:'acoustic_grand_piano',startTimeInMS:0,durationInMS:100,endTimeInMS:100,fadeDurationInMS:1000,deltaTime:0,msPerTick:0});this.payload.id=note.id?note.id:this.payload.instrumentName+'_'+this.payload.name;}/**
	   * Updates note instrument
	   * @param instrumentName. List of all instrument names in src/constants/INSTRUMENTS
	   */Note.prototype.setInstrument=function setInstrument(instrumentName){this.payload.instrumentName=instrumentName;};/**
	   * Update note
	   * @param updatedPayloadFields. Object containing all or part of the payload fields.
	   * @returns {object} this
	   */Note.prototype.update=function update(updatedPayloadFields){this.payload=_Object$assign2({},this.payload,updatedPayloadFields);return this;};return Note;}();exports.default=Note;/***/},/* 36 *//***/function(module,exports){'use strict';exports.__esModule=true;var notes=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];exports.default=notes;/***/},/* 37 *//***/function(module,exports){'use strict';exports.__esModule=true;var scales={aeolian:{name:'Minor',sequence:[0,2,3,5,7,8,10]},ionian:{name:'Major',sequence:[0,2,4,5,7,9,11]},dorian:{name:'Dorian',sequence:[0,2,3,5,7,9,10]},phrygian:{name:'Phrygian',sequence:[0,1,3,5,7,8,10]},lydian:{name:'Lydian',sequence:[0,2,4,6,7,9,11]},mixolydian:{name:'Mixolydian',sequence:[0,2,4,5,7,9,10]},locrian:{name:'Locrian',sequence:[0,1,3,5,6,8,10]},chromatic:{name:'Chromatic',sequence:[0,1,2,3,4,5,6,7,8,9,10,11]},acoustic:{name:'Acoustic',sequence:[0,2,4,6,7,9,10]},algerian:{name:'Algerian',sequence:[0,2,3,5,6,7,9,10]},altered:{name:'Altered',sequence:[0,1,3,4,6,8,10]},pentatonic:{name:'Minoric',sequence:[0,2,4,7,9]},wholetone:{name:'Wholetone',sequence:[0,2,4,6,8,10]},blues:{name:'Blues',sequence:[0,3,5,6,7,10]},minorBlues:{name:'Minor Blues',sequence:[0,2,3,5,6,7,8,10]},majorBlues:{name:'Major Blues',sequence:[0,2,3,4,5,6,7,9,10]},harmonicMinor:{name:'Harmonic Minor',sequence:[0,2,3,5,7,8,11]},melodicMinorAsc:{name:'Melodic Minor Asc',sequence:[0,2,3,5,7,9,11]},melodicMinorDesc:{name:'Melodic Minor Desc',sequence:[0,2,3,5,7,8,10]},enigmatic:{name:'Enigmatic',sequence:[0,1,4,6,8,10,11]},doubleHarmonic:{name:'Double Harmonic',sequence:[0,1,4,5,7,8,11]},persian:{name:'Persian',sequence:[0,1,4,5,6,8,11]},arabian:{name:'Arabian',sequence:[0,2,4,5,6,8,10]},japanese:{name:'Japanese',sequence:[0,1,5,7,8]},egyptian:{name:'Egyptian',sequence:[0,2,5,7,10]},hirajoshi:{name:'Hirajoshi',sequence:[0,2,3,7,8]},minorPentatonic:{name:'Minor Pentatonic',sequence:[0,3,5,7,10]},majorPentatonic:{name:'Major Pentatonic',sequence:[0,2,4,7,9]}};exports.default=scales;/***/},/* 38 *//***/function(module,exports){'use strict';exports.__esModule=true;var chords={maj:{name:'Major',sequence:[0,4,7]},min:{name:'Minor',sequence:[0,3,7]},dom7:{name:'Dominant Seventh',sequence:[0,4,7,10]},min7:{name:'Minor Seventh',sequence:[0,3,7,10]},sus4:{name:'Suspended Fourth',sequence:[0,6,7]},maj6:{name:'Sixth',sequence:[0,4,7,9]},min6:{name:'Minor Sixth',sequence:[0,3,7,9]},aug:{name:'Augmented',sequence:[0,4,8]},dim:{name:'Diminished Seventh',sequence:[0,3,6]},'7dim5':{// 7dim5
name:'Seventh Diminished Fifth',sequence:[0,4,6,10]},'7aug5':{// C E G# A#
name:'Seventh Augmented Fifth',sequence:[0,4,8,10]},min7dim5:{name:'Half Diminished Seventh',sequence:[0,3,6,10]},min5maj7:{name:'Minor/Major Seventh',sequence:[0,3,7,11]},maj7aug5:{name:'Major Seventh Augmented Fifth',sequence:[0,4,8,11]},maj7dim5:{// C E F# B
name:'Major Seventh Diminished Fifth',sequence:[0,4,6,11]},maj9:{// C E G A# D
name:'Ninth',sequence:[0,4,7,10,14]},min9:{// C D# G A# D
name:'Minor ninth',sequence:[0,3,7,10,14]}};exports.default=chords;/***/},/* 39 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.createMelodyFromNotes=exports.updateTempo=exports.isInHigherOctave=exports.getScaleNotes=exports.getTracksAndMetaFromUrl=exports.getTracksAndMetaFromParsedMidi=exports.getJSONFromMidiURL=exports.getNoteNamesFromChordName=exports.getNoteNamesFromIntervals=exports.getScalesFromNoteNames=exports.getIntervalPermutationsFromNoteNames=exports.getInterval=exports.addOctaveToNoteName=exports.removeOctaveFromNoteName=exports.getUniqueNoteNamesNoOctave=exports.getUniqueNoteNames=exports.InstrumentHelpers=undefined;var _getUniqueNoteNames=__webpack_require__(40);var _getUniqueNoteNames2=_interopRequireDefault(_getUniqueNoteNames);var _getUniqueNoteNamesNoOctave=__webpack_require__(41);var _getUniqueNoteNamesNoOctave2=_interopRequireDefault(_getUniqueNoteNamesNoOctave);var _removeOctaveFromNoteName=__webpack_require__(42);var _removeOctaveFromNoteName2=_interopRequireDefault(_removeOctaveFromNoteName);var _addOctaveToNoteName=__webpack_require__(43);var _addOctaveToNoteName2=_interopRequireDefault(_addOctaveToNoteName);var _getInterval=__webpack_require__(44);var _getInterval2=_interopRequireDefault(_getInterval);var _getIntervalPermutationsFromNoteNames=__webpack_require__(45);var _getIntervalPermutationsFromNoteNames2=_interopRequireDefault(_getIntervalPermutationsFromNoteNames);var _getScalesFromNoteNames=__webpack_require__(46);var _getScalesFromNoteNames2=_interopRequireDefault(_getScalesFromNoteNames);var _getNoteNamesFromIntervals=__webpack_require__(47);var _getNoteNamesFromIntervals2=_interopRequireDefault(_getNoteNamesFromIntervals);var _getNoteNamesFromChordName=__webpack_require__(48);var _getNoteNamesFromChordName2=_interopRequireDefault(_getNoteNamesFromChordName);var _getJSONFromMidiURL=__webpack_require__(49);var _getJSONFromMidiURL2=_interopRequireDefault(_getJSONFromMidiURL);var _getTracksAndMetaFromParsedMidi=__webpack_require__(52);var _getTracksAndMetaFromParsedMidi2=_interopRequireDefault(_getTracksAndMetaFromParsedMidi);var _getTracksAndMetaFromUrl=__webpack_require__(53);var _getTracksAndMetaFromUrl2=_interopRequireDefault(_getTracksAndMetaFromUrl);var _getScaleNotes=__webpack_require__(54);var _getScaleNotes2=_interopRequireDefault(_getScaleNotes);var _isInHigherOctave=__webpack_require__(56);var _isInHigherOctave2=_interopRequireDefault(_isInHigherOctave);var _updateTempo=__webpack_require__(57);var _updateTempo2=_interopRequireDefault(_updateTempo);var _createMelodyFromNotes=__webpack_require__(58);var _createMelodyFromNotes2=_interopRequireDefault(_createMelodyFromNotes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* mod */var InstrumentHelpers=exports.InstrumentHelpers={getUniqueNoteNames:_getUniqueNoteNames2.default,getUniqueNoteNamesNoOctave:_getUniqueNoteNamesNoOctave2.default,removeOctaveFromNoteName:_removeOctaveFromNoteName2.default,addOctaveToNoteName:_addOctaveToNoteName2.default,getInterval:_getInterval2.default,getIntervalPermutationsFromNoteNames:_getIntervalPermutationsFromNoteNames2.default,getScalesFromNoteNames:_getScalesFromNoteNames2.default,getNoteNamesFromIntervals:_getNoteNamesFromIntervals2.default,getNoteNamesFromChordName:_getNoteNamesFromChordName2.default,getJSONFromMidiURL:_getJSONFromMidiURL2.default,getTracksAndMetaFromParsedMidi:_getTracksAndMetaFromParsedMidi2.default,getTracksAndMetaFromUrl:_getTracksAndMetaFromUrl2.default,getScaleNotes:_getScaleNotes2.default,isInHigherOctave:_isInHigherOctave2.default,updateTempo:_updateTempo2.default,createMelodyFromNotes:_createMelodyFromNotes2.default};exports.getUniqueNoteNames=_getUniqueNoteNames2.default;exports.getUniqueNoteNamesNoOctave=_getUniqueNoteNamesNoOctave2.default;exports.removeOctaveFromNoteName=_removeOctaveFromNoteName2.default;exports.addOctaveToNoteName=_addOctaveToNoteName2.default;exports.getInterval=_getInterval2.default;exports.getIntervalPermutationsFromNoteNames=_getIntervalPermutationsFromNoteNames2.default;exports.getScalesFromNoteNames=_getScalesFromNoteNames2.default;exports.getNoteNamesFromIntervals=_getNoteNamesFromIntervals2.default;exports.getNoteNamesFromChordName=_getNoteNamesFromChordName2.default;exports.getJSONFromMidiURL=_getJSONFromMidiURL2.default;exports.getTracksAndMetaFromParsedMidi=_getTracksAndMetaFromParsedMidi2.default;exports.getTracksAndMetaFromUrl=_getTracksAndMetaFromUrl2.default;exports.getScaleNotes=_getScaleNotes2.default;exports.isInHigherOctave=_isInHigherOctave2.default;exports.updateTempo=_updateTempo2.default;exports.createMelodyFromNotes=_createMelodyFromNotes2.default;exports.default=InstrumentHelpers;// getUniqueNoteNames;
// export InstrumentHelpers
/***/},/* 40 *//***/function(module,exports){"use strict";exports.__esModule=true;/* mod *//**
	 * Get unique note names from array of note objects or note names
	 * @function
	 * @name getUniqueNoteNames
	 * @param {array} notes - Can contain note objects with payload property or strings of note names
	 * @example
	 * getUniqueNoteNames(['A3', 'B3', 'A3']) // returns ['A3', 'B3']
	 * getUniqueNoteNames(['A', 'B', 'A']) // returns ['A', 'B']
	 * const noteOne = new Note({name: 'A3'});
	 * const noteTwo = new Note({name: 'B3'});
	 * const noteThree = new Note({name: 'A3'});
	 * getUniqueNoteNames([noteOne, noteTwo, noteThree]) // returns ['A3', 'B3']
	 * @return {array} notenames
	 */var getUniqueNoteNames=function getUniqueNoteNames(notes){var set=new _Set();notes.forEach(function(note){if(note.payload){set.add(note.payload.name);return;}set.add(note);});return _Array$from(set);};exports.default=getUniqueNoteNames;/***/},/* 41 *//***/function(module,exports){"use strict";exports.__esModule=true;/* mod *//**
	 * Get unique note names from array of note objects or note names and remove octave from it
	 * @function
	 * @name getUniqueNoteNamesNoOctave
	 * @param {array} notes - Can contain note objects with payload property or strings of note names
	 * @example
	 * getUniqueNoteNamesNoOctave(['A3', 'B3', 'A3']) // returns ['A', 'B']
	 * getUniqueNoteNamesNoOctave(['A', 'B', 'A']) // returns ['A', 'B']
	 * const noteOne = new Note({name: 'A3'});
	 * const noteTwo = new Note({name: 'B3'});
	 * const noteThree = new Note({name: 'A3'});
	 * getUniqueNoteNamesNoOctave([noteOne, noteTwo, noteThree]) // returns ['A', 'B']
	 * @return {array} notenames
	 */var getUniqueNoteNamesNoOctave=function getUniqueNoteNamesNoOctave(notes){var set=new _Set();notes.forEach(function(note){if(note.payload){set.add(note.payload.name.slice(0,-1));return;}set.add(note.slice(0,-1));});return _Array$from(set);};exports.default=getUniqueNoteNamesNoOctave;/***/},/* 42 *//***/function(module,exports){"use strict";exports.__esModule=true;/* mod *//**
	 * @function
	 * @name removeOctaveFromNoteName
	 * @param {string} noteName -  Note name
	 * @example
	 * removeOctaveFromNoteName('A3') // returns 'A'
	 * @return {string} noteName - Note name
	 */var removeOctaveFromNoteName=function removeOctaveFromNoteName(noteName){var noteNameNoOctave=noteName.slice(0,-1);return noteNameNoOctave;};exports.default=removeOctaveFromNoteName;/***/},/* 43 *//***/function(module,exports){"use strict";exports.__esModule=true;/* mod *//**
	 * @function
	 * @name addOctaveToNoteName
	 * @param {string} noteName -  Note name
	 * @param {number} octave
	 * @example
	 * addOctaveToNoteName('A', 3) // returns 'A3'
	 * @return {string} noteName - Note name
	 */var addOctaveToNoteName=function addOctaveToNoteName(noteName,octave){var noteNameWithOctave=""+noteName+octave;return noteNameWithOctave;};exports.default=addOctaveToNoteName;/***/},/* 44 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _NOTES=__webpack_require__(36);var _NOTES2=_interopRequireDefault(_NOTES);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * @function
	 * @name getInterval
	 * @param {string} noteNameOne - Without octave
	 * @param {string} noteNameTwo - Without octave
	 * @example
	 * getInterval('A', 'B') // returns 1
	 * @return {string} noteName - Note name
	 */var getInterval=function getInterval(){var noteOne=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'A';var noteTwo=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'B';var noteOneIndex=_NOTES2.default.indexOf(noteOne);var noteTwoIndex=_NOTES2.default.indexOf(noteTwo);if(noteTwoIndex<noteOneIndex){return 12+(noteTwoIndex-noteOneIndex);}return noteTwoIndex-noteOneIndex;};/* mod */exports.default=getInterval;/***/},/* 45 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _getInterval=__webpack_require__(44);var _getInterval2=_interopRequireDefault(_getInterval);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * Get all possible interval permutations between these notes. Helpful to be able to guess scale
	 * @function
	 * @name getIntervalPermutationsFromNoteNames
	 * @param {array} noteNames - Without octave
	 * @example
	 * getIntervalPermutationsFromNoteNames(['A', 'B', 'C'])
	 *
	 * //  Returns { firstNoteName: 'A', intervals: [0, 9, 10], guessedScales: [] },
	 * //  { firstNoteName: 'B', intervals: [0, 2, 11], guessedScales: [] },
	 * //  { firstNoteName: 'C', intervals: [0, 1, 3], guessedScales: [] },
	 * @return {array} intervalPermutations -
	 * [{firstNoteName: string, intervals: number, guessedScales: array}]
	 */var getIntervalPermutationsFromNoteNames=function getIntervalPermutationsFromNoteNames(noteNames){var intervalsPermutations=[];for(var i=0;i<noteNames.length;i+=1){var intervals=[0];var firstNoteName=noteNames[i];for(var j=0;j<noteNames.length;j+=1){if(j!==i){var interval=(0,_getInterval2.default)(firstNoteName,noteNames[j]);intervals.push(interval);}}intervals.sort(function(a,b){return a-b;});var noteIntervals={firstNoteName:firstNoteName,// /: firstNoteName.substring(0, firstNoteName.length - 1),
intervals:intervals,guessedScales:[]};intervalsPermutations.push(noteIntervals);}return intervalsPermutations;};/* mod */exports.default=getIntervalPermutationsFromNoteNames;/***/},/* 46 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _SCALES=__webpack_require__(37);var _SCALES2=_interopRequireDefault(_SCALES);var _getUniqueNoteNamesNoOctave=__webpack_require__(41);var _getUniqueNoteNamesNoOctave2=_interopRequireDefault(_getUniqueNoteNamesNoOctave);var _getIntervalPermutationsFromNoteNames=__webpack_require__(45);var _getIntervalPermutationsFromNoteNames2=_interopRequireDefault(_getIntervalPermutationsFromNoteNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * getScalesFromNoteNames - Get all scales matched with the given notes
	 *
	 * @param  {array} noteNames    noteNames with octave
	 * @returns {array}            Array of note names with octave
	 *                            [{firstNoteName: string, intervals: number, guessedScales: array}]
	 * @example
	 * getScalesFromNoteNames(['A3', 'B3', 'C3']);
	 * // [
	 * //   {
	 * //     firstNoteName: 'A',
	 * //     intervals: [0, 9, 10],
	 * //     guessedScales: ['dorian', 'mixolydian', 'acoustic', 'algerian', 'majorBlues']
	 * //   },
	 * //  {
	 * //     firstNoteName: 'B',
	 * //     intervals: [0, 2, 11],
	 * //     guessedScales: ['ionian', 'lydian', 'harmonicMinor', 'melodicMinorAsc']
	 * //   },
	 * //  {
	 * //    firstNoteName: 'C',
	 * //    intervals: [0, 1, 3],
	 * //    guessedScales: ['phrygian', 'locrian', 'altered']
	 * //  },
	 * // ]
	 */var getScalesFromNoteNames=function getScalesFromNoteNames(noteNames){var uniqueNoteNames=(0,_getUniqueNoteNamesNoOctave2.default)(noteNames);var sequencePermutations=(0,_getIntervalPermutationsFromNoteNames2.default)(uniqueNoteNames);_Object$keys(_SCALES2.default).forEach(function(scaleName){var scaleSequence=_SCALES2.default[scaleName].sequence;if(scaleName==='chromatic'){return;}sequencePermutations.forEach(function(sequencePermutation,i){var isInScaleSequence=sequencePermutation.intervals.reduce(function(prev,current){if(prev===false){return false;}return scaleSequence.indexOf(current)!==-1;},true);if(isInScaleSequence){sequencePermutations[i].guessedScales.push(scaleName);}});});return sequencePermutations;};/* mod */exports.default=getScalesFromNoteNames;/***/},/* 47 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _NOTES=__webpack_require__(36);var _NOTES2=_interopRequireDefault(_NOTES);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * Get unique note names from array of note objects or note names
	 * @function
	 * @name getNoteNamesFromIntervals
	 * @param {string} noteNameWithOctave - note name with octave e.g. 'A3'
	 * @example
	 * getNoteNamesFromChordName('A3', [0, 2, 3]) // returns ['A3', 'B3', 'C3']
	 * // Full list of supported chords in src/constants/CHORDS.js
	 * @return {array} notenames
	 */var getNoteNamesFromIntervals=function getNoteNamesFromIntervals(firstNoteName,intervals){var octave=firstNoteName.substring(firstNoteName.length-1,firstNoteName.length);var firstNoteIndex=_NOTES2.default.indexOf(firstNoteName.substring(0,firstNoteName.length-1));var notes=intervals.map(function(interval){var noteIndex=(interval+firstNoteIndex)%12;return''+_NOTES2.default[noteIndex]+octave;});return notes;};/* mod */exports.default=getNoteNamesFromIntervals;/***/},/* 48 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _CHORDS=__webpack_require__(38);var _CHORDS2=_interopRequireDefault(_CHORDS);var _getNoteNamesFromIntervals=__webpack_require__(47);var _getNoteNamesFromIntervals2=_interopRequireDefault(_getNoteNamesFromIntervals);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * Get unique note names from array of note objects or note names
	 * @function
	 * @name getNoteNamesFromChordName
	 * @param {string} firstNoteNameWithOctave - note name with octave e.g. 'A3'
	 * @param {string} chordName - Chord name full list of supported chords in src/constants/CHORDS.js
	 * @example
	 * getNoteNamesFromChordName('A3', 'min') // returns ['A3', 'C3', 'E3']
	 * getNoteNamesFromChordName('C3', 'maj') // returns ['C3', 'E3', 'G3']
	 * // Full list of supported chords in src/constants/CHORDS.js
	 * @return {array} notenames
	 *//* mod */var getNoteNamesFromChordName=function getNoteNamesFromChordName(firstNoteName,chordName){if(!(chordName in _CHORDS2.default)){throw new Error({code:'CHORD_DOESNT_EXIST'});}var octave=firstNoteName.substring(firstNoteName.length-1,firstNoteName.length);var intervals=_CHORDS2.default[chordName].sequence;var noteNames=(0,_getNoteNamesFromIntervals2.default)(firstNoteName,intervals,octave);return noteNames;};exports.default=getNoteNamesFromChordName;/***/},/* 49 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _MidiIO=__webpack_require__(50);var _MidiIO2=_interopRequireDefault(_MidiIO);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * Download midi from url and parse it into JSON {meta, musicTracks}.
	 * Wrapper around MidiIO.parseMidi(url)
	 * @function
	 * @name getJSONFromMidiURL
	 * @param {string} url - URL to a midi file.
	 * @example
	 * getJSONFromMidiURL('https://s3-eu-west-1.amazonaws.com/ut-music-player/assets/midis/beet1track-medium-fast.mid')
	 * .then((metaAndMusicTracks) => {
	 *   const {meta, musicTracks} = metaAndMusicTracks;
	 * })
	 * @return {Promise.<object>}
	 */var getJSONFromMidiURL=function getJSONFromMidiURL(url){return _MidiIO2.default.parseMidi(url);};/* mod */exports.default=getJSONFromMidiURL;/***/},/* 50 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.default=undefined;var _extends=_Object$assign2||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _midiFileParser=__webpack_require__(26);var _midiFileParser2=_interopRequireDefault(_midiFileParser);var _midiWriterJs=__webpack_require__(27);var _midiWriterJs2=_interopRequireDefault(_midiWriterJs);var _lodash=__webpack_require__(23);var _lodash2=_interopRequireDefault(_lodash);var _INSTRUMENT_MIDI_MAPPING=__webpack_require__(51);var _INSTRUMENT_MIDI_MAPPING2=_interopRequireDefault(_INSTRUMENT_MIDI_MAPPING);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var minutesInMS=60000000;var MidiIO=function(){MidiIO.getWriter=function getWriter(){return _midiWriterJs2.default;};MidiIO.getUniqueFromMidiNotes=function getUniqueFromMidiNotes(notes){var set=new _Set();notes.forEach(function(note){set.add(note.payload.noteName);});return _Array$from(set);};MidiIO.midiNoteNumberToName=function midiNoteNumberToName(midi){var scaleIndexToNote=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];var octave=Math.floor(midi/12)-1;var note=midi%12;return scaleIndexToNote[note]+octave;};MidiIO.urlToJSON=function urlToJSON(midiURL){return MidiIO.urlToBinaryString(midiURL).then(function(binaryStringMidi){return MidiIO.binaryStringToJSON(binaryStringMidi);});};MidiIO.getAllMetadata=function getAllMetadata(parsedMidi,tracks){var metaTrack=parsedMidi.tracks[0];var indexedMeta=metaTrack.reduce(function(prev,current,i){var _Object$assign;var updated=_Object$assign2({},prev,(_Object$assign={},_Object$assign[current.type+'_'+current.subtype]=current,_Object$assign));return updated;},{});var meta_setTempo=indexedMeta.meta_setTempo;var meta_keySignature=indexedMeta.meta_keySignature;var meta_timeSignature=indexedMeta.meta_timeSignature;var meta_endOfTrack=indexedMeta.meta_endOfTrack;var ticksPerBeat=parsedMidi.header.ticksPerBeat;var microsecondsPerBeat=meta_setTempo.microsecondsPerBeat;var millisecondsPerTick=MidiIO.getMillisecondsPerTick(microsecondsPerBeat,ticksPerBeat);var tempo=meta_setTempo;var timeSignature=meta_timeSignature;var keySignature=meta_keySignature;var endOfTrack=meta_endOfTrack;var timeSignatureNumerator=timeSignature.numerator;var timeSignatureDenominator=timeSignature.denominator;var timeSignatureMetronome=timeSignature.metronome;var timeSignatureThirtyseconds=timeSignature.thirtyseconds;var instrumentNumbers=tracks.map(function(track){return track.programChange[0].programNumber;});// [0].programNumber
var instrumentNames=instrumentNumbers.map(function(instrumentNumber){return _Object$keys(_INSTRUMENT_MIDI_MAPPING2.default).find(function(instrumentKey){return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey]===instrumentNumber;});});var _MidiIO$getBPMData=MidiIO.getBPMData(microsecondsPerBeat,ticksPerBeat,timeSignature);var BPM=_MidiIO$getBPMData.BPM;var metaObject={tempo:tempo,keySignature:keySignature,timeSignature:timeSignature,timeSignatureNumerator:timeSignatureNumerator,timeSignatureDenominator:timeSignatureDenominator,timeSignatureMetronome:timeSignatureMetronome,timeSignatureThirtyseconds:timeSignatureThirtyseconds,endOfTrack:endOfTrack,trackCount:tracks.length,microsecondsPerBeat:microsecondsPerBeat,instrumentNumbers:instrumentNumbers,instrumentNames:instrumentNames,millisecondsPerTick:millisecondsPerTick,ticksPerBeat:ticksPerBeat,BPM:BPM};return metaObject;};MidiIO.getAllTracks=function getAllTracks(parsedMidi){var tracks=parsedMidi.tracks.filter(function(track,i){return i>=1;});var indexedTracks=tracks.map(function(track,i){var indexedTrack=track.reduce(function(prev,current){var currentIndex=current.type+'_'+current.subtype;var updated=_Object$assign2({},prev);if(!updated[currentIndex]){updated[currentIndex]=[];}updated[currentIndex].push(current);return updated;},{});var instrumentNumber=indexedTrack.channel_programChange[0].programNumber;var instrumentName=_Object$keys(_INSTRUMENT_MIDI_MAPPING2.default).find(function(instrumentKey){return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey]===instrumentNumber;});return{controller:indexedTrack.channel_controller,programChange:indexedTrack.channel_programChange,trackname:indexedTrack.meta_trackName,noteOn:indexedTrack.channel_noteOn,noteOnValid:indexedTrack.channel_noteOn.filter(function(event){return event.deltaTime>0;}),noteOnInvalid:indexedTrack.channel_noteOn.filter(function(event){return event.deltaTime===0;}),noteOff:indexedTrack.channel_noteOff,endOfTrack:indexedTrack.meta_endOfTrack,noteCount:indexedTrack.channel_noteOn.filter(function(event){return event.deltaTime>0;}).length,instrumentNumber:instrumentNumber,instrumentName:instrumentName};});var meta=MidiIO.getAllMetadata(parsedMidi,indexedTracks);return{meta:meta,musicTracks:indexedTracks};};MidiIO.getInstrumentNameFromMidiTrack=function getInstrumentNameFromMidiTrack(track){var instrument=track.find(function(event){return event.type==='channel'&&event.subtype==='programChange';});// alert(`instrumentNumber ${instrument}`);
var instrumentNumber=instrument.programNumber;// alert(`instrumentNumber ${instrumentNumber}`);
var instrumentName=_Object$keys(_INSTRUMENT_MIDI_MAPPING2.default).find(function(instrumentKey){return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey]===instrumentNumber;});return instrumentName;};MidiIO.getInstrumentNumberFromMidiTrack=function getInstrumentNumberFromMidiTrack(track){var instrument=track.find(function(event){return event.type==='channel'&&event.subtype==='programChange';});var instrumentNumber=void 0;try{instrumentNumber=instrument.programNumber;}catch(err){instrumentNumber=0;console.warn('COULDN\'T FIND INSTRUMENT NUMBER '+instrumentNumber+' defaulting to '+instrumentNumber);}return instrumentNumber;};MidiIO.binaryStringToJSON=function binaryStringToJSON(binaryStringMidi){var parsedMidi=(0,_midiFileParser2.default)(binaryStringMidi);return parsedMidi;};MidiIO.getNoteOnEvents=function getNoteOnEvents(track){var noteOnEvents=track.filter(function(event){return event.type==='channel'&&event.subtype==='noteOn';});var invalidNoteOnEvents=noteOnEvents.filter(function(event){return event.deltaTime===0;});var validNoteOnEvents=noteOnEvents.filter(function(event){return event.deltaTime>0;});return{noteOnEvents:noteOnEvents,validNoteOnEvents:validNoteOnEvents,invalidNoteOnEvents:invalidNoteOnEvents};};MidiIO.getNoteOffEvents=function getNoteOffEvents(track){var noteOffEvents=track.filter(function(event){return event.type==='channel'&&event.subtype==='noteOff';});var invalidNoteOffEvents=noteOffEvents.filter(function(event){return event.deltaTime===0;});var validNoteOffEvents=noteOffEvents.filter(function(event){return event.deltaTime>0;});return{noteOffEvents:noteOffEvents,validNoteOffEvents:validNoteOffEvents,invalidNoteOffEvents:invalidNoteOffEvents};};MidiIO.getTempoFromTrack=function getTempoFromTrack(track){var setTempoEvent=track.find(function(event){return event.type==='meta'&&event.subtype==='setTempo';});var deltaTime=setTempoEvent.deltaTime;var microsecondsPerBeat=setTempoEvent.microsecondsPerBeat;return{deltaTime:deltaTime,microsecondsPerBeat:microsecondsPerBeat};};MidiIO.getMetadataFromTrack=function getMetadataFromTrack(track){var _ref;var microsecondsPerBeat=void 0,keySignature=void 0,timeSignature=void 0,endOfTrack=void 0;track.filter(function(event){return event.type==='meta';}).forEach(function(event){switch(event.subtype){case'setTempo':microsecondsPerBeat=event.microsecondsPerBeat;break;case'keySignature':keySignature={key:event.key,scale:event.scale};break;case'timeSignature':timeSignature={numerator:event.numerator,denominator:event.denominator,metronome:event.metronome,thirtyseconds:event.thirtyseconds};break;case'endOfTrack':endOfTrack={};default:return{name:event.subtype,payload:_extends({},event)};}});return _ref={microsecondsPerBeat:microsecondsPerBeat,keySignature:keySignature,timeSignature:timeSignature,endOfTrack:endOfTrack},_ref[event.subtype]=_extends({},event),_ref;};MidiIO.urlToBinaryString=function urlToBinaryString(midiURL){return _Promise.resolve(true).then(function(){return fetch(midiURL,{method:'GET',headers:{Accept:'audio/mid'}});}).then(function(response){return response.blob();}).then(function(response){return new _Promise(function(resolve){var reader=new FileReader();reader.onloadend=function(){var blob=reader.result;resolve(blob);};reader.readAsBinaryString(response);});}).catch(function(err){console.warn('ERROR IN URLTOBINARYSTRING, '+_JSON$stringify(err));});};MidiIO.noteOffEventToNote=function noteOffEventToNote(noteOffEvent,noteInstrumentName,previousEndTime,msPerTick){var noteNumber=noteOffEvent.noteNumber;var deltaTime=noteOffEvent.deltaTime;var noteName=MidiIO.midiNoteNumberToName(noteNumber);var startTimeInMS=previousEndTime;var durationInMS=deltaTime*msPerTick;var endTimeInMS=startTimeInMS+durationInMS;return{noteNumber:noteNumber,noteName:noteName,startTimeInMS:startTimeInMS,durationInMS:durationInMS,endTimeInMS:endTimeInMS,noteInstrumentName:noteInstrumentName,deltaTime:deltaTime,msPerTick:msPerTick};};MidiIO.getMillisecondsPerTick=function getMillisecondsPerTick(microsecondsPerBeat,ticksPerBeat){var secondsPerBeat=microsecondsPerBeat/1000000;var secondsPerTick=secondsPerBeat/ticksPerBeat;var millisecondsPerTick=secondsPerTick*1000;return millisecondsPerTick;};MidiIO.getBPMData=function getBPMData(microSecondsPerBeat,ticksPerBeat,timeSignature){// const ticksPerBeat = parsedMidi.header.ticksPerBeat;
var timeSignatureNumerator=timeSignature.numerator;var timeSignatureDenominator=timeSignature.denominator;var secondsPerBeat=microSecondsPerBeat/1000000;var secondsPerTick=secondsPerBeat/ticksPerBeat;var BPM=minutesInMS/microSecondsPerBeat*(timeSignatureDenominator/timeSignatureNumerator);// const millisecondsPerTick = secondsPerTick * 1000;
return{BPM:BPM};};MidiIO.bpmToMSPerBeat=function bpmToMSPerBeat(BPM){var timeSignatureNumerator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:4;var timeSignatureDenominator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:4;return minutesInMS/BPM*(timeSignatureNumerator/timeSignatureDenominator);};MidiIO.prototype.setBPM=function setBPM(){var BPM=arguments.length>0&&arguments[0]!==undefined?arguments[0]:60;this.millisecondsPerTick=MidiIO.getMillisecondsPerTick(MidiIO.bpmToMSPerBeat(BPM,this.timeSignatureNumerator,this.timeSignatureDenominator),this.ticksPerBeat);this.BPM=BPM;};function MidiIO(userSettings){_classCallCheck(this,MidiIO);this.settings=_lodash2.default.defaultsDeep(userSettings,{midiURL:null,parsedMidi:null,BPM:-1});this.isInitialised=false;}MidiIO.prototype.parseMidiOld=function parseMidiOld(parsedMidi){var bpm=arguments.length>1&&arguments[1]!==undefined?arguments[1]:-1;this.parsedMidi=parsedMidi;this.ticksPerBeat=parsedMidi.header.ticksPerBeat;var trackMetadata=MidiIO.getMetadataFromTrack(parsedMidi.tracks[0]);var microsecondsPerBeat=trackMetadata.microsecondsPerBeat;var keySignature=trackMetadata.keySignature;var timeSignature=trackMetadata.timeSignature;var endOfTrack=trackMetadata.endOfTrack;this.noteOnEvents=MidiIO.getNoteOnEvents(parsedMidi.tracks[1]);this.noteOffEvents=MidiIO.getNoteOffEvents(parsedMidi.tracks[1]);this.millisecondsPerTick=MidiIO.getMillisecondsPerTick(microsecondsPerBeat,this.ticksPerBeat);// this.secondsPerTick = this.millisecondsPerTick * 10;
try{this.mainInstrumentNumber=MidiIO.getInstrumentNumberFromMidiTrack(parsedMidi.tracks[1]);}catch(err){}try{this.mainInstrumentName=MidiIO.getInstrumentNameFromMidiTrack(parsedMidi.tracks[1]);}catch(err){this.mainInstrumentName='acoustic_grand_piano';}// this.mainInstrumentName = MidiIO.getInstrumentNameFromMidiTrack(parsedMidi.tracks[1]);
this.isInitialised=true;this.timeSignature=timeSignature;this.timeSignatureNumerator=timeSignature.numerator;this.timeSignatureDenominator=timeSignature.denominator;var _MidiIO$getBPMData2=MidiIO.getBPMData(microsecondsPerBeat,this.ticksPerBeat,timeSignature);var BPM=_MidiIO$getBPMData2.BPM;this.BPM=BPM;if(bpm!==-1){this.setBPM(bpm);}return this;};MidiIO.parseMidi=function parseMidi(url){return MidiIO.urlToJSON(url).then(function(parsedMidi){var _MidiIO$getAllTracks=MidiIO.getAllTracks(parsedMidi);var meta=_MidiIO$getAllTracks.meta;var musicTracks=_MidiIO$getAllTracks.musicTracks;return{meta:meta,musicTracks:musicTracks};});};MidiIO.prototype.init=function init(){var _this=this;if(this.settings.midiURL){return MidiIO.urlToJSON(this.settings.midiURL).then(function(parsedMidi){// return this.getAllTracks,
return _this.parseMidi(parsedMidi,_this.settings.BPM);}).catch();}return _Promise.resolve(false);};return MidiIO;}();exports.default=MidiIO;/***/},/* 51 *//***/function(module,exports){"use strict";exports.__esModule=true;exports.default={accordion:22-1,acoustic_bass:33-1,acoustic_grand_piano:1-1,acoustic_guitar_nylon:25-1,acoustic_guitar_steel:26-1,agogo:114-1,alto_sax:66-1,applause:127-1,bagpipe:110-1,banjo:106-1,baritone_sax:68-1,bassoon:71-1,bird_tweet:124-1,blown_bottle:77-1,brass_section:62-1,breath_noise:122-1,bright_acoustic_piano:2-1,celesta:9-1,cello:43-1,choir_aahs:53-1,church_organ:20-1,clarinet:72-1,clavinet:8-1,contrabass:44-1,distortion_guitar:31-1,drawbar_organ:17-1,dulcimer:16-1,electric_bass_finger:34-1,electric_bass_pick:35-1,electric_grand_piano:3-1,electric_guitar_clean:28-1,electric_guitar_jazz:27-1,electric_guitar_muted:29-1,electric_piano_1:5-1,electric_piano_2:6-1,english_horn:70-1,fiddle:111-1,flute:74-1,french_horn:61-1,fretless_bass:36-1,fx_1_rain:97-1,fx_2_soundtrack:98-1,fx_3_crystal:99-1,fx_4_atmosphere:100-1,fx_5_brightness:101-1,fx_6_goblins:102-1,fx_7_echoes:102-1,fx_8_scifi:104-1,glockenspiel:10-1,guitar_fret_noise:121-1,guitar_harmonics:32-1,gunshot:128-1,harmonica:23-1,harpsichord:7-1,helicopter:126-1,honkytonk_piano:4-1,kalimba:109-1,koto:108-1,lead_1_square:81-1,lead_2_sawtooth:82-1,lead_3_calliope:83-1,lead_4_chiff:84-1,lead_5_charang:85-1,lead_6_voice:86-1,lead_7_fifths:87-1,lead_8_bass__lead:88-1,marimba:13-1,melodic_tom:118-1,music_box:11-1,muted_trumpet:60-1,oboe:69-1,ocarina:80-1,orchestra_hit:56-1,orchestral_harp:47-1,overdriven_guitar:30-1,pad_1_new_age:89-1,pad_2_warm:90-1,pad_3_polysynth:91-1,pad_4_choir:92-1,pad_5_bowed:93-1,pad_6_metallic:94-1,pad_7_halo:95-1,pad_8_sweep:96-1,pan_flute:76-1,percussive_organ:18-1,piccolo:73-1,pizzicato_strings:46-1,recorder:75-1,reed_organ:21-1,reverse_cymbal:120-1,rock_organ:19-1,seashore:123-1,shakuhachi:78-1,shamisen:107-1,shanai:112-1,sitar:105-1,slap_bass_1:37-1,slap_bass_2:38-1,soprano_sax:65-1,steel_drums:115-1,string_ensemble_1:49-1,string_ensemble_2:50-1,synth_bass_1:39-1,synth_bass_2:40-1,synth_brass_1:63-1,synth_brass_2:64-1,synth_choir:92-1,synth_drum:119-1,synth_strings_1:51-1,synth_strings_2:52-1,taiko_drum:117-1,tango_accordion:24-1,telephone_ring:125-1,tenor_sax:67-1,timpani:48-1,tinkle_bell:113-1,tremolo_strings:45-1,trombone:58-1,trumpet:57-1,tuba:59-1,tubular_bells:15-1,vibraphone:12-1,viola:42-1,violin:41-1,voice_oohs:54-1,whistle:79-1,woodblock:116-1,xylophone:14-1};/***/},/* 52 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _MidiIO=__webpack_require__(50);var _MidiIO2=_interopRequireDefault(_MidiIO);var _Note=__webpack_require__(35);var _Note2=_interopRequireDefault(_Note);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * getTracksAndMetaFromParsedMidi - Convert a json midi file parsed with MidiIO into clean meta and tracks object
	 *
	 * @param  {array} noteNames    noteNames with octave
	 * @returns {object}            Array of note names with octave
	 *                            [{firstNoteName: string, intervals: number, guessedScales: array}]
	 * @example
	 * const parsedMidi = await getJSONFromMidiURL(url);
	 * getTracksAndMetaFromParsedMidi(parsedMidi);
	 * // Returns
	 * //   {
	 * //     meta: object,
	 * //     tracks: array,
	 * //   }
	 *//* mod */var getTracksAndMetaFromParsedMidi=function getTracksAndMetaFromParsedMidi(midi){var meta=midi.meta;var tracks=midi.musicTracks.map(function(track,i){var noteOns=track.noteOnValid;var noteOffs=track.noteOff;var trackInstrumentName=meta.instrumentNames[i];var millisecondsPerTick=meta.millisecondsPerTick;var previousEndTime=0;return noteOffs.map(function(noteOff){var _MidiIO$noteOffEventT=_MidiIO2.default.noteOffEventToNote(noteOff,trackInstrumentName,previousEndTime,millisecondsPerTick);var noteNumber=_MidiIO$noteOffEventT.noteNumber;var noteName=_MidiIO$noteOffEventT.noteName;var startTimeInMS=_MidiIO$noteOffEventT.startTimeInMS;var durationInMS=_MidiIO$noteOffEventT.durationInMS;var endTimeInMS=_MidiIO$noteOffEventT.endTimeInMS;var noteInstrumentName=_MidiIO$noteOffEventT.noteInstrumentName;var deltaTime=_MidiIO$noteOffEventT.deltaTime;var msPerTick=_MidiIO$noteOffEventT.msPerTick;previousEndTime=endTimeInMS;var note=new _Note2.default({noteNumber:noteNumber,noteName:noteName,startTimeInMS:startTimeInMS,durationInMS:durationInMS,endTimeInMS:endTimeInMS,instrumentName:noteInstrumentName,deltaTime:deltaTime,msPerTick:msPerTick});return note;});});return{meta:meta,tracks:tracks};};exports.default=getTracksAndMetaFromParsedMidi;/***/},/* 53 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _getJSONFromMidiURL=__webpack_require__(49);var _getJSONFromMidiURL2=_interopRequireDefault(_getJSONFromMidiURL);var _getTracksAndMetaFromParsedMidi=__webpack_require__(52);var _getTracksAndMetaFromParsedMidi2=_interopRequireDefault(_getTracksAndMetaFromParsedMidi);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * get all tracks and meta information from  a midi url hosted online
	 * @param  {string} url  url of midi file that needs to be converted
	 * @example
	 * getTracksAndMetaFromUrl('https://s3-eu-west-1.amazonaws.com/ut-music-player/assets/midis/beet1track-medium-fast.mid') // returns {tracks: [], meta: {}}
	 * @return {object} {tracks: [], meta: {}}
	 *//* mod */var getTracksAndMetaFromUrl=function getTracksAndMetaFromUrl(url){return(0,_getJSONFromMidiURL2.default)(url).then(_getTracksAndMetaFromParsedMidi2.default);};exports.default=getTracksAndMetaFromUrl;/***/},/* 54 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _reOrderNotes=__webpack_require__(55);var _reOrderNotes2=_interopRequireDefault(_reOrderNotes);var _isInHigherOctave=__webpack_require__(56);var _isInHigherOctave2=_interopRequireDefault(_isInHigherOctave);var _SCALES=__webpack_require__(37);var _SCALES2=_interopRequireDefault(_SCALES);var _NOTES=__webpack_require__(36);var _NOTES2=_interopRequireDefault(_NOTES);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * getScaleNotes - Get notes for a given scale for _count_ octaves at _startOctave_
	 *
	 * @param  {string} note        noteName without octave
	 * @param  {string} scale       scaleName must be one defined in constants/SCALES
	 * @param  {number} startOctave starting octave
	 * @param  {number} count       Number of octaves
	 * @returns {array}            Array of note names with octave
	 *//* mod */var getScaleNotes=function getScaleNotes(note,scale,startOctave,count){var startingNoteIndex=_NOTES2.default.indexOf(note);if(startingNoteIndex===-1){throw new Error('NOTE IS NOT RECOGNIZED');}if(_SCALES2.default[scale]==null){throw new Error('SCALE IS NOT RECOGNIZED');}var scaleSequence=_SCALES2.default[scale].sequence;var notes=(0,_reOrderNotes2.default)(note);var scaleNotes=scaleSequence.map(function(interval){return notes[interval];});// scaleNotes = Musician.reOrderNotes('C', scaleNotes);
var currentOctave=startOctave;var scaleNotesWithInterval=[];var _loop=function _loop(i){var previousNote=scaleNotes[0];var currentNotes=scaleNotes.map(function(currentNote,j){if(j===0&&i===startOctave){previousNote=currentNote;return''+currentNote+currentOctave;}if((0,_isInHigherOctave2.default)(previousNote,currentNote)){currentOctave+=1;}previousNote=currentNote;return''+currentNote+currentOctave;});scaleNotesWithInterval=[].concat(scaleNotesWithInterval,currentNotes);};for(var i=startOctave;i<startOctave+count;i+=1){_loop(i);}return scaleNotesWithInterval;};exports.default=getScaleNotes;/***/},/* 55 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _NOTES=__webpack_require__(36);var _NOTES2=_interopRequireDefault(_NOTES);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * reorder a set of notes such that it starts with the firstNote
	 * @function
	 * @name reOrderNotes
	 * @param {string} firstNote
	 * @param {array} notes
	 * @example
	 * reOrderNotes('A' , ['C', 'B', 'A']) // returns ['A', 'B', 'C']
	 * reOrderNotes('B') // returns ['B', 'C', 'D', 'E', 'F', 'G', 'A']
	 * @return {boolean} isInHigherOctave
	 */var reOrderNotes=function reOrderNotes(startingNote){var notes=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_NOTES2.default;var startingNoteIndex=notes.indexOf(startingNote);var reorderedNotes=[];for(var i=startingNoteIndex;i<notes.length+startingNoteIndex;i+=1){var currentNoteIndex=i%notes.length;reorderedNotes.push(notes[currentNoteIndex]);}return reorderedNotes;};/* mod */exports.default=reOrderNotes;/***/},/* 56 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _NOTES=__webpack_require__(36);var _NOTES2=_interopRequireDefault(_NOTES);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * Checks if interval between noteTwo and noteOne is negative or positive to know when to change octave
	 * @function
	 * @name isInHigherOctave
	 * @param {string} noteOneNoOctave
	 * @param {string} noteTwoNoOctave
	 * @example
	 * isInHigherOctave('A', 'B') // returns false
	 * isInHigherOctave('B', 'A') // returns true
	 * @return {boolean} isInHigherOctave
	 */var isInHigherOctave=function isInHigherOctave(previousNote,nextNote){return _NOTES2.default.indexOf(previousNote)>=_NOTES2.default.indexOf(nextNote);};/* mod */exports.default=isInHigherOctave;/***/},/* 57 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _immutabilityHelper=__webpack_require__(33);var _immutabilityHelper2=_interopRequireDefault(_immutabilityHelper);var _MidiIO=__webpack_require__(50);var _MidiIO2=_interopRequireDefault(_MidiIO);var _Note=__webpack_require__(35);var _Note2=_interopRequireDefault(_Note);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * reorder a set of notes such that it starts with the firstNote
	 * @function
	 * @name updateTempo
	 * @param {object} tracksAndMeta from getTracksAndMetaFromParsedMidi getTracksAndMetaFromUrl
	 * @param {array} notes
	 * @example
	 * const newBPM = 60;
	 * const trackIndex = 1;
	 * const tracksAndMeta = await getTracksAndMetaFromUrl(url);
	 * const updatedTracksAndMeta = updateTempo(tracksAndMeta, newBPM, trackIndex);
	 * updateTempo('A' , ['C', 'B', 'A']); // returns ['A', 'B', 'C']
	 * reOrderNotes('B'); // returns ['B', 'C', 'D', 'E', 'F', 'G', 'A']
	 * @return {object} tracksAndMeta
	 */var updateTempo=function updateTempo(tracksAndMeta,BPM){var trackIndex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:-1;var trackMeta=tracksAndMeta.meta;// const trackNotes = tracksAndMeta.notes[0];
var newMSPerBeat=_MidiIO2.default.bpmToMSPerBeat(BPM,trackMeta.timeSignatureNumerator,trackMeta.timeSignatureDenominator);var newMSPerTick=_MidiIO2.default.getMillisecondsPerTick(newMSPerBeat/1000,trackMeta.ticksPerBeat);var updatedMeta=(0,_immutabilityHelper2.default)(trackMeta,{millisecondsPerTick:{$set:newMSPerTick},BPM:{$set:BPM}});var previousEndTime=0;var updatedTracks=tracksAndMeta.tracks.map(function(track,i){if(trackIndex!==-1&&i!==trackIndex){return track;}var updatedTrack=track.map(function(note,j){var _MidiIO$noteOffEventT=_MidiIO2.default.noteOffEventToNote({deltaTime:note.payload.deltaTime,noteNumber:note.payload.noteNumber},note.payload.instrumentName,previousEndTime,newMSPerTick);var noteNumber=_MidiIO$noteOffEventT.noteNumber;var noteName=_MidiIO$noteOffEventT.noteName;var startTimeInMS=_MidiIO$noteOffEventT.startTimeInMS;var durationInMS=_MidiIO$noteOffEventT.durationInMS;var endTimeInMS=_MidiIO$noteOffEventT.endTimeInMS;var noteInstrumentName=_MidiIO$noteOffEventT.noteInstrumentName;var deltaTime=_MidiIO$noteOffEventT.deltaTime;var msPerTick=_MidiIO$noteOffEventT.msPerTick;previousEndTime=endTimeInMS;var updatedNote=new _Note2.default({noteNumber:noteNumber,noteName:noteName,startTimeInMS:startTimeInMS,durationInMS:durationInMS,endTimeInMS:endTimeInMS,instrumentName:noteInstrumentName,deltaTime:deltaTime,msPerTick:newMSPerTick});return updatedNote;});return updatedTrack;});return{meta:updatedMeta,tracks:updatedTracks};};/* mod */exports.default=updateTempo;/***/},/* 58 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _chance=__webpack_require__(59);var _chance2=_interopRequireDefault(_chance);var _Note=__webpack_require__(35);var _Note2=_interopRequireDefault(_Note);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var chance=null;var getRandomGenerator=function getRandomGenerator(){var seed=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.randomSeed;chance=chance===null?new _chance2.default(seed?seed:window.randomSeed?window.randomSeed:undefined):chance;return chance;};var createMelodyFromNotes=function createMelodyFromNotes(notes){var durationInMS=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1000;var numberOfNotes=arguments.length>2&&arguments[2]!==undefined?arguments[2]:-1;var durationInSeconds=durationInMS/1000;var noteCount=numberOfNotes===-1?getRandomGenerator().integer({min:durationInSeconds/2,max:durationInSeconds*2}):numberOfNotes;var generatedDuration=0;var generatedNotes=Array.apply(undefined,Array(noteCount)).map(function(){var selectedNote=getRandomGenerator().integer({min:0,max:notes.length-1});var noteName=notes[selectedNote];return noteName;}).map(function(noteName,i){var noteDurationInMS=getRandomGenerator().integer({min:durationInMS/noteCount-durationInMS/10,max:durationInMS/noteCount+durationInMS/10});if(i===noteCount-1){noteDurationInMS=durationInMS-generatedDuration;}// const noteDurationInMS = noteDurationInMS;
var startTimeInMS=getRandomGenerator().integer({min:0,max:durationInMS-noteDurationInMS});var endTimeInMS=startTimeInMS+noteDurationInMS;generatedDuration+=noteDurationInMS;return new _Note2.default({noteName:noteName,durationInMS:noteDurationInMS,startTimeInMS:startTimeInMS,endTimeInMS:endTimeInMS});}).sort(function(previous,current){if(previous.payload.startTimeInMS<current.payload.startTimeInMS){return-1;}if(previous.payload.startTimeInMS>current.payload.startTimeInMS){return 1;}return 0;});return generatedNotes;// return new Melody({ notes: generatedNotes });
};exports.default=createMelodyFromNotes;/***/},/* 59 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer){//  Chance.js 1.0.4
//  http://chancejs.com
//  (c) 2013 Victor Quinn
//  Chance may be freely distributed or modified under the MIT license.
(function(){// Constants
var MAX_INT=9007199254740992;var MIN_INT=-MAX_INT;var NUMBERS='0123456789';var CHARS_LOWER='abcdefghijklmnopqrstuvwxyz';var CHARS_UPPER=CHARS_LOWER.toUpperCase();var HEX_POOL=NUMBERS+"abcdef";// Cached array helpers
var slice=Array.prototype.slice;// Constructor
function Chance(seed){if(!(this instanceof Chance)){return seed==null?new Chance():new Chance(seed);}// if user has provided a function, use that as the generator
if(typeof seed==='function'){this.random=seed;return this;}if(arguments.length){// set a starting value of zero so we can add to it
this.seed=0;}// otherwise, leave this.seed blank so that MT will receive a blank
for(var i=0;i<arguments.length;i++){var seedling=0;if(Object.prototype.toString.call(arguments[i])==='[object String]'){for(var j=0;j<arguments[i].length;j++){// create a numeric hash for each argument, add to seedling
var hash=0;for(var k=0;k<arguments[i].length;k++){hash=arguments[i].charCodeAt(k)+(hash<<6)+(hash<<16)-hash;}seedling+=hash;}}else{seedling=arguments[i];}this.seed+=(arguments.length-i)*seedling;}// If no generator function was provided, use our MT
this.mt=this.mersenne_twister(this.seed);this.bimd5=this.blueimp_md5();this.random=function(){return this.mt.random(this.seed);};return this;}Chance.prototype.VERSION="1.0.4";// Random helper functions
function initOptions(options,defaults){options||(options={});if(defaults){for(var i in defaults){if(typeof options[i]==='undefined'){options[i]=defaults[i];}}}return options;}function testRange(test,errorMessage){if(test){throw new RangeError(errorMessage);}}/**
	     * Encode the input string with Base64.
	     */var base64=function base64(){throw new Error('No Base64 encoder available.');};// Select proper Base64 encoder.
(function determineBase64Encoder(){if(typeof btoa==='function'){base64=btoa;}else if(typeof Buffer==='function'){base64=function base64(input){return new Buffer(input).toString('base64');};}})();// -- Basics --
/**
	     *  Return a random bool, either true or false
	     *
	     *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
	     *    receiving a true or false value back.
	     *  @throws {RangeError} if the likelihood is out of bounds
	     *  @returns {Bool} either true or false
	     */Chance.prototype.bool=function(options){// likelihood of success (true)
options=initOptions(options,{likelihood:50});// Note, we could get some minor perf optimizations by checking range
// prior to initializing defaults, but that makes code a bit messier
// and the check more complicated as we have to check existence of
// the object then existence of the key before checking constraints.
// Since the options initialization should be minor computationally,
// decision made for code cleanliness intentionally. This is mentioned
// here as it's the first occurrence, will not be mentioned again.
testRange(options.likelihood<0||options.likelihood>100,"Chance: Likelihood accepts values from 0 to 100.");return this.random()*100<options.likelihood;};/**
	     *  Return a random character.
	     *
	     *  @param {Object} [options={}] can specify a character pool, only alpha,
	     *    only symbols, and casing (lower or upper)
	     *  @returns {String} a single random character
	     *  @throws {RangeError} Can only specify alpha or symbols, not both
	     */Chance.prototype.character=function(options){options=initOptions(options);testRange(options.alpha&&options.symbols,"Chance: Cannot specify both alpha and symbols.");var symbols="!@#$%^&*()[]",letters,pool;if(options.casing==='lower'){letters=CHARS_LOWER;}else if(options.casing==='upper'){letters=CHARS_UPPER;}else{letters=CHARS_LOWER+CHARS_UPPER;}if(options.pool){pool=options.pool;}else if(options.alpha){pool=letters;}else if(options.symbols){pool=symbols;}else{pool=letters+NUMBERS+symbols;}return pool.charAt(this.natural({max:pool.length-1}));};// Note, wanted to use "float" or "double" but those are both JS reserved words.
// Note, fixed means N OR LESS digits after the decimal. This because
// It could be 14.9000 but in JavaScript, when this is cast as a number,
// the trailing zeroes are dropped. Left to the consumer if trailing zeroes are
// needed
/**
	     *  Return a random floating point number
	     *
	     *  @param {Object} [options={}] can specify a fixed precision, min, max
	     *  @returns {Number} a single floating point number
	     *  @throws {RangeError} Can only specify fixed or precision, not both. Also
	     *    min cannot be greater than max
	     */Chance.prototype.floating=function(options){options=initOptions(options,{fixed:4});testRange(options.fixed&&options.precision,"Chance: Cannot specify both fixed and precision.");var num;var fixed=Math.pow(10,options.fixed);var max=MAX_INT/fixed;var min=-max;testRange(options.min&&options.fixed&&options.min<min,"Chance: Min specified is out of range with fixed. Min should be, at least, "+min);testRange(options.max&&options.fixed&&options.max>max,"Chance: Max specified is out of range with fixed. Max should be, at most, "+max);options=initOptions(options,{min:min,max:max});// Todo - Make this work!
// options.precision = (typeof options.precision !== "undefined") ? options.precision : false;
num=this.integer({min:options.min*fixed,max:options.max*fixed});var num_fixed=(num/fixed).toFixed(options.fixed);return parseFloat(num_fixed);};/**
	     *  Return a random integer
	     *
	     *  NOTE the max and min are INCLUDED in the range. So:
	     *  chance.integer({min: 1, max: 3});
	     *  would return either 1, 2, or 3.
	     *
	     *  @param {Object} [options={}] can specify a min and/or max
	     *  @returns {Number} a single random integer number
	     *  @throws {RangeError} min cannot be greater than max
	     */Chance.prototype.integer=function(options){// 9007199254740992 (2^53) is the max integer number in JavaScript
// See: http://vq.io/132sa2j
options=initOptions(options,{min:MIN_INT,max:MAX_INT});testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");return Math.floor(this.random()*(options.max-options.min+1)+options.min);};/**
	     *  Return a random natural
	     *
	     *  NOTE the max and min are INCLUDED in the range. So:
	     *  chance.natural({min: 1, max: 3});
	     *  would return either 1, 2, or 3.
	     *
	     *  @param {Object} [options={}] can specify a min and/or max
	     *  @returns {Number} a single random integer number
	     *  @throws {RangeError} min cannot be greater than max
	     */Chance.prototype.natural=function(options){options=initOptions(options,{min:0,max:MAX_INT});testRange(options.min<0,"Chance: Min cannot be less than zero.");return this.integer(options);};/**
	     *  Return a random string
	     *
	     *  @param {Object} [options={}] can specify a length
	     *  @returns {String} a string of random length
	     *  @throws {RangeError} length cannot be less than zero
	     */Chance.prototype.string=function(options){options=initOptions(options,{length:this.natural({min:5,max:20})});testRange(options.length<0,"Chance: Length cannot be less than zero.");var length=options.length,text=this.n(this.character,length,options);return text.join("");};// -- End Basics --
// -- Helpers --
Chance.prototype.capitalize=function(word){return word.charAt(0).toUpperCase()+word.substr(1);};Chance.prototype.mixin=function(obj){for(var func_name in obj){Chance.prototype[func_name]=obj[func_name];}return this;};/**
	     *  Given a function that generates something random and a number of items to generate,
	     *    return an array of items where none repeat.
	     *
	     *  @param {Function} fn the function that generates something random
	     *  @param {Number} num number of terms to generate
	     *  @param {Object} options any options to pass on to the generator function
	     *  @returns {Array} an array of length `num` with every item generated by `fn` and unique
	     *
	     *  There can be more parameters after these. All additional parameters are provided to the given function
	     */Chance.prototype.unique=function(fn,num,options){testRange(typeof fn!=="function","Chance: The first argument must be a function.");var comparator=function comparator(arr,val){return arr.indexOf(val)!==-1;};if(options){comparator=options.comparator||comparator;}var arr=[],count=0,result,MAX_DUPLICATES=num*50,params=slice.call(arguments,2);while(arr.length<num){var clonedParams=JSON.parse(_JSON$stringify(params));result=fn.apply(this,clonedParams);if(!comparator(arr,result)){arr.push(result);// reset count when unique found
count=0;}if(++count>MAX_DUPLICATES){throw new RangeError("Chance: num is likely too large for sample set");}}return arr;};/**
	     *  Gives an array of n random terms
	     *
	     *  @param {Function} fn the function that generates something random
	     *  @param {Number} n number of terms to generate
	     *  @returns {Array} an array of length `n` with items generated by `fn`
	     *
	     *  There can be more parameters after these. All additional parameters are provided to the given function
	     */Chance.prototype.n=function(fn,n){testRange(typeof fn!=="function","Chance: The first argument must be a function.");if(typeof n==='undefined'){n=1;}var i=n,arr=[],params=slice.call(arguments,2);// Providing a negative count should result in a noop.
i=Math.max(0,i);for(null;i--;null){arr.push(fn.apply(this,params));}return arr;};// H/T to SO for this one: http://vq.io/OtUrZ5
Chance.prototype.pad=function(number,width,pad){// Default pad to 0 if none provided
pad=pad||'0';// Convert number to a string
number=number+'';return number.length>=width?number:new Array(width-number.length+1).join(pad)+number;};// DEPRECATED on 2015-10-01
Chance.prototype.pick=function(arr,count){if(arr.length===0){throw new RangeError("Chance: Cannot pick() from an empty array");}if(!count||count===1){return arr[this.natural({max:arr.length-1})];}else{return this.shuffle(arr).slice(0,count);}};// Given an array, returns a single random element
Chance.prototype.pickone=function(arr){if(arr.length===0){throw new RangeError("Chance: Cannot pickone() from an empty array");}return arr[this.natural({max:arr.length-1})];};// Given an array, returns a random set with 'count' elements
Chance.prototype.pickset=function(arr,count){if(count===0){return[];}if(arr.length===0){throw new RangeError("Chance: Cannot pickset() from an empty array");}if(count<0){throw new RangeError("Chance: count must be positive number");}if(!count||count===1){return[this.pickone(arr)];}else{return this.shuffle(arr).slice(0,count);}};Chance.prototype.shuffle=function(arr){var old_array=arr.slice(0),new_array=[],j=0,length=Number(old_array.length);for(var i=0;i<length;i++){// Pick a random index from the array
j=this.natural({max:old_array.length-1});// Add it to the new array
new_array[i]=old_array[j];// Remove that element from the original array
old_array.splice(j,1);}return new_array;};// Returns a single item from an array with relative weighting of odds
Chance.prototype.weighted=function(arr,weights,trim){if(arr.length!==weights.length){throw new RangeError("Chance: length of array and weights must match");}// scan weights array and sum valid entries
var sum=0;var val;for(var weightIndex=0;weightIndex<weights.length;++weightIndex){val=weights[weightIndex];if(val>0){sum+=val;}}if(sum===0){throw new RangeError("Chance: no valid entries in array weights");}// select a value within range
var selected=this.random()*sum;// find array entry corresponding to selected value
var total=0;var lastGoodIdx=-1;var chosenIdx;for(weightIndex=0;weightIndex<weights.length;++weightIndex){val=weights[weightIndex];total+=val;if(val>0){if(selected<=total){chosenIdx=weightIndex;break;}lastGoodIdx=weightIndex;}// handle any possible rounding error comparison to ensure something is picked
if(weightIndex===weights.length-1){chosenIdx=lastGoodIdx;}}var chosen=arr[chosenIdx];trim=typeof trim==='undefined'?false:trim;if(trim){arr.splice(chosenIdx,1);weights.splice(chosenIdx,1);}return chosen;};// -- End Helpers --
// -- Text --
Chance.prototype.paragraph=function(options){options=initOptions(options);var sentences=options.sentences||this.natural({min:3,max:7}),sentence_array=this.n(this.sentence,sentences);return sentence_array.join(' ');};// Could get smarter about this than generating random words and
// chaining them together. Such as: http://vq.io/1a5ceOh
Chance.prototype.sentence=function(options){options=initOptions(options);var words=options.words||this.natural({min:12,max:18}),punctuation=options.punctuation,text,word_array=this.n(this.word,words);text=word_array.join(' ');// Capitalize first letter of sentence
text=this.capitalize(text);// Make sure punctuation has a usable value
if(punctuation!==false&&!/^[\.\?;!:]$/.test(punctuation)){punctuation='.';}// Add punctuation mark
if(punctuation){text+=punctuation;}return text;};Chance.prototype.syllable=function(options){options=initOptions(options);var length=options.length||this.natural({min:2,max:3}),consonants='bcdfghjklmnprstvwz',// consonants except hard to speak ones
vowels='aeiou',// vowels
all=consonants+vowels,// all
text='',chr;// I'm sure there's a more elegant way to do this, but this works
// decently well.
for(var i=0;i<length;i++){if(i===0){// First character can be anything
chr=this.character({pool:all});}else if(consonants.indexOf(chr)===-1){// Last character was a vowel, now we want a consonant
chr=this.character({pool:consonants});}else{// Last character was a consonant, now we want a vowel
chr=this.character({pool:vowels});}text+=chr;}if(options.capitalize){text=this.capitalize(text);}return text;};Chance.prototype.word=function(options){options=initOptions(options);testRange(options.syllables&&options.length,"Chance: Cannot specify both syllables AND length.");var syllables=options.syllables||this.natural({min:1,max:3}),text='';if(options.length){// Either bound word by length
do{text+=this.syllable();}while(text.length<options.length);text=text.substring(0,options.length);}else{// Or by number of syllables
for(var i=0;i<syllables;i++){text+=this.syllable();}}if(options.capitalize){text=this.capitalize(text);}return text;};// -- End Text --
// -- Person --
Chance.prototype.age=function(options){options=initOptions(options);var ageRange;switch(options.type){case'child':ageRange={min:0,max:12};break;case'teen':ageRange={min:13,max:19};break;case'adult':ageRange={min:18,max:65};break;case'senior':ageRange={min:65,max:100};break;case'all':ageRange={min:0,max:100};break;default:ageRange={min:18,max:65};break;}return this.natural(ageRange);};Chance.prototype.birthday=function(options){var age=this.age(options);var currentYear=new Date().getFullYear();if(options&&options.type){var min=new Date();var max=new Date();min.setFullYear(currentYear-age-1);max.setFullYear(currentYear-age);options=initOptions(options,{min:min,max:max});}else{options=initOptions(options,{year:currentYear-age});}return this.date(options);};// CPF; ID to identify taxpayers in Brazil
Chance.prototype.cpf=function(options){options=initOptions(options,{formatted:true});var n=this.n(this.natural,9,{max:9});var d1=n[8]*2+n[7]*3+n[6]*4+n[5]*5+n[4]*6+n[3]*7+n[2]*8+n[1]*9+n[0]*10;d1=11-d1%11;if(d1>=10){d1=0;}var d2=d1*2+n[8]*3+n[7]*4+n[6]*5+n[5]*6+n[4]*7+n[3]*8+n[2]*9+n[1]*10+n[0]*11;d2=11-d2%11;if(d2>=10){d2=0;}var cpf=''+n[0]+n[1]+n[2]+'.'+n[3]+n[4]+n[5]+'.'+n[6]+n[7]+n[8]+'-'+d1+d2;return options.formatted?cpf:cpf.replace(/\D/g,'');};// CNPJ: ID to identify companies in Brazil
Chance.prototype.cnpj=function(options){options=initOptions(options,{formatted:true});var n=this.n(this.natural,12,{max:12});var d1=n[11]*2+n[10]*3+n[9]*4+n[8]*5+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;d1=11-d1%11;if(d1<2){d1=0;}var d2=d1*2+n[11]*3+n[10]*4+n[9]*5+n[8]*6+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;d2=11-d2%11;if(d2<2){d2=0;}var cnpj=''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/'+n[8]+n[9]+n[10]+n[11]+'-'+d1+d2;return options.formatted?cnpj:cnpj.replace(/\D/g,'');};Chance.prototype.first=function(options){options=initOptions(options,{gender:this.gender(),nationality:'en'});return this.pick(this.get("firstNames")[options.gender.toLowerCase()][options.nationality.toLowerCase()]);};Chance.prototype.gender=function(options){options=initOptions(options,{extraGenders:[]});return this.pick(['Male','Female'].concat(options.extraGenders));};Chance.prototype.last=function(options){options=initOptions(options,{nationality:'en'});return this.pick(this.get("lastNames")[options.nationality.toLowerCase()]);};Chance.prototype.israelId=function(){var x=this.string({pool:'0123456789',length:8});var y=0;for(var i=0;i<x.length;i++){var thisDigit=x[i]*(i/2===parseInt(i/2)?1:2);thisDigit=this.pad(thisDigit,2).toString();thisDigit=parseInt(thisDigit[0])+parseInt(thisDigit[1]);y=y+thisDigit;}x=x+(10-parseInt(y.toString().slice(-1))).toString().slice(-1);return x;};Chance.prototype.mrz=function(options){var checkDigit=function checkDigit(input){var alpha="<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(''),multipliers=[7,3,1],runningTotal=0;if(typeof input!=='string'){input=input.toString();}input.split('').forEach(function(character,idx){var pos=alpha.indexOf(character);if(pos!==-1){character=pos===0?0:pos+9;}else{character=parseInt(character,10);}character*=multipliers[idx%multipliers.length];runningTotal+=character;});return runningTotal%10;};var generate=function generate(opts){var pad=function pad(length){return new Array(length+1).join('<');};var number=['P<',opts.issuer,opts.last.toUpperCase(),'<<',opts.first.toUpperCase(),pad(39-(opts.last.length+opts.first.length+2)),opts.passportNumber,checkDigit(opts.passportNumber),opts.nationality,opts.dob,checkDigit(opts.dob),opts.gender,opts.expiry,checkDigit(opts.expiry),pad(14),checkDigit(pad(14))].join('');return number+checkDigit(number.substr(44,10)+number.substr(57,7)+number.substr(65,7));};var that=this;options=initOptions(options,{first:this.first(),last:this.last(),passportNumber:this.integer({min:100000000,max:999999999}),dob:function(){var date=that.birthday({type:'adult'});return[date.getFullYear().toString().substr(2),that.pad(date.getMonth()+1,2),that.pad(date.getDate(),2)].join('');}(),expiry:function(){var date=new Date();return[(date.getFullYear()+5).toString().substr(2),that.pad(date.getMonth()+1,2),that.pad(date.getDate(),2)].join('');}(),gender:this.gender()==='Female'?'F':'M',issuer:'GBR',nationality:'GBR'});return generate(options);};Chance.prototype.name=function(options){options=initOptions(options);var first=this.first(options),last=this.last(options),name;if(options.middle){name=first+' '+this.first(options)+' '+last;}else if(options.middle_initial){name=first+' '+this.character({alpha:true,casing:'upper'})+'. '+last;}else{name=first+' '+last;}if(options.prefix){name=this.prefix(options)+' '+name;}if(options.suffix){name=name+' '+this.suffix(options);}return name;};// Return the list of available name prefixes based on supplied gender.
// @todo introduce internationalization
Chance.prototype.name_prefixes=function(gender){gender=gender||"all";gender=gender.toLowerCase();var prefixes=[{name:'Doctor',abbreviation:'Dr.'}];if(gender==="male"||gender==="all"){prefixes.push({name:'Mister',abbreviation:'Mr.'});}if(gender==="female"||gender==="all"){prefixes.push({name:'Miss',abbreviation:'Miss'});prefixes.push({name:'Misses',abbreviation:'Mrs.'});}return prefixes;};// Alias for name_prefix
Chance.prototype.prefix=function(options){return this.name_prefix(options);};Chance.prototype.name_prefix=function(options){options=initOptions(options,{gender:"all"});return options.full?this.pick(this.name_prefixes(options.gender)).name:this.pick(this.name_prefixes(options.gender)).abbreviation;};//Hungarian ID number
Chance.prototype.HIDN=function(){//Hungarian ID nuber structure: XXXXXXYY (X=number,Y=Capital Latin letter)
var idn_pool="0123456789";var idn_chrs="ABCDEFGHIJKLMNOPQRSTUVWXYXZ";var idn="";idn+=this.string({pool:idn_pool,length:6});idn+=this.string({pool:idn_chrs,length:2});return idn;};Chance.prototype.ssn=function(options){options=initOptions(options,{ssnFour:false,dashes:true});var ssn_pool="1234567890",ssn,dash=options.dashes?'-':'';if(!options.ssnFour){ssn=this.string({pool:ssn_pool,length:3})+dash+this.string({pool:ssn_pool,length:2})+dash+this.string({pool:ssn_pool,length:4});}else{ssn=this.string({pool:ssn_pool,length:4});}return ssn;};// Return the list of available name suffixes
// @todo introduce internationalization
Chance.prototype.name_suffixes=function(){var suffixes=[{name:'Doctor of Osteopathic Medicine',abbreviation:'D.O.'},{name:'Doctor of Philosophy',abbreviation:'Ph.D.'},{name:'Esquire',abbreviation:'Esq.'},{name:'Junior',abbreviation:'Jr.'},{name:'Juris Doctor',abbreviation:'J.D.'},{name:'Master of Arts',abbreviation:'M.A.'},{name:'Master of Business Administration',abbreviation:'M.B.A.'},{name:'Master of Science',abbreviation:'M.S.'},{name:'Medical Doctor',abbreviation:'M.D.'},{name:'Senior',abbreviation:'Sr.'},{name:'The Third',abbreviation:'III'},{name:'The Fourth',abbreviation:'IV'},{name:'Bachelor of Engineering',abbreviation:'B.E'},{name:'Bachelor of Technology',abbreviation:'B.TECH'}];return suffixes;};// Alias for name_suffix
Chance.prototype.suffix=function(options){return this.name_suffix(options);};Chance.prototype.name_suffix=function(options){options=initOptions(options);return options.full?this.pick(this.name_suffixes()).name:this.pick(this.name_suffixes()).abbreviation;};Chance.prototype.nationalities=function(){return this.get("nationalities");};// Generate random nationality based on json list
Chance.prototype.nationality=function(){var nationality=this.pick(this.nationalities());return nationality.name;};// -- End Person --
// -- Mobile --
// Android GCM Registration ID
Chance.prototype.android_id=function(){return"APA91"+this.string({pool:"0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",length:178});};// Apple Push Token
Chance.prototype.apple_token=function(){return this.string({pool:"abcdef1234567890",length:64});};// Windows Phone 8 ANID2
Chance.prototype.wp8_anid2=function(){return base64(this.hash({length:32}));};// Windows Phone 7 ANID
Chance.prototype.wp7_anid=function(){return'A='+this.guid().replace(/-/g,'').toUpperCase()+'&E='+this.hash({length:3})+'&W='+this.integer({min:0,max:9});};// BlackBerry Device PIN
Chance.prototype.bb_pin=function(){return this.hash({length:8});};// -- End Mobile --
// -- Web --
Chance.prototype.avatar=function(options){var url=null;var URL_BASE='//www.gravatar.com/avatar/';var PROTOCOLS={http:'http',https:'https'};var FILE_TYPES={bmp:'bmp',gif:'gif',jpg:'jpg',png:'png'};var FALLBACKS={'404':'404',// Return 404 if not found
mm:'mm',// Mystery man
identicon:'identicon',// Geometric pattern based on hash
monsterid:'monsterid',// A generated monster icon
wavatar:'wavatar',// A generated face
retro:'retro',// 8-bit icon
blank:'blank'// A transparent png
};var RATINGS={g:'g',pg:'pg',r:'r',x:'x'};var opts={protocol:null,email:null,fileExtension:null,size:null,fallback:null,rating:null};if(!options){// Set to a random email
opts.email=this.email();options={};}else if(typeof options==='string'){opts.email=options;options={};}else if((typeof options==='undefined'?'undefined':_typeof2(options))!=='object'){return null;}else if(options.constructor==='Array'){return null;}opts=initOptions(options,opts);if(!opts.email){// Set to a random email
opts.email=this.email();}// Safe checking for params
opts.protocol=PROTOCOLS[opts.protocol]?opts.protocol+':':'';opts.size=parseInt(opts.size,0)?opts.size:'';opts.rating=RATINGS[opts.rating]?opts.rating:'';opts.fallback=FALLBACKS[opts.fallback]?opts.fallback:'';opts.fileExtension=FILE_TYPES[opts.fileExtension]?opts.fileExtension:'';url=opts.protocol+URL_BASE+this.bimd5.md5(opts.email)+(opts.fileExtension?'.'+opts.fileExtension:'')+(opts.size||opts.rating||opts.fallback?'?':'')+(opts.size?'&s='+opts.size.toString():'')+(opts.rating?'&r='+opts.rating:'')+(opts.fallback?'&d='+opts.fallback:'');return url;};/**
	     * #Description:
	     * ===============================================
	     * Generate random color value base on color type:
	     * -> hex
	     * -> rgb
	     * -> rgba
	     * -> 0x
	     * -> named color
	     *
	     * #Examples:
	     * ===============================================
	     * * Geerate random hex color
	     * chance.color() => '#79c157' / 'rgb(110,52,164)' / '0x67ae0b' / '#e2e2e2' / '#29CFA7'
	     *
	     * * Generate Hex based color value
	     * chance.color({format: 'hex'})    => '#d67118'
	     *
	     * * Generate simple rgb value
	     * chance.color({format: 'rgb'})    => 'rgb(110,52,164)'
	     *
	     * * Generate Ox based color value
	     * chance.color({format: '0x'})     => '0x67ae0b'
	     *
	     * * Generate graiscale based value
	     * chance.color({grayscale: true})  => '#e2e2e2'
	     *
	     * * Return valide color name
	     * chance.color({format: 'name'})   => 'red'
	     *
	     * * Make color uppercase
	     * chance.color({casing: 'upper'})  => '#29CFA7'
	     *
	     * @param  [object] options
	     * @return [string] color value
	     */Chance.prototype.color=function(options){function gray(value,delimiter){return[value,value,value].join(delimiter||'');}function rgb(hasAlpha){var rgbValue=hasAlpha?'rgba':'rgb';var alphaChanal=hasAlpha?','+this.floating({min:0,max:1}):"";var colorValue=isGrayscale?gray(this.natural({max:255}),','):this.natural({max:255})+','+this.natural({max:255})+','+this.natural({max:255});return rgbValue+'('+colorValue+alphaChanal+')';}function hex(start,end,withHash){var simbol=withHash?"#":"";var expression=isGrayscale?gray(this.hash({length:start})):this.hash({length:end});return simbol+expression;}options=initOptions(options,{format:this.pick(['hex','shorthex','rgb','rgba','0x','name']),grayscale:false,casing:'lower'});var isGrayscale=options.grayscale;var colorValue;if(options.format==='hex'){colorValue=hex.call(this,2,6,true);}else if(options.format==='shorthex'){colorValue=hex.call(this,1,3,true);}else if(options.format==='rgb'){colorValue=rgb.call(this,false);}else if(options.format==='rgba'){colorValue=rgb.call(this,true);}else if(options.format==='0x'){colorValue='0x'+hex.call(this,2,6);}else if(options.format==='name'){return this.pick(this.get("colorNames"));}else{throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');}if(options.casing==='upper'){colorValue=colorValue.toUpperCase();}return colorValue;};Chance.prototype.domain=function(options){options=initOptions(options);return this.word()+'.'+(options.tld||this.tld());};Chance.prototype.email=function(options){options=initOptions(options);return this.word({length:options.length})+'@'+(options.domain||this.domain());};Chance.prototype.fbid=function(){return parseInt('10000'+this.natural({max:100000000000}),10);};Chance.prototype.google_analytics=function(){var account=this.pad(this.natural({max:999999}),6);var property=this.pad(this.natural({max:99}),2);return'UA-'+account+'-'+property;};Chance.prototype.hashtag=function(){return'#'+this.word();};Chance.prototype.ip=function(){// Todo: This could return some reserved IPs. See http://vq.io/137dgYy
// this should probably be updated to account for that rare as it may be
return this.natural({min:1,max:254})+'.'+this.natural({max:255})+'.'+this.natural({max:255})+'.'+this.natural({min:1,max:254});};Chance.prototype.ipv6=function(){var ip_addr=this.n(this.hash,8,{length:4});return ip_addr.join(":");};Chance.prototype.klout=function(){return this.natural({min:1,max:99});};Chance.prototype.semver=function(options){options=initOptions(options,{include_prerelease:true});var range=this.pickone(["^","~","<",">","<=",">=","="]);if(options.range){range=options.range;}var prerelease="";if(options.include_prerelease){prerelease=this.weighted(["","-dev","-beta","-alpha"],[50,10,5,1]);}return range+this.rpg('3d10').join('.')+prerelease;};Chance.prototype.tlds=function(){return['com','org','edu','gov','co.uk','net','io','ac','ad','ae','af','ag','ai','al','am','an','ao','aq','ar','as','at','au','aw','ax','az','ba','bb','bd','be','bf','bg','bh','bi','bj','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz','ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz','de','dj','dk','dm','do','dz','ec','ee','eg','eh','er','es','et','eu','fi','fj','fk','fm','fo','fr','ga','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy','hk','hm','hn','hr','ht','hu','id','ie','il','im','in','io','iq','ir','is','it','je','jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly','ma','mc','md','me','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz','na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz','om','pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py','qa','re','ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','su','sv','sx','sy','sz','tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tp','tr','tt','tv','tw','tz','ua','ug','uk','us','uy','uz','va','vc','ve','vg','vi','vn','vu','wf','ws','ye','yt','za','zm','zw'];};Chance.prototype.tld=function(){return this.pick(this.tlds());};Chance.prototype.twitter=function(){return'@'+this.word();};Chance.prototype.url=function(options){options=initOptions(options,{protocol:"http",domain:this.domain(options),domain_prefix:"",path:this.word(),extensions:[]});var extension=options.extensions.length>0?"."+this.pick(options.extensions):"";var domain=options.domain_prefix?options.domain_prefix+"."+options.domain:options.domain;return options.protocol+"://"+domain+"/"+options.path+extension;};// -- End Web --
// -- Location --
Chance.prototype.address=function(options){options=initOptions(options);return this.natural({min:5,max:2000})+' '+this.street(options);};Chance.prototype.altitude=function(options){options=initOptions(options,{fixed:5,min:0,max:8848});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.areacode=function(options){options=initOptions(options,{parens:true});// Don't want area codes to start with 1, or have a 9 as the second digit
var areacode=this.natural({min:2,max:9}).toString()+this.natural({min:0,max:8}).toString()+this.natural({min:0,max:9}).toString();return options.parens?'('+areacode+')':areacode;};Chance.prototype.city=function(){return this.capitalize(this.word({syllables:3}));};Chance.prototype.coordinates=function(options){return this.latitude(options)+', '+this.longitude(options);};Chance.prototype.countries=function(){return this.get("countries");};Chance.prototype.country=function(options){options=initOptions(options);var country=this.pick(this.countries());return options.full?country.name:country.abbreviation;};Chance.prototype.depth=function(options){options=initOptions(options,{fixed:5,min:-10994,max:0});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.geohash=function(options){options=initOptions(options,{length:7});return this.string({length:options.length,pool:'0123456789bcdefghjkmnpqrstuvwxyz'});};Chance.prototype.geojson=function(options){return this.latitude(options)+', '+this.longitude(options)+', '+this.altitude(options);};Chance.prototype.latitude=function(options){options=initOptions(options,{fixed:5,min:-90,max:90});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.longitude=function(options){options=initOptions(options,{fixed:5,min:-180,max:180});return this.floating({min:options.min,max:options.max,fixed:options.fixed});};Chance.prototype.phone=function(options){var self=this,numPick,ukNum=function ukNum(parts){var section=[];//fills the section part of the phone number with random numbers.
parts.sections.forEach(function(n){section.push(self.string({pool:'0123456789',length:n}));});return parts.area+section.join(' ');};options=initOptions(options,{formatted:true,country:'us',mobile:false});if(!options.formatted){options.parens=false;}var phone;switch(options.country){case'fr':if(!options.mobile){numPick=this.pick([// Valid zone and département codes.
'01'+this.pick(['30','34','39','40','41','42','43','44','45','46','47','48','49','53','55','56','58','60','64','69','70','72','73','74','75','76','77','78','79','80','81','82','83'])+self.string({pool:'0123456789',length:6}),'02'+this.pick(['14','18','22','23','28','29','30','31','32','33','34','35','36','37','38','40','41','43','44','45','46','47','48','49','50','51','52','53','54','56','57','61','62','69','72','76','77','78','85','90','96','97','98','99'])+self.string({pool:'0123456789',length:6}),'03'+this.pick(['10','20','21','22','23','24','25','26','27','28','29','39','44','45','51','52','54','55','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','80','81','82','83','84','85','86','87','88','89','90'])+self.string({pool:'0123456789',length:6}),'04'+this.pick(['11','13','15','20','22','26','27','30','32','34','37','42','43','44','50','56','57','63','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','89','90','91','92','93','94','95','97','98'])+self.string({pool:'0123456789',length:6}),'05'+this.pick(['08','16','17','19','24','31','32','33','34','35','40','45','46','47','49','53','55','56','57','58','59','61','62','63','64','65','67','79','81','82','86','87','90','94'])+self.string({pool:'0123456789',length:6}),'09'+self.string({pool:'0123456789',length:8})]);phone=options.formatted?numPick.match(/../g).join(' '):numPick;}else{numPick=this.pick(['06','07'])+self.string({pool:'0123456789',length:8});phone=options.formatted?numPick.match(/../g).join(' '):numPick;}break;case'uk':if(!options.mobile){numPick=this.pick([//valid area codes of major cities/counties followed by random numbers in required format.
{area:'01'+this.character({pool:'234569'})+'1 ',sections:[3,4]},{area:'020 '+this.character({pool:'378'}),sections:[3,4]},{area:'023 '+this.character({pool:'89'}),sections:[3,4]},{area:'024 7',sections:[3,4]},{area:'028 '+this.pick(['25','28','37','71','82','90','92','95']),sections:[2,4]},{area:'012'+this.pick(['04','08','54','76','97','98'])+' ',sections:[6]},{area:'013'+this.pick(['63','64','84','86'])+' ',sections:[6]},{area:'014'+this.pick(['04','20','60','61','80','88'])+' ',sections:[6]},{area:'015'+this.pick(['24','27','62','66'])+' ',sections:[6]},{area:'016'+this.pick(['06','29','35','47','59','95'])+' ',sections:[6]},{area:'017'+this.pick(['26','44','50','68'])+' ',sections:[6]},{area:'018'+this.pick(['27','37','84','97'])+' ',sections:[6]},{area:'019'+this.pick(['00','05','35','46','49','63','95'])+' ',sections:[6]}]);phone=options.formatted?ukNum(numPick):ukNum(numPick).replace(' ','','g');}else{numPick=this.pick([{area:'07'+this.pick(['4','5','7','8','9']),sections:[2,6]},{area:'07624 ',sections:[6]}]);phone=options.formatted?ukNum(numPick):ukNum(numPick).replace(' ','');}break;case'us':var areacode=this.areacode(options).toString();var exchange=this.natural({min:2,max:9}).toString()+this.natural({min:0,max:9}).toString()+this.natural({min:0,max:9}).toString();var subscriber=this.natural({min:1000,max:9999}).toString();// this could be random [0-9]{4}
phone=options.formatted?areacode+' '+exchange+'-'+subscriber:areacode+exchange+subscriber;}return phone;};Chance.prototype.postal=function(){// Postal District
var pd=this.character({pool:"XVTSRPNKLMHJGECBA"});// Forward Sortation Area (FSA)
var fsa=pd+this.natural({max:9})+this.character({alpha:true,casing:"upper"});// Local Delivery Unut (LDU)
var ldu=this.natural({max:9})+this.character({alpha:true,casing:"upper"})+this.natural({max:9});return fsa+" "+ldu;};Chance.prototype.counties=function(options){options=initOptions(options,{country:'uk'});return this.get("counties")[options.country.toLowerCase()];};Chance.prototype.county=function(options){return this.pick(this.counties(options)).name;};Chance.prototype.provinces=function(options){options=initOptions(options,{country:'ca'});return this.get("provinces")[options.country.toLowerCase()];};Chance.prototype.province=function(options){return options&&options.full?this.pick(this.provinces(options)).name:this.pick(this.provinces(options)).abbreviation;};Chance.prototype.state=function(options){return options&&options.full?this.pick(this.states(options)).name:this.pick(this.states(options)).abbreviation;};Chance.prototype.states=function(options){options=initOptions(options,{country:'us',us_states_and_dc:true});var states;switch(options.country.toLowerCase()){case'us':var us_states_and_dc=this.get("us_states_and_dc"),territories=this.get("territories"),armed_forces=this.get("armed_forces");states=[];if(options.us_states_and_dc){states=states.concat(us_states_and_dc);}if(options.territories){states=states.concat(territories);}if(options.armed_forces){states=states.concat(armed_forces);}break;case'it':states=this.get("country_regions")[options.country.toLowerCase()];break;case'uk':states=this.get("counties")[options.country.toLowerCase()];break;}return states;};Chance.prototype.street=function(options){options=initOptions(options,{country:'us',syllables:2});var street;switch(options.country.toLowerCase()){case'us':street=this.word({syllables:options.syllables});street=this.capitalize(street);street+=' ';street+=options.short_suffix?this.street_suffix(options).abbreviation:this.street_suffix(options).name;break;case'it':street=this.word({syllables:options.syllables});street=this.capitalize(street);street=(options.short_suffix?this.street_suffix(options).abbreviation:this.street_suffix(options).name)+" "+street;break;}return street;};Chance.prototype.street_suffix=function(options){options=initOptions(options,{country:'us'});return this.pick(this.street_suffixes(options));};Chance.prototype.street_suffixes=function(options){options=initOptions(options,{country:'us'});// These are the most common suffixes.
return this.get("street_suffixes")[options.country.toLowerCase()];};// Note: only returning US zip codes, internationalization will be a whole
// other beast to tackle at some point.
Chance.prototype.zip=function(options){var zip=this.n(this.natural,5,{max:9});if(options&&options.plusfour===true){zip.push('-');zip=zip.concat(this.n(this.natural,4,{max:9}));}return zip.join("");};// -- End Location --
// -- Time
Chance.prototype.ampm=function(){return this.bool()?'am':'pm';};Chance.prototype.date=function(options){var date_string,date;// If interval is specified we ignore preset
if(options&&(options.min||options.max)){options=initOptions(options,{american:true,string:false});var min=typeof options.min!=="undefined"?options.min.getTime():1;// 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
var max=typeof options.max!=="undefined"?options.max.getTime():8640000000000000;date=new Date(this.integer({min:min,max:max}));}else{var m=this.month({raw:true});var daysInMonth=m.days;if(options&&options.month){// Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
daysInMonth=this.get('months')[(options.month%12+12)%12].days;}options=initOptions(options,{year:parseInt(this.year(),10),// Necessary to subtract 1 because Date() 0-indexes month but not day or year
// for some reason.
month:m.numeric-1,day:this.natural({min:1,max:daysInMonth}),hour:this.hour({twentyfour:true}),minute:this.minute(),second:this.second(),millisecond:this.millisecond(),american:true,string:false});date=new Date(options.year,options.month,options.day,options.hour,options.minute,options.second,options.millisecond);}if(options.american){// Adding 1 to the month is necessary because Date() 0-indexes
// months but not day for some odd reason.
date_string=date.getMonth()+1+'/'+date.getDate()+'/'+date.getFullYear();}else{date_string=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();}return options.string?date_string:date;};Chance.prototype.hammertime=function(options){return this.date(options).getTime();};Chance.prototype.hour=function(options){options=initOptions(options,{min:options&&options.twentyfour?0:1,max:options&&options.twentyfour?23:12});testRange(options.min<0,"Chance: Min cannot be less than 0.");testRange(options.twentyfour&&options.max>23,"Chance: Max cannot be greater than 23 for twentyfour option.");testRange(!options.twentyfour&&options.max>12,"Chance: Max cannot be greater than 12.");testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");return this.natural({min:options.min,max:options.max});};Chance.prototype.millisecond=function(){return this.natural({max:999});};Chance.prototype.minute=Chance.prototype.second=function(options){options=initOptions(options,{min:0,max:59});testRange(options.min<0,"Chance: Min cannot be less than 0.");testRange(options.max>59,"Chance: Max cannot be greater than 59.");testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");return this.natural({min:options.min,max:options.max});};Chance.prototype.month=function(options){options=initOptions(options,{min:1,max:12});testRange(options.min<1,"Chance: Min cannot be less than 1.");testRange(options.max>12,"Chance: Max cannot be greater than 12.");testRange(options.min>options.max,"Chance: Min cannot be greater than Max.");var month=this.pick(this.months().slice(options.min-1,options.max));return options.raw?month:month.name;};Chance.prototype.months=function(){return this.get("months");};Chance.prototype.second=function(){return this.natural({max:59});};Chance.prototype.timestamp=function(){return this.natural({min:1,max:parseInt(new Date().getTime()/1000,10)});};Chance.prototype.weekday=function(options){options=initOptions(options,{weekday_only:false});var weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday"];if(!options.weekday_only){weekdays.push("Saturday");weekdays.push("Sunday");}return this.pickone(weekdays);};Chance.prototype.year=function(options){// Default to current year as min if none specified
options=initOptions(options,{min:new Date().getFullYear()});// Default to one century after current year as max if none specified
options.max=typeof options.max!=="undefined"?options.max:options.min+100;return this.natural(options).toString();};// -- End Time
// -- Finance --
Chance.prototype.cc=function(options){options=initOptions(options);var type,number,to_generate;type=options.type?this.cc_type({name:options.type,raw:true}):this.cc_type({raw:true});number=type.prefix.split("");to_generate=type.length-type.prefix.length-1;// Generates n - 1 digits
number=number.concat(this.n(this.integer,to_generate,{min:0,max:9}));// Generates the last digit according to Luhn algorithm
number.push(this.luhn_calculate(number.join("")));return number.join("");};Chance.prototype.cc_types=function(){// http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
return this.get("cc_types");};Chance.prototype.cc_type=function(options){options=initOptions(options);var types=this.cc_types(),type=null;if(options.name){for(var i=0;i<types.length;i++){// Accept either name or short_name to specify card type
if(types[i].name===options.name||types[i].short_name===options.name){type=types[i];break;}}if(type===null){throw new RangeError("Credit card type '"+options.name+"'' is not supported");}}else{type=this.pick(types);}return options.raw?type:type.name;};//return all world currency by ISO 4217
Chance.prototype.currency_types=function(){return this.get("currency_types");};//return random world currency by ISO 4217
Chance.prototype.currency=function(){return this.pick(this.currency_types());};//return all timezones availabel
Chance.prototype.timezones=function(){return this.get("timezones");};//return random timezone
Chance.prototype.timezone=function(){return this.pick(this.timezones());};//Return random correct currency exchange pair (e.g. EUR/USD) or array of currency code
Chance.prototype.currency_pair=function(returnAsString){var currencies=this.unique(this.currency,2,{comparator:function comparator(arr,val){return arr.reduce(function(acc,item){// If a match has been found, short circuit check and just return
return acc||item.code===val.code;},false);}});if(returnAsString){return currencies[0].code+'/'+currencies[1].code;}else{return currencies;}};Chance.prototype.dollar=function(options){// By default, a somewhat more sane max for dollar than all available numbers
options=initOptions(options,{max:10000,min:0});var dollar=this.floating({min:options.min,max:options.max,fixed:2}).toString(),cents=dollar.split('.')[1];if(cents===undefined){dollar+='.00';}else if(cents.length<2){dollar=dollar+'0';}if(dollar<0){return'-$'+dollar.replace('-','');}else{return'$'+dollar;}};Chance.prototype.euro=function(options){return Number(this.dollar(options).replace("$","")).toLocaleString()+"€";};Chance.prototype.exp=function(options){options=initOptions(options);var exp={};exp.year=this.exp_year();// If the year is this year, need to ensure month is greater than the
// current month or this expiration will not be valid
if(exp.year===new Date().getFullYear().toString()){exp.month=this.exp_month({future:true});}else{exp.month=this.exp_month();}return options.raw?exp:exp.month+'/'+exp.year;};Chance.prototype.exp_month=function(options){options=initOptions(options);var month,month_int,// Date object months are 0 indexed
curMonth=new Date().getMonth()+1;if(options.future&&curMonth!==12){do{month=this.month({raw:true}).numeric;month_int=parseInt(month,10);}while(month_int<=curMonth);}else{month=this.month({raw:true}).numeric;}return month;};Chance.prototype.exp_year=function(){var curMonth=new Date().getMonth()+1,curYear=new Date().getFullYear();return this.year({min:curMonth===12?curYear+1:curYear,max:curYear+10});};Chance.prototype.vat=function(options){options=initOptions(options,{country:'it'});switch(options.country.toLowerCase()){case'it':return this.it_vat();}};// -- End Finance
// -- Regional
Chance.prototype.it_vat=function(){var it_vat=this.natural({min:1,max:1800000});it_vat=this.pad(it_vat,7)+this.pad(this.pick(this.provinces({country:'it'})).code,3);return it_vat+this.luhn_calculate(it_vat);};/*
	     * this generator is written following the official algorithm
	     * all data can be passed explicitely or randomized by calling chance.cf() without options
	     * the code does not check that the input data is valid (it goes beyond the scope of the generator)
	     *
	     * @param  [Object] options = { first: first name,
	     *                              last: last name,
	     *                              gender: female|male,
	                                    birthday: JavaScript date object,
	                                    city: string(4), 1 letter + 3 numbers
	                                   }
	     * @return [string] codice fiscale
	     *
	    */Chance.prototype.cf=function(options){options=options||{};var gender=!!options.gender?options.gender:this.gender(),first=!!options.first?options.first:this.first({gender:gender,nationality:'it'}),last=!!options.last?options.last:this.last({nationality:'it'}),birthday=!!options.birthday?options.birthday:this.birthday(),city=!!options.city?options.city:this.pickone(['A','B','C','D','E','F','G','H','I','L','M','Z'])+this.pad(this.natural({max:999}),3),cf=[],name_generator=function name_generator(name,isLast){var temp,return_value=[];if(name.length<3){return_value=name.split("").concat("XXX".split("")).splice(0,3);}else{temp=name.toUpperCase().split('').map(function(c){return"BCDFGHJKLMNPRSTVWZ".indexOf(c)!==-1?c:undefined;}).join('');if(temp.length>3){if(isLast){temp=temp.substr(0,3);}else{temp=temp[0]+temp.substr(2,2);}}if(temp.length<3){return_value=temp;temp=name.toUpperCase().split('').map(function(c){return"AEIOU".indexOf(c)!==-1?c:undefined;}).join('').substr(0,3-return_value.length);}return_value=return_value+temp;}return return_value;},date_generator=function date_generator(birthday,gender,that){var lettermonths=['A','B','C','D','E','H','L','M','P','R','S','T'];return birthday.getFullYear().toString().substr(2)+lettermonths[birthday.getMonth()]+that.pad(birthday.getDate()+(gender.toLowerCase()==="female"?40:0),2);},checkdigit_generator=function checkdigit_generator(cf){var range1="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",range2="ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",evens="ABCDEFGHIJKLMNOPQRSTUVWXYZ",odds="BAKPLCQDREVOSFTGUHMINJWZYX",digit=0;for(var i=0;i<15;i++){if(i%2!==0){digit+=evens.indexOf(range2[range1.indexOf(cf[i])]);}else{digit+=odds.indexOf(range2[range1.indexOf(cf[i])]);}}return evens[digit%26];};cf=cf.concat(name_generator(last,true),name_generator(first),date_generator(birthday,gender,this),city.toUpperCase().split("")).join("");cf+=checkdigit_generator(cf.toUpperCase(),this);return cf.toUpperCase();};Chance.prototype.pl_pesel=function(){var number=this.natural({min:1,max:9999999999});var arr=this.pad(number,10).split('');for(var i=0;i<arr.length;i++){arr[i]=parseInt(arr[i]);}var controlNumber=(1*arr[0]+3*arr[1]+7*arr[2]+9*arr[3]+1*arr[4]+3*arr[5]+7*arr[6]+9*arr[7]+1*arr[8]+3*arr[9])%10;if(controlNumber!==0){controlNumber=10-controlNumber;}return arr.join('')+controlNumber;};Chance.prototype.pl_nip=function(){var number=this.natural({min:1,max:999999999});var arr=this.pad(number,9).split('');for(var i=0;i<arr.length;i++){arr[i]=parseInt(arr[i]);}var controlNumber=(6*arr[0]+5*arr[1]+7*arr[2]+2*arr[3]+3*arr[4]+4*arr[5]+5*arr[6]+6*arr[7]+7*arr[8])%11;if(controlNumber===10){return this.pl_nip();}return arr.join('')+controlNumber;};Chance.prototype.pl_regon=function(){var number=this.natural({min:1,max:99999999});var arr=this.pad(number,8).split('');for(var i=0;i<arr.length;i++){arr[i]=parseInt(arr[i]);}var controlNumber=(8*arr[0]+9*arr[1]+2*arr[2]+3*arr[3]+4*arr[4]+5*arr[5]+6*arr[6]+7*arr[7])%11;if(controlNumber===10){controlNumber=0;}return arr.join('')+controlNumber;};// -- End Regional
// -- Miscellaneous --
// Dice - For all the board game geeks out there, myself included ;)
function diceFn(range){return function(){return this.natural(range);};}Chance.prototype.d4=diceFn({min:1,max:4});Chance.prototype.d6=diceFn({min:1,max:6});Chance.prototype.d8=diceFn({min:1,max:8});Chance.prototype.d10=diceFn({min:1,max:10});Chance.prototype.d12=diceFn({min:1,max:12});Chance.prototype.d20=diceFn({min:1,max:20});Chance.prototype.d30=diceFn({min:1,max:30});Chance.prototype.d100=diceFn({min:1,max:100});Chance.prototype.rpg=function(thrown,options){options=initOptions(options);if(!thrown){throw new RangeError("A type of die roll must be included");}else{var bits=thrown.toLowerCase().split("d"),rolls=[];if(bits.length!==2||!parseInt(bits[0],10)||!parseInt(bits[1],10)){throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");}for(var i=bits[0];i>0;i--){rolls[i-1]=this.natural({min:1,max:bits[1]});}return typeof options.sum!=='undefined'&&options.sum?rolls.reduce(function(p,c){return p+c;}):rolls;}};// Guid
Chance.prototype.guid=function(options){options=initOptions(options,{version:5});var guid_pool="abcdef1234567890",variant_pool="ab89",guid=this.string({pool:guid_pool,length:8})+'-'+this.string({pool:guid_pool,length:4})+'-'+// The Version
options.version+this.string({pool:guid_pool,length:3})+'-'+// The Variant
this.string({pool:variant_pool,length:1})+this.string({pool:guid_pool,length:3})+'-'+this.string({pool:guid_pool,length:12});return guid;};// Hash
Chance.prototype.hash=function(options){options=initOptions(options,{length:40,casing:'lower'});var pool=options.casing==='upper'?HEX_POOL.toUpperCase():HEX_POOL;return this.string({pool:pool,length:options.length});};Chance.prototype.luhn_check=function(num){var str=num.toString();var checkDigit=+str.substring(str.length-1);return checkDigit===this.luhn_calculate(+str.substring(0,str.length-1));};Chance.prototype.luhn_calculate=function(num){var digits=num.toString().split("").reverse();var sum=0;var digit;for(var i=0,l=digits.length;l>i;++i){digit=+digits[i];if(i%2===0){digit*=2;if(digit>9){digit-=9;}}sum+=digit;}return sum*9%10;};// MD5 Hash
Chance.prototype.md5=function(options){var opts={str:'',key:null,raw:false};if(!options){opts.str=this.string();options={};}else if(typeof options==='string'){opts.str=options;options={};}else if((typeof options==='undefined'?'undefined':_typeof2(options))!=='object'){return null;}else if(options.constructor==='Array'){return null;}opts=initOptions(options,opts);if(!opts.str){throw new Error('A parameter is required to return an md5 hash.');}return this.bimd5.md5(opts.str,opts.key,opts.raw);};/**
	     * #Description:
	     * =====================================================
	     * Generate random file name with extention
	     *
	     * The argument provide extention type
	     * -> raster
	     * -> vector
	     * -> 3d
	     * -> document
	     *
	     * If noting is provided the function return random file name with random
	     * extention type of any kind
	     *
	     * The user can validate the file name length range
	     * If noting provided the generated file name is radom
	     *
	     * #Extention Pool :
	     * * Currently the supported extentions are
	     *  -> some of the most popular raster image extentions
	     *  -> some of the most popular vector image extentions
	     *  -> some of the most popular 3d image extentions
	     *  -> some of the most popular document extentions
	     *
	     * #Examples :
	     * =====================================================
	     *
	     * Return random file name with random extention. The file extention
	     * is provided by a predifined collection of extentions. More abouth the extention
	     * pool can be fond in #Extention Pool section
	     *
	     * chance.file()
	     * => dsfsdhjf.xml
	     *
	     * In order to generate a file name with sspecific length, specify the
	     * length property and integer value. The extention is going to be random
	     *
	     * chance.file({length : 10})
	     * => asrtineqos.pdf
	     *
	     * In order to geerate file with extention form some of the predifined groups
	     * of the extention pool just specify the extenton pool category in fileType property
	     *
	     * chance.file({fileType : 'raster'})
	     * => dshgssds.psd
	     *
	     * You can provide specific extention for your files
	     * chance.file({extention : 'html'})
	     * => djfsd.html
	     *
	     * Or you could pass custom collection of extentons bt array or by object
	     * chance.file({extentions : [...]})
	     * => dhgsdsd.psd
	     *
	     * chance.file({extentions : { key : [...], key : [...]}})
	     * => djsfksdjsd.xml
	     *
	     * @param  [collection] options
	     * @return [string]
	     *
	     */Chance.prototype.file=function(options){var fileOptions=options||{};var poolCollectionKey="fileExtension";var typeRange=_Object$keys(this.get("fileExtension"));//['raster', 'vector', '3d', 'document'];
var fileName;var fileExtention;// Generate random file name
fileName=this.word({length:fileOptions.length});// Generate file by specific extention provided by the user
if(fileOptions.extention){fileExtention=fileOptions.extention;return fileName+'.'+fileExtention;}// Generate file by specific axtention collection
if(fileOptions.extentions){if(Array.isArray(fileOptions.extentions)){fileExtention=this.pickone(fileOptions.extentions);return fileName+'.'+fileExtention;}else if(fileOptions.extentions.constructor===Object){var extentionObjectCollection=fileOptions.extentions;var keys=_Object$keys(extentionObjectCollection);fileExtention=this.pickone(extentionObjectCollection[this.pickone(keys)]);return fileName+'.'+fileExtention;}throw new Error("Expect collection of type Array or Object to be passed as an argument ");}// Generate file extention based on specific file type
if(fileOptions.fileType){var fileType=fileOptions.fileType;if(typeRange.indexOf(fileType)!==-1){fileExtention=this.pickone(this.get(poolCollectionKey)[fileType]);return fileName+'.'+fileExtention;}throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ");}// Generate random file name if no extenton options are passed
fileExtention=this.pickone(this.get(poolCollectionKey)[this.pickone(typeRange)]);return fileName+'.'+fileExtention;};var data={firstNames:{"male":{"en":["James","John","Robert","Michael","William","David","Richard","Joseph","Charles","Thomas","Christopher","Daniel","Matthew","George","Donald","Anthony","Paul","Mark","Edward","Steven","Kenneth","Andrew","Brian","Joshua","Kevin","Ronald","Timothy","Jason","Jeffrey","Frank","Gary","Ryan","Nicholas","Eric","Stephen","Jacob","Larry","Jonathan","Scott","Raymond","Justin","Brandon","Gregory","Samuel","Benjamin","Patrick","Jack","Henry","Walter","Dennis","Jerry","Alexander","Peter","Tyler","Douglas","Harold","Aaron","Jose","Adam","Arthur","Zachary","Carl","Nathan","Albert","Kyle","Lawrence","Joe","Willie","Gerald","Roger","Keith","Jeremy","Terry","Harry","Ralph","Sean","Jesse","Roy","Louis","Billy","Austin","Bruce","Eugene","Christian","Bryan","Wayne","Russell","Howard","Fred","Ethan","Jordan","Philip","Alan","Juan","Randy","Vincent","Bobby","Dylan","Johnny","Phillip","Victor","Clarence","Ernest","Martin","Craig","Stanley","Shawn","Travis","Bradley","Leonard","Earl","Gabriel","Jimmy","Francis","Todd","Noah","Danny","Dale","Cody","Carlos","Allen","Frederick","Logan","Curtis","Alex","Joel","Luis","Norman","Marvin","Glenn","Tony","Nathaniel","Rodney","Melvin","Alfred","Steve","Cameron","Chad","Edwin","Caleb","Evan","Antonio","Lee","Herbert","Jeffery","Isaac","Derek","Ricky","Marcus","Theodore","Elijah","Luke","Jesus","Eddie","Troy","Mike","Dustin","Ray","Adrian","Bernard","Leroy","Angel","Randall","Wesley","Ian","Jared","Mason","Hunter","Calvin","Oscar","Clifford","Jay","Shane","Ronnie","Barry","Lucas","Corey","Manuel","Leo","Tommy","Warren","Jackson","Isaiah","Connor","Don","Dean","Jon","Julian","Miguel","Bill","Lloyd","Charlie","Mitchell","Leon","Jerome","Darrell","Jeremiah","Alvin","Brett","Seth","Floyd","Jim","Blake","Micheal","Gordon","Trevor","Lewis","Erik","Edgar","Vernon","Devin","Gavin","Jayden","Chris","Clyde","Tom","Derrick","Mario","Brent","Marc","Herman","Chase","Dominic","Ricardo","Franklin","Maurice","Max","Aiden","Owen","Lester","Gilbert","Elmer","Gene","Francisco","Glen","Cory","Garrett","Clayton","Sam","Jorge","Chester","Alejandro","Jeff","Harvey","Milton","Cole","Ivan","Andre","Duane","Landon"],// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0163
"it":["Adolfo","Alberto","Aldo","Alessandro","Alessio","Alfredo","Alvaro","Andrea","Angelo","Angiolo","Antonino","Antonio","Attilio","Benito","Bernardo","Bruno","Carlo","Cesare","Christian","Claudio","Corrado","Cosimo","Cristian","Cristiano","Daniele","Dario","David","Davide","Diego","Dino","Domenico","Duccio","Edoardo","Elia","Elio","Emanuele","Emiliano","Emilio","Enrico","Enzo","Ettore","Fabio","Fabrizio","Federico","Ferdinando","Fernando","Filippo","Francesco","Franco","Gabriele","Giacomo","Giampaolo","Giampiero","Giancarlo","Gianfranco","Gianluca","Gianmarco","Gianni","Gino","Giorgio","Giovanni","Giuliano","Giulio","Giuseppe","Graziano","Gregorio","Guido","Iacopo","Jacopo","Lapo","Leonardo","Lorenzo","Luca","Luciano","Luigi","Manuel","Marcello","Marco","Marino","Mario","Massimiliano","Massimo","Matteo","Mattia","Maurizio","Mauro","Michele","Mirko","Mohamed","Nello","Neri","Niccolò","Nicola","Osvaldo","Otello","Paolo","Pier Luigi","Piero","Pietro","Raffaele","Remo","Renato","Renzo","Riccardo","Roberto","Rolando","Romano","Salvatore","Samuele","Sandro","Sergio","Silvano","Simone","Stefano","Thomas","Tommaso","Ubaldo","Ugo","Umberto","Valerio","Valter","Vasco","Vincenzo","Vittorio"]},"female":{"en":["Mary","Emma","Elizabeth","Minnie","Margaret","Ida","Alice","Bertha","Sarah","Annie","Clara","Ella","Florence","Cora","Martha","Laura","Nellie","Grace","Carrie","Maude","Mabel","Bessie","Jennie","Gertrude","Julia","Hattie","Edith","Mattie","Rose","Catherine","Lillian","Ada","Lillie","Helen","Jessie","Louise","Ethel","Lula","Myrtle","Eva","Frances","Lena","Lucy","Edna","Maggie","Pearl","Daisy","Fannie","Josephine","Dora","Rosa","Katherine","Agnes","Marie","Nora","May","Mamie","Blanche","Stella","Ellen","Nancy","Effie","Sallie","Nettie","Della","Lizzie","Flora","Susie","Maud","Mae","Etta","Harriet","Sadie","Caroline","Katie","Lydia","Elsie","Kate","Susan","Mollie","Alma","Addie","Georgia","Eliza","Lulu","Nannie","Lottie","Amanda","Belle","Charlotte","Rebecca","Ruth","Viola","Olive","Amelia","Hannah","Jane","Virginia","Emily","Matilda","Irene","Kathryn","Esther","Willie","Henrietta","Ollie","Amy","Rachel","Sara","Estella","Theresa","Augusta","Ora","Pauline","Josie","Lola","Sophia","Leona","Anne","Mildred","Ann","Beulah","Callie","Lou","Delia","Eleanor","Barbara","Iva","Louisa","Maria","Mayme","Evelyn","Estelle","Nina","Betty","Marion","Bettie","Dorothy","Luella","Inez","Lela","Rosie","Allie","Millie","Janie","Cornelia","Victoria","Ruby","Winifred","Alta","Celia","Christine","Beatrice","Birdie","Harriett","Mable","Myra","Sophie","Tillie","Isabel","Sylvia","Carolyn","Isabelle","Leila","Sally","Ina","Essie","Bertie","Nell","Alberta","Katharine","Lora","Rena","Mina","Rhoda","Mathilda","Abbie","Eula","Dollie","Hettie","Eunice","Fanny","Ola","Lenora","Adelaide","Christina","Lelia","Nelle","Sue","Johanna","Lilly","Lucinda","Minerva","Lettie","Roxie","Cynthia","Helena","Hilda","Hulda","Bernice","Genevieve","Jean","Cordelia","Marian","Francis","Jeanette","Adeline","Gussie","Leah","Lois","Lura","Mittie","Hallie","Isabella","Olga","Phoebe","Teresa","Hester","Lida","Lina","Winnie","Claudia","Marguerite","Vera","Cecelia","Bess","Emilie","John","Rosetta","Verna","Myrtie","Cecilia","Elva","Olivia","Ophelia","Georgie","Elnora","Violet","Adele","Lily","Linnie","Loretta","Madge","Polly","Virgie","Eugenia","Lucile","Lucille","Mabelle","Rosalie"],// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0162
"it":["Ada","Adriana","Alessandra","Alessia","Alice","Angela","Anna","Anna Maria","Annalisa","Annita","Annunziata","Antonella","Arianna","Asia","Assunta","Aurora","Barbara","Beatrice","Benedetta","Bianca","Bruna","Camilla","Carla","Carlotta","Carmela","Carolina","Caterina","Catia","Cecilia","Chiara","Cinzia","Clara","Claudia","Costanza","Cristina","Daniela","Debora","Diletta","Dina","Donatella","Elena","Eleonora","Elisa","Elisabetta","Emanuela","Emma","Eva","Federica","Fernanda","Fiorella","Fiorenza","Flora","Franca","Francesca","Gabriella","Gaia","Gemma","Giada","Gianna","Gina","Ginevra","Giorgia","Giovanna","Giulia","Giuliana","Giuseppa","Giuseppina","Grazia","Graziella","Greta","Ida","Ilaria","Ines","Iolanda","Irene","Irma","Isabella","Jessica","Laura","Leda","Letizia","Licia","Lidia","Liliana","Lina","Linda","Lisa","Livia","Loretta","Luana","Lucia","Luciana","Lucrezia","Luisa","Manuela","Mara","Marcella","Margherita","Maria","Maria Cristina","Maria Grazia","Maria Luisa","Maria Pia","Maria Teresa","Marina","Marisa","Marta","Martina","Marzia","Matilde","Melissa","Michela","Milena","Mirella","Monica","Natalina","Nella","Nicoletta","Noemi","Olga","Paola","Patrizia","Piera","Pierina","Raffaella","Rebecca","Renata","Rina","Rita","Roberta","Rosa","Rosanna","Rossana","Rossella","Sabrina","Sandra","Sara","Serena","Silvana","Silvia","Simona","Simonetta","Sofia","Sonia","Stefania","Susanna","Teresa","Tina","Tiziana","Tosca","Valentina","Valeria","Vanda","Vanessa","Vanna","Vera","Veronica","Vilma","Viola","Virginia","Vittoria"]}},lastNames:{"en":['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark','Rodriguez','Lewis','Lee','Walker','Hall','Allen','Young','Hernandez','King','Wright','Lopez','Hill','Scott','Green','Adams','Baker','Gonzalez','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell','Parker','Evans','Edwards','Collins','Stewart','Sanchez','Morris','Rogers','Reed','Cook','Morgan','Bell','Murphy','Bailey','Rivera','Cooper','Richardson','Cox','Howard','Ward','Torres','Peterson','Gray','Ramirez','James','Watson','Brooks','Kelly','Sanders','Price','Bennett','Wood','Barnes','Ross','Henderson','Coleman','Jenkins','Perry','Powell','Long','Patterson','Hughes','Flores','Washington','Butler','Simmons','Foster','Gonzales','Bryant','Alexander','Russell','Griffin','Diaz','Hayes','Myers','Ford','Hamilton','Graham','Sullivan','Wallace','Woods','Cole','West','Jordan','Owens','Reynolds','Fisher','Ellis','Harrison','Gibson','McDonald','Cruz','Marshall','Ortiz','Gomez','Murray','Freeman','Wells','Webb','Simpson','Stevens','Tucker','Porter','Hunter','Hicks','Crawford','Henry','Boyd','Mason','Morales','Kennedy','Warren','Dixon','Ramos','Reyes','Burns','Gordon','Shaw','Holmes','Rice','Robertson','Hunt','Black','Daniels','Palmer','Mills','Nichols','Grant','Knight','Ferguson','Rose','Stone','Hawkins','Dunn','Perkins','Hudson','Spencer','Gardner','Stephens','Payne','Pierce','Berry','Matthews','Arnold','Wagner','Willis','Ray','Watkins','Olson','Carroll','Duncan','Snyder','Hart','Cunningham','Bradley','Lane','Andrews','Ruiz','Harper','Fox','Riley','Armstrong','Carpenter','Weaver','Greene','Lawrence','Elliott','Chavez','Sims','Austin','Peters','Kelley','Franklin','Lawson','Fields','Gutierrez','Ryan','Schmidt','Carr','Vasquez','Castillo','Wheeler','Chapman','Oliver','Montgomery','Richards','Williamson','Johnston','Banks','Meyer','Bishop','McCoy','Howell','Alvarez','Morrison','Hansen','Fernandez','Garza','Harvey','Little','Burton','Stanley','Nguyen','George','Jacobs','Reid','Kim','Fuller','Lynch','Dean','Gilbert','Garrett','Romero','Welch','Larson','Frazier','Burke','Hanson','Day','Mendoza','Moreno','Bowman','Medina','Fowler','Brewer','Hoffman','Carlson','Silva','Pearson','Holland','Douglas','Fleming','Jensen','Vargas','Byrd','Davidson','Hopkins','May','Terry','Herrera','Wade','Soto','Walters','Curtis','Neal','Caldwell','Lowe','Jennings','Barnett','Graves','Jimenez','Horton','Shelton','Barrett','Obrien','Castro','Sutton','Gregory','McKinney','Lucas','Miles','Craig','Rodriquez','Chambers','Holt','Lambert','Fletcher','Watts','Bates','Hale','Rhodes','Pena','Beck','Newman','Haynes','McDaniel','Mendez','Bush','Vaughn','Parks','Dawson','Santiago','Norris','Hardy','Love','Steele','Curry','Powers','Schultz','Barker','Guzman','Page','Munoz','Ball','Keller','Chandler','Weber','Leonard','Walsh','Lyons','Ramsey','Wolfe','Schneider','Mullins','Benson','Sharp','Bowen','Daniel','Barber','Cummings','Hines','Baldwin','Griffith','Valdez','Hubbard','Salazar','Reeves','Warner','Stevenson','Burgess','Santos','Tate','Cross','Garner','Mann','Mack','Moss','Thornton','Dennis','McGee','Farmer','Delgado','Aguilar','Vega','Glover','Manning','Cohen','Harmon','Rodgers','Robbins','Newton','Todd','Blair','Higgins','Ingram','Reese','Cannon','Strickland','Townsend','Potter','Goodwin','Walton','Rowe','Hampton','Ortega','Patton','Swanson','Joseph','Francis','Goodman','Maldonado','Yates','Becker','Erickson','Hodges','Rios','Conner','Adkins','Webster','Norman','Malone','Hammond','Flowers','Cobb','Moody','Quinn','Blake','Maxwell','Pope','Floyd','Osborne','Paul','McCarthy','Guerrero','Lindsey','Estrada','Sandoval','Gibbs','Tyler','Gross','Fitzgerald','Stokes','Doyle','Sherman','Saunders','Wise','Colon','Gill','Alvarado','Greer','Padilla','Simon','Waters','Nunez','Ballard','Schwartz','McBride','Houston','Christensen','Klein','Pratt','Briggs','Parsons','McLaughlin','Zimmerman','French','Buchanan','Moran','Copeland','Roy','Pittman','Brady','McCormick','Holloway','Brock','Poole','Frank','Logan','Owen','Bass','Marsh','Drake','Wong','Jefferson','Park','Morton','Abbott','Sparks','Patrick','Norton','Huff','Clayton','Massey','Lloyd','Figueroa','Carson','Bowers','Roberson','Barton','Tran','Lamb','Harrington','Casey','Boone','Cortez','Clarke','Mathis','Singleton','Wilkins','Cain','Bryan','Underwood','Hogan','McKenzie','Collier','Luna','Phelps','McGuire','Allison','Bridges','Wilkerson','Nash','Summers','Atkins'],// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0164 (first 1000)
"it":["Acciai","Aglietti","Agostini","Agresti","Ahmed","Aiazzi","Albanese","Alberti","Alessi","Alfani","Alinari","Alterini","Amato","Ammannati","Ancillotti","Andrei","Andreini","Andreoni","Angeli","Anichini","Antonelli","Antonini","Arena","Ariani","Arnetoli","Arrighi","Baccani","Baccetti","Bacci","Bacherini","Badii","Baggiani","Baglioni","Bagni","Bagnoli","Baldassini","Baldi","Baldini","Ballerini","Balli","Ballini","Balloni","Bambi","Banchi","Bandinelli","Bandini","Bani","Barbetti","Barbieri","Barchielli","Bardazzi","Bardelli","Bardi","Barducci","Bargellini","Bargiacchi","Barni","Baroncelli","Baroncini","Barone","Baroni","Baronti","Bartalesi","Bartoletti","Bartoli","Bartolini","Bartoloni","Bartolozzi","Basagni","Basile","Bassi","Batacchi","Battaglia","Battaglini","Bausi","Becagli","Becattini","Becchi","Becucci","Bellandi","Bellesi","Belli","Bellini","Bellucci","Bencini","Benedetti","Benelli","Beni","Benini","Bensi","Benucci","Benvenuti","Berlincioni","Bernacchioni","Bernardi","Bernardini","Berni","Bernini","Bertelli","Berti","Bertini","Bessi","Betti","Bettini","Biagi","Biagini","Biagioni","Biagiotti","Biancalani","Bianchi","Bianchini","Bianco","Biffoli","Bigazzi","Bigi","Biliotti","Billi","Binazzi","Bindi","Bini","Biondi","Bizzarri","Bocci","Bogani","Bolognesi","Bonaiuti","Bonanni","Bonciani","Boncinelli","Bondi","Bonechi","Bongini","Boni","Bonini","Borchi","Boretti","Borghi","Borghini","Borgioli","Borri","Borselli","Boschi","Bottai","Bracci","Braccini","Brandi","Braschi","Bravi","Brazzini","Breschi","Brilli","Brizzi","Brogelli","Brogi","Brogioni","Brunelli","Brunetti","Bruni","Bruno","Brunori","Bruschi","Bucci","Bucciarelli","Buccioni","Bucelli","Bulli","Burberi","Burchi","Burgassi","Burroni","Bussotti","Buti","Caciolli","Caiani","Calabrese","Calamai","Calamandrei","Caldini","Calo'","Calonaci","Calosi","Calvelli","Cambi","Camiciottoli","Cammelli","Cammilli","Campolmi","Cantini","Capanni","Capecchi","Caponi","Cappelletti","Cappelli","Cappellini","Cappugi","Capretti","Caputo","Carbone","Carboni","Cardini","Carlesi","Carletti","Carli","Caroti","Carotti","Carrai","Carraresi","Carta","Caruso","Casalini","Casati","Caselli","Casini","Castagnoli","Castellani","Castelli","Castellucci","Catalano","Catarzi","Catelani","Cavaciocchi","Cavallaro","Cavallini","Cavicchi","Cavini","Ceccarelli","Ceccatelli","Ceccherelli","Ceccherini","Cecchi","Cecchini","Cecconi","Cei","Cellai","Celli","Cellini","Cencetti","Ceni","Cenni","Cerbai","Cesari","Ceseri","Checcacci","Checchi","Checcucci","Cheli","Chellini","Chen","Cheng","Cherici","Cherubini","Chiaramonti","Chiarantini","Chiarelli","Chiari","Chiarini","Chiarugi","Chiavacci","Chiesi","Chimenti","Chini","Chirici","Chiti","Ciabatti","Ciampi","Cianchi","Cianfanelli","Cianferoni","Ciani","Ciapetti","Ciappi","Ciardi","Ciatti","Cicali","Ciccone","Cinelli","Cini","Ciobanu","Ciolli","Cioni","Cipriani","Cirillo","Cirri","Ciucchi","Ciuffi","Ciulli","Ciullini","Clemente","Cocchi","Cognome","Coli","Collini","Colombo","Colzi","Comparini","Conforti","Consigli","Conte","Conti","Contini","Coppini","Coppola","Corsi","Corsini","Corti","Cortini","Cosi","Costa","Costantini","Costantino","Cozzi","Cresci","Crescioli","Cresti","Crini","Curradi","D'Agostino","D'Alessandro","D'Amico","D'Angelo","Daddi","Dainelli","Dallai","Danti","Davitti","De Angelis","De Luca","De Marco","De Rosa","De Santis","De Simone","De Vita","Degl'Innocenti","Degli Innocenti","Dei","Del Lungo","Del Re","Di Marco","Di Stefano","Dini","Diop","Dobre","Dolfi","Donati","Dondoli","Dong","Donnini","Ducci","Dumitru","Ermini","Esposito","Evangelisti","Fabbri","Fabbrini","Fabbrizzi","Fabbroni","Fabbrucci","Fabiani","Facchini","Faggi","Fagioli","Failli","Faini","Falciani","Falcini","Falcone","Fallani","Falorni","Falsini","Falugiani","Fancelli","Fanelli","Fanetti","Fanfani","Fani","Fantappie'","Fantechi","Fanti","Fantini","Fantoni","Farina","Fattori","Favilli","Fedi","Fei","Ferrante","Ferrara","Ferrari","Ferraro","Ferretti","Ferri","Ferrini","Ferroni","Fiaschi","Fibbi","Fiesoli","Filippi","Filippini","Fini","Fioravanti","Fiore","Fiorentini","Fiorini","Fissi","Focardi","Foggi","Fontana","Fontanelli","Fontani","Forconi","Formigli","Forte","Forti","Fortini","Fossati","Fossi","Francalanci","Franceschi","Franceschini","Franchi","Franchini","Franci","Francini","Francioni","Franco","Frassineti","Frati","Fratini","Frilli","Frizzi","Frosali","Frosini","Frullini","Fusco","Fusi","Gabbrielli","Gabellini","Gagliardi","Galanti","Galardi","Galeotti","Galletti","Galli","Gallo","Gallori","Gambacciani","Gargani","Garofalo","Garuglieri","Gashi","Gasperini","Gatti","Gelli","Gensini","Gentile","Gentili","Geri","Gerini","Gheri","Ghini","Giachetti","Giachi","Giacomelli","Gianassi","Giani","Giannelli","Giannetti","Gianni","Giannini","Giannoni","Giannotti","Giannozzi","Gigli","Giordano","Giorgetti","Giorgi","Giovacchini","Giovannelli","Giovannetti","Giovannini","Giovannoni","Giuliani","Giunti","Giuntini","Giusti","Gonnelli","Goretti","Gori","Gradi","Gramigni","Grassi","Grasso","Graziani","Grazzini","Greco","Grifoni","Grillo","Grimaldi","Grossi","Gualtieri","Guarducci","Guarino","Guarnieri","Guasti","Guerra","Guerri","Guerrini","Guidi","Guidotti","He","Hoxha","Hu","Huang","Iandelli","Ignesti","Innocenti","Jin","La Rosa","Lai","Landi","Landini","Lanini","Lapi","Lapini","Lari","Lascialfari","Lastrucci","Latini","Lazzeri","Lazzerini","Lelli","Lenzi","Leonardi","Leoncini","Leone","Leoni","Lepri","Li","Liao","Lin","Linari","Lippi","Lisi","Livi","Lombardi","Lombardini","Lombardo","Longo","Lopez","Lorenzi","Lorenzini","Lorini","Lotti","Lu","Lucchesi","Lucherini","Lunghi","Lupi","Madiai","Maestrini","Maffei","Maggi","Maggini","Magherini","Magini","Magnani","Magnelli","Magni","Magnolfi","Magrini","Malavolti","Malevolti","Manca","Mancini","Manetti","Manfredi","Mangani","Mannelli","Manni","Mannini","Mannucci","Manuelli","Manzini","Marcelli","Marchese","Marchetti","Marchi","Marchiani","Marchionni","Marconi","Marcucci","Margheri","Mari","Mariani","Marilli","Marinai","Marinari","Marinelli","Marini","Marino","Mariotti","Marsili","Martelli","Martinelli","Martini","Martino","Marzi","Masi","Masini","Masoni","Massai","Materassi","Mattei","Matteini","Matteucci","Matteuzzi","Mattioli","Mattolini","Matucci","Mauro","Mazzanti","Mazzei","Mazzetti","Mazzi","Mazzini","Mazzocchi","Mazzoli","Mazzoni","Mazzuoli","Meacci","Mecocci","Meini","Melani","Mele","Meli","Mengoni","Menichetti","Meoni","Merlini","Messeri","Messina","Meucci","Miccinesi","Miceli","Micheli","Michelini","Michelozzi","Migliori","Migliorini","Milani","Miniati","Misuri","Monaco","Montagnani","Montagni","Montanari","Montelatici","Monti","Montigiani","Montini","Morandi","Morandini","Morelli","Moretti","Morganti","Mori","Morini","Moroni","Morozzi","Mugnai","Mugnaini","Mustafa","Naldi","Naldini","Nannelli","Nanni","Nannini","Nannucci","Nardi","Nardini","Nardoni","Natali","Ndiaye","Nencetti","Nencini","Nencioni","Neri","Nesi","Nesti","Niccolai","Niccoli","Niccolini","Nigi","Nistri","Nocentini","Noferini","Novelli","Nucci","Nuti","Nutini","Oliva","Olivieri","Olmi","Orlandi","Orlandini","Orlando","Orsini","Ortolani","Ottanelli","Pacciani","Pace","Paci","Pacini","Pagani","Pagano","Paggetti","Pagliai","Pagni","Pagnini","Paladini","Palagi","Palchetti","Palloni","Palmieri","Palumbo","Pampaloni","Pancani","Pandolfi","Pandolfini","Panerai","Panichi","Paoletti","Paoli","Paolini","Papi","Papini","Papucci","Parenti","Parigi","Parisi","Parri","Parrini","Pasquini","Passeri","Pecchioli","Pecorini","Pellegrini","Pepi","Perini","Perrone","Peruzzi","Pesci","Pestelli","Petri","Petrini","Petrucci","Pettini","Pezzati","Pezzatini","Piani","Piazza","Piazzesi","Piazzini","Piccardi","Picchi","Piccini","Piccioli","Pieraccini","Pieraccioni","Pieralli","Pierattini","Pieri","Pierini","Pieroni","Pietrini","Pini","Pinna","Pinto","Pinzani","Pinzauti","Piras","Pisani","Pistolesi","Poggesi","Poggi","Poggiali","Poggiolini","Poli","Pollastri","Porciani","Pozzi","Pratellesi","Pratesi","Prosperi","Pruneti","Pucci","Puccini","Puccioni","Pugi","Pugliese","Puliti","Querci","Quercioli","Raddi","Radu","Raffaelli","Ragazzini","Ranfagni","Ranieri","Rastrelli","Raugei","Raveggi","Renai","Renzi","Rettori","Ricci","Ricciardi","Ridi","Ridolfi","Rigacci","Righi","Righini","Rinaldi","Risaliti","Ristori","Rizzo","Rocchi","Rocchini","Rogai","Romagnoli","Romanelli","Romani","Romano","Romei","Romeo","Romiti","Romoli","Romolini","Rontini","Rosati","Roselli","Rosi","Rossetti","Rossi","Rossini","Rovai","Ruggeri","Ruggiero","Russo","Sabatini","Saccardi","Sacchetti","Sacchi","Sacco","Salerno","Salimbeni","Salucci","Salvadori","Salvestrini","Salvi","Salvini","Sanesi","Sani","Sanna","Santi","Santini","Santoni","Santoro","Santucci","Sardi","Sarri","Sarti","Sassi","Sbolci","Scali","Scarpelli","Scarselli","Scopetani","Secci","Selvi","Senatori","Senesi","Serafini","Sereni","Serra","Sestini","Sguanci","Sieni","Signorini","Silvestri","Simoncini","Simonetti","Simoni","Singh","Sodi","Soldi","Somigli","Sorbi","Sorelli","Sorrentino","Sottili","Spina","Spinelli","Staccioli","Staderini","Stefanelli","Stefani","Stefanini","Stella","Susini","Tacchi","Tacconi","Taddei","Tagliaferri","Tamburini","Tanganelli","Tani","Tanini","Tapinassi","Tarchi","Tarchiani","Targioni","Tassi","Tassini","Tempesti","Terzani","Tesi","Testa","Testi","Tilli","Tinti","Tirinnanzi","Toccafondi","Tofanari","Tofani","Tognaccini","Tonelli","Tonini","Torelli","Torrini","Tosi","Toti","Tozzi","Trambusti","Trapani","Tucci","Turchi","Ugolini","Ulivi","Valente","Valenti","Valentini","Vangelisti","Vanni","Vannini","Vannoni","Vannozzi","Vannucchi","Vannucci","Ventura","Venturi","Venturini","Vestri","Vettori","Vichi","Viciani","Vieri","Vigiani","Vignoli","Vignolini","Vignozzi","Villani","Vinci","Visani","Vitale","Vitali","Viti","Viviani","Vivoli","Volpe","Volpi","Wang","Wu","Xu","Yang","Ye","Zagli","Zani","Zanieri","Zanobini","Zecchi","Zetti","Zhang","Zheng","Zhou","Zhu","Zingoni","Zini","Zoppi"]},// Data taken from https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json
countries:[{"name":"Afghanistan","abbreviation":"AF"},{"name":"Åland Islands","abbreviation":"AX"},{"name":"Albania","abbreviation":"AL"},{"name":"Algeria","abbreviation":"DZ"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Andorra","abbreviation":"AD"},{"name":"Angola","abbreviation":"AO"},{"name":"Anguilla","abbreviation":"AI"},{"name":"Antarctica","abbreviation":"AQ"},{"name":"Antigua & Barbuda","abbreviation":"AG"},{"name":"Argentina","abbreviation":"AR"},{"name":"Armenia","abbreviation":"AM"},{"name":"Aruba","abbreviation":"AW"},{"name":"Ascension Island","abbreviation":"AC"},{"name":"Australia","abbreviation":"AU"},{"name":"Austria","abbreviation":"AT"},{"name":"Azerbaijan","abbreviation":"AZ"},{"name":"Bahamas","abbreviation":"BS"},{"name":"Bahrain","abbreviation":"BH"},{"name":"Bangladesh","abbreviation":"BD"},{"name":"Barbados","abbreviation":"BB"},{"name":"Belarus","abbreviation":"BY"},{"name":"Belgium","abbreviation":"BE"},{"name":"Belize","abbreviation":"BZ"},{"name":"Benin","abbreviation":"BJ"},{"name":"Bermuda","abbreviation":"BM"},{"name":"Bhutan","abbreviation":"BT"},{"name":"Bolivia","abbreviation":"BO"},{"name":"Bosnia & Herzegovina","abbreviation":"BA"},{"name":"Botswana","abbreviation":"BW"},{"name":"Brazil","abbreviation":"BR"},{"name":"British Indian Ocean Territory","abbreviation":"IO"},{"name":"British Virgin Islands","abbreviation":"VG"},{"name":"Brunei","abbreviation":"BN"},{"name":"Bulgaria","abbreviation":"BG"},{"name":"Burkina Faso","abbreviation":"BF"},{"name":"Burundi","abbreviation":"BI"},{"name":"Cambodia","abbreviation":"KH"},{"name":"Cameroon","abbreviation":"CM"},{"name":"Canada","abbreviation":"CA"},{"name":"Canary Islands","abbreviation":"IC"},{"name":"Cape Verde","abbreviation":"CV"},{"name":"Caribbean Netherlands","abbreviation":"BQ"},{"name":"Cayman Islands","abbreviation":"KY"},{"name":"Central African Republic","abbreviation":"CF"},{"name":"Ceuta & Melilla","abbreviation":"EA"},{"name":"Chad","abbreviation":"TD"},{"name":"Chile","abbreviation":"CL"},{"name":"China","abbreviation":"CN"},{"name":"Christmas Island","abbreviation":"CX"},{"name":"Cocos (Keeling) Islands","abbreviation":"CC"},{"name":"Colombia","abbreviation":"CO"},{"name":"Comoros","abbreviation":"KM"},{"name":"Congo - Brazzaville","abbreviation":"CG"},{"name":"Congo - Kinshasa","abbreviation":"CD"},{"name":"Cook Islands","abbreviation":"CK"},{"name":"Costa Rica","abbreviation":"CR"},{"name":"Côte d'Ivoire","abbreviation":"CI"},{"name":"Croatia","abbreviation":"HR"},{"name":"Cuba","abbreviation":"CU"},{"name":"Curaçao","abbreviation":"CW"},{"name":"Cyprus","abbreviation":"CY"},{"name":"Czech Republic","abbreviation":"CZ"},{"name":"Denmark","abbreviation":"DK"},{"name":"Diego Garcia","abbreviation":"DG"},{"name":"Djibouti","abbreviation":"DJ"},{"name":"Dominica","abbreviation":"DM"},{"name":"Dominican Republic","abbreviation":"DO"},{"name":"Ecuador","abbreviation":"EC"},{"name":"Egypt","abbreviation":"EG"},{"name":"El Salvador","abbreviation":"SV"},{"name":"Equatorial Guinea","abbreviation":"GQ"},{"name":"Eritrea","abbreviation":"ER"},{"name":"Estonia","abbreviation":"EE"},{"name":"Ethiopia","abbreviation":"ET"},{"name":"Falkland Islands","abbreviation":"FK"},{"name":"Faroe Islands","abbreviation":"FO"},{"name":"Fiji","abbreviation":"FJ"},{"name":"Finland","abbreviation":"FI"},{"name":"France","abbreviation":"FR"},{"name":"French Guiana","abbreviation":"GF"},{"name":"French Polynesia","abbreviation":"PF"},{"name":"French Southern Territories","abbreviation":"TF"},{"name":"Gabon","abbreviation":"GA"},{"name":"Gambia","abbreviation":"GM"},{"name":"Georgia","abbreviation":"GE"},{"name":"Germany","abbreviation":"DE"},{"name":"Ghana","abbreviation":"GH"},{"name":"Gibraltar","abbreviation":"GI"},{"name":"Greece","abbreviation":"GR"},{"name":"Greenland","abbreviation":"GL"},{"name":"Grenada","abbreviation":"GD"},{"name":"Guadeloupe","abbreviation":"GP"},{"name":"Guam","abbreviation":"GU"},{"name":"Guatemala","abbreviation":"GT"},{"name":"Guernsey","abbreviation":"GG"},{"name":"Guinea","abbreviation":"GN"},{"name":"Guinea-Bissau","abbreviation":"GW"},{"name":"Guyana","abbreviation":"GY"},{"name":"Haiti","abbreviation":"HT"},{"name":"Honduras","abbreviation":"HN"},{"name":"Hong Kong SAR China","abbreviation":"HK"},{"name":"Hungary","abbreviation":"HU"},{"name":"Iceland","abbreviation":"IS"},{"name":"India","abbreviation":"IN"},{"name":"Indonesia","abbreviation":"ID"},{"name":"Iran","abbreviation":"IR"},{"name":"Iraq","abbreviation":"IQ"},{"name":"Ireland","abbreviation":"IE"},{"name":"Isle of Man","abbreviation":"IM"},{"name":"Israel","abbreviation":"IL"},{"name":"Italy","abbreviation":"IT"},{"name":"Jamaica","abbreviation":"JM"},{"name":"Japan","abbreviation":"JP"},{"name":"Jersey","abbreviation":"JE"},{"name":"Jordan","abbreviation":"JO"},{"name":"Kazakhstan","abbreviation":"KZ"},{"name":"Kenya","abbreviation":"KE"},{"name":"Kiribati","abbreviation":"KI"},{"name":"Kosovo","abbreviation":"XK"},{"name":"Kuwait","abbreviation":"KW"},{"name":"Kyrgyzstan","abbreviation":"KG"},{"name":"Laos","abbreviation":"LA"},{"name":"Latvia","abbreviation":"LV"},{"name":"Lebanon","abbreviation":"LB"},{"name":"Lesotho","abbreviation":"LS"},{"name":"Liberia","abbreviation":"LR"},{"name":"Libya","abbreviation":"LY"},{"name":"Liechtenstein","abbreviation":"LI"},{"name":"Lithuania","abbreviation":"LT"},{"name":"Luxembourg","abbreviation":"LU"},{"name":"Macau SAR China","abbreviation":"MO"},{"name":"Macedonia","abbreviation":"MK"},{"name":"Madagascar","abbreviation":"MG"},{"name":"Malawi","abbreviation":"MW"},{"name":"Malaysia","abbreviation":"MY"},{"name":"Maldives","abbreviation":"MV"},{"name":"Mali","abbreviation":"ML"},{"name":"Malta","abbreviation":"MT"},{"name":"Marshall Islands","abbreviation":"MH"},{"name":"Martinique","abbreviation":"MQ"},{"name":"Mauritania","abbreviation":"MR"},{"name":"Mauritius","abbreviation":"MU"},{"name":"Mayotte","abbreviation":"YT"},{"name":"Mexico","abbreviation":"MX"},{"name":"Micronesia","abbreviation":"FM"},{"name":"Moldova","abbreviation":"MD"},{"name":"Monaco","abbreviation":"MC"},{"name":"Mongolia","abbreviation":"MN"},{"name":"Montenegro","abbreviation":"ME"},{"name":"Montserrat","abbreviation":"MS"},{"name":"Morocco","abbreviation":"MA"},{"name":"Mozambique","abbreviation":"MZ"},{"name":"Myanmar (Burma)","abbreviation":"MM"},{"name":"Namibia","abbreviation":"NA"},{"name":"Nauru","abbreviation":"NR"},{"name":"Nepal","abbreviation":"NP"},{"name":"Netherlands","abbreviation":"NL"},{"name":"New Caledonia","abbreviation":"NC"},{"name":"New Zealand","abbreviation":"NZ"},{"name":"Nicaragua","abbreviation":"NI"},{"name":"Niger","abbreviation":"NE"},{"name":"Nigeria","abbreviation":"NG"},{"name":"Niue","abbreviation":"NU"},{"name":"Norfolk Island","abbreviation":"NF"},{"name":"North Korea","abbreviation":"KP"},{"name":"Northern Mariana Islands","abbreviation":"MP"},{"name":"Norway","abbreviation":"NO"},{"name":"Oman","abbreviation":"OM"},{"name":"Pakistan","abbreviation":"PK"},{"name":"Palau","abbreviation":"PW"},{"name":"Palestinian Territories","abbreviation":"PS"},{"name":"Panama","abbreviation":"PA"},{"name":"Papua New Guinea","abbreviation":"PG"},{"name":"Paraguay","abbreviation":"PY"},{"name":"Peru","abbreviation":"PE"},{"name":"Philippines","abbreviation":"PH"},{"name":"Pitcairn Islands","abbreviation":"PN"},{"name":"Poland","abbreviation":"PL"},{"name":"Portugal","abbreviation":"PT"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Qatar","abbreviation":"QA"},{"name":"Réunion","abbreviation":"RE"},{"name":"Romania","abbreviation":"RO"},{"name":"Russia","abbreviation":"RU"},{"name":"Rwanda","abbreviation":"RW"},{"name":"Samoa","abbreviation":"WS"},{"name":"San Marino","abbreviation":"SM"},{"name":"São Tomé and Príncipe","abbreviation":"ST"},{"name":"Saudi Arabia","abbreviation":"SA"},{"name":"Senegal","abbreviation":"SN"},{"name":"Serbia","abbreviation":"RS"},{"name":"Seychelles","abbreviation":"SC"},{"name":"Sierra Leone","abbreviation":"SL"},{"name":"Singapore","abbreviation":"SG"},{"name":"Sint Maarten","abbreviation":"SX"},{"name":"Slovakia","abbreviation":"SK"},{"name":"Slovenia","abbreviation":"SI"},{"name":"Solomon Islands","abbreviation":"SB"},{"name":"Somalia","abbreviation":"SO"},{"name":"South Africa","abbreviation":"ZA"},{"name":"South Georgia & South Sandwich Islands","abbreviation":"GS"},{"name":"South Korea","abbreviation":"KR"},{"name":"South Sudan","abbreviation":"SS"},{"name":"Spain","abbreviation":"ES"},{"name":"Sri Lanka","abbreviation":"LK"},{"name":"St. Barthélemy","abbreviation":"BL"},{"name":"St. Helena","abbreviation":"SH"},{"name":"St. Kitts & Nevis","abbreviation":"KN"},{"name":"St. Lucia","abbreviation":"LC"},{"name":"St. Martin","abbreviation":"MF"},{"name":"St. Pierre & Miquelon","abbreviation":"PM"},{"name":"St. Vincent & Grenadines","abbreviation":"VC"},{"name":"Sudan","abbreviation":"SD"},{"name":"Suriname","abbreviation":"SR"},{"name":"Svalbard & Jan Mayen","abbreviation":"SJ"},{"name":"Swaziland","abbreviation":"SZ"},{"name":"Sweden","abbreviation":"SE"},{"name":"Switzerland","abbreviation":"CH"},{"name":"Syria","abbreviation":"SY"},{"name":"Taiwan","abbreviation":"TW"},{"name":"Tajikistan","abbreviation":"TJ"},{"name":"Tanzania","abbreviation":"TZ"},{"name":"Thailand","abbreviation":"TH"},{"name":"Timor-Leste","abbreviation":"TL"},{"name":"Togo","abbreviation":"TG"},{"name":"Tokelau","abbreviation":"TK"},{"name":"Tonga","abbreviation":"TO"},{"name":"Trinidad & Tobago","abbreviation":"TT"},{"name":"Tristan da Cunha","abbreviation":"TA"},{"name":"Tunisia","abbreviation":"TN"},{"name":"Turkey","abbreviation":"TR"},{"name":"Turkmenistan","abbreviation":"TM"},{"name":"Turks & Caicos Islands","abbreviation":"TC"},{"name":"Tuvalu","abbreviation":"TV"},{"name":"U.S. Outlying Islands","abbreviation":"UM"},{"name":"U.S. Virgin Islands","abbreviation":"VI"},{"name":"Uganda","abbreviation":"UG"},{"name":"Ukraine","abbreviation":"UA"},{"name":"United Arab Emirates","abbreviation":"AE"},{"name":"United Kingdom","abbreviation":"GB"},{"name":"United States","abbreviation":"US"},{"name":"Uruguay","abbreviation":"UY"},{"name":"Uzbekistan","abbreviation":"UZ"},{"name":"Vanuatu","abbreviation":"VU"},{"name":"Vatican City","abbreviation":"VA"},{"name":"Venezuela","abbreviation":"VE"},{"name":"Vietnam","abbreviation":"VN"},{"name":"Wallis & Futuna","abbreviation":"WF"},{"name":"Western Sahara","abbreviation":"EH"},{"name":"Yemen","abbreviation":"YE"},{"name":"Zambia","abbreviation":"ZM"},{"name":"Zimbabwe","abbreviation":"ZW"}],counties:{// Data taken from http://www.downloadexcelfiles.com/gb_en/download-excel-file-list-counties-uk
"uk":[{name:'Bath and North East Somerset'},{name:'Bedford'},{name:'Blackburn with Darwen'},{name:'Blackpool'},{name:'Bournemouth'},{name:'Bracknell Forest'},{name:'Brighton & Hove'},{name:'Bristol'},{name:'Buckinghamshire'},{name:'Cambridgeshire'},{name:'Central Bedfordshire'},{name:'Cheshire East'},{name:'Cheshire West and Chester'},{name:'Cornwall'},{name:'County Durham'},{name:'Cumbria'},{name:'Darlington'},{name:'Derby'},{name:'Derbyshire'},{name:'Devon'},{name:'Dorset'},{name:'East Riding of Yorkshire'},{name:'East Sussex'},{name:'Essex'},{name:'Gloucestershire'},{name:'Greater London'},{name:'Greater Manchester'},{name:'Halton'},{name:'Hampshire'},{name:'Hartlepool'},{name:'Herefordshire'},{name:'Hertfordshire'},{name:'Hull'},{name:'Isle of Wight'},{name:'Isles of Scilly'},{name:'Kent'},{name:'Lancashire'},{name:'Leicester'},{name:'Leicestershire'},{name:'Lincolnshire'},{name:'Luton'},{name:'Medway'},{name:'Merseyside'},{name:'Middlesbrough'},{name:'Milton Keynes'},{name:'Norfolk'},{name:'North East Lincolnshire'},{name:'North Lincolnshire'},{name:'North Somerset'},{name:'North Yorkshire'},{name:'Northamptonshire'},{name:'Northumberland'},{name:'Nottingham'},{name:'Nottinghamshire'},{name:'Oxfordshire'},{name:'Peterborough'},{name:'Plymouth'},{name:'Poole'},{name:'Portsmouth'},{name:'Reading'},{name:'Redcar and Cleveland'},{name:'Rutland'},{name:'Shropshire'},{name:'Slough'},{name:'Somerset'},{name:'South Gloucestershire'},{name:'South Yorkshire'},{name:'Southampton'},{name:'Southend-on-Sea'},{name:'Staffordshire'},{name:'Stockton-on-Tees'},{name:'Stoke-on-Trent'},{name:'Suffolk'},{name:'Surrey'},{name:'Swindon'},{name:'Telford and Wrekin'},{name:'Thurrock'},{name:'Torbay'},{name:'Tyne and Wear'},{name:'Warrington'},{name:'Warwickshire'},{name:'West Berkshire'},{name:'West Midlands'},{name:'West Sussex'},{name:'West Yorkshire'},{name:'Wiltshire'},{name:'Windsor and Maidenhead'},{name:'Wokingham'},{name:'Worcestershire'},{name:'York'}]},provinces:{"ca":[{name:'Alberta',abbreviation:'AB'},{name:'British Columbia',abbreviation:'BC'},{name:'Manitoba',abbreviation:'MB'},{name:'New Brunswick',abbreviation:'NB'},{name:'Newfoundland and Labrador',abbreviation:'NL'},{name:'Nova Scotia',abbreviation:'NS'},{name:'Ontario',abbreviation:'ON'},{name:'Prince Edward Island',abbreviation:'PE'},{name:'Quebec',abbreviation:'QC'},{name:'Saskatchewan',abbreviation:'SK'},// The case could be made that the following are not actually provinces
// since they are technically considered "territories" however they all
// look the same on an envelope!
{name:'Northwest Territories',abbreviation:'NT'},{name:'Nunavut',abbreviation:'NU'},{name:'Yukon',abbreviation:'YT'}],"it":[{name:"Agrigento",abbreviation:"AG",code:84},{name:"Alessandria",abbreviation:"AL",code:6},{name:"Ancona",abbreviation:"AN",code:42},{name:"Aosta",abbreviation:"AO",code:7},{name:"L'Aquila",abbreviation:"AQ",code:66},{name:"Arezzo",abbreviation:"AR",code:51},{name:"Ascoli-Piceno",abbreviation:"AP",code:44},{name:"Asti",abbreviation:"AT",code:5},{name:"Avellino",abbreviation:"AV",code:64},{name:"Bari",abbreviation:"BA",code:72},{name:"Barletta-Andria-Trani",abbreviation:"BT",code:72},{name:"Belluno",abbreviation:"BL",code:25},{name:"Benevento",abbreviation:"BN",code:62},{name:"Bergamo",abbreviation:"BG",code:16},{name:"Biella",abbreviation:"BI",code:96},{name:"Bologna",abbreviation:"BO",code:37},{name:"Bolzano",abbreviation:"BZ",code:21},{name:"Brescia",abbreviation:"BS",code:17},{name:"Brindisi",abbreviation:"BR",code:74},{name:"Cagliari",abbreviation:"CA",code:92},{name:"Caltanissetta",abbreviation:"CL",code:85},{name:"Campobasso",abbreviation:"CB",code:70},{name:"Carbonia Iglesias",abbreviation:"CI",code:70},{name:"Caserta",abbreviation:"CE",code:61},{name:"Catania",abbreviation:"CT",code:87},{name:"Catanzaro",abbreviation:"CZ",code:79},{name:"Chieti",abbreviation:"CH",code:69},{name:"Como",abbreviation:"CO",code:13},{name:"Cosenza",abbreviation:"CS",code:78},{name:"Cremona",abbreviation:"CR",code:19},{name:"Crotone",abbreviation:"KR",code:101},{name:"Cuneo",abbreviation:"CN",code:4},{name:"Enna",abbreviation:"EN",code:86},{name:"Fermo",abbreviation:"FM",code:86},{name:"Ferrara",abbreviation:"FE",code:38},{name:"Firenze",abbreviation:"FI",code:48},{name:"Foggia",abbreviation:"FG",code:71},{name:"Forli-Cesena",abbreviation:"FC",code:71},{name:"Frosinone",abbreviation:"FR",code:60},{name:"Genova",abbreviation:"GE",code:10},{name:"Gorizia",abbreviation:"GO",code:31},{name:"Grosseto",abbreviation:"GR",code:53},{name:"Imperia",abbreviation:"IM",code:8},{name:"Isernia",abbreviation:"IS",code:94},{name:"La-Spezia",abbreviation:"SP",code:66},{name:"Latina",abbreviation:"LT",code:59},{name:"Lecce",abbreviation:"LE",code:75},{name:"Lecco",abbreviation:"LC",code:97},{name:"Livorno",abbreviation:"LI",code:49},{name:"Lodi",abbreviation:"LO",code:98},{name:"Lucca",abbreviation:"LU",code:46},{name:"Macerata",abbreviation:"MC",code:43},{name:"Mantova",abbreviation:"MN",code:20},{name:"Massa-Carrara",abbreviation:"MS",code:45},{name:"Matera",abbreviation:"MT",code:77},{name:"Medio Campidano",abbreviation:"VS",code:77},{name:"Messina",abbreviation:"ME",code:83},{name:"Milano",abbreviation:"MI",code:15},{name:"Modena",abbreviation:"MO",code:36},{name:"Monza-Brianza",abbreviation:"MB",code:36},{name:"Napoli",abbreviation:"NA",code:63},{name:"Novara",abbreviation:"NO",code:3},{name:"Nuoro",abbreviation:"NU",code:91},{name:"Ogliastra",abbreviation:"OG",code:91},{name:"Olbia Tempio",abbreviation:"OT",code:91},{name:"Oristano",abbreviation:"OR",code:95},{name:"Padova",abbreviation:"PD",code:28},{name:"Palermo",abbreviation:"PA",code:82},{name:"Parma",abbreviation:"PR",code:34},{name:"Pavia",abbreviation:"PV",code:18},{name:"Perugia",abbreviation:"PG",code:54},{name:"Pesaro-Urbino",abbreviation:"PU",code:41},{name:"Pescara",abbreviation:"PE",code:68},{name:"Piacenza",abbreviation:"PC",code:33},{name:"Pisa",abbreviation:"PI",code:50},{name:"Pistoia",abbreviation:"PT",code:47},{name:"Pordenone",abbreviation:"PN",code:93},{name:"Potenza",abbreviation:"PZ",code:76},{name:"Prato",abbreviation:"PO",code:100},{name:"Ragusa",abbreviation:"RG",code:88},{name:"Ravenna",abbreviation:"RA",code:39},{name:"Reggio-Calabria",abbreviation:"RC",code:35},{name:"Reggio-Emilia",abbreviation:"RE",code:35},{name:"Rieti",abbreviation:"RI",code:57},{name:"Rimini",abbreviation:"RN",code:99},{name:"Roma",abbreviation:"Roma",code:58},{name:"Rovigo",abbreviation:"RO",code:29},{name:"Salerno",abbreviation:"SA",code:65},{name:"Sassari",abbreviation:"SS",code:90},{name:"Savona",abbreviation:"SV",code:9},{name:"Siena",abbreviation:"SI",code:52},{name:"Siracusa",abbreviation:"SR",code:89},{name:"Sondrio",abbreviation:"SO",code:14},{name:"Taranto",abbreviation:"TA",code:73},{name:"Teramo",abbreviation:"TE",code:67},{name:"Terni",abbreviation:"TR",code:55},{name:"Torino",abbreviation:"TO",code:1},{name:"Trapani",abbreviation:"TP",code:81},{name:"Trento",abbreviation:"TN",code:22},{name:"Treviso",abbreviation:"TV",code:26},{name:"Trieste",abbreviation:"TS",code:32},{name:"Udine",abbreviation:"UD",code:30},{name:"Varese",abbreviation:"VA",code:12},{name:"Venezia",abbreviation:"VE",code:27},{name:"Verbania",abbreviation:"VB",code:27},{name:"Vercelli",abbreviation:"VC",code:2},{name:"Verona",abbreviation:"VR",code:23},{name:"Vibo-Valentia",abbreviation:"VV",code:102},{name:"Vicenza",abbreviation:"VI",code:24},{name:"Viterbo",abbreviation:"VT",code:56}]},// from: https://github.com/samsargent/Useful-Autocomplete-Data/blob/master/data/nationalities.json
nationalities:[{name:'Afghan'},{name:'Albanian'},{name:'Algerian'},{name:'American'},{name:'Andorran'},{name:'Angolan'},{name:'Antiguans'},{name:'Argentinean'},{name:'Armenian'},{name:'Australian'},{name:'Austrian'},{name:'Azerbaijani'},{name:'Bahami'},{name:'Bahraini'},{name:'Bangladeshi'},{name:'Barbadian'},{name:'Barbudans'},{name:'Batswana'},{name:'Belarusian'},{name:'Belgian'},{name:'Belizean'},{name:'Beninese'},{name:'Bhutanese'},{name:'Bolivian'},{name:'Bosnian'},{name:'Brazilian'},{name:'British'},{name:'Bruneian'},{name:'Bulgarian'},{name:'Burkinabe'},{name:'Burmese'},{name:'Burundian'},{name:'Cambodian'},{name:'Cameroonian'},{name:'Canadian'},{name:'Cape Verdean'},{name:'Central African'},{name:'Chadian'},{name:'Chilean'},{name:'Chinese'},{name:'Colombian'},{name:'Comoran'},{name:'Congolese'},{name:'Costa Rican'},{name:'Croatian'},{name:'Cuban'},{name:'Cypriot'},{name:'Czech'},{name:'Danish'},{name:'Djibouti'},{name:'Dominican'},{name:'Dutch'},{name:'East Timorese'},{name:'Ecuadorean'},{name:'Egyptian'},{name:'Emirian'},{name:'Equatorial Guinean'},{name:'Eritrean'},{name:'Estonian'},{name:'Ethiopian'},{name:'Fijian'},{name:'Filipino'},{name:'Finnish'},{name:'French'},{name:'Gabonese'},{name:'Gambian'},{name:'Georgian'},{name:'German'},{name:'Ghanaian'},{name:'Greek'},{name:'Grenadian'},{name:'Guatemalan'},{name:'Guinea-Bissauan'},{name:'Guinean'},{name:'Guyanese'},{name:'Haitian'},{name:'Herzegovinian'},{name:'Honduran'},{name:'Hungarian'},{name:'I-Kiribati'},{name:'Icelander'},{name:'Indian'},{name:'Indonesian'},{name:'Iranian'},{name:'Iraqi'},{name:'Irish'},{name:'Israeli'},{name:'Italian'},{name:'Ivorian'},{name:'Jamaican'},{name:'Japanese'},{name:'Jordanian'},{name:'Kazakhstani'},{name:'Kenyan'},{name:'Kittian and Nevisian'},{name:'Kuwaiti'},{name:'Kyrgyz'},{name:'Laotian'},{name:'Latvian'},{name:'Lebanese'},{name:'Liberian'},{name:'Libyan'},{name:'Liechtensteiner'},{name:'Lithuanian'},{name:'Luxembourger'},{name:'Macedonian'},{name:'Malagasy'},{name:'Malawian'},{name:'Malaysian'},{name:'Maldivan'},{name:'Malian'},{name:'Maltese'},{name:'Marshallese'},{name:'Mauritanian'},{name:'Mauritian'},{name:'Mexican'},{name:'Micronesian'},{name:'Moldovan'},{name:'Monacan'},{name:'Mongolian'},{name:'Moroccan'},{name:'Mosotho'},{name:'Motswana'},{name:'Mozambican'},{name:'Namibian'},{name:'Nauruan'},{name:'Nepalese'},{name:'New Zealander'},{name:'Nicaraguan'},{name:'Nigerian'},{name:'Nigerien'},{name:'North Korean'},{name:'Northern Irish'},{name:'Norwegian'},{name:'Omani'},{name:'Pakistani'},{name:'Palauan'},{name:'Panamanian'},{name:'Papua New Guinean'},{name:'Paraguayan'},{name:'Peruvian'},{name:'Polish'},{name:'Portuguese'},{name:'Qatari'},{name:'Romani'},{name:'Russian'},{name:'Rwandan'},{name:'Saint Lucian'},{name:'Salvadoran'},{name:'Samoan'},{name:'San Marinese'},{name:'Sao Tomean'},{name:'Saudi'},{name:'Scottish'},{name:'Senegalese'},{name:'Serbian'},{name:'Seychellois'},{name:'Sierra Leonean'},{name:'Singaporean'},{name:'Slovakian'},{name:'Slovenian'},{name:'Solomon Islander'},{name:'Somali'},{name:'South African'},{name:'South Korean'},{name:'Spanish'},{name:'Sri Lankan'},{name:'Sudanese'},{name:'Surinamer'},{name:'Swazi'},{name:'Swedish'},{name:'Swiss'},{name:'Syrian'},{name:'Taiwanese'},{name:'Tajik'},{name:'Tanzanian'},{name:'Thai'},{name:'Togolese'},{name:'Tongan'},{name:'Trinidadian or Tobagonian'},{name:'Tunisian'},{name:'Turkish'},{name:'Tuvaluan'},{name:'Ugandan'},{name:'Ukrainian'},{name:'Uruguaya'},{name:'Uzbekistani'},{name:'Venezuela'},{name:'Vietnamese'},{name:'Wels'},{name:'Yemenit'},{name:'Zambia'},{name:'Zimbabwe'}],us_states_and_dc:[{name:'Alabama',abbreviation:'AL'},{name:'Alaska',abbreviation:'AK'},{name:'Arizona',abbreviation:'AZ'},{name:'Arkansas',abbreviation:'AR'},{name:'California',abbreviation:'CA'},{name:'Colorado',abbreviation:'CO'},{name:'Connecticut',abbreviation:'CT'},{name:'Delaware',abbreviation:'DE'},{name:'District of Columbia',abbreviation:'DC'},{name:'Florida',abbreviation:'FL'},{name:'Georgia',abbreviation:'GA'},{name:'Hawaii',abbreviation:'HI'},{name:'Idaho',abbreviation:'ID'},{name:'Illinois',abbreviation:'IL'},{name:'Indiana',abbreviation:'IN'},{name:'Iowa',abbreviation:'IA'},{name:'Kansas',abbreviation:'KS'},{name:'Kentucky',abbreviation:'KY'},{name:'Louisiana',abbreviation:'LA'},{name:'Maine',abbreviation:'ME'},{name:'Maryland',abbreviation:'MD'},{name:'Massachusetts',abbreviation:'MA'},{name:'Michigan',abbreviation:'MI'},{name:'Minnesota',abbreviation:'MN'},{name:'Mississippi',abbreviation:'MS'},{name:'Missouri',abbreviation:'MO'},{name:'Montana',abbreviation:'MT'},{name:'Nebraska',abbreviation:'NE'},{name:'Nevada',abbreviation:'NV'},{name:'New Hampshire',abbreviation:'NH'},{name:'New Jersey',abbreviation:'NJ'},{name:'New Mexico',abbreviation:'NM'},{name:'New York',abbreviation:'NY'},{name:'North Carolina',abbreviation:'NC'},{name:'North Dakota',abbreviation:'ND'},{name:'Ohio',abbreviation:'OH'},{name:'Oklahoma',abbreviation:'OK'},{name:'Oregon',abbreviation:'OR'},{name:'Pennsylvania',abbreviation:'PA'},{name:'Rhode Island',abbreviation:'RI'},{name:'South Carolina',abbreviation:'SC'},{name:'South Dakota',abbreviation:'SD'},{name:'Tennessee',abbreviation:'TN'},{name:'Texas',abbreviation:'TX'},{name:'Utah',abbreviation:'UT'},{name:'Vermont',abbreviation:'VT'},{name:'Virginia',abbreviation:'VA'},{name:'Washington',abbreviation:'WA'},{name:'West Virginia',abbreviation:'WV'},{name:'Wisconsin',abbreviation:'WI'},{name:'Wyoming',abbreviation:'WY'}],territories:[{name:'American Samoa',abbreviation:'AS'},{name:'Federated States of Micronesia',abbreviation:'FM'},{name:'Guam',abbreviation:'GU'},{name:'Marshall Islands',abbreviation:'MH'},{name:'Northern Mariana Islands',abbreviation:'MP'},{name:'Puerto Rico',abbreviation:'PR'},{name:'Virgin Islands, U.S.',abbreviation:'VI'}],armed_forces:[{name:'Armed Forces Europe',abbreviation:'AE'},{name:'Armed Forces Pacific',abbreviation:'AP'},{name:'Armed Forces the Americas',abbreviation:'AA'}],country_regions:{it:[{name:"Valle d'Aosta",abbreviation:"VDA"},{name:"Piemonte",abbreviation:"PIE"},{name:"Lombardia",abbreviation:"LOM"},{name:"Veneto",abbreviation:"VEN"},{name:"Trentino Alto Adige",abbreviation:"TAA"},{name:"Friuli Venezia Giulia",abbreviation:"FVG"},{name:"Liguria",abbreviation:"LIG"},{name:"Emilia Romagna",abbreviation:"EMR"},{name:"Toscana",abbreviation:"TOS"},{name:"Umbria",abbreviation:"UMB"},{name:"Marche",abbreviation:"MAR"},{name:"Abruzzo",abbreviation:"ABR"},{name:"Lazio",abbreviation:"LAZ"},{name:"Campania",abbreviation:"CAM"},{name:"Puglia",abbreviation:"PUG"},{name:"Basilicata",abbreviation:"BAS"},{name:"Molise",abbreviation:"MOL"},{name:"Calabria",abbreviation:"CAL"},{name:"Sicilia",abbreviation:"SIC"},{name:"Sardegna",abbreviation:"SAR"}]},street_suffixes:{'us':[{name:'Avenue',abbreviation:'Ave'},{name:'Boulevard',abbreviation:'Blvd'},{name:'Center',abbreviation:'Ctr'},{name:'Circle',abbreviation:'Cir'},{name:'Court',abbreviation:'Ct'},{name:'Drive',abbreviation:'Dr'},{name:'Extension',abbreviation:'Ext'},{name:'Glen',abbreviation:'Gln'},{name:'Grove',abbreviation:'Grv'},{name:'Heights',abbreviation:'Hts'},{name:'Highway',abbreviation:'Hwy'},{name:'Junction',abbreviation:'Jct'},{name:'Key',abbreviation:'Key'},{name:'Lane',abbreviation:'Ln'},{name:'Loop',abbreviation:'Loop'},{name:'Manor',abbreviation:'Mnr'},{name:'Mill',abbreviation:'Mill'},{name:'Park',abbreviation:'Park'},{name:'Parkway',abbreviation:'Pkwy'},{name:'Pass',abbreviation:'Pass'},{name:'Path',abbreviation:'Path'},{name:'Pike',abbreviation:'Pike'},{name:'Place',abbreviation:'Pl'},{name:'Plaza',abbreviation:'Plz'},{name:'Point',abbreviation:'Pt'},{name:'Ridge',abbreviation:'Rdg'},{name:'River',abbreviation:'Riv'},{name:'Road',abbreviation:'Rd'},{name:'Square',abbreviation:'Sq'},{name:'Street',abbreviation:'St'},{name:'Terrace',abbreviation:'Ter'},{name:'Trail',abbreviation:'Trl'},{name:'Turnpike',abbreviation:'Tpke'},{name:'View',abbreviation:'Vw'},{name:'Way',abbreviation:'Way'}],'it':[{name:'Accesso',abbreviation:'Acc.'},{name:'Alzaia',abbreviation:'Alz.'},{name:'Arco',abbreviation:'Arco'},{name:'Archivolto',abbreviation:'Acv.'},{name:'Arena',abbreviation:'Arena'},{name:'Argine',abbreviation:'Argine'},{name:'Bacino',abbreviation:'Bacino'},{name:'Banchi',abbreviation:'Banchi'},{name:'Banchina',abbreviation:'Ban.'},{name:'Bastioni',abbreviation:'Bas.'},{name:'Belvedere',abbreviation:'Belv.'},{name:'Borgata',abbreviation:'B.ta'},{name:'Borgo',abbreviation:'B.go'},{name:'Calata',abbreviation:'Cal.'},{name:'Calle',abbreviation:'Calle'},{name:'Campiello',abbreviation:'Cam.'},{name:'Campo',abbreviation:'Cam.'},{name:'Canale',abbreviation:'Can.'},{name:'Carraia',abbreviation:'Carr.'},{name:'Cascina',abbreviation:'Cascina'},{name:'Case sparse',abbreviation:'c.s.'},{name:'Cavalcavia',abbreviation:'Cv.'},{name:'Circonvallazione',abbreviation:'Cv.'},{name:'Complanare',abbreviation:'C.re'},{name:'Contrada',abbreviation:'C.da'},{name:'Corso',abbreviation:'C.so'},{name:'Corte',abbreviation:'C.te'},{name:'Cortile',abbreviation:'C.le'},{name:'Diramazione',abbreviation:'Dir.'},{name:'Fondaco',abbreviation:'F.co'},{name:'Fondamenta',abbreviation:'F.ta'},{name:'Fondo',abbreviation:'F.do'},{name:'Frazione',abbreviation:'Fr.'},{name:'Isola',abbreviation:'Is.'},{name:'Largo',abbreviation:'L.go'},{name:'Litoranea',abbreviation:'Lit.'},{name:'Lungolago',abbreviation:'L.go lago'},{name:'Lungo Po',abbreviation:'l.go Po'},{name:'Molo',abbreviation:'Molo'},{name:'Mura',abbreviation:'Mura'},{name:'Passaggio privato',abbreviation:'pass. priv.'},{name:'Passeggiata',abbreviation:'Pass.'},{name:'Piazza',abbreviation:'P.zza'},{name:'Piazzale',abbreviation:'P.le'},{name:'Ponte',abbreviation:'P.te'},{name:'Portico',abbreviation:'P.co'},{name:'Rampa',abbreviation:'Rampa'},{name:'Regione',abbreviation:'Reg.'},{name:'Rione',abbreviation:'R.ne'},{name:'Rio',abbreviation:'Rio'},{name:'Ripa',abbreviation:'Ripa'},{name:'Riva',abbreviation:'Riva'},{name:'Rondò',abbreviation:'Rondò'},{name:'Rotonda',abbreviation:'Rot.'},{name:'Sagrato',abbreviation:'Sagr.'},{name:'Salita',abbreviation:'Sal.'},{name:'Scalinata',abbreviation:'Scal.'},{name:'Scalone',abbreviation:'Scal.'},{name:'Slargo',abbreviation:'Sl.'},{name:'Sottoportico',abbreviation:'Sott.'},{name:'Strada',abbreviation:'Str.'},{name:'Stradale',abbreviation:'Str.le'},{name:'Strettoia',abbreviation:'Strett.'},{name:'Traversa',abbreviation:'Trav.'},{name:'Via',abbreviation:'V.'},{name:'Viale',abbreviation:'V.le'},{name:'Vicinale',abbreviation:'Vic.le'},{name:'Vicolo',abbreviation:'Vic.'}]},months:[{name:'January',short_name:'Jan',numeric:'01',days:31},// Not messing with leap years...
{name:'February',short_name:'Feb',numeric:'02',days:28},{name:'March',short_name:'Mar',numeric:'03',days:31},{name:'April',short_name:'Apr',numeric:'04',days:30},{name:'May',short_name:'May',numeric:'05',days:31},{name:'June',short_name:'Jun',numeric:'06',days:30},{name:'July',short_name:'Jul',numeric:'07',days:31},{name:'August',short_name:'Aug',numeric:'08',days:31},{name:'September',short_name:'Sep',numeric:'09',days:30},{name:'October',short_name:'Oct',numeric:'10',days:31},{name:'November',short_name:'Nov',numeric:'11',days:30},{name:'December',short_name:'Dec',numeric:'12',days:31}],// http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
cc_types:[{name:"American Express",short_name:'amex',prefix:'34',length:15},{name:"Bankcard",short_name:'bankcard',prefix:'5610',length:16},{name:"China UnionPay",short_name:'chinaunion',prefix:'62',length:16},{name:"Diners Club Carte Blanche",short_name:'dccarte',prefix:'300',length:14},{name:"Diners Club enRoute",short_name:'dcenroute',prefix:'2014',length:15},{name:"Diners Club International",short_name:'dcintl',prefix:'36',length:14},{name:"Diners Club United States & Canada",short_name:'dcusc',prefix:'54',length:16},{name:"Discover Card",short_name:'discover',prefix:'6011',length:16},{name:"InstaPayment",short_name:'instapay',prefix:'637',length:16},{name:"JCB",short_name:'jcb',prefix:'3528',length:16},{name:"Laser",short_name:'laser',prefix:'6304',length:16},{name:"Maestro",short_name:'maestro',prefix:'5018',length:16},{name:"Mastercard",short_name:'mc',prefix:'51',length:16},{name:"Solo",short_name:'solo',prefix:'6334',length:16},{name:"Switch",short_name:'switch',prefix:'4903',length:16},{name:"Visa",short_name:'visa',prefix:'4',length:16},{name:"Visa Electron",short_name:'electron',prefix:'4026',length:16}],//return all world currency by ISO 4217
currency_types:[{'code':'AED','name':'United Arab Emirates Dirham'},{'code':'AFN','name':'Afghanistan Afghani'},{'code':'ALL','name':'Albania Lek'},{'code':'AMD','name':'Armenia Dram'},{'code':'ANG','name':'Netherlands Antilles Guilder'},{'code':'AOA','name':'Angola Kwanza'},{'code':'ARS','name':'Argentina Peso'},{'code':'AUD','name':'Australia Dollar'},{'code':'AWG','name':'Aruba Guilder'},{'code':'AZN','name':'Azerbaijan New Manat'},{'code':'BAM','name':'Bosnia and Herzegovina Convertible Marka'},{'code':'BBD','name':'Barbados Dollar'},{'code':'BDT','name':'Bangladesh Taka'},{'code':'BGN','name':'Bulgaria Lev'},{'code':'BHD','name':'Bahrain Dinar'},{'code':'BIF','name':'Burundi Franc'},{'code':'BMD','name':'Bermuda Dollar'},{'code':'BND','name':'Brunei Darussalam Dollar'},{'code':'BOB','name':'Bolivia Boliviano'},{'code':'BRL','name':'Brazil Real'},{'code':'BSD','name':'Bahamas Dollar'},{'code':'BTN','name':'Bhutan Ngultrum'},{'code':'BWP','name':'Botswana Pula'},{'code':'BYR','name':'Belarus Ruble'},{'code':'BZD','name':'Belize Dollar'},{'code':'CAD','name':'Canada Dollar'},{'code':'CDF','name':'Congo/Kinshasa Franc'},{'code':'CHF','name':'Switzerland Franc'},{'code':'CLP','name':'Chile Peso'},{'code':'CNY','name':'China Yuan Renminbi'},{'code':'COP','name':'Colombia Peso'},{'code':'CRC','name':'Costa Rica Colon'},{'code':'CUC','name':'Cuba Convertible Peso'},{'code':'CUP','name':'Cuba Peso'},{'code':'CVE','name':'Cape Verde Escudo'},{'code':'CZK','name':'Czech Republic Koruna'},{'code':'DJF','name':'Djibouti Franc'},{'code':'DKK','name':'Denmark Krone'},{'code':'DOP','name':'Dominican Republic Peso'},{'code':'DZD','name':'Algeria Dinar'},{'code':'EGP','name':'Egypt Pound'},{'code':'ERN','name':'Eritrea Nakfa'},{'code':'ETB','name':'Ethiopia Birr'},{'code':'EUR','name':'Euro Member Countries'},{'code':'FJD','name':'Fiji Dollar'},{'code':'FKP','name':'Falkland Islands (Malvinas) Pound'},{'code':'GBP','name':'United Kingdom Pound'},{'code':'GEL','name':'Georgia Lari'},{'code':'GGP','name':'Guernsey Pound'},{'code':'GHS','name':'Ghana Cedi'},{'code':'GIP','name':'Gibraltar Pound'},{'code':'GMD','name':'Gambia Dalasi'},{'code':'GNF','name':'Guinea Franc'},{'code':'GTQ','name':'Guatemala Quetzal'},{'code':'GYD','name':'Guyana Dollar'},{'code':'HKD','name':'Hong Kong Dollar'},{'code':'HNL','name':'Honduras Lempira'},{'code':'HRK','name':'Croatia Kuna'},{'code':'HTG','name':'Haiti Gourde'},{'code':'HUF','name':'Hungary Forint'},{'code':'IDR','name':'Indonesia Rupiah'},{'code':'ILS','name':'Israel Shekel'},{'code':'IMP','name':'Isle of Man Pound'},{'code':'INR','name':'India Rupee'},{'code':'IQD','name':'Iraq Dinar'},{'code':'IRR','name':'Iran Rial'},{'code':'ISK','name':'Iceland Krona'},{'code':'JEP','name':'Jersey Pound'},{'code':'JMD','name':'Jamaica Dollar'},{'code':'JOD','name':'Jordan Dinar'},{'code':'JPY','name':'Japan Yen'},{'code':'KES','name':'Kenya Shilling'},{'code':'KGS','name':'Kyrgyzstan Som'},{'code':'KHR','name':'Cambodia Riel'},{'code':'KMF','name':'Comoros Franc'},{'code':'KPW','name':'Korea (North) Won'},{'code':'KRW','name':'Korea (South) Won'},{'code':'KWD','name':'Kuwait Dinar'},{'code':'KYD','name':'Cayman Islands Dollar'},{'code':'KZT','name':'Kazakhstan Tenge'},{'code':'LAK','name':'Laos Kip'},{'code':'LBP','name':'Lebanon Pound'},{'code':'LKR','name':'Sri Lanka Rupee'},{'code':'LRD','name':'Liberia Dollar'},{'code':'LSL','name':'Lesotho Loti'},{'code':'LTL','name':'Lithuania Litas'},{'code':'LYD','name':'Libya Dinar'},{'code':'MAD','name':'Morocco Dirham'},{'code':'MDL','name':'Moldova Leu'},{'code':'MGA','name':'Madagascar Ariary'},{'code':'MKD','name':'Macedonia Denar'},{'code':'MMK','name':'Myanmar (Burma) Kyat'},{'code':'MNT','name':'Mongolia Tughrik'},{'code':'MOP','name':'Macau Pataca'},{'code':'MRO','name':'Mauritania Ouguiya'},{'code':'MUR','name':'Mauritius Rupee'},{'code':'MVR','name':'Maldives (Maldive Islands) Rufiyaa'},{'code':'MWK','name':'Malawi Kwacha'},{'code':'MXN','name':'Mexico Peso'},{'code':'MYR','name':'Malaysia Ringgit'},{'code':'MZN','name':'Mozambique Metical'},{'code':'NAD','name':'Namibia Dollar'},{'code':'NGN','name':'Nigeria Naira'},{'code':'NIO','name':'Nicaragua Cordoba'},{'code':'NOK','name':'Norway Krone'},{'code':'NPR','name':'Nepal Rupee'},{'code':'NZD','name':'New Zealand Dollar'},{'code':'OMR','name':'Oman Rial'},{'code':'PAB','name':'Panama Balboa'},{'code':'PEN','name':'Peru Nuevo Sol'},{'code':'PGK','name':'Papua New Guinea Kina'},{'code':'PHP','name':'Philippines Peso'},{'code':'PKR','name':'Pakistan Rupee'},{'code':'PLN','name':'Poland Zloty'},{'code':'PYG','name':'Paraguay Guarani'},{'code':'QAR','name':'Qatar Riyal'},{'code':'RON','name':'Romania New Leu'},{'code':'RSD','name':'Serbia Dinar'},{'code':'RUB','name':'Russia Ruble'},{'code':'RWF','name':'Rwanda Franc'},{'code':'SAR','name':'Saudi Arabia Riyal'},{'code':'SBD','name':'Solomon Islands Dollar'},{'code':'SCR','name':'Seychelles Rupee'},{'code':'SDG','name':'Sudan Pound'},{'code':'SEK','name':'Sweden Krona'},{'code':'SGD','name':'Singapore Dollar'},{'code':'SHP','name':'Saint Helena Pound'},{'code':'SLL','name':'Sierra Leone Leone'},{'code':'SOS','name':'Somalia Shilling'},{'code':'SPL','name':'Seborga Luigino'},{'code':'SRD','name':'Suriname Dollar'},{'code':'STD','name':'São Tomé and Príncipe Dobra'},{'code':'SVC','name':'El Salvador Colon'},{'code':'SYP','name':'Syria Pound'},{'code':'SZL','name':'Swaziland Lilangeni'},{'code':'THB','name':'Thailand Baht'},{'code':'TJS','name':'Tajikistan Somoni'},{'code':'TMT','name':'Turkmenistan Manat'},{'code':'TND','name':'Tunisia Dinar'},{'code':'TOP','name':'Tonga Pa\'anga'},{'code':'TRY','name':'Turkey Lira'},{'code':'TTD','name':'Trinidad and Tobago Dollar'},{'code':'TVD','name':'Tuvalu Dollar'},{'code':'TWD','name':'Taiwan New Dollar'},{'code':'TZS','name':'Tanzania Shilling'},{'code':'UAH','name':'Ukraine Hryvnia'},{'code':'UGX','name':'Uganda Shilling'},{'code':'USD','name':'United States Dollar'},{'code':'UYU','name':'Uruguay Peso'},{'code':'UZS','name':'Uzbekistan Som'},{'code':'VEF','name':'Venezuela Bolivar'},{'code':'VND','name':'Viet Nam Dong'},{'code':'VUV','name':'Vanuatu Vatu'},{'code':'WST','name':'Samoa Tala'},{'code':'XAF','name':'Communauté Financière Africaine (BEAC) CFA Franc BEAC'},{'code':'XCD','name':'East Caribbean Dollar'},{'code':'XDR','name':'International Monetary Fund (IMF) Special Drawing Rights'},{'code':'XOF','name':'Communauté Financière Africaine (BCEAO) Franc'},{'code':'XPF','name':'Comptoirs Français du Pacifique (CFP) Franc'},{'code':'YER','name':'Yemen Rial'},{'code':'ZAR','name':'South Africa Rand'},{'code':'ZMW','name':'Zambia Kwacha'},{'code':'ZWD','name':'Zimbabwe Dollar'}],// return the names of all valide colors
colorNames:["AliceBlue","Black","Navy","DarkBlue","MediumBlue","Blue","DarkGreen","Green","Teal","DarkCyan","DeepSkyBlue","DarkTurquoise","MediumSpringGreen","Lime","SpringGreen","Aqua","Cyan","MidnightBlue","DodgerBlue","LightSeaGreen","ForestGreen","SeaGreen","DarkSlateGray","LimeGreen","MediumSeaGreen","Turquoise","RoyalBlue","SteelBlue","DarkSlateBlue","MediumTurquoise","Indigo","DarkOliveGreen","CadetBlue","CornflowerBlue","RebeccaPurple","MediumAquaMarine","DimGray","SlateBlue","OliveDrab","SlateGray","LightSlateGray","MediumSlateBlue","LawnGreen","Chartreuse","Aquamarine","Maroon","Purple","Olive","Gray","SkyBlue","LightSkyBlue","BlueViolet","DarkRed","DarkMagenta","SaddleBrown","Ivory","White","DarkSeaGreen","LightGreen","MediumPurple","DarkViolet","PaleGreen","DarkOrchid","YellowGreen","Sienna","Brown","DarkGray","LightBlue","GreenYellow","PaleTurquoise","LightSteelBlue","PowderBlue","FireBrick","DarkGoldenRod","MediumOrchid","RosyBrown","DarkKhaki","Silver","MediumVioletRed","IndianRed","Peru","Chocolate","Tan","LightGray","Thistle","Orchid","GoldenRod","PaleVioletRed","Crimson","Gainsboro","Plum","BurlyWood","LightCyan","Lavender","DarkSalmon","Violet","PaleGoldenRod","LightCoral","Khaki","AliceBlue","HoneyDew","Azure","SandyBrown","Wheat","Beige","WhiteSmoke","MintCream","GhostWhite","Salmon","AntiqueWhite","Linen","LightGoldenRodYellow","OldLace","Red","Fuchsia","Magenta","DeepPink","OrangeRed","Tomato","HotPink","Coral","DarkOrange","LightSalmon","Orange","LightPink","Pink","Gold","PeachPuff","NavajoWhite","Moccasin","Bisque","MistyRose","BlanchedAlmond","PapayaWhip","LavenderBlush","SeaShell","Cornsilk","LemonChiffon","FloralWhite","Snow","Yellow","LightYellow"],fileExtension:{"raster":["bmp","gif","gpl","ico","jpeg","psd","png","psp","raw","tiff"],"vector":["3dv","amf","awg","ai","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","odg","svg","xar"],"3d":["3dmf","3dm","3mf","3ds","an8","aoi","blend","cal3d","cob","ctm","iob","jas","max","mb","mdx","obj","x","x3d"],"document":["doc","docx","dot","html","xml","odt","odm","ott","csv","rtf","tex","xhtml","xps"]},// Data taken from https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
timezones:[{"name":"Dateline Standard Time","abbr":"DST","offset":-12,"isdst":false,"text":"(UTC-12:00) International Date Line West","utc":["Etc/GMT+12"]},{"name":"UTC-11","abbr":"U","offset":-11,"isdst":false,"text":"(UTC-11:00) Coordinated Universal Time-11","utc":["Etc/GMT+11","Pacific/Midway","Pacific/Niue","Pacific/Pago_Pago"]},{"name":"Hawaiian Standard Time","abbr":"HST","offset":-10,"isdst":false,"text":"(UTC-10:00) Hawaii","utc":["Etc/GMT+10","Pacific/Honolulu","Pacific/Johnston","Pacific/Rarotonga","Pacific/Tahiti"]},{"name":"Alaskan Standard Time","abbr":"AKDT","offset":-8,"isdst":true,"text":"(UTC-09:00) Alaska","utc":["America/Anchorage","America/Juneau","America/Nome","America/Sitka","America/Yakutat"]},{"name":"Pacific Standard Time (Mexico)","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-08:00) Baja California","utc":["America/Santa_Isabel"]},{"name":"Pacific Standard Time","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-08:00) Pacific Time (US & Canada)","utc":["America/Dawson","America/Los_Angeles","America/Tijuana","America/Vancouver","America/Whitehorse","PST8PDT"]},{"name":"US Mountain Standard Time","abbr":"UMST","offset":-7,"isdst":false,"text":"(UTC-07:00) Arizona","utc":["America/Creston","America/Dawson_Creek","America/Hermosillo","America/Phoenix","Etc/GMT+7"]},{"name":"Mountain Standard Time (Mexico)","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Chihuahua, La Paz, Mazatlan","utc":["America/Chihuahua","America/Mazatlan"]},{"name":"Mountain Standard Time","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Mountain Time (US & Canada)","utc":["America/Boise","America/Cambridge_Bay","America/Denver","America/Edmonton","America/Inuvik","America/Ojinaga","America/Yellowknife","MST7MDT"]},{"name":"Central America Standard Time","abbr":"CAST","offset":-6,"isdst":false,"text":"(UTC-06:00) Central America","utc":["America/Belize","America/Costa_Rica","America/El_Salvador","America/Guatemala","America/Managua","America/Tegucigalpa","Etc/GMT+6","Pacific/Galapagos"]},{"name":"Central Standard Time","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Central Time (US & Canada)","utc":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Matamoros","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Rainy_River","America/Rankin_Inlet","America/Resolute","America/Winnipeg","CST6CDT"]},{"name":"Central Standard Time (Mexico)","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Guadalajara, Mexico City, Monterrey","utc":["America/Bahia_Banderas","America/Cancun","America/Merida","America/Mexico_City","America/Monterrey"]},{"name":"Canada Central Standard Time","abbr":"CCST","offset":-6,"isdst":false,"text":"(UTC-06:00) Saskatchewan","utc":["America/Regina","America/Swift_Current"]},{"name":"SA Pacific Standard Time","abbr":"SPST","offset":-5,"isdst":false,"text":"(UTC-05:00) Bogota, Lima, Quito","utc":["America/Bogota","America/Cayman","America/Coral_Harbour","America/Eirunepe","America/Guayaquil","America/Jamaica","America/Lima","America/Panama","America/Rio_Branco","Etc/GMT+5"]},{"name":"Eastern Standard Time","abbr":"EDT","offset":-4,"isdst":true,"text":"(UTC-05:00) Eastern Time (US & Canada)","utc":["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto","EST5EDT"]},{"name":"US Eastern Standard Time","abbr":"UEDT","offset":-4,"isdst":true,"text":"(UTC-05:00) Indiana (East)","utc":["America/Indiana/Marengo","America/Indiana/Vevay","America/Indianapolis"]},{"name":"Venezuela Standard Time","abbr":"VST","offset":-4.5,"isdst":false,"text":"(UTC-04:30) Caracas","utc":["America/Caracas"]},{"name":"Paraguay Standard Time","abbr":"PST","offset":-4,"isdst":false,"text":"(UTC-04:00) Asuncion","utc":["America/Asuncion"]},{"name":"Atlantic Standard Time","abbr":"ADT","offset":-3,"isdst":true,"text":"(UTC-04:00) Atlantic Time (Canada)","utc":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","America/Thule","Atlantic/Bermuda"]},{"name":"Central Brazilian Standard Time","abbr":"CBST","offset":-4,"isdst":false,"text":"(UTC-04:00) Cuiaba","utc":["America/Campo_Grande","America/Cuiaba"]},{"name":"SA Western Standard Time","abbr":"SWST","offset":-4,"isdst":false,"text":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan","utc":["America/Anguilla","America/Antigua","America/Aruba","America/Barbados","America/Blanc-Sablon","America/Boa_Vista","America/Curacao","America/Dominica","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guyana","America/Kralendijk","America/La_Paz","America/Lower_Princes","America/Manaus","America/Marigot","America/Martinique","America/Montserrat","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Santo_Domingo","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola","Etc/GMT+4"]},{"name":"Pacific SA Standard Time","abbr":"PSST","offset":-4,"isdst":false,"text":"(UTC-04:00) Santiago","utc":["America/Santiago","Antarctica/Palmer"]},{"name":"Newfoundland Standard Time","abbr":"NDT","offset":-2.5,"isdst":true,"text":"(UTC-03:30) Newfoundland","utc":["America/St_Johns"]},{"name":"E. South America Standard Time","abbr":"ESAST","offset":-3,"isdst":false,"text":"(UTC-03:00) Brasilia","utc":["America/Sao_Paulo"]},{"name":"Argentina Standard Time","abbr":"AST","offset":-3,"isdst":false,"text":"(UTC-03:00) Buenos Aires","utc":["America/Argentina/La_Rioja","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Cordoba","America/Jujuy","America/Mendoza"]},{"name":"SA Eastern Standard Time","abbr":"SEST","offset":-3,"isdst":false,"text":"(UTC-03:00) Cayenne, Fortaleza","utc":["America/Araguaina","America/Belem","America/Cayenne","America/Fortaleza","America/Maceio","America/Paramaribo","America/Recife","America/Santarem","Antarctica/Rothera","Atlantic/Stanley","Etc/GMT+3"]},{"name":"Greenland Standard Time","abbr":"GDT","offset":-2,"isdst":true,"text":"(UTC-03:00) Greenland","utc":["America/Godthab"]},{"name":"Montevideo Standard Time","abbr":"MST","offset":-3,"isdst":false,"text":"(UTC-03:00) Montevideo","utc":["America/Montevideo"]},{"name":"Bahia Standard Time","abbr":"BST","offset":-3,"isdst":false,"text":"(UTC-03:00) Salvador","utc":["America/Bahia"]},{"name":"UTC-02","abbr":"U","offset":-2,"isdst":false,"text":"(UTC-02:00) Coordinated Universal Time-02","utc":["America/Noronha","Atlantic/South_Georgia","Etc/GMT+2"]},{"name":"Mid-Atlantic Standard Time","abbr":"MDT","offset":-1,"isdst":true,"text":"(UTC-02:00) Mid-Atlantic - Old"},{"name":"Azores Standard Time","abbr":"ADT","offset":0,"isdst":true,"text":"(UTC-01:00) Azores","utc":["America/Scoresbysund","Atlantic/Azores"]},{"name":"Cape Verde Standard Time","abbr":"CVST","offset":-1,"isdst":false,"text":"(UTC-01:00) Cape Verde Is.","utc":["Atlantic/Cape_Verde","Etc/GMT+1"]},{"name":"Morocco Standard Time","abbr":"MDT","offset":1,"isdst":true,"text":"(UTC) Casablanca","utc":["Africa/Casablanca","Africa/El_Aaiun"]},{"name":"UTC","abbr":"CUT","offset":0,"isdst":false,"text":"(UTC) Coordinated Universal Time","utc":["America/Danmarkshavn","Etc/GMT"]},{"name":"GMT Standard Time","abbr":"GDT","offset":1,"isdst":true,"text":"(UTC) Dublin, Edinburgh, Lisbon, London","utc":["Atlantic/Canary","Atlantic/Faeroe","Atlantic/Madeira","Europe/Dublin","Europe/Guernsey","Europe/Isle_of_Man","Europe/Jersey","Europe/Lisbon","Europe/London"]},{"name":"Greenwich Standard Time","abbr":"GST","offset":0,"isdst":false,"text":"(UTC) Monrovia, Reykjavik","utc":["Africa/Abidjan","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Bissau","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Monrovia","Africa/Nouakchott","Africa/Ouagadougou","Africa/Sao_Tome","Atlantic/Reykjavik","Atlantic/St_Helena"]},{"name":"W. Europe Standard Time","abbr":"WEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","utc":["Arctic/Longyearbyen","Europe/Amsterdam","Europe/Andorra","Europe/Berlin","Europe/Busingen","Europe/Gibraltar","Europe/Luxembourg","Europe/Malta","Europe/Monaco","Europe/Oslo","Europe/Rome","Europe/San_Marino","Europe/Stockholm","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Zurich"]},{"name":"Central Europe Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague","utc":["Europe/Belgrade","Europe/Bratislava","Europe/Budapest","Europe/Ljubljana","Europe/Podgorica","Europe/Prague","Europe/Tirane"]},{"name":"Romance Standard Time","abbr":"RDT","offset":2,"isdst":true,"text":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris","utc":["Africa/Ceuta","Europe/Brussels","Europe/Copenhagen","Europe/Madrid","Europe/Paris"]},{"name":"Central European Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb","utc":["Europe/Sarajevo","Europe/Skopje","Europe/Warsaw","Europe/Zagreb"]},{"name":"W. Central Africa Standard Time","abbr":"WCAST","offset":1,"isdst":false,"text":"(UTC+01:00) West Central Africa","utc":["Africa/Algiers","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Ndjamena","Africa/Niamey","Africa/Porto-Novo","Africa/Tunis","Etc/GMT-1"]},{"name":"Namibia Standard Time","abbr":"NST","offset":1,"isdst":false,"text":"(UTC+01:00) Windhoek","utc":["Africa/Windhoek"]},{"name":"GTB Standard Time","abbr":"GDT","offset":3,"isdst":true,"text":"(UTC+02:00) Athens, Bucharest","utc":["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau"]},{"name":"Middle East Standard Time","abbr":"MEDT","offset":3,"isdst":true,"text":"(UTC+02:00) Beirut","utc":["Asia/Beirut"]},{"name":"Egypt Standard Time","abbr":"EST","offset":2,"isdst":false,"text":"(UTC+02:00) Cairo","utc":["Africa/Cairo"]},{"name":"Syria Standard Time","abbr":"SDT","offset":3,"isdst":true,"text":"(UTC+02:00) Damascus","utc":["Asia/Damascus"]},{"name":"E. Europe Standard Time","abbr":"EEDT","offset":3,"isdst":true,"text":"(UTC+02:00) E. Europe"},{"name":"South Africa Standard Time","abbr":"SAST","offset":2,"isdst":false,"text":"(UTC+02:00) Harare, Pretoria","utc":["Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Etc/GMT-2"]},{"name":"FLE Standard Time","abbr":"FDT","offset":3,"isdst":true,"text":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","utc":["Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{"name":"Turkey Standard Time","abbr":"TDT","offset":3,"isdst":true,"text":"(UTC+02:00) Istanbul","utc":["Europe/Istanbul"]},{"name":"Israel Standard Time","abbr":"JDT","offset":3,"isdst":true,"text":"(UTC+02:00) Jerusalem","utc":["Asia/Jerusalem"]},{"name":"Libya Standard Time","abbr":"LST","offset":2,"isdst":false,"text":"(UTC+02:00) Tripoli","utc":["Africa/Tripoli"]},{"name":"Jordan Standard Time","abbr":"JST","offset":3,"isdst":false,"text":"(UTC+03:00) Amman","utc":["Asia/Amman"]},{"name":"Arabic Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Baghdad","utc":["Asia/Baghdad"]},{"name":"Kaliningrad Standard Time","abbr":"KST","offset":3,"isdst":false,"text":"(UTC+03:00) Kaliningrad, Minsk","utc":["Europe/Kaliningrad","Europe/Minsk"]},{"name":"Arab Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Kuwait, Riyadh","utc":["Asia/Aden","Asia/Bahrain","Asia/Kuwait","Asia/Qatar","Asia/Riyadh"]},{"name":"E. Africa Standard Time","abbr":"EAST","offset":3,"isdst":false,"text":"(UTC+03:00) Nairobi","utc":["Africa/Addis_Ababa","Africa/Asmera","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Mogadishu","Africa/Nairobi","Antarctica/Syowa","Etc/GMT-3","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte"]},{"name":"Iran Standard Time","abbr":"IDT","offset":4.5,"isdst":true,"text":"(UTC+03:30) Tehran","utc":["Asia/Tehran"]},{"name":"Arabian Standard Time","abbr":"AST","offset":4,"isdst":false,"text":"(UTC+04:00) Abu Dhabi, Muscat","utc":["Asia/Dubai","Asia/Muscat","Etc/GMT-4"]},{"name":"Azerbaijan Standard Time","abbr":"ADT","offset":5,"isdst":true,"text":"(UTC+04:00) Baku","utc":["Asia/Baku"]},{"name":"Russian Standard Time","abbr":"RST","offset":4,"isdst":false,"text":"(UTC+04:00) Moscow, St. Petersburg, Volgograd","utc":["Europe/Moscow","Europe/Samara","Europe/Simferopol","Europe/Volgograd"]},{"name":"Mauritius Standard Time","abbr":"MST","offset":4,"isdst":false,"text":"(UTC+04:00) Port Louis","utc":["Indian/Mahe","Indian/Mauritius","Indian/Reunion"]},{"name":"Georgian Standard Time","abbr":"GST","offset":4,"isdst":false,"text":"(UTC+04:00) Tbilisi","utc":["Asia/Tbilisi"]},{"name":"Caucasus Standard Time","abbr":"CST","offset":4,"isdst":false,"text":"(UTC+04:00) Yerevan","utc":["Asia/Yerevan"]},{"name":"Afghanistan Standard Time","abbr":"AST","offset":4.5,"isdst":false,"text":"(UTC+04:30) Kabul","utc":["Asia/Kabul"]},{"name":"West Asia Standard Time","abbr":"WAST","offset":5,"isdst":false,"text":"(UTC+05:00) Ashgabat, Tashkent","utc":["Antarctica/Mawson","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Dushanbe","Asia/Oral","Asia/Samarkand","Asia/Tashkent","Etc/GMT-5","Indian/Kerguelen","Indian/Maldives"]},{"name":"Pakistan Standard Time","abbr":"PST","offset":5,"isdst":false,"text":"(UTC+05:00) Islamabad, Karachi","utc":["Asia/Karachi"]},{"name":"India Standard Time","abbr":"IST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi","utc":["Asia/Calcutta"]},{"name":"Sri Lanka Standard Time","abbr":"SLST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Sri Jayawardenepura","utc":["Asia/Colombo"]},{"name":"Nepal Standard Time","abbr":"NST","offset":5.75,"isdst":false,"text":"(UTC+05:45) Kathmandu","utc":["Asia/Katmandu"]},{"name":"Central Asia Standard Time","abbr":"CAST","offset":6,"isdst":false,"text":"(UTC+06:00) Astana","utc":["Antarctica/Vostok","Asia/Almaty","Asia/Bishkek","Asia/Qyzylorda","Asia/Urumqi","Etc/GMT-6","Indian/Chagos"]},{"name":"Bangladesh Standard Time","abbr":"BST","offset":6,"isdst":false,"text":"(UTC+06:00) Dhaka","utc":["Asia/Dhaka","Asia/Thimphu"]},{"name":"Ekaterinburg Standard Time","abbr":"EST","offset":6,"isdst":false,"text":"(UTC+06:00) Ekaterinburg","utc":["Asia/Yekaterinburg"]},{"name":"Myanmar Standard Time","abbr":"MST","offset":6.5,"isdst":false,"text":"(UTC+06:30) Yangon (Rangoon)","utc":["Asia/Rangoon","Indian/Cocos"]},{"name":"SE Asia Standard Time","abbr":"SAST","offset":7,"isdst":false,"text":"(UTC+07:00) Bangkok, Hanoi, Jakarta","utc":["Antarctica/Davis","Asia/Bangkok","Asia/Hovd","Asia/Jakarta","Asia/Phnom_Penh","Asia/Pontianak","Asia/Saigon","Asia/Vientiane","Etc/GMT-7","Indian/Christmas"]},{"name":"N. Central Asia Standard Time","abbr":"NCAST","offset":7,"isdst":false,"text":"(UTC+07:00) Novosibirsk","utc":["Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk"]},{"name":"China Standard Time","abbr":"CST","offset":8,"isdst":false,"text":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi","utc":["Asia/Hong_Kong","Asia/Macau","Asia/Shanghai"]},{"name":"North Asia Standard Time","abbr":"NAST","offset":8,"isdst":false,"text":"(UTC+08:00) Krasnoyarsk","utc":["Asia/Krasnoyarsk"]},{"name":"Singapore Standard Time","abbr":"MPST","offset":8,"isdst":false,"text":"(UTC+08:00) Kuala Lumpur, Singapore","utc":["Asia/Brunei","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Makassar","Asia/Manila","Asia/Singapore","Etc/GMT-8"]},{"name":"W. Australia Standard Time","abbr":"WAST","offset":8,"isdst":false,"text":"(UTC+08:00) Perth","utc":["Antarctica/Casey","Australia/Perth"]},{"name":"Taipei Standard Time","abbr":"TST","offset":8,"isdst":false,"text":"(UTC+08:00) Taipei","utc":["Asia/Taipei"]},{"name":"Ulaanbaatar Standard Time","abbr":"UST","offset":8,"isdst":false,"text":"(UTC+08:00) Ulaanbaatar","utc":["Asia/Choibalsan","Asia/Ulaanbaatar"]},{"name":"North Asia East Standard Time","abbr":"NAEST","offset":9,"isdst":false,"text":"(UTC+09:00) Irkutsk","utc":["Asia/Irkutsk"]},{"name":"Tokyo Standard Time","abbr":"TST","offset":9,"isdst":false,"text":"(UTC+09:00) Osaka, Sapporo, Tokyo","utc":["Asia/Dili","Asia/Jayapura","Asia/Tokyo","Etc/GMT-9","Pacific/Palau"]},{"name":"Korea Standard Time","abbr":"KST","offset":9,"isdst":false,"text":"(UTC+09:00) Seoul","utc":["Asia/Pyongyang","Asia/Seoul"]},{"name":"Cen. Australia Standard Time","abbr":"CAST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Adelaide","utc":["Australia/Adelaide","Australia/Broken_Hill"]},{"name":"AUS Central Standard Time","abbr":"ACST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Darwin","utc":["Australia/Darwin"]},{"name":"E. Australia Standard Time","abbr":"EAST","offset":10,"isdst":false,"text":"(UTC+10:00) Brisbane","utc":["Australia/Brisbane","Australia/Lindeman"]},{"name":"AUS Eastern Standard Time","abbr":"AEST","offset":10,"isdst":false,"text":"(UTC+10:00) Canberra, Melbourne, Sydney","utc":["Australia/Melbourne","Australia/Sydney"]},{"name":"West Pacific Standard Time","abbr":"WPST","offset":10,"isdst":false,"text":"(UTC+10:00) Guam, Port Moresby","utc":["Antarctica/DumontDUrville","Etc/GMT-10","Pacific/Guam","Pacific/Port_Moresby","Pacific/Saipan","Pacific/Truk"]},{"name":"Tasmania Standard Time","abbr":"TST","offset":10,"isdst":false,"text":"(UTC+10:00) Hobart","utc":["Australia/Currie","Australia/Hobart"]},{"name":"Yakutsk Standard Time","abbr":"YST","offset":10,"isdst":false,"text":"(UTC+10:00) Yakutsk","utc":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"]},{"name":"Central Pacific Standard Time","abbr":"CPST","offset":11,"isdst":false,"text":"(UTC+11:00) Solomon Is., New Caledonia","utc":["Antarctica/Macquarie","Etc/GMT-11","Pacific/Efate","Pacific/Guadalcanal","Pacific/Kosrae","Pacific/Noumea","Pacific/Ponape"]},{"name":"Vladivostok Standard Time","abbr":"VST","offset":11,"isdst":false,"text":"(UTC+11:00) Vladivostok","utc":["Asia/Sakhalin","Asia/Ust-Nera","Asia/Vladivostok"]},{"name":"New Zealand Standard Time","abbr":"NZST","offset":12,"isdst":false,"text":"(UTC+12:00) Auckland, Wellington","utc":["Antarctica/McMurdo","Pacific/Auckland"]},{"name":"UTC+12","abbr":"U","offset":12,"isdst":false,"text":"(UTC+12:00) Coordinated Universal Time+12","utc":["Etc/GMT-12","Pacific/Funafuti","Pacific/Kwajalein","Pacific/Majuro","Pacific/Nauru","Pacific/Tarawa","Pacific/Wake","Pacific/Wallis"]},{"name":"Fiji Standard Time","abbr":"FST","offset":12,"isdst":false,"text":"(UTC+12:00) Fiji","utc":["Pacific/Fiji"]},{"name":"Magadan Standard Time","abbr":"MST","offset":12,"isdst":false,"text":"(UTC+12:00) Magadan","utc":["Asia/Anadyr","Asia/Kamchatka","Asia/Magadan","Asia/Srednekolymsk"]},{"name":"Kamchatka Standard Time","abbr":"KDT","offset":13,"isdst":true,"text":"(UTC+12:00) Petropavlovsk-Kamchatsky - Old"},{"name":"Tonga Standard Time","abbr":"TST","offset":13,"isdst":false,"text":"(UTC+13:00) Nuku'alofa","utc":["Etc/GMT-13","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Tongatapu"]},{"name":"Samoa Standard Time","abbr":"SST","offset":13,"isdst":false,"text":"(UTC+13:00) Samoa","utc":["Pacific/Apia"]}]};var o_hasOwnProperty=Object.prototype.hasOwnProperty;var o_keys=_Object$keys||function(obj){var result=[];for(var key in obj){if(o_hasOwnProperty.call(obj,key)){result.push(key);}}return result;};function _copyObject(source,target){var keys=o_keys(source);var key;for(var i=0,l=keys.length;i<l;i++){key=keys[i];target[key]=source[key]||target[key];}}function _copyArray(source,target){for(var i=0,l=source.length;i<l;i++){target[i]=source[i];}}function copyObject(source,_target){var isArray=Array.isArray(source);var target=_target||(isArray?new Array(source.length):{});if(isArray){_copyArray(source,target);}else{_copyObject(source,target);}return target;}/** Get the data based on key**/Chance.prototype.get=function(name){return copyObject(data[name]);};// Mac Address
Chance.prototype.mac_address=function(options){// typically mac addresses are separated by ":"
// however they can also be separated by "-"
// the network variant uses a dot every fourth byte
options=initOptions(options);if(!options.separator){options.separator=options.networkVersion?".":":";}var mac_pool="ABCDEF1234567890",mac="";if(!options.networkVersion){mac=this.n(this.string,6,{pool:mac_pool,length:2}).join(options.separator);}else{mac=this.n(this.string,3,{pool:mac_pool,length:4}).join(options.separator);}return mac;};Chance.prototype.normal=function(options){options=initOptions(options,{mean:0,dev:1,pool:[]});testRange(options.pool.constructor!==Array,"Chance: The pool option must be a valid array.");// If a pool has been passed, then we are returning an item from that pool,
// using the normal distribution settings that were passed in
if(options.pool.length>0){return this.normal_pool(options);}// The Marsaglia Polar method
var s,u,v,norm,mean=options.mean,dev=options.dev;do{// U and V are from the uniform distribution on (-1, 1)
u=this.random()*2-1;v=this.random()*2-1;s=u*u+v*v;}while(s>=1);// Compute the standard normal variate
norm=u*Math.sqrt(-2*Math.log(s)/s);// Shape and scale
return dev*norm+mean;};Chance.prototype.normal_pool=function(options){var performanceCounter=0;do{var idx=Math.round(this.normal({mean:options.mean,dev:options.dev}));if(idx<options.pool.length&&idx>=0){return options.pool[idx];}else{performanceCounter++;}}while(performanceCounter<100);throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");};Chance.prototype.radio=function(options){// Initial Letter (Typically Designated by Side of Mississippi River)
options=initOptions(options,{side:"?"});var fl="";switch(options.side.toLowerCase()){case"east":case"e":fl="W";break;case"west":case"w":fl="K";break;default:fl=this.character({pool:"KW"});break;}return fl+this.character({alpha:true,casing:"upper"})+this.character({alpha:true,casing:"upper"})+this.character({alpha:true,casing:"upper"});};// Set the data as key and data or the data map
Chance.prototype.set=function(name,values){if(typeof name==="string"){data[name]=values;}else{data=copyObject(name,data);}};Chance.prototype.tv=function(options){return this.radio(options);};// ID number for Brazil companies
Chance.prototype.cnpj=function(){var n=this.n(this.natural,8,{max:9});var d1=2+n[7]*6+n[6]*7+n[5]*8+n[4]*9+n[3]*2+n[2]*3+n[1]*4+n[0]*5;d1=11-d1%11;if(d1>=10){d1=0;}var d2=d1*2+3+n[7]*7+n[6]*8+n[5]*9+n[4]*2+n[3]*3+n[2]*4+n[1]*5+n[0]*6;d2=11-d2%11;if(d2>=10){d2=0;}return''+n[0]+n[1]+'.'+n[2]+n[3]+n[4]+'.'+n[5]+n[6]+n[7]+'/0001-'+d1+d2;};// -- End Miscellaneous --
Chance.prototype.mersenne_twister=function(seed){return new MersenneTwister(seed);};Chance.prototype.blueimp_md5=function(){return new BlueImpMD5();};// Mersenne Twister from https://gist.github.com/banksean/300494
var MersenneTwister=function MersenneTwister(seed){if(seed===undefined){// kept random number same size as time used previously to ensure no unexpected results downstream
seed=Math.floor(Math.random()*Math.pow(10,13));}/* Period parameters */this.N=624;this.M=397;this.MATRIX_A=0x9908b0df;/* constant vector a */this.UPPER_MASK=0x80000000;/* most significant w-r bits */this.LOWER_MASK=0x7fffffff;/* least significant r bits */this.mt=new Array(this.N);/* the array for the state vector */this.mti=this.N+1;/* mti==N + 1 means mt[N] is not initialized */this.init_genrand(seed);};/* initializes mt[N] with a seed */MersenneTwister.prototype.init_genrand=function(s){this.mt[0]=s>>>0;for(this.mti=1;this.mti<this.N;this.mti++){s=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((s&0xffff0000)>>>16)*1812433253<<16)+(s&0x0000ffff)*1812433253+this.mti;/* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. *//* In the previous versions, MSBs of the seed affect   *//* only MSBs of the array mt[].                        *//* 2002/01/09 modified by Makoto Matsumoto             */this.mt[this.mti]>>>=0;/* for >32 bit machines */}};/* initialize by an array with array-length *//* init_key is the array for initializing keys *//* key_length is its length *//* slight change for C++, 2004/2/26 */MersenneTwister.prototype.init_by_array=function(init_key,key_length){var i=1,j=0,k,s;this.init_genrand(19650218);k=this.N>key_length?this.N:key_length;for(;k;k--){s=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(((s&0xffff0000)>>>16)*1664525<<16)+(s&0x0000ffff)*1664525)+init_key[j]+j;/* non linear */this.mt[i]>>>=0;/* for WORDSIZE > 32 machines */i++;j++;if(i>=this.N){this.mt[0]=this.mt[this.N-1];i=1;}if(j>=key_length){j=0;}}for(k=this.N-1;k;k--){s=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(((s&0xffff0000)>>>16)*1566083941<<16)+(s&0x0000ffff)*1566083941)-i;/* non linear */this.mt[i]>>>=0;/* for WORDSIZE > 32 machines */i++;if(i>=this.N){this.mt[0]=this.mt[this.N-1];i=1;}}this.mt[0]=0x80000000;/* MSB is 1; assuring non-zero initial array */};/* generates a random number on [0,0xffffffff]-interval */MersenneTwister.prototype.genrand_int32=function(){var y;var mag01=new Array(0x0,this.MATRIX_A);/* mag01[x] = x * MATRIX_A  for x=0,1 */if(this.mti>=this.N){/* generate N words at one time */var kk;if(this.mti===this.N+1){/* if init_genrand() has not been called, */this.init_genrand(5489);/* a default initial seed is used */}for(kk=0;kk<this.N-this.M;kk++){y=this.mt[kk]&this.UPPER_MASK|this.mt[kk+1]&this.LOWER_MASK;this.mt[kk]=this.mt[kk+this.M]^y>>>1^mag01[y&0x1];}for(;kk<this.N-1;kk++){y=this.mt[kk]&this.UPPER_MASK|this.mt[kk+1]&this.LOWER_MASK;this.mt[kk]=this.mt[kk+(this.M-this.N)]^y>>>1^mag01[y&0x1];}y=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK;this.mt[this.N-1]=this.mt[this.M-1]^y>>>1^mag01[y&0x1];this.mti=0;}y=this.mt[this.mti++];/* Tempering */y^=y>>>11;y^=y<<7&0x9d2c5680;y^=y<<15&0xefc60000;y^=y>>>18;return y>>>0;};/* generates a random number on [0,0x7fffffff]-interval */MersenneTwister.prototype.genrand_int31=function(){return this.genrand_int32()>>>1;};/* generates a random number on [0,1]-real-interval */MersenneTwister.prototype.genrand_real1=function(){return this.genrand_int32()*(1.0/4294967295.0);/* divided by 2^32-1 */};/* generates a random number on [0,1)-real-interval */MersenneTwister.prototype.random=function(){return this.genrand_int32()*(1.0/4294967296.0);/* divided by 2^32 */};/* generates a random number on (0,1)-real-interval */MersenneTwister.prototype.genrand_real3=function(){return(this.genrand_int32()+0.5)*(1.0/4294967296.0);/* divided by 2^32 */};/* generates a random number on [0,1) with 53-bit resolution*/MersenneTwister.prototype.genrand_res53=function(){var a=this.genrand_int32()>>>5,b=this.genrand_int32()>>>6;return(a*67108864.0+b)*(1.0/9007199254740992.0);};// BlueImp MD5 hashing algorithm from https://github.com/blueimp/JavaScript-MD5
var BlueImpMD5=function BlueImpMD5(){};BlueImpMD5.prototype.VERSION='1.0.1';/*
	    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	    * to work around bugs in some JS interpreters.
	    */BlueImpMD5.prototype.safe_add=function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;};/*
	    * Bitwise rotate a 32-bit number to the left.
	    */BlueImpMD5.prototype.bit_roll=function(num,cnt){return num<<cnt|num>>>32-cnt;};/*
	    * These functions implement the five basic operations the algorithm uses.
	    */BlueImpMD5.prototype.md5_cmn=function(q,a,b,x,s,t){return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(a,q),this.safe_add(x,t)),s),b);};BlueImpMD5.prototype.md5_ff=function(a,b,c,d,x,s,t){return this.md5_cmn(b&c|~b&d,a,b,x,s,t);};BlueImpMD5.prototype.md5_gg=function(a,b,c,d,x,s,t){return this.md5_cmn(b&d|c&~d,a,b,x,s,t);};BlueImpMD5.prototype.md5_hh=function(a,b,c,d,x,s,t){return this.md5_cmn(b^c^d,a,b,x,s,t);};BlueImpMD5.prototype.md5_ii=function(a,b,c,d,x,s,t){return this.md5_cmn(c^(b|~d),a,b,x,s,t);};/*
	    * Calculate the MD5 of an array of little-endian words, and a bit length.
	    */BlueImpMD5.prototype.binl_md5=function(x,len){/* append padding */x[len>>5]|=0x80<<len%32;x[(len+64>>>9<<4)+14]=len;var i,olda,oldb,oldc,oldd,a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=this.md5_ff(a,b,c,d,x[i],7,-680876936);d=this.md5_ff(d,a,b,c,x[i+1],12,-389564586);c=this.md5_ff(c,d,a,b,x[i+2],17,606105819);b=this.md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=this.md5_ff(a,b,c,d,x[i+4],7,-176418897);d=this.md5_ff(d,a,b,c,x[i+5],12,1200080426);c=this.md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=this.md5_ff(b,c,d,a,x[i+7],22,-45705983);a=this.md5_ff(a,b,c,d,x[i+8],7,1770035416);d=this.md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=this.md5_ff(c,d,a,b,x[i+10],17,-42063);b=this.md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=this.md5_ff(a,b,c,d,x[i+12],7,1804603682);d=this.md5_ff(d,a,b,c,x[i+13],12,-40341101);c=this.md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=this.md5_ff(b,c,d,a,x[i+15],22,1236535329);a=this.md5_gg(a,b,c,d,x[i+1],5,-165796510);d=this.md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=this.md5_gg(c,d,a,b,x[i+11],14,643717713);b=this.md5_gg(b,c,d,a,x[i],20,-373897302);a=this.md5_gg(a,b,c,d,x[i+5],5,-701558691);d=this.md5_gg(d,a,b,c,x[i+10],9,38016083);c=this.md5_gg(c,d,a,b,x[i+15],14,-660478335);b=this.md5_gg(b,c,d,a,x[i+4],20,-405537848);a=this.md5_gg(a,b,c,d,x[i+9],5,568446438);d=this.md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=this.md5_gg(c,d,a,b,x[i+3],14,-187363961);b=this.md5_gg(b,c,d,a,x[i+8],20,1163531501);a=this.md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=this.md5_gg(d,a,b,c,x[i+2],9,-51403784);c=this.md5_gg(c,d,a,b,x[i+7],14,1735328473);b=this.md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=this.md5_hh(a,b,c,d,x[i+5],4,-378558);d=this.md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=this.md5_hh(c,d,a,b,x[i+11],16,1839030562);b=this.md5_hh(b,c,d,a,x[i+14],23,-35309556);a=this.md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=this.md5_hh(d,a,b,c,x[i+4],11,1272893353);c=this.md5_hh(c,d,a,b,x[i+7],16,-155497632);b=this.md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=this.md5_hh(a,b,c,d,x[i+13],4,681279174);d=this.md5_hh(d,a,b,c,x[i],11,-358537222);c=this.md5_hh(c,d,a,b,x[i+3],16,-722521979);b=this.md5_hh(b,c,d,a,x[i+6],23,76029189);a=this.md5_hh(a,b,c,d,x[i+9],4,-640364487);d=this.md5_hh(d,a,b,c,x[i+12],11,-421815835);c=this.md5_hh(c,d,a,b,x[i+15],16,530742520);b=this.md5_hh(b,c,d,a,x[i+2],23,-995338651);a=this.md5_ii(a,b,c,d,x[i],6,-198630844);d=this.md5_ii(d,a,b,c,x[i+7],10,1126891415);c=this.md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=this.md5_ii(b,c,d,a,x[i+5],21,-57434055);a=this.md5_ii(a,b,c,d,x[i+12],6,1700485571);d=this.md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=this.md5_ii(c,d,a,b,x[i+10],15,-1051523);b=this.md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=this.md5_ii(a,b,c,d,x[i+8],6,1873313359);d=this.md5_ii(d,a,b,c,x[i+15],10,-30611744);c=this.md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=this.md5_ii(b,c,d,a,x[i+13],21,1309151649);a=this.md5_ii(a,b,c,d,x[i+4],6,-145523070);d=this.md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=this.md5_ii(c,d,a,b,x[i+2],15,718787259);b=this.md5_ii(b,c,d,a,x[i+9],21,-343485551);a=this.safe_add(a,olda);b=this.safe_add(b,oldb);c=this.safe_add(c,oldc);d=this.safe_add(d,oldd);}return[a,b,c,d];};/*
	    * Convert an array of little-endian words to a string
	    */BlueImpMD5.prototype.binl2rstr=function(input){var i,output='';for(i=0;i<input.length*32;i+=8){output+=String.fromCharCode(input[i>>5]>>>i%32&0xFF);}return output;};/*
	    * Convert a raw string to an array of little-endian words
	    * Characters >255 have their high-byte silently ignored.
	    */BlueImpMD5.prototype.rstr2binl=function(input){var i,output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1){output[i]=0;}for(i=0;i<input.length*8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<i%32;}return output;};/*
	    * Calculate the MD5 of a raw string
	    */BlueImpMD5.prototype.rstr_md5=function(s){return this.binl2rstr(this.binl_md5(this.rstr2binl(s),s.length*8));};/*
	    * Calculate the HMAC-MD5, of a key and some data (raw strings)
	    */BlueImpMD5.prototype.rstr_hmac_md5=function(key,data){var i,bkey=this.rstr2binl(key),ipad=[],opad=[],hash;ipad[15]=opad[15]=undefined;if(bkey.length>16){bkey=this.binl_md5(bkey,key.length*8);}for(i=0;i<16;i+=1){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}hash=this.binl_md5(ipad.concat(this.rstr2binl(data)),512+data.length*8);return this.binl2rstr(this.binl_md5(opad.concat(hash),512+128));};/*
	    * Convert a raw string to a hex string
	    */BlueImpMD5.prototype.rstr2hex=function(input){var hex_tab='0123456789abcdef',output='',x,i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hex_tab.charAt(x>>>4&0x0F)+hex_tab.charAt(x&0x0F);}return output;};/*
	    * Encode a string as utf-8
	    */BlueImpMD5.prototype.str2rstr_utf8=function(input){return unescape(encodeURIComponent(input));};/*
	    * Take string arguments and return either raw or hex encoded strings
	    */BlueImpMD5.prototype.raw_md5=function(s){return this.rstr_md5(this.str2rstr_utf8(s));};BlueImpMD5.prototype.hex_md5=function(s){return this.rstr2hex(this.raw_md5(s));};BlueImpMD5.prototype.raw_hmac_md5=function(k,d){return this.rstr_hmac_md5(this.str2rstr_utf8(k),this.str2rstr_utf8(d));};BlueImpMD5.prototype.hex_hmac_md5=function(k,d){return this.rstr2hex(this.raw_hmac_md5(k,d));};BlueImpMD5.prototype.md5=function(string,key,raw){if(!key){if(!raw){return this.hex_md5(string);}return this.raw_md5(string);}if(!raw){return this.hex_hmac_md5(key,string);}return this.raw_hmac_md5(key,string);};// CommonJS module
if(true){if(typeof module!=='undefined'&&module.exports){exports=module.exports=Chance;}exports.Chance=Chance;}// Register as an anonymous AMD module
if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return Chance;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}// if there is a importsScrips object define chance for worker
if(typeof importScripts!=='undefined'){chance=new Chance();}// If there is a window object, that at least has a document property,
// instantiate and define chance on the window
if((typeof window==='undefined'?'undefined':_typeof2(window))==="object"&&_typeof2(window.document)==="object"){window.Chance=Chance;window.chance=new Chance();}})();/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(28).Buffer);/***/},/* 60 *//***/function(module,exports){'use strict';exports.__esModule=true;exports.default=['accordion','acoustic_bass','acoustic_grand_piano','acoustic_guitar_nylon','acoustic_guitar_steel','agogo','alto_sax','applause','bagpipe','banjo','baritone_sax','bassoon','bird_tweet','blown_bottle','brass_section','breath_noise','bright_acoustic_piano','celesta','cello','choir_aahs','church_organ','clarinet','clavinet','contrabass','distortion_guitar','drawbar_organ','dulcimer','electric_bass_finger','electric_bass_pick','electric_grand_piano','electric_guitar_clean','electric_guitar_jazz','electric_guitar_muted','electric_piano_1','electric_piano_2','english_horn','fiddle','flute','french_horn','fretless_bass','fx_1_rain','fx_2_soundtrack','fx_3_crystal','fx_4_atmosphere','fx_5_brightness','fx_6_goblins','fx_7_echoes','fx_8_scifi','glockenspiel','guitar_fret_noise','guitar_harmonics','gunshot','harmonica','harpsichord','helicopter','honkytonk_piano','kalimba','koto','lead_1_square','lead_2_sawtooth','lead_3_calliope','lead_4_chiff','lead_5_charang','lead_6_voice','lead_7_fifths','lead_8_bass__lead','marimba','melodic_tom','music_box','muted_trumpet','oboe','ocarina','orchestra_hit','orchestral_harp','overdriven_guitar','pad_1_new_age','pad_2_warm','pad_3_polysynth','pad_4_choir','pad_5_bowed','pad_6_metallic','pad_7_halo','pad_8_sweep','pan_flute','percussive_organ','piccolo','pizzicato_strings','recorder','reed_organ','reverse_cymbal','rock_organ','seashore','shakuhachi','shamisen','shanai','sitar','slap_bass_1','slap_bass_2','soprano_sax','steel_drums','string_ensemble_1','string_ensemble_2','synth_bass_1','synth_bass_2','synth_brass_1','synth_brass_2','synth_choir','synth_drum','synth_strings_1','synth_strings_2','taiko_drum','tango_accordion','telephone_ring','tenor_sax','timpani','tinkle_bell','tremolo_strings','trombone','trumpet','tuba','tubular_bells','vibraphone','viola','violin','voice_oohs','whistle','woodblock','xylophone'];/***/}/******/]));});;