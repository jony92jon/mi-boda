document.addEventListener("DOMContentLoaded", function () {
  const musicToggleBtn = document.getElementById("musicToggle");
  const audio = new Audio("../audio/12. Bachata Rosa.mp3");

  if (localStorage.getItem("playMusic") === "true") {
    audio.play();
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        localStorage.setItem("playMusic", "true");
      } else {
        audio.pause();
        localStorage.setItem("playMusic", "false");
      }
    });
  }
});
