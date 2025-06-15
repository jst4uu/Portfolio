// 💡 Posición inicial (centro)
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

// 💫 Al mover el mouse, actualiza el objetivo
document.addEventListener("mousemove", (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
});

// 🎥 Animación suave de la luz siguiendo al cursor
function animateGlow() {
  // Interpolación suave (lerp)
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  document.body.style.background = `
    radial-gradient(circle at ${currentX}px ${currentY}px, rgba(0, 213, 255, 0.5), transparent 100%),
    #000956
  `;

  requestAnimationFrame(animateGlow);
}
animateGlow();

// ✨ Crear destellos al cargar (como antes)
const sparkleCount = 60;

for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.top = `${Math.random() * 100}vh`;
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.animationDuration = `${1 + Math.random() * 3}s`;
  document.body.appendChild(sparkle);
}
