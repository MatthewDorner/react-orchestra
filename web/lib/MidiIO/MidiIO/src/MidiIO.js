'use strict';

exports.__esModule = true;
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _midiFileParser = require('midi-file-parser');

var _midiFileParser2 = _interopRequireDefault(_midiFileParser);

var _midiWriterJs = require('midi-writer-js');

var _midiWriterJs2 = _interopRequireDefault(_midiWriterJs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _INSTRUMENT_MIDI_MAPPING = require('./constants/INSTRUMENT_MIDI_MAPPING');

var _INSTRUMENT_MIDI_MAPPING2 = _interopRequireDefault(_INSTRUMENT_MIDI_MAPPING);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minutesInMS = 60000000;

var MidiIO = function () {
  MidiIO.getWriter = function getWriter() {
    return _midiWriterJs2.default;
  };

  MidiIO.getUniqueFromMidiNotes = function getUniqueFromMidiNotes(notes) {
    var set = new _set2.default();
    notes.forEach(function (note) {
      set.add(note.payload.noteName);
    });
    return (0, _from2.default)(set);
  };

  MidiIO.midiNoteNumberToName = function midiNoteNumberToName(midi) {
    var scaleIndexToNote = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    var octave = Math.floor(midi / 12) - 1;
    var note = midi % 12;
    return scaleIndexToNote[note] + octave;
  };

  MidiIO.urlToJSON = function urlToJSON(midiURL) {
    return MidiIO.urlToBinaryString(midiURL).then(function (binaryStringMidi) {
      return MidiIO.binaryStringToJSON(binaryStringMidi);
    });
  };

  MidiIO.getAllMetadata = function getAllMetadata(parsedMidi, tracks) {
    var metaTrack = parsedMidi.tracks[0];
    var indexedMeta = metaTrack.reduce(function (prev, current, i) {
      var _Object$assign2;

      var updated = (0, _assign2.default)({}, prev, (_Object$assign2 = {}, _Object$assign2[current.type + '_' + current.subtype] = current, _Object$assign2));
      return updated;
    }, {});

    var meta_setTempo = indexedMeta.meta_setTempo,
        meta_keySignature = indexedMeta.meta_keySignature,
        meta_timeSignature = indexedMeta.meta_timeSignature,
        meta_endOfTrack = indexedMeta.meta_endOfTrack;

    var ticksPerBeat = parsedMidi.header.ticksPerBeat;
    var microsecondsPerBeat = meta_setTempo.microsecondsPerBeat;

    var millisecondsPerTick = MidiIO.getMillisecondsPerTick(microsecondsPerBeat, ticksPerBeat);
    var tempo = meta_setTempo;
    var timeSignature = meta_timeSignature;
    var keySignature = meta_keySignature;
    var endOfTrack = meta_endOfTrack;
    var timeSignatureNumerator = timeSignature.numerator;
    var timeSignatureDenominator = timeSignature.denominator;
    var timeSignatureMetronome = timeSignature.metronome;
    var timeSignatureThirtyseconds = timeSignature.thirtyseconds;
    var instrumentNumbers = tracks.map(function (track) {
      return track.programChange[0].programNumber;
    }); // [0].programNumber
    var instrumentNames = instrumentNumbers.map(function (instrumentNumber) {
      return (0, _keys2.default)(_INSTRUMENT_MIDI_MAPPING2.default).find(function (instrumentKey) {
        return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey] === instrumentNumber;
      });
    });

    var _MidiIO$getBPMData = MidiIO.getBPMData(microsecondsPerBeat, ticksPerBeat, timeSignature),
        BPM = _MidiIO$getBPMData.BPM;

    var metaObject = {
      tempo: tempo,
      keySignature: keySignature,
      timeSignature: timeSignature,
      timeSignatureNumerator: timeSignatureNumerator,
      timeSignatureDenominator: timeSignatureDenominator,
      timeSignatureMetronome: timeSignatureMetronome,
      timeSignatureThirtyseconds: timeSignatureThirtyseconds,
      endOfTrack: endOfTrack,
      trackCount: tracks.length,
      microsecondsPerBeat: microsecondsPerBeat,
      instrumentNumbers: instrumentNumbers,
      instrumentNames: instrumentNames,
      millisecondsPerTick: millisecondsPerTick,
      ticksPerBeat: ticksPerBeat,
      BPM: BPM
    };
    return metaObject;
  };

  MidiIO.getAllTracks = function getAllTracks(parsedMidi) {
    var tracks = parsedMidi.tracks.filter(function (track, i) {
      return i >= 1;
    });

    var indexedTracks = tracks.map(function (track, i) {
      var indexedTrack = track.reduce(function (prev, current) {
        var currentIndex = current.type + '_' + current.subtype;
        var updated = (0, _assign2.default)({}, prev);
        if (!updated[currentIndex]) {
          updated[currentIndex] = [];
        }
        updated[currentIndex].push(current);
        return updated;
      }, {});
      var instrumentNumber = indexedTrack.channel_programChange[0].programNumber;
      var instrumentName = (0, _keys2.default)(_INSTRUMENT_MIDI_MAPPING2.default).find(function (instrumentKey) {
        return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey] === instrumentNumber;
      });
      return {
        controller: indexedTrack.channel_controller,
        programChange: indexedTrack.channel_programChange,
        trackname: indexedTrack.meta_trackName,
        noteOn: indexedTrack.channel_noteOn,
        noteOnValid: indexedTrack.channel_noteOn.filter(function (event) {
          return event.deltaTime > 0;
        }),
        noteOnInvalid: indexedTrack.channel_noteOn.filter(function (event) {
          return event.deltaTime === 0;
        }),
        noteOff: indexedTrack.channel_noteOff,
        endOfTrack: indexedTrack.meta_endOfTrack,
        noteCount: indexedTrack.channel_noteOn.filter(function (event) {
          return event.deltaTime > 0;
        }).length,
        instrumentNumber: instrumentNumber,
        instrumentName: instrumentName
      };
    });
    var meta = MidiIO.getAllMetadata(parsedMidi, indexedTracks);
    return {
      meta: meta,
      musicTracks: indexedTracks
    };
  };

  MidiIO.getInstrumentNameFromMidiTrack = function getInstrumentNameFromMidiTrack(track) {
    var instrument = track.find(function (event) {
      return event.type === 'channel' && event.subtype === 'programChange';
    });
    // alert(`instrumentNumber ${instrument}`);
    var instrumentNumber = instrument.programNumber;
    // alert(`instrumentNumber ${instrumentNumber}`);
    var instrumentName = (0, _keys2.default)(_INSTRUMENT_MIDI_MAPPING2.default).find(function (instrumentKey) {
      return _INSTRUMENT_MIDI_MAPPING2.default[instrumentKey] === instrumentNumber;
    });
    return instrumentName;
  };

  MidiIO.getInstrumentNumberFromMidiTrack = function getInstrumentNumberFromMidiTrack(track) {
    var instrument = track.find(function (event) {
      return event.type === 'channel' && event.subtype === 'programChange';
    });
    var instrumentNumber = void 0;
    try {
      instrumentNumber = instrument.programNumber;
    } catch (err) {
      instrumentNumber = 0;
      console.warn('COULDN\'T FIND INSTRUMENT NUMBER ' + instrumentNumber + ' defaulting to ' + instrumentNumber);
    }
    return instrumentNumber;
  };

  MidiIO.binaryStringToJSON = function binaryStringToJSON(binaryStringMidi) {
    var parsedMidi = (0, _midiFileParser2.default)(binaryStringMidi);
    return parsedMidi;
  };

  MidiIO.getNoteOnEvents = function getNoteOnEvents(track) {
    var noteOnEvents = track.filter(function (event) {
      return event.type === 'channel' && event.subtype === 'noteOn';
    });
    var invalidNoteOnEvents = noteOnEvents.filter(function (event) {
      return event.deltaTime === 0;
    });
    var validNoteOnEvents = noteOnEvents.filter(function (event) {
      return event.deltaTime > 0;
    });
    return { noteOnEvents: noteOnEvents, validNoteOnEvents: validNoteOnEvents, invalidNoteOnEvents: invalidNoteOnEvents };
  };

  MidiIO.getNoteOffEvents = function getNoteOffEvents(track) {
    var noteOffEvents = track.filter(function (event) {
      return event.type === 'channel' && event.subtype === 'noteOff';
    });
    var invalidNoteOffEvents = noteOffEvents.filter(function (event) {
      return event.deltaTime === 0;
    });
    var validNoteOffEvents = noteOffEvents.filter(function (event) {
      return event.deltaTime > 0;
    });
    return { noteOffEvents: noteOffEvents, validNoteOffEvents: validNoteOffEvents, invalidNoteOffEvents: invalidNoteOffEvents };
  };

  MidiIO.getTempoFromTrack = function getTempoFromTrack(track) {
    var setTempoEvent = track.find(function (event) {
      return event.type === 'meta' && event.subtype === 'setTempo';
    });
    var deltaTime = setTempoEvent.deltaTime,
        microsecondsPerBeat = setTempoEvent.microsecondsPerBeat;

    return { deltaTime: deltaTime, microsecondsPerBeat: microsecondsPerBeat };
  };

  MidiIO.getMetadataFromTrack = function getMetadataFromTrack(track) {
    var _ref;

    var microsecondsPerBeat = void 0,
        keySignature = void 0,
        timeSignature = void 0,
        endOfTrack = void 0;
    track.filter(function (event) {
      return event.type === 'meta';
    }).forEach(function (event) {
      switch (event.subtype) {
        case 'setTempo':
          microsecondsPerBeat = event.microsecondsPerBeat;
          break;
        case 'keySignature':
          keySignature = {
            key: event.key,
            scale: event.scale
          };
          break;
        case 'timeSignature':
          timeSignature = {
            numerator: event.numerator,
            denominator: event.denominator,
            metronome: event.metronome,
            thirtyseconds: event.thirtyseconds
          };
          break;
        case 'endOfTrack':
          endOfTrack = {};
        default:
          return {
            name: event.subtype,
            payload: (0, _extends3.default)({}, event)
          };
      }
    });
    return _ref = {
      microsecondsPerBeat: microsecondsPerBeat,
      keySignature: keySignature,
      timeSignature: timeSignature,
      endOfTrack: endOfTrack
    }, _ref[event.subtype] = (0, _extends3.default)({}, event), _ref;
  };

  MidiIO.urlToBinaryString = function urlToBinaryString(midiURL) {
    return _promise2.default.resolve(true).then(function () {
      return fetch(midiURL, {
        method: 'GET',
        headers: {
          Accept: 'audio/mid'
        }
      });
    }).then(function (response) {
      return response.blob();
    }).then(function (response) {
      return new _promise2.default(function (resolve) {
        var reader = new FileReader();
        reader.onloadend = function () {
          var blob = reader.result;
          resolve(blob);
        };
        reader.readAsBinaryString(response);
      });
    }).catch(function (err) {
      console.warn('ERROR IN URLTOBINARYSTRING, ' + (0, _stringify2.default)(err));
    });
  };

  MidiIO.noteOffEventToNote = function noteOffEventToNote(noteOffEvent, noteInstrumentName, previousEndTime, msPerTick) {
    var noteNumber = noteOffEvent.noteNumber,
        deltaTime = noteOffEvent.deltaTime;

    var noteName = MidiIO.midiNoteNumberToName(noteNumber);
    var startTimeInMS = previousEndTime;
    var durationInMS = deltaTime * msPerTick;
    var endTimeInMS = startTimeInMS + durationInMS;
    return { noteNumber: noteNumber, noteName: noteName, startTimeInMS: startTimeInMS, durationInMS: durationInMS, endTimeInMS: endTimeInMS, noteInstrumentName: noteInstrumentName, deltaTime: deltaTime, msPerTick: msPerTick };
  };

  MidiIO.getMillisecondsPerTick = function getMillisecondsPerTick(microsecondsPerBeat, ticksPerBeat) {
    var secondsPerBeat = microsecondsPerBeat / 1000000;
    var secondsPerTick = secondsPerBeat / ticksPerBeat;
    var millisecondsPerTick = secondsPerTick * 1000;
    return millisecondsPerTick;
  };

  MidiIO.getBPMData = function getBPMData(microSecondsPerBeat, ticksPerBeat, timeSignature) {
    // const ticksPerBeat = parsedMidi.header.ticksPerBeat;
    var timeSignatureNumerator = timeSignature.numerator;
    var timeSignatureDenominator = timeSignature.denominator;
    var secondsPerBeat = microSecondsPerBeat / 1000000;
    var secondsPerTick = secondsPerBeat / ticksPerBeat;
    var BPM = minutesInMS / microSecondsPerBeat * (timeSignatureDenominator / timeSignatureNumerator);
    // const millisecondsPerTick = secondsPerTick * 1000;
    return { BPM: BPM };
  };

  MidiIO.bpmToMSPerBeat = function bpmToMSPerBeat(BPM) {
    var timeSignatureNumerator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var timeSignatureDenominator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

    return minutesInMS / BPM * (timeSignatureNumerator / timeSignatureDenominator);
  };

  MidiIO.prototype.setBPM = function setBPM() {
    var BPM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

    this.millisecondsPerTick = MidiIO.getMillisecondsPerTick(MidiIO.bpmToMSPerBeat(BPM, this.timeSignatureNumerator, this.timeSignatureDenominator), this.ticksPerBeat);
    this.BPM = BPM;
  };

  function MidiIO(userSettings) {
    (0, _classCallCheck3.default)(this, MidiIO);

    this.settings = _lodash2.default.defaultsDeep(userSettings, {
      midiURL: null,
      parsedMidi: null,
      BPM: -1
    });
    this.isInitialised = false;
  }

  MidiIO.prototype.parseMidiOld = function parseMidiOld(parsedMidi) {
    var bpm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    this.parsedMidi = parsedMidi;
    this.ticksPerBeat = parsedMidi.header.ticksPerBeat;
    var trackMetadata = MidiIO.getMetadataFromTrack(parsedMidi.tracks[0]);
    var microsecondsPerBeat = trackMetadata.microsecondsPerBeat,
        keySignature = trackMetadata.keySignature,
        timeSignature = trackMetadata.timeSignature,
        endOfTrack = trackMetadata.endOfTrack;

    this.noteOnEvents = MidiIO.getNoteOnEvents(parsedMidi.tracks[1]);
    this.noteOffEvents = MidiIO.getNoteOffEvents(parsedMidi.tracks[1]);
    this.millisecondsPerTick = MidiIO.getMillisecondsPerTick(microsecondsPerBeat, this.ticksPerBeat);
    // this.secondsPerTick = this.millisecondsPerTick * 10;
    try {
      this.mainInstrumentNumber = MidiIO.getInstrumentNumberFromMidiTrack(parsedMidi.tracks[1]);
    } catch (err) {}
    try {
      this.mainInstrumentName = MidiIO.getInstrumentNameFromMidiTrack(parsedMidi.tracks[1]);
    } catch (err) {
      this.mainInstrumentName = 'acoustic_grand_piano';
    }
    // this.mainInstrumentName = MidiIO.getInstrumentNameFromMidiTrack(parsedMidi.tracks[1]);
    this.isInitialised = true;
    this.timeSignature = timeSignature;
    this.timeSignatureNumerator = timeSignature.numerator;
    this.timeSignatureDenominator = timeSignature.denominator;

    var _MidiIO$getBPMData2 = MidiIO.getBPMData(microsecondsPerBeat, this.ticksPerBeat, timeSignature),
        BPM = _MidiIO$getBPMData2.BPM;

    this.BPM = BPM;

    if (bpm !== -1) {
      this.setBPM(bpm);
    }
    return this;
  };

  MidiIO.parseMidi = function parseMidi(url) {
    return MidiIO.urlToJSON(url).then(function (parsedMidi) {
      var _MidiIO$getAllTracks = MidiIO.getAllTracks(parsedMidi),
          meta = _MidiIO$getAllTracks.meta,
          musicTracks = _MidiIO$getAllTracks.musicTracks;

      return {
        meta: meta,
        musicTracks: musicTracks
      };
    });
  };

  MidiIO.prototype.init = function init() {
    var _this = this;

    if (this.settings.midiURL) {
      return MidiIO.urlToJSON(this.settings.midiURL).then(function (parsedMidi) {
        // return this.getAllTracks,
        return _this.parseMidi(parsedMidi, _this.settings.BPM);
      }).catch();
    }
    return _promise2.default.resolve(false);
  };

  return MidiIO;
}();

exports.default = MidiIO;
module.exports = exports['default'];