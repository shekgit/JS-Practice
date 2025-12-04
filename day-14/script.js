const pianoSounds = {
    // Natural notes (white keys)
    'C': '../sounds/piano-mp3_C4.mp3',
    'D': '../sounds/piano-mp3_D4.mp3',
    'E': '../sounds/piano-mp3_E4.mp3',
    'F': '../sounds/piano-mp3_F4.mp3',
    'G': '../sounds/piano-mp3_G4.mp3',
    'A': '../sounds/piano-mp3_A4.mp3',
    'B': '../sounds/piano-mp3_B4.mp3',

    // Sharp notes (black keys)
    'C#': '../sounds/piano-mp3_Db4.mp3',
    'D#': '../sounds/piano-mp3_Eb4.mp3',
    'F#': '../sounds/piano-mp3_Gb4.mp3',
    'G#': '../sounds/piano-mp3_Ab4.mp3',
    'A#': '../sounds/piano-mp3_Bb4.mp3'
};

document.addEventListener('DOMContentLoaded', function() {

    const audioCache = {};
    Object.keys(pianoSounds).forEach(note => {
        const audio = new Audio();
        audio.src = pianoSounds[note];
        audioCache[note] = audio;
    });

    function playNote(note) {
        if (audioCache[note]) {
            audioCache[note].pause();
            audioCache[note].currentTime = 0;

            audioCache[note].play().catch(e => {
                console.log("Audio play failed:", e);
            });

            const keyElement = document.querySelector(`[data-note="${note}"]`);
            if (keyElement) {
                keyElement.style.transform = 'scale(0.98)';
                keyElement.style.opacity = '0.9';

                setTimeout(() => {
                    keyElement.style.transform = '';
                    keyElement.style.opacity = '';
                }, 100);
            }
        }
    }

    document.querySelectorAll('.white-key').forEach(whiteKey => {
        whiteKey.addEventListener('click', function(e) {
            if (!e.target.classList.contains('black-key')) {
                const note = this.getAttribute('data-note');
                playNote(note);
            }
        });
    });

    document.querySelectorAll('.black-key').forEach(blackKey => {
        blackKey.addEventListener('click', function(e) {
            e.stopPropagation();
            const note = this.getAttribute('data-note');
            playNote(note);
        });
    });


    const keyMap = {
        'a': 'C',
        'w': 'C#',
        's': 'D',
        'e': 'D#',
        'd': 'E',
        'f': 'F',
        't': 'F#',
        'g': 'G',
        'y': 'G#',
        'h': 'A',
        'u': 'A#',
        'j': 'B'
    };

    document.addEventListener('keydown', function(e) {
        const key = e.key.toLowerCase();
        if (keyMap[key]) {
            playNote(keyMap[key]);
        }
    });

});