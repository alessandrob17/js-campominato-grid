const grid = document.querySelector("#grid");
const playButton = document.querySelector("#play");

playButton.addEventListener("click", function() {
  let bombs = [];
  while (bombs.length < 16) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }

  for (let i = 1; i <= 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;
    cell.addEventListener("click", function() {
      if (bombs.includes(i)) {
        this.classList.add("bomb");
        alert("Hai perso!");
      } else {
        this.classList.add("clicked");
      }
    });
    grid.appendChild(cell);
  }
});
