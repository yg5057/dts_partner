new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["0", "1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "라벨",
          backgroundColor: "#E63527",
          data: [500, 600, 700, 650, 450, 900]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true
      }
    }
});