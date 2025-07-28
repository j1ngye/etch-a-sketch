const containerDiv = document.getElementById("container");
const resizeInput = document.getElementById("resize");
let gridSize = +prompt("Enter the grid size:", 16);
let containerDivSize = 500;

resizeInput.addEventListener("change", (e) => {
  gridSize = e.target.value ? e.target.value : 16;
  if (gridSize > 100) {
    alert("Error: size can't be greater than 100!");
    return false;
  }
  createGrid(gridSize);
});

function createGrid(size) {
  containerDiv.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${containerDivSize / size}px`;
    cell.style.height = `${containerDivSize / size}px`;
    cell.style.opacity = 0;
    cell.addEventListener("mouseenter", (e) => {
      addBgColor(e.target);
      increaseOpacity(e.target);
    });
    containerDiv.append(cell);
  }
}

function addBgColor(elem) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  elem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function increaseOpacity(elem) {
  const originalOpacity = parseFloat(elem.style.opacity);
  if (originalOpacity >= 1) return;
  elem.style.opacity = originalOpacity + 0.2;
}
createGrid(gridSize);
