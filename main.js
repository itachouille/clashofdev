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

/* document.getElementsByClassName("button")[0].addEventListener("click", () => {
  let canvas = document.createElement("canvas");
  let container = document.getElementsByClassName("footer")[0];
  canvas.width = 600;
  canvas.height = 600;

  container.appendChild(canvas);

  let confetti_button = confetti.create(canvas);
  confetti_button().then(() => container.removeChild(canvas));
});
 */

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
