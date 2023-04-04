const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 18, value: 10 },
  { minDegree: 19, maxDegree: 36, value: 9 },
  { minDegree: 37, maxDegree: 54, value: 8 },
  { minDegree: 55, maxDegree: 72, value: 7 },
  { minDegree: 73, maxDegree: 90, value: 6 },
  { minDegree: 91, maxDegree: 108, value: 5 },
  { minDegree: 109, maxDegree: 126, value: 4 },
  { minDegree: 127, maxDegree: 144, value: 3 },
  { minDegree: 145, maxDegree: 162, value: 2 },
  { minDegree: 163, maxDegree: 180, value: 1 },
  { minDegree: 181, maxDegree: 198, value: 20 },
  { minDegree: 199, maxDegree: 216, value: 19 },
  { minDegree: 217, maxDegree: 234, value: 18 },
  { minDegree: 235, maxDegree: 252, value: 17 },
  { minDegree: 253, maxDegree: 270, value: 16 },
  { minDegree: 271, maxDegree: 288, value: 15 },
  { minDegree: 289, maxDegree: 306, value: 14 },
  { minDegree: 307, maxDegree: 324, value: 13 },
  { minDegree: 325, maxDegree: 342, value: 12 },
  { minDegree: 343, maxDegree: 360, value: 11 },
];
//Size of each piece
const data = new Array(20).fill(18);
//background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: Array.from({ length: 20 }, (_, i) => i + 1),
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },,
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
