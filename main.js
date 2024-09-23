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

// Theme
const themeSwitch = document.querySelector(".switch input");
const body = document.body;

/* if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeSwitch.checked = true;
} else {
  themeSwitch.checked = false;
}
 */
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
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
