// Scroll
document.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100
  }%`;
  document
    .getElementById("progress-bar")
    .style.setProperty("--progress", scrollPercent);
}

// toggle theme

const userPrefersDark = localStorage.getItem("theme") === "light";

function setThemePreference(prefersDark) {
  if (prefersDark) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

setThemePreference(userPrefersDark);

const checkbox = document.getElementById("checkbox");
checkbox.checked = userPrefersDark;

checkbox.addEventListener("change", (event) => {
  const isDarkMode = event.target.checked;
  setThemePreference(isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Button
document.getElementsByClassName("button")[0].addEventListener("click", () => {
  let end = Date.now() + 3 * 1000;
  let colors = ["#bb0000", "#bada55"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});

// Card Easter Egg
let clickCount = 0;
const card = document.getElementById("playingCard");
const crowns = document.querySelectorAll(".crown, .crown-small");

card.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 5) {
    card.classList.add("night-mode");
    crowns.forEach((crown) => crown.classList.add("night-mode"));
    clickCount = 0;
    setTimeout(() => {
      card.classList.remove("night-mode");
      crowns.forEach((crown) => crown.classList.remove("night-mode"));
    }, 5000);
  }
});
