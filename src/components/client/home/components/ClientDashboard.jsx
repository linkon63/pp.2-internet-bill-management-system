// import { useState } from "react";
// // import ReactApexChart from "apexcharts";
// export default function ClientDashboard() {
//   const [state, setState] = useState({
//     series: [
//       {
//         data: [
//           {
//             x: "Code",
//             y: [
//               new Date("2019-03-02").getTime(),
//               new Date("2019-03-04").getTime(),
//             ],
//           },
//           {
//             x: "Test",
//             y: [
//               new Date("2019-03-04").getTime(),
//               new Date("2019-03-08").getTime(),
//             ],
//           },
//           {
//             x: "Validation",
//             y: [
//               new Date("2019-03-08").getTime(),
//               new Date("2019-03-12").getTime(),
//             ],
//           },
//           {
//             x: "Deployment",
//             y: [
//               new Date("2019-03-12").getTime(),
//               new Date("2019-03-18").getTime(),
//             ],
//           },
//         ],
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "rangeBar",
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//         },
//       },
//       xaxis: {
//         type: "datetime",
//       },
//     },
//   });

//   var options = {
//     chart: {
//       type: "line",
//     },
//     series: [
//       {
//         name: "sales",
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//       },
//     ],
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//     },
//   };

// //   var chart = ApexCharts(options);

//   return (
//     <div>
//         <ApexCharts />
//       {/* {chart} */}
//       <div id="chart">
//         {/* <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="rangeBar"
//           height={350}
//         /> */}
//       </div>
//     </div>
//   );
// }

// // class ClientDashboard extends React.Component {
// //   constructor(props) {
// //     super(props);

// // this.state = {
// //   series: [
// //     {
// //       data: [
// //         {
// //           x: "Code",
// //           y: [
// //             new Date("2019-03-02").getTime(),
// //             new Date("2019-03-04").getTime(),
// //           ],
// //         },
// //         {
// //           x: "Test",
// //           y: [
// //             new Date("2019-03-04").getTime(),
// //             new Date("2019-03-08").getTime(),
// //           ],
// //         },
// //         {
// //           x: "Validation",
// //           y: [
// //             new Date("2019-03-08").getTime(),
// //             new Date("2019-03-12").getTime(),
// //           ],
// //         },
// //         {
// //           x: "Deployment",
// //           y: [
// //             new Date("2019-03-12").getTime(),
// //             new Date("2019-03-18").getTime(),
// //           ],
// //         },
// //       ],
// //     },
// //   ],
// //   options: {
// //     chart: {
// //       height: 350,
// //       type: "rangeBar",
// //     },
// //     plotOptions: {
// //       bar: {
// //         horizontal: true,
// //       },
// //     },
// //     xaxis: {
// //       type: "datetime",
// //     },
// //   },
// // };
// //   }

// //   render() {
// //     return (
// //       <div id="chart">
// //         <ReactApexChart
// //           options={this.state.options}
// //           series={this.state.series}
// //           type="rangeBar"
// //           height={350}
// //         />
// //       </div>
// //     );
// //   }
// // }
