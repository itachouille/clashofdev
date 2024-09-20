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
