const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

const gifts = document.querySelectorAll(".gift");
const rewardText = document.getElementById("rewardText");
let rewardUnlocked = false;


function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");

  firework.style.left = Math.random() * (gameArea.clientWidth - 40) + "px";
  firework.style.top = Math.random() * (gameArea.clientHeight - 40) + "px";

  /*firework.onclick = () => {
    score++;
    scoreEl.textContent = score;
    firework.remove();
  };*/

firework.onclick = () => {
  score++;
  scoreEl.textContent = score;

  if (score >= 10 && !rewardUnlocked) {
    unlockGifts();
  }

  firework.remove();
};


  gameArea.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1500);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;

  gameArea.innerHTML = "";

  gameInterval = setInterval(createFirework, 700);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  alert("🎆 Time Over! Your Score: " + score);
}

startBtn.addEventListener("click", startGame);

function unlockGifts() {
  rewardUnlocked = true;
  rewardText.innerHTML = "🎉 Congratulations! Choose <b>one gift</b> 🎁";

  gifts.forEach(gift => {
    gift.classList.remove("locked");
    gift.classList.add("unlocked");

    gift.onclick = () => {
      alert("🎁 You selected a gift! Happy New Year 🎆 !! Tell your dadaaa what you chose !!");
    };
  });
}

const bgMusic = document.getElementById("bgMusic");

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;

  gameArea.innerHTML = "";

  // ▶ Start music
  bgMusic.currentTime = 0;
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked until user interaction");
  });

  gameInterval = setInterval(createFirework, 700);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  bgMusic.pause();

  alert("🎆 Time Over! Your Score: " + score);
}
