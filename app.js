const playButton = document.getElementById("play-button");
const grid = document.getElementById("grid");

playButton.addEventListener("click", generateGrid);

function generateGrid() {
  for (let i = 1; i <= 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = i;
    square.addEventListener("click", function() {
      console.log("Casella cliccata: " + i);
      square.classList.add("clicked");
    });
    grid.appendChild(square);
  }
}
