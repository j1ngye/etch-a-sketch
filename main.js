const containerDiv = document.getElementById("container");
const resizeInput = document.getElementById("resize");
const eraser = document.getElementById("eraser");
const eraseLabel = document.querySelector(".erase-label");
console.log(eraseLabel);
let gridSize = 16;
let containerDivSize = 500;
let eraseClick = false;
resizeInput.addEventListener("change", (e) => {
  gridSize = e.target.value ? e.target.value : 16;
  if (gridSize > 100) {
    alert("Error: size can't be greater than 100!");
    return false;
  }
  createGrid(gridSize);
});

eraser.addEventListener("click", () => {
  eraseLabel.textContent = eraseClick ? "Fill👇🏼" : "Eraser👇🏼";
  eraser.style.width = eraseClick ? "25px " : "100px";
  eraser.style.height = eraseClick ? "25px " : "30px";
  eraser.style.borderRadius = eraseClick ? "50% " : "50px 5px 10px 10px";
  eraseClick = !eraseClick;
});

function createGrid(size) {
  containerDiv.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${containerDivSize / size}px`;
    cell.style.height = `${containerDivSize / size}px`;
    cell.style.opacity = 0;
    cell.addEventListener("mouseenter", (e) => {
      eraseClick ? eraseBgColor(e.target) : addBgColor(e.target);
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

function eraseBgColor(elem) {
  elem.style.backgroundColor = "";
}
