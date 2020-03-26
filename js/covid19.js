
// Os dados são obtidos do Johns Hopkins CSSE disponibilizados no github no endereço
// https://github.com/CSSEGISandData/COVID-19

var confirmedURL;
// confirmedURL = "./COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";
confirmedURL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

var deadURL;
deathsURL = "./COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv";

var datasets = [];
var labels = [];
var maxDays = 0;
var minValue = 30;
var maxValue = 10000;
var threshold = 1000;
var brazilLine = {};

function extractData( result ) {
  result.data.forEach( extractDataItem );
}

function extractDataItem( locationData, index ) {
  // ignora o cabeçalho
  if( index == 0 ) { return; }

  // Desestrutura o dado
  [state,country,lat,long, ...data] = locationData;

  // Valor atual está na última posição
  current = data[ data.length - 1 ];

  // Corta os paises com baixa contagem
  if( current < threshold ) {
    return;
  }

  // Converte texto para inteiro
  data = data.map( function(x) { return parseInt(x,10); } );

  // Corta os dados fora da faixa de interesse
  data = data.filter( function(x) { return x >= minValue && x <= maxValue; });

  // Obtém o número de dias restantes após filtragem
  maxDays = data.length > maxDays ? data.length : maxDays;

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  line = {};
  line.fill = false;
  line.data = data;
  line.label = country + " " + state;
  line.borderColor = "orange";
  line.borderColor = "rgba(" + r + "," + g + "," + b + ",0.2)";

  // Deixa o brasil para ser inserido por último para sobrepor as demais linhas
  if( country != "Brazil" ) {
    datasets.push( line );
  } else {
    brazilLine = line;
  }
}

// Limita o tempo futuro
function cutDays( days ) {
  maxDays = maxDays > days ? days : maxDays;
}

function prepareLabels() {
  for( var i=0; i<maxDays; ++i ) {
    labels.push( i );
  }
}

// Insere os dados do Brasil para aparecer sobre os demais
function prependBrazil() {
  brazilLine.borderColor = "black";
  brazilLine.fill = true;
  datasets.unshift( brazilLine );
}

function drawChart() {
  new Chart( document.getElementById("confirmed-line-chart"), {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Dias a partir de " + minValue + " casos"
          },
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Número de casos",
          },
          ticks: {
            callback: function(value, index, values) {
              return value;
            }
          },
          type: 'logarithmic'
          //type: 'linear'
        }]
      },
      title: {
        display: true,
        text: 'Número de infectados pelo COVID-19'
      }
    }
  });
}

function downloadComplete( result ) {
  extractData( result );
  cutDays( 30 );
  prepareLabels();
  prependBrazil();
  drawChart();
}

Papa.parse(confirmedURL, {
  download: true,
  complete: downloadComplete
});


