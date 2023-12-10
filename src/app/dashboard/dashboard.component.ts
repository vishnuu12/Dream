import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

//   basicData: any; // Define the property to hold your chart data

//   ngOnInit() {
//     var options = {
//       chart: {
//         height: 380,
//         width: "100%",
//         type: "area",
//         animations: {
//             enabled: true,
//             easing: 'easeinout',
//             speed: 800,
//             animateGradually: {
//                 enabled: true,
//                 delay: 150
//             },
//             dynamicAnimation: {
//                 enabled: true,
//                 speed: 350
//             }
//         },
//         zoom: {
//           enabled: false
//         }
//       },
//         dataLabels: {
//           enabled: true
//         },
//         stroke: {
//           curve: 'straight'
//         },
//       series: [
//         {
//           name: "Series 1",
//           data: [
//             {
//               x: "2023-11-01 GMT", // Wednesday
//               y: 10
//             },
//             {
//               x: "2023-11-02 GMT", // Thursday
//               y: 43
//             },
//             {
//               x: "2023-11-03 GMT", // Friday
//               y: 31
//             },
//             {
//               x: "2023-11-04 GMT", // Saturday
//               y: 43
//             },
//             {
//               x: "2023-11-05 GMT", // Sunday
//               y: 33
//             },
//             {
//               x: "2023-11-06 GMT", // Monday
//               y: 52
//             },
//             {
//               x: "2023-11-07 GMT", // Tuesday
//               y: 40
//             },
//             // Continue for the rest of the month...
//           ]
//         }
//       ],
//       xaxis: {
//         type: "datetime"
//       },

//       yaxis: {
//         title: {
//           text: "Value", // Y-axis title
//         },
//         min: 0, // Minimum value for the y-axis
//         max: 180, // Maximum value for the y-axis
//         tickAmount: 6, // Number of ticks on the y-axis
//         reversed: false, // Reverse the order of the y-axis
//       },
//       tooltip: {
//         y: {}
//       }
//     };


//     var chart = new ApexCharts(document.querySelector("#chart"), options);

//     chart.render();

//   }


  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
    //   this.data = {
    //     //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //       datasets: [
    //           {
    //               label: 'First Dataset',
    //               data: [12,23,3,46,76,8,34,76,21],
    //               fill: true,
    //               borderColor: '#4459a4',
    //               tension: .4,
    //               backgroundColor: '#f4fafd'
    //           },
    //       ]
    //   };
      
    //   this.options = {
    //     indexAxis: 'y',
    //       maintainAspectRatio: false,
    //       aspectRatio: 0.6,
    //       plugins: {
    //           legend: {
    //               labels: {
    //                   color: textColor
    //               }
    //           }
    //       },
    //       scales: {
    //           x: {
    //               ticks: {
    //                   color: textColorSecondary
    //               },
    //               grid: {
    //                   color: surfaceBorder
    //               }
    //           },
    //           y: {
    //               ticks: {
    //                   color: textColorSecondary
    //               },
    //               grid: {
    //                   color: surfaceBorder
    //               }
    //           }
    //       }
    //   };

    // this.data = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //         {
    //             label: 'First Dataset',
    //             data: [12, 23, 3, 46, 76, 8, 34, 76, 21],
    //             fill: true,
    //             borderColor: '#4459a4',
    //             tension: 0.4,
    //             backgroundColor: '#f4fafd'
    //         },
    //     ]
    // };
    
    // this.options = {
    //     scales: {
    //         y: {
    //             beginAtZero: true,
    //             title: {
    //                 display: true,
    //                 text: 'Y-Axis Label'
    //             }
    //         },
    //         x: {
    //             title: {
    //                 display: true,
    //                 text: 'X-Axis Label'
    //             }
    //         }
    //     }
    // };

    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '',
                data: [5, 6, 4, 3, 5, 7, 6], // Sample data for Sundays on the 15th day of each month
                fill: true,
                borderColor: '#ff0000',
                tension: 0.4,
            },
            // Repeat datasets 
        ]
    };
    
    this.options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Weeks'
                },
                ticks: {
                    stepSize: 1,
                    callback: function(value: number, index: any, values: any) {
                        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        return daysOfWeek[value % 7];
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            }
        }
    };
    
    
  }
}
