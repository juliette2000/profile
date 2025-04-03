
function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    // const playKey= document.getElementById(`"${e.keyCode}"`);
    // console.log(playKey);
    playKey.style.backgroundColor="green";
  }
  window.addEventListener("keydown", playNote);
