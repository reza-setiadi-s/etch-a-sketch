const container = document.getElementById("container");
const reset = document.getElementById("reset");
const blackButton = document.getElementById("black-colour"); 
const rainbow = document.getElementById("rainbow-colour");
const grid = document.getElementsByClassName("grid");
let color = "black";

// Declaration variable

addGrid = (input) => {
	container.innerHTML = "";
	for(let i = 0; i < input * input; i++) {
		const createGrid = document.createElement("div");
		createGrid.className = "grid";	
		container.appendChild(createGrid);
		container.style.setProperty("grid-template-columns", `repeat(${input}, auto)`);
	}
}

// Function for creating grid

rainbowColor = () => {
	const pallete = ['#ff0000','#ffa500','#ffff00','#008000','#0000ff','#4b0082','#ee82ee'];
	let random = Math.floor(Math.random() * 7);
	return pallete[random];
}

changeColor = () => {
	switch(color) {
		case "black":
			return "#000";
		break;
		case "rgb":
			return rainbowColor();
		break;
	}
}

document.addEventListener("mouseover", event => {
	if(event.target.className == "grid") {
		event.target.style.backgroundColor = changeColor();
	}
});

// Coloring grid

reset.addEventListener("click", function() {
	const number = prompt("Enter number 1 - 30.");
	while(number < 1 || number > 30) {
		const rightNumber = prompt("Enter the right number!");
		if(rightNumber > 0 && rightNumber < 31) {
			addGrid(rightNumber);
			return rightNumber;
			}
		}
	addGrid(number);
});

// Button function for reset game

blackButton.addEventListener("click", event => {
	color = "black";
});

rainbow.addEventListener("click", event => {
	color = "rgb";
});

// Button for coloring

addGrid(16);

// Execute the program
