document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const shouldPlay = urlParams.get("playMusic") === "true";

    const music = document.getElementById("bgMusic");

    if (!music) {
      console.error("Audio element not found!");
      return;
    }

    if (shouldPlay) {
      // Allow sound
      music.muted = false;

      // Try to play the music
      music.play().then(() => {
        console.log("Music started with sound!");
      }).catch((err) => {
        console.warn("Music blocked, waiting for extra interaction:", err);
      });
    }
  });

  function updateCountdown() {
  const weddingDate = new Date("2025-10-05T00:00:00");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<p>It's our wedding day! 💍</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // initial call

