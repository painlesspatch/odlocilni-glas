let seatChartInstance;
let probChartInstance;

export function drawSeatChart(data) {
  const ctx = document.getElementById("seatChart");

  if (seatChartInstance) {
    seatChartInstance.destroy();
  }

  seatChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(data),
      datasets: [{ label: "Seats", data: Object.values(data) }],
    },
  });
}

export function drawProbChart(data) {
  const ctx = document.getElementById("probChart");

  if (probChartInstance) {
    probChartInstance.destroy();
  }

  probChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(data),
      datasets: [{ label: "Average Seats (Monte Carlo)", data: Object.values(data) }],
    },
  });
}
