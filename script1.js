const images = document.querySelectorAll(".film img");

window.addEventListener("scroll", () => {
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        const center = window.innerHeight / 2;
        const distance = rect.top - center;

        img.style.transform = `
            translateY(${distance * 0.05}px)
        `;
    });
});

const confetti = document.getElementById("confetti");
const colors = ["#FFD700", "#FF69B4", "#ADFF2F", "#87CEFA", "#FF4500"];

for (let i = 0; i < 40; i++) {
    const piece = document.createElement("span");
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 3 + Math.random() * 4 + "s";
    piece.style.animationDelay = Math.random() * 5 + "s";
    confetti.appendChild(piece);
}

setInterval(() => {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 60 + "vh";
    document.getElementById("fireworks").appendChild(fw);

    setTimeout(() => fw.remove(), 2000);
}, 1800);

setInterval(() => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = 70 + Math.random() * 20 + "vh";
    document.body.appendChild(s);

    setTimeout(() => s.remove(), 2500);
}, 500);

const heartContainer = document.getElementById("heart-bubbles");

const heartColors = [
    "#ffb6c1",
    "#ff69b4",
    "#ff1493",
    "#ffd1dc"
];

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart-bubble";

    const size = 12 + Math.random() * 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.background =
        heartColors[Math.floor(Math.random() * heartColors.length)];

    const duration = 6 + Math.random() * 4;
    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}, 600);

// HEART GENERATOR
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 16 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

// CONFETTI GENERATOR
function createConfetti() {
    for (let i = 0; i < 6; i++) {
        const conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.background =
            ["#ff9aa2", "#ffb7b2", "#ffdac1", "#ffc1e3"][Math.floor(Math.random() * 4)];
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 4000);
    }
}

// BEAT SYNC (MUSIC PULSE)
function beatPulse() {
    setInterval(() => {
        if (!music.paused) {
            createHeart();
            createHeart();
            createConfetti();
        }
    }, 650); // 🔥 tweak this to match music rhythm
}


const music = document.getElementById("bgMusic");

// try autoplay immediately
music.play().catch(() => {
    console.log("Autoplay blocked — waiting for interaction");
});

// unmute on first interaction
function enableMusic() {
    music.muted = false;
    music.volume = 0.35;
    music.play();
    window.removeEventListener("click", enableMusic);
    window.removeEventListener("scroll", enableMusic);
}

window.addEventListener("click", enableMusic);
window.addEventListener("scroll", enableMusic);



