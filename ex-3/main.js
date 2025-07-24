function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const container = document.getElementById("container");

for (let i = 0; i < 30; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("mouseenter", function () {
    this.style.backgroundColor = getRandomColor();
  });

  container.appendChild(box);
}