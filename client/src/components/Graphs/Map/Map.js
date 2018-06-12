// import React, { Component } from 'react';
// import './Map.css';
// import Highcharts from 'highcharts';
// import map from './usa.js';
// import $ from 'jquery';



// class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.chartContainer = React.createRef();
//   }

//   componentDidMount() {
//     this.chart = new Highcharts[this.props.type || 'Map'](
//       this.chartContainer.current,
//       this.props.options
//     );
//   }

//   componentWillUnmount() {
//     this.chart.destroy();
//   }

//   render() {
//     return <div ref={this.chartContainer} />;
//   }
// }

// class Highmap extends Component {

//   render() {


//     let data = [
// ['us-ma', 0],
// ['us-wa', 1],
// ['us-ca', 2],
// ['us-or', 3],
// ['us-wi', 4],
// ['us-me', 5],
// ['us-mi', 6],
// ['us-nv', 7],
// ['us-nm', 8],
// ['us-co', 9],
// ['us-wy', 10],
// ['us-ks', 11],
// ['us-ne', 12],
// ['us-ok', 13],
// ['us-mo', 14],
// ['us-il', 15],
// ['us-in', 16],
// ['us-vt', 17],
// ['us-ar', 18],
// ['us-tx', 19],
// ['us-ri', 20],
// ['us-al', 21],
// ['us-ms', 22],
// ['us-nc', 23],
// ['us-va', 24],
// ['us-ia', 25],
// ['us-md', 26],
// ['us-de', 27],
// ['us-pa', 28],
// ['us-nj', 29],
// ['us-ny', 30],
// ['us-id', 31],
// ['us-sd', 32],
// ['us-ct', 33],
// ['us-nh', 34],
// ['us-ky', 35],
// ['us-oh', 36],
// ['us-tn', 37],
// ['us-wv', 38],
// ['us-dc', 39],
// ['us-la', 40],
// ['us-fl', 41],
// ['us-ga', 42],
// ['us-sc', 43],
// ['us-mn', 44],
// ['us-mt', 45],
// ['us-nd', 46],
// ['us-az', 47],
// ['us-ut', 48],
// ['us-hi', 49],
// ['us-ak', 50],
// ['undefined', 51]
// ];

//     const options = {
//       chart: {
//     events: {
//       drilldown: function (e) {
//         if (!e.seriesOptions) {
//           var chart = this,
//             mapKey = 'countries/us/' + e.point.drilldown + '-all',
//             // Handle error, the timeout is cleared on success
//             fail = setTimeout(function () {
//               if (!Highcharts.maps[mapKey]) {
//                 chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
//                 fail = setTimeout(function () {
//                   chart.hideLoading();
//                 }, 1000);
//               }
//             }, 3000);

//           // Show the spinner
//           chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

//           // Load the drilldown map
//           $.getScript('https://code.highcharts.com/mapdata/' + mapKey + '.js', function () {

//             data = Highcharts.geojson(Highcharts.maps[mapKey]);

//             // Set a non-random bogus value
//             $.each(data, function (i) {
//               this.value = i;
//             });

//             // Hide loading and add series
//             chart.hideLoading();
//             clearTimeout(fail);
//             chart.addSeriesAsDrilldown(e.point, {
//               name: e.point.name,
//               data: data,
//               dataLabels: {
//                 enabled: true,
//                 format: '{point.name}'
//               }
//             });
//           });
//         }

//         this.setTitle(null, { text: e.point.name });
//       },
//       drillup: function () {
//         this.setTitle(null, { text: '' });
//       }
//     }
//   },

//   title: {
//     text: 'Highcharts Map Drilldown'
//   },

//   subtitle: {
//     text: '',
//     floating: true,
//     align: 'right',
//     y: 50,
//     style: {
//       fontSize: '16px'
//     }
//   },

//   colorAxis: {
//     min: 0,
//     minColor: '#E6E7E8',
//     maxColor: '#005645'
//   },
    
//     Navigation: {
//     enabled: true,
//     buttonOptions: {
//       verticalAlign: 'bottom'
//     }
//   },

//   plotOptions: {
//     map: {
//       states: {
//         hover: {
//           color: '#EEDD66'
//         }
//       }
//     }
//   },

//   series: [{
//     data: data,
//     name: 'USA',
//     dataLabels: {
//       enabled: true,
//       format: '{point.properties.postal-code}'
//     }
//   }, {
//     type: 'mapline',
//     data: data,
//     color: 'silver',
//     enableMouseTracking: false,
//     animation: {
//       duration: 500
//     }
//   }],

//   drilldown: {
//     activeDataLabelStyle: {
//       color: '#FFFFFF',
//       textDecoration: 'none',
//       textOutline: '1px #000000'
//     },
//     drillUpButton: {
//       relativeTo: 'spacingBox',
//       position: {
//         x: 0,
//         y: 60
//       }
//     }
//   }
// };

//     return (
//       <div>
//         <Chart options={options} />
//       </div>
//     );
//   }
// }

// export default Highmap;