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
  currentX += (targetX - currentX) * 0.2;
  currentY += (targetY - currentY) * 0.2;

  document.body.style.background = `
    radial-gradient(circle at ${currentX}px ${currentY}px, rgba(0, 213, 255, 0.3), transparent 100%),
    #000956
  `;

  requestAnimationFrame(animateGlow);
}
animateGlow();

// ✨ Crear destellos al cargar (como antes), con animación más suave
const sparkleCount = 200;

for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.top = `${Math.random() * 199}vh`;
  sparkle.style.left = `${Math.random() * 99}vw`;

  // Duración más larga para que destelle muy suave
  sparkle.style.animationDuration = `${5 + Math.random() * 3}s`; // entre 5 y 10 segundos
  document.body.appendChild(sparkle);
}
