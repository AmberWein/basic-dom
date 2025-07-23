window.onload = function () {
  const ball = document.getElementById("ball");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  // set initial position
  let topPosition = 0;
  let leftPosition = 0;
  const step = 20; // pixels

  ball.style.position = "relative";
  ball.style.top = topPosition + "px";
  ball.style.left = leftPosition + "px";

  // movement functions
  function moveUp() {
    topPosition -= step;
    ball.style.top = topPosition + "px";
  }

  function moveDown() {
    topPosition += step;
    ball.style.top = topPosition + "px";
  }

  function moveLeft() {
    leftPosition -= step;
    ball.style.left = leftPosition + "px";
  }

  function moveRight() {
    leftPosition += step;
    ball.style.left = leftPosition + "px";
  }

  // add event listeners
  up.addEventListener("click", moveUp);
  down.addEventListener("click", moveDown);
  left.addEventListener("click", moveLeft);
  right.addEventListener("click", moveRight);
};
