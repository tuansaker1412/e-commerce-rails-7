import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables);

// Connects to data-controller="dashboard"
export default class extends Controller {
  static values = { revenue: Array }

  initialize() {
    const data = this.revenueValue.map((item) => item[1]/1.0)
    const labels = this.revenueValue.map((item) => item[0])

    const ctx = document.getElementById("revenueChart").getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Revenue $',  // Changed from 'labels' to 'label'
          data: data,
          borderWidth: 3,
          fill: true
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {  // Changed from 'xAxes' to 'x'
            grid: {
              display: false
            }
          },
          y: {  // Changed from 'yAxes' to 'y'
            grid: {
              color: "#d4f3ef",
              borderDash: [5, 5]  // Moved 'border' inside 'grid'
            },
            beginAtZero: true
          }
        }
      }
    })
  }
}
