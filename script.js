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
    const numRotations = Math.floor(Math.random() * 4 + 4) * 360;
   
// Add click event listener to the reset button
resetButton.addEventListener("click", resetWheel);
});

// Define the function to reset the wheel
const resetWheel = () => {
// Hide the popup
popupContainer.classList.remove("show");

// Reset the wheel properties
currentDeg = 0;
isSpinning = false;
wheel.style.transition = "none";
wheel.style.transform = "rotate(0deg)";

// Enable the spin button
spinBtn.disabled = false;
};
  
  // Define the variable for the reset button
const resetButton = document.getElementById("reset-button");

// Add click event listener to the reset button
resetButton.addEventListener("click", resetWheel);
</script>
  
