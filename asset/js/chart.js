//CHART
const ctx = document.getElementById("myChart").getContext("2d");
const doughnut = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["60%", "40%"],
    datasets: [
      {
        // label: "My First Dataset",
        data: [500, 400],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },

  // options: {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // },
});

//CHART
const sub = document.getElementById("myChart2").getContext("2d");
const doughnut2 = new Chart(sub, {
  type: "doughnut",
  data: {
    labels: ["60%", "40%"],
    datasets: [
      {
        // label: "My First Dataset",
        data: [800, 200],
        backgroundColor: ["#00f404", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  },

  // options: {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // },
});

const candle = document.getElementById("candleChart").getContext("2d");
// const labels = Utils.months({ count: 7 });
const can = new Chart(candle, {
  type: "bar",
  data: {
    labels: [
      "jan",
      "feb",
      "mar",
      "april",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 60, 40, 55, 90, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// LINE CHART
const line = document.getElementById("lineChart").getContext("2d");
// const labels = Utils.months({ count: 7 });
const lin = new Chart(line, {
  type: "line",
  data: {
    labels: [
      "jan",
      "feb",
      "mar",
      "april",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },

  // options: {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // },
});
