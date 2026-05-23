const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseText = document.getElementById("surpriseText");
const confettiBtn = document.getElementById("confettiBtn");

surpriseBtn.addEventListener("click", () => {
  surpriseText.classList.toggle("show");
});

confettiBtn.addEventListener("click", () => {
  for (let i = 0; i < 36; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-pop";
    heart.textContent = ["💗", "💕", "💖", "💘", "✨"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = 70 + Math.random() * 22 + "vh";
    heart.style.animationDelay = Math.random() * 0.35 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);
  }
});

const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
let hearts = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 8 + Math.random() * 16,
    speed: 0.35 + Math.random() * 0.8,
    drift: -0.35 + Math.random() * 0.7,
    alpha: 0.18 + Math.random() * 0.32
  });
}

function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.bezierCurveTo(-18, -8, -10, -24, 0, -12);
  ctx.bezierCurveTo(10, -24, 18, -8, 0, 6);
  ctx.fillStyle = `rgba(255, 111, 174, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.08) createHeart();

  hearts.forEach((heart) => {
    heart.y -= heart.speed;
    heart.x += heart.drift;
    drawHeart(heart.x, heart.y, heart.size, heart.alpha);
  });

  hearts = hearts.filter((heart) => heart.y > -40);
  requestAnimationFrame(animate);
}
animate();
