document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.getElementById("backgroundMusic");
  const withMusicBtn = document.getElementById("withMusic");
  const withoutMusicBtn = document.getElementById("withoutMusic");

  withMusicBtn.addEventListener("click", () => {
    audioElement.play();
    // Store music preference in localStorage
    localStorage.setItem("playMusic", "true");
    window.location.href = "/invitation.html";
  });

  withoutMusicBtn.addEventListener("click", () => {
    localStorage.setItem("playMusic", "false");
    window.location.href = "/invitation.html";
  });
});
