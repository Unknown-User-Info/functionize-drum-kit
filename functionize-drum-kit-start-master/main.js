// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        playSounds("clap", "A");
        
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        playSounds("hihat", "S");

    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        playSounds("kick", "D");

    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        playSounds("openhat", "F");

    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        playSounds("boom", "G");

    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        playSounds("ride", "H");

    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        playSounds("snare", "J");

    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        playSounds("tom", "K");

    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        playSounds("tink", "L");

    }
}

// Add transition end listeners
transitions("A", "S", "D", "F", "G", "H", "J", "K", "L");

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

//Function Transition
function transitions(a, s, d, f, g, h, j, k, l) {
    document.getElementById(a).addEventListener('transitionend', removePlaying);
    document.getElementById(s).addEventListener('transitionend', removePlaying);
    document.getElementById(d).addEventListener('transitionend', removePlaying);
    document.getElementById(f).addEventListener('transitionend', removePlaying);
    document.getElementById(g).addEventListener('transitionend', removePlaying);
    document.getElementById(h).addEventListener('transitionend', removePlaying);
    document.getElementById(j).addEventListener('transitionend', removePlaying);
    document.getElementById(k).addEventListener('transitionend', removePlaying);
    document.getElementById(l).addEventListener('transitionend', removePlaying);
}

function playSounds(sound, letter) {
    let audio = document.getElementById(sound);
        audio.currentTime = 0;
        audio.play();
        document.getElementById(letter).classList.add("playing");
}

