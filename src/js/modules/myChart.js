import Chart from 'chart.js/auto/auto.js';

export function chartLib() {

  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
              label: 'Guests',
              data: [42, 29, 31, 24, 39, 37, 29],
              backgroundColor: [
                  '#EDEFEF',
              ],  
              border: 0,
              borderRadius: 75,
              barThickness: 15,
              maxBarThickness: 40,
              order: 1,
          },
          {
            label: 'Registered',
            data: [23, 18, 19, 12, 20, 28, 22],
            backgroundColor: [
                '#F96549',
            ],  
            border: 0,
            borderRadius: 75,
            barThickness: 15,
            maxBarThickness: 40,
            order: 1,
          }
        ]
      },
      options: {
          scales: {
              y: {
                beginAtZero: true,
                stack: true,
                }
          }
      }
  });
}