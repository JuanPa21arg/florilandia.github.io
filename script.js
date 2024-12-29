// script.js

// Función para mostrar la cuenta regresiva
function updateCountdown() {
    const newYear = new Date("Jan 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 ¡Feliz Año Nuevo para todos! 🎉";
        document.getElementById("countdownText").innerHTML = "";
        playNewYearSound();
    }
}

// Función para mostrar el mensaje con el nombre del usuario
function submitName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        document.getElementById("newYearMessage").innerHTML = `Florilandia te desea un muy <span style="font-size: 2.5rem; color: #ff6f61;">Feliz Año Nuevo, ${name}!</span>`;
        document.getElementById("nameInput").value = "";  // Limpiar el campo de texto
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

// Sonido al llegar a Año Nuevo
function playNewYearSound() {
    const audio = new Audio('celebration.mp3');
    audio.play();
}

setInterval(updateCountdown, 1000);
