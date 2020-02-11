/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Report Js
 */

 // Datatable
 $('#datatable').DataTable();

var optionsCircle = {
  chart: {
    type: 'radialBar',
    height: 280,
    offsetY: -30,
    offsetX: 20
  },
  plotOptions: {
    radialBar: {
      inverseOrder: true,      
      hollow: {
        margin: 5,
        size: '55%',
        background: 'transparent',
      },
      track: {
        show: true,
        background: '#3c4a82',
        strokeWidth: '10%',
        opacity: 1,
        margin: 5, // margin is in pixels
      },

      dataLabels: {
        enabled: true,
        name: {
            fontSize: '18px',
        },
        value: {
            fontSize: '16px',
            color: '#b9c2d6',
        },
      }
    },
  },
  series: [71, 63],
  labels: ['Domestic', 'International'],
  legend: {
    show: true,
    position: 'bottom',
    offsetX: -40,
    offsetY: -10,
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      gradientToColors: ['#40e0d0', '#ff8c00', '#ff0080']
    }
  },
  stroke: {
    lineCap: 'round'
  },
}

var chartCircle = new ApexCharts(document.querySelector('#circlechart'), optionsCircle);
chartCircle.render();



var iteration = 11

function getRandom() {
  var i = iteration;
  return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
}

function getRangeRandom(yrange) {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}

window.setInterval(function () {

  iteration++;

  chartCircle.updateSeries([getRangeRandom({ min: 10, max: 100 }), getRangeRandom({ min: 10, max: 100 })])


}, 3000)

  
//Dash-Map

$('#world-map-markers').vectorMap({
  map : 'world_mill_en',
  scaleColors : ['#eff0f1', '#eff0f1'],
  normalizeFunction : 'polynomial',
  hoverOpacity : 0.7,
  hoverColor : false,
  regionStyle : {
      initial : {
          fill : '#6673a7'
      }
  },

  markerStyle: {
    initial: {
      stroke: "transparent"
    },
    hover: {
      stroke: "rgba(112, 112, 112, 0.30)"
    }
  },
  backgroundColor : 'transparent',

  markers: [
    {
      latLng: [37.090240, -95.712891],
      name: "USA",
      style: {
        fill: "#4d79f6"
      }
    },
    {
      latLng: [71.706940, -42.604301],
      name: "Greenland",
      style: {
        fill: "#bfd0ff"
      }
    },
    {
      latLng: [-21.943369, 123.102198],
      name: "Australia",
      style: {
        fill: "#3066ff"
      }
    }
  ],
  series: {
    regions: [{
        values: {
            "AU": '#bfd0ff',
            "US": '#a2bafd',
            "GL": '#688df7',
        },
        attribute: 'fill'
    }]
},
});