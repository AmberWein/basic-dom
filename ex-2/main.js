const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

function checkReservation() {
  const inputElement = document.getElementById("nameInput");
  const outputElement = document.getElementById("output");
  const name = inputElement.value.trim(); // remove whitespaces

  if (name in reservations) {
    if (!reservations[name].claimed) {
      outputElement.textContent = `Welcome, ${name}`;
      reservations[name].claimed = true; // Optionally mark as claimed
    } else {
      outputElement.textContent = "Someone already claimed this reservation";
    }
  } else {
    outputElement.textContent = "You have no reservation";
  }
}
