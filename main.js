// Ensure audio is ready before attempting to play
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");

  // Check if audio element exists
  if (!audio) {
    console.error("Audio element not found in main.html");
    return;
  }

  // Try to unmute and play audio immediately after page load
  audio.muted = false;
  audio.play().catch((error) => {
    console.error("Autoplay blocked:", error);
    // If blocked, wait for user interaction (e.g., first click on the page)
    document.body.addEventListener("click", () => {
      audio.muted = false;
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }, { once: true }); // Only listen for the first click
  });

  // Log audio status for debugging
  console.log("Audio element:", audio);
  console.log("Audio src:", audio.src);
  console.log("Audio muted:", audio.muted);
  console.log("Audio paused:", audio.paused);
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
