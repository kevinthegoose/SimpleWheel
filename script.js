// Define the names and images for the wheel slices
const wheelData = [
  { name: "Ana Spelunky", image: "https://i.imgur.com/g7sgzbP.png" },
  { name: "Au", image: "https://i.imgur.com/SLP4ilb.png" },
  { name: "Classic Guy", image: "https://i.imgur.com/oaoutGm.png" },
  { name: "Coco von Diamonds", image: "https://i.imgur.com/RsifiDf.png" },
  { name: "Colin Northward", image: "https://i.imgur.com/dIVtsuM.png" },
  { name: "Dan Gheesling [MOD]", image: "https://i.imgur.com/jjmWCpP.png" },
  { name: "Demi von Diamonds", image: "https://i.imgur.com/wrGEfVG.png" },
  { name: "Dirk Yamoaka", image: "https://i.imgur.com/zalgLTz.png" },
  { name: "Guy Spelunky", image: "https://i.imgur.com/7rY77Yq.png" },
  { name: "LISE Project", image: "https://i.imgur.com/QmZ2cyr.png" },
  { name: "Little Jay", image: "https://i.imgur.com/r1iIhMj.png" },
  { name: "Liz Mutton", image: "https://i.imgur.com/I4OEznC.png" },
  { name: "Manfred Tunnel", image: "https://i.imgur.com/Kbel5cu.png" },
  { name: "Margaret Tunnel", image: "https://i.imgur.com/elcPsYs.png" },
  { name: "Nekka The Eagle", image: "https://i.imgur.com/ZNvX6H1.png" },
  { name: "Pilot", image: "https://i.imgur.com/cJIKVML.png" },
  { name: "Princess Aaryn", image: "https://i.imgur.com/yGeLNuQ.png" },
  { name: "Roffy D Sloth", image: "https://i.imgur.com/0AEbICi.png" },
  { name: "Tina Flan", image: "https://i.imgur.com/vuMTujq.png" },
  { name: "Valerie Crump", image: "https://i.imgur.com/6NXDhU0.png" }
];

// Define the variables for the wheel and the popup
const wheel = document.getElementById("wheel");
const winnerName = document.getElementById("winner-name");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup-btn");
const spinBtn = document.getElementById("spin-btn");
const resetBtn = document.getElementById("reset-btn");

// Define the properties for the wheel
const numOfSlices = wheelData.length;
const rotateDeg = 360 / numOfSlices;
let currentDeg = 0;
let isSpinning = false;

// Define the function to rotate the wheel
const rotateWheel = () => {
  currentDeg += rotateDeg;
  wheel.style.transform = `rotate(${currentDeg}deg)`;
  if (currentDeg >= 360) {
    currentDeg = 0;
  }
};

// Define the function to pick a random winner
const pickWinner = () => {
if (!isSpinning) {
isSpinning = true;
const numRotations = Math.floor(Math.random() * 10 + 10) * 360; // Random number of rotations
const winningSlice = Math.floor(Math.random() * numOfSlices); // Random winning slice
const winningDeg = numRotations + winningSlice * rotateDeg; // Winning slice position in degrees
wheel.style.transition = "all 10s ease-out"; // Apply transition
setTimeout(() => {
wheel.style.transform = rotate(${winningDeg}deg); // Rotate wheel to winning slice
isSpinning = false;
popupContainer.classList.add("show"); // Display popup
winnerName.textContent = wheelData[winningSlice].name; // Set the name of the winner in the popup
}, 10000);
}
};

// Loop through the wheel data to create the slices
wheelData.forEach((slice, index) => {
const sliceElem = document.createElement("div");
sliceElem.className = "slice";
sliceElem.style.backgroundImage = url(${slice.image});
sliceElem.style.transform = rotate(${index * rotateDeg}deg) skewY(-${rotateDeg}deg);
wheel.appendChild(sliceElem);
});

// Add click event listener to the spin button
spinBtn.addEventListener("click", rotateWheel);

// Add click event listener to the popup button
popupBtn.addEventListener("click", () => {
popupContainer.classList.remove("show"); // Hide popup
wheel.style.transition = "none"; // Remove transition
wheel.style.transform = rotate(${currentDeg}deg); // Reset wheel rotation
});

// Add keydown event listener to the document
document.addEventListener("keydown", (event) => {
if (event.code === "Space") {
rotateWheel(); // Spin wheel when spacebar is pressed
}
});
// Loop through the wheelData array to create the slices of the wheel
for (let i = 0; i < numOfSlices; i++) {
const slice = document.createElement("div");
slice.className = "slice";
slice.style.transform = rotate(${rotateDeg * i}deg);
const img = document.createElement("img");
img.src = wheelData[i].image;
img.alt = wheelData[i].name;
slice.appendChild(img);
wheel.appendChild(slice);
}

// Add a click event listener to the spin button
spinBtn.addEventListener("click", () => {
if (!isSpinning) {
isSpinning = true;
const numRotations = Math.floor(Math.random() * 4 + 4) * 360;
const winnerIndex = Math.floor(Math.random() * numOfSlices);
rotateDegSlow = rotateDeg / 5;
setTimeout(() => {
clearInterval(intervalId);
winnerName.textContent = wheelData[winnerIndex].name;
popupContainer.classList.add("show");
isSpinning = false;
}, numRotations + 2000);
let rotateDegSlow = rotateDeg / 5;
let intervalId = setInterval(() => {
rotateWheel(rotateDegSlow);
rotateDegSlow += rotateDeg / 5;
}, 25);
}
});

// Add a click event listener to the popup button
popupBtn.addEventListener("click", () => {
popupContainer.classList.remove("show");
});

// Define the function to rotate the wheel
const rotateWheel = (rotateDeg) => {
currentDeg += rotateDeg;
wheel.style.transform = rotate(${currentDeg}deg);
if (currentDeg >= 360) {
currentDeg = 0;
}
};
