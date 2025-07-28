document.addEventListener("DOMContentLoaded", function () {
  const enterLink = document.getElementById('enterLink');
  
  if (!enterLink) {
    console.warn("⚠️ Could not find enterLink!");
    return;
  }

  enterLink.addEventListener('click', function (e) {
    e.preventDefault();

    // Create a hidden audio element on the fly
    const audio = new Audio('./Music/Lil Wayne feat. Bruno Mars - Mirror (Original Instrumental).mp3');
    audio.loop = true;
    audio.muted = false;

    audio.play().then(() => {
      console.log("✅ Music started with sound");
      window.location.href = './main.html';
    }).catch(err => {
      console.error("❌ Failed to play music:", err);
      window.location.href = './main.html'; // still go anyway
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

