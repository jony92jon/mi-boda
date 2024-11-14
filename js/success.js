document.addEventListener("DOMContentLoaded", () => {
  let heartCount = 0;
  const heartButton = document.getElementById("heartButton");
  const heartCountElement = document.getElementById("heartCount");
  const successMessage = document.getElementById("successMessage");
  const floatingEmojis = document.getElementById("floatingEmojis");

  // Show initial message with delay
  setTimeout(() => {
    successMessage.classList.remove("hidden");
    successMessage.classList.add("visible");
  }, 1000);

  // Initial confetti burst
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Continuous confetti
  const intervalId = setInterval(() => {
    confetti({
      particleCount: 20,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 20,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }, 2000);

  // Heart button click handler
  heartButton.addEventListener("click", () => {
    heartCount++;
    heartCountElement.textContent = `${heartCount} clics de amor`;

    console.log("click", heartCount);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
    });
  });

  // Create floating emojis
  function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = Math.random() > 0.5 ? "🎉" : "💖";

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5000 + 5000;

    emoji.style.left = `${startX}px`;
    emoji.style.top = "-20px";

    floatingEmojis.appendChild(emoji);

    const animation = emoji.animate(
      [
        { transform: `translateY(-20px) rotate(0deg)` },
        {
          transform: `translateY(${window.innerHeight + 20}px) rotate(${
            Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1)
          }deg)`,
        },
      ],
      {
        duration: duration,
        easing: "linear",
      }
    );

    animation.onfinish = () => {
      emoji.remove();
    };
  }

  // Create initial set of emojis
  for (let i = 0; i < 20; i++) {
    createFloatingEmoji();
  }

  // Continuously create new emojis
  setInterval(createFloatingEmoji, 2000);
});
