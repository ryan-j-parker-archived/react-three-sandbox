import React from 'react';
import './Keyboard.css';
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from './tone.jsx';

document.addEventListener('keydown', playNote);

function Keyboard() {
  return (
    <div id="keyboard" className="keyboard">
      <div id="C4" className="key" onClick={playC4}>
        C
      </div>
      <div className="key flat" onClick={playDb4}>
        Db
      </div>

      <div className="key" onClick={playD4}>
        D
      </div>
      <div className="key flat" onClick={playEb4}>
        Eb
      </div>

      <div className="key" onClick={playE4}>
        E
      </div>
      <div className="key" onClick={playF4}>
        F
      </div>
      <div className="key flat" onClick={playGb4}>
        Gb
      </div>

      <div className="key" onClick={playG4}>
        G
      </div>
      <div className="key flat" onClick={playAb4}>
        Ab
      </div>

      <div className="key" onClick={playA4}>
        A
      </div>
      <div className="key flat" onClick={playBb4}>
        Bb
      </div>

      <div className="key" onClick={playB4}>
        B
      </div>

      <div className="key" onClick={playC5}>
        C
      </div>
    </div>
  );
}

export default Keyboard;
