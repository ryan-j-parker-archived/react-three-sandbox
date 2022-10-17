import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

export function playC4() {
  synth.triggerAttackRelease('C4', '8n');
}

export function playDb4() {
  synth.triggerAttackRelease('Db4', '8n');
}

export function playD4() {
  synth.triggerAttackRelease('D4', '8n');
}

export function playEb4() {
  synth.triggerAttackRelease('Eb4', '8n');
}

export function playE4() {
  synth.triggerAttackRelease('E4', '8n');
}

export function playF4() {
  synth.triggerAttackRelease('F4', '8n');
}

export function playGb4() {
  synth.triggerAttackRelease('Gb4', '8n');
}

export function playG4() {
  synth.triggerAttackRelease('G4', '8n');
}

export function playAb4() {
  synth.triggerAttackRelease('Ab4', '8n');
}

export function playA4() {
  synth.triggerAttackRelease('A4', '8n');
}

export function playBb4() {
  synth.triggerAttackRelease('Bb4', '8n');
}

export function playB4() {
  synth.triggerAttackRelease('B4', '8n');
}

export function playC5() {
  synth.triggerAttackRelease('C5', '8n');
}

export function playNote(event) {
  if (event.keyCode === 65) {
    playC4();
  }
  if (event.keyCode === 87) {
    playDb4();
  }
  if (event.keyCode === 83) {
    playD4();
  }
  if (event.keyCode === 69) {
    playEb4();
  }
  if (event.keyCode === 68) {
    playE4();
  }
  if (event.keyCode === 70) {
    playF4();
  }
  if (event.keyCode === 84) {
    playGb4();
  }
  if (event.keyCode === 72) {
    playG4();
  }
  if (event.keyCode === 85) {
    playAb4();
  }
  if (event.keyCode === 74) {
    playA4();
  }
  if (event.keyCode === 73) {
    playBb4();
  }
  if (event.keyCode === 75) {
    playB4();
  }
  if (event.keyCode === 76) {
    playC5();
  }
}
