// Button click handler to play music and delay redirect
document.getElementById("enterLink").addEventListener("click", () => {
  const audio = document.getElementById("bgMusic");
  audio.play().catch(() => {
    console.log("Autoplay blocked by browser");
  });
  setTimeout(() => {
    window.location.href = "main.html";
  }, 2000); // Increased delay to ensure audio starts
});

// Unmute audio on page load
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  audio.muted = false;
});

// Countdown logic
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
updateCountdown(); // Initial call