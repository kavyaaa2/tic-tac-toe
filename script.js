var turn = 0;
const X = "X";
const O = "O";
let circleTurn;
const cellElements = document.querySelectorAll("[data-cell]");
var count = 0;

document.getElementById("turn").innerText =
    "Please choose an option to begin the game";

function onSubmit() {
    if (document.getElementById("r2").checked) {
        circleTurn = true;
        console.log(circleTurn);
    } else circleTurn = false;
    document.getElementById("r1").disabled = true;
    document.getElementById("r2").disabled = true;
    document.getElementById("b1").disabled = true;
    startGame();
}

function startGame() {
    if (circleTurn) document.getElementById("turn").innerText = O + "'s Turn";
    else document.getElementById("turn").innerText = X + "'s Turn";
    cellElements.forEach((cell) => {
        cell.addEventListener("click", handleClick, { once: true });
    });
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? O : X;
    placeMark(cell, currentClass);
    circleTurn = !circleTurn;
    if (circleTurn) document.getElementById("turn").innerText = O + "'s Turn";
    else document.getElementById("turn").innerText = X + "'s Turn";
    count += 1;
    if (count == 9) document.getElementById("turn").innerText = "GAME OVER!";
}
function placeMark(cell, currentClass) {
    cell.innerText = currentClass;
}

function refresh() {
    window.location.reload();
}
