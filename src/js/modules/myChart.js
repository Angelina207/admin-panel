import Chart from 'chart.js/auto/auto.js';

export function chartLib() {

  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
              label: '',
              data: [12, 19, 3, 5, 2, 3, 8],
              backgroundColor: [
                  '#F96549',
              ],  
              border: 0,
              borderRadius: 75,
              barThickness: 15,
          }]
      },
      options: {
          scales: {
            y: {
              stacked: true
          },
              y: {
                  beginAtZero: true,
              },
          }
      }
  });
}