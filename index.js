document.addEventListener("DOMContentLoaded", function () {
  const enterLink = document.getElementById('enterLink');
  const audio = document.getElementById('bgMusic');

  if (!enterLink || !audio) {
    console.warn("⚠️ Missing audio or button");
    return;
  }

  enterLink.addEventListener('click', function () {
    audio.muted = false;
    audio.play().then(() => {
      console.log("✅ Music started with sound");
      setTimeout(() => {
        window.location.href = './main.html';
      }, 500);
    }).catch(err => {
      console.error("❌ Failed to play music:", err);
      window.location.href = './main.html';
    });
  });
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

