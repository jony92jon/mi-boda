const playButton = document.getElementById("play");
const audio = new Audio("../audio/12. Bachata Rosa.mp3");

playButton.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});
