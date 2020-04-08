
// Os dados são obtidos do Johns Hopkins CSSE disponibilizados no github no endereço
// https://github.com/CSSEGISandData/COVID-19

var confirmedURL;
confirmedURL = "./COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
confirmedURL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

var deadURL;
// deathsURL = "./COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv";
deathsURL = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv";

var confirmedDatasets = [];
var confirmedLabels = [];
var confirmedMaxDays = 0;
var confirmedMinValue = 1000;
var confirmedMaxValue = 1000000;
var confirmedBrazilLine = {};

var deathsDatasets = [];
var deathsLabels = [];
var deathsMaxDays = 0;
var deathsMinValue = 100;
var deathsMaxValue = 1000000;
var deathsBrazilLine = {};


function confirmedExtractData( result ) {
  result.data.forEach( confirmedExtractDataItem );
}

function deathsExtractData( result ) {
  result.data.forEach( deathsExtractDataItem );
}

function confirmedExtractDataItem( locationData, index ) {
  // ignora o cabeçalho
  if( index == 0 ) { return; }

  // Desestrutura o dado
  [state,country,lat,long, ...data] = locationData;

  // Valor atual está na última posição
  current = data[ data.length - 1 ];

  // Corta os paises com baixa contagem
  if( current < confirmedMinValue ) {
    return;
  }

  // Converte texto para inteiro
  data = data.map( function(x) { return parseInt(x,10); } );

  // Corta os dados fora da faixa de interesse
  data = data.filter( function(x) { return x >= confirmedMinValue && x <= confirmedMaxValue; });

  // Obtém o número de dias restantes após filtragem
  confirmedMaxDays = data.length > confirmedMaxDays ? data.length : confirmedMaxDays;

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
    confirmedDatasets.push( line );
  } else {
    confirmedBrazilLine = line;
  }
}

function deathsExtractDataItem( locationData, index ) {
  // ignora o cabeçalho
  if( index == 0 ) { return; }

  // Desestrutura o dado
  [state,country,lat,long, ...data] = locationData;

  // Valor atual está na última posição
  current = data[ data.length - 1 ];

  // Corta os paises com baixa contagem
  if( current < deathsMinValue ) {
    return;
  }

  // Converte texto para inteiro
  data = data.map( function(x) { return parseInt(x,10); } );

  // Corta os dados fora da faixa de interesse
  data = data.filter( function(x) { return x >= deathsMinValue && x <= deathsMaxValue; });

  // Obtém o número de dias restantes após filtragem
  deathsMaxDays = data.length > deathsMaxDays ? data.length : deathsMaxDays;

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
    deathsDatasets.push( line );
  } else {
    deathsBrazilLine = line;
  }
}

// Limita o tempo futuro
function confirmedCutDays( days ) {
  confirmedMaxDays = confirmedMaxDays > days ? days : confirmedMaxDays;
}

function deathsCutDays( days ) {
  deathsMaxDays = deathsMaxDays > days ? days : deathsMaxDays;
}

function confirmedPrepareLabels() {
  for( var i=0; i<confirmedMaxDays; ++i ) {
    confirmedLabels.push( i );
  }
}

function deathsPrepareLabels() {
  for( var i=0; i<deathsMaxDays; ++i ) {
    deathsLabels.push( i );
  }
}

// Insere os dados do Brasil para aparecer sobre os demais
function confirmedPrependBrazil() {
  confirmedBrazilLine.borderColor = "black";
  confirmedBrazilLine.fill = true;
  confirmedDatasets.unshift( confirmedBrazilLine );
}

function deathsPrependBrazil() {
  deathsBrazilLine.borderColor = "black";
  deathsBrazilLine.fill = true;
  deathsDatasets.unshift( deathsBrazilLine );
}

function confirmedDrawChart() {
  new Chart( document.getElementById("confirmed-line-chart"), {
    type: 'line',
    data: {
      labels: confirmedLabels,
      datasets: confirmedDatasets
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
            labelString: "Dias a partir de " + confirmedMinValue + " infectados"
          },
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Número de infectados",
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

function deathsDrawChart() {
  new Chart( document.getElementById("deaths-line-chart"), {
    type: 'line',
    data: {
      labels: deathsLabels,
      datasets: deathsDatasets
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
            labelString: "Dias a partir de " + deathsMinValue + " mortes"
          },
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Número de mortes",
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
        text: 'Número de mortos pelo COVID-19'
      }
    }
  });
}

function confirmedDownloadComplete( result ) {
  confirmedExtractData( result );
  confirmedCutDays( 30 );
  confirmedPrepareLabels();
  confirmedPrependBrazil();
  confirmedDrawChart();
}

function deathsDownloadComplete( result ) {
  deathsExtractData( result );
  deathsCutDays( 30 );
  deathsPrepareLabels();
  deathsPrependBrazil();
  deathsDrawChart();
}

Papa.parse(confirmedURL, {
  download: true,
  complete: confirmedDownloadComplete
});


Papa.parse(deathsURL, {
  download: true,
  complete: deathsDownloadComplete
});

