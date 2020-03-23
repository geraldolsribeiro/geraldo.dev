var url;
// url = "./COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";
url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";

Papa.parse(url, {
  download: true,
  complete: function( result ) {
    var datasets = [];
    var labels = [];
    var maxsize = 0;
    var minValue = 30;
    var maxValue = 10000;
    var brazilLine = {};
    result.data.forEach( function( locationData, index ) {
      // ignora o cabeçalho
      if( index == 0 ) { return; }

      [state,country,lat,long, ...data] = locationData;
      current = data[ data.length - 1 ];
      // Corta os paises com baixa contagem
      if( current < 1000 ) {
        return;
      }

      data = data.map(function(x) { return parseInt(x,10); });
      data = data.filter( function(x) { return x >= minValue && x <= maxValue; });
      maxsize = data.length > maxsize ? data.length : maxsize;

      line = {};
      line.fill = false;
      line.data = data;
      line.label = country + " " + state;

      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);

      line.borderColor = "orange";
      line.borderColor = "rgba(" + r + "," + g + "," + b + ",0.2)";

      if( country != "Brazil" ) {
        datasets.push( line );
      } else {
        brazilLine = line;
      }
    });

    maxsize = maxsize > 30 ? 30 : maxsize;

    //var len = datasets[0].data.length;
    for( var i=0; i<maxsize; ++i ) {
      labels.push( i );
    }

    brazilLine.borderColor = "black";
    brazilLine.fill = true;

    datasets.unshift( brazilLine );
    new Chart( document.getElementById("line-chart"), {
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
});


