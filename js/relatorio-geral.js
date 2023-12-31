import FamiliaController from "../controllers/FamiliaController.js";

const SALARIO_MINIMO = 1320.00;
const chartNrIntegrantes = document.getElementById('chart-nr-integrantes');
const chartRenda = document.getElementById('chart-renda');
const chartNrComputadores = document.getElementById('chart-nr-computadores');
const chartNrCelulares = document.getElementById('chart-nr-celulares');
const chartAcessoInternet = document.getElementById('chart-acesso-internet');
const filter = document.getElementById('filter-not-selected');
const familiaController = new FamiliaController();

let familiaList = [];
let nrIntegrantesList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rendaList = [0, 0, 0, 0, 0, 0, 0];
let nrComputadoresList = [0, 0, 0, 0, 0, 0];
let nrCelularesList = [0, 0, 0, 0, 0, 0]
let acessoInternetList = [0, 0];

filter.addEventListener('click', () =>{
  window.location.href = 'relatorio.html';
});

window.addEventListener('load', async () => {
  familiaList = await familiaController.getFamilias();
  familiaList.map((familia) => {
    const numeroIntegrantes = parseInt(familia?.data?.nr_integrantes, 10);
    if (numeroIntegrantes === 1) {
      nrIntegrantesList[0]++;
    } else if (numeroIntegrantes === 2) {
      nrIntegrantesList[1]++;
    } else if (numeroIntegrantes === 3) {
      nrIntegrantesList[2]++;
    } else if (numeroIntegrantes === 4) {
      nrIntegrantesList[3]++;
    } else if (numeroIntegrantes === 5) {
      nrIntegrantesList[4]++;
    } else if (numeroIntegrantes === 6){
      nrIntegrantesList[5]++;
    } else if (numeroIntegrantes === 7){
      nrIntegrantesList[6]++;
    } else if (numeroIntegrantes === 8){
      nrIntegrantesList[7]++;
    } else if (numeroIntegrantes === 9){
      nrIntegrantesList[8]++;
    } else {
      nrIntegrantesList[9]++;
    }

    const renda = familia?.data?.renda;
    if ( renda < (SALARIO_MINIMO/2)) {
      rendaList[0]++;
    } else if (renda >= (SALARIO_MINIMO/2) && renda < SALARIO_MINIMO) {
      rendaList[1]++;
    } else if (renda >= SALARIO_MINIMO && renda < (SALARIO_MINIMO * 2)) {
      rendaList[2]++;
    } else if (renda >= (SALARIO_MINIMO * 2) && renda < (SALARIO_MINIMO * 3)) {
      rendaList[3]++;
    } else if (renda >= (SALARIO_MINIMO * 3) && renda < (SALARIO_MINIMO * 5)) {
      rendaList[4]++;
    } else if (renda >= (SALARIO_MINIMO * 5) && renda < (SALARIO_MINIMO * 10)) {
      rendaList[5]++;
    } else {
      rendaList[6]++;
    }

    const numeroComputadores = parseInt(familia?.data?.nr_computadores, 10);
    if (numeroComputadores === 0) {
      nrComputadoresList[0]++;
    } else if (numeroComputadores === 1) {
      nrComputadoresList[1]++;
    } else if (numeroComputadores === 2) {
      nrComputadoresList[2]++;
    } else if (numeroComputadores === 3) {
      nrComputadoresList[3]++;
    } else if (numeroComputadores === 4) {
      nrComputadoresList[4]++;
    } else {
      nrComputadoresList[5]++;
    }

    const numeroCelulares = parseInt(familia?.data?.nr_celulares, 10);
    if (numeroCelulares === 0) {
      nrCelularesList[0]++;
    } else if (numeroCelulares === 1) {
      nrCelularesList[1]++;
    } else if (numeroCelulares === 2) {
      nrCelularesList[2]++;
    } else if (numeroCelulares === 3) {
      nrCelularesList[3]++;
    } else if (numeroCelulares === 4) {
      nrCelularesList[4]++;
    } else {
      nrCelularesList[5]++;
    }

    const acessoInternet = familia?.data?.acesso_internet;
    if (acessoInternet === "Sim") {
      acessoInternetList[0]++;
    } else {
      acessoInternetList[1]++;
    }
  });

  showNrIntegrantesChart();
  showRendaChart();
  showNrComputadoresChart();
  showNrCelularesChart();
  showAcessoInternetChart();
});

//NUMERO DE INTEGRANTES
const showNrIntegrantesChart = () => {
  new Chart(chartNrIntegrantes, {
    type: 'bar',
    data: {
      labels: ['1 integrante', '2 integrantes', '3 integrantes', '4 integrantes', '5 integrantes', '6 integrantes', '7 integrantes', '8 integrantes', '9 integrantes', '10 ou mais integrantes'],
      datasets: [{
        label: 'Famílias',
        data: nrIntegrantesList,
        borderWidth: 1,
        backgroundColor: '#F68D2E'
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return Number.isInteger(value) ? value : '';
            }
          }
        }
      },
      indexAxis: 'y',
      beginAtZero: true,
      plugins: {
        title: {
          display: true,
          text: 'Quantidade de integrantes por família de cada integrante do ELLP',
        }
      },
    }
  });
}

//RENDA
const showRendaChart = () => {
  new Chart(chartRenda, {
    type: 'bar',
    data: {
      labels: ['Até 1/2 salário mínimo', '1/2 à 1 salário mínimo', '1 à 2 salários mínimos', '2 à 3 salários mínimos', '3 à 5 salários mínimos', '5 à 10 salários mínimos', 'Mais de 10 salários mínimos'],
      datasets: [{
        label: 'Famílias',
        data: rendaList,
        borderWidth: 1,
        backgroundColor: '#007BCC'
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return Number.isInteger(value) ? value : '';
            }
          }
        }
      },
      indexAxis: 'y',
      beginAtZero: true,
      plugins: {
        title: {
          display: true,
          text: 'Renda familiar mensal dos integrantes do ELLP',
        }
      },
    }
  });
}

//NUMERO DE COMPUTADORES
const showNrComputadoresChart = () => {
  new Chart(chartNrComputadores, {
    type: 'bar',
    data: {
      labels: ['0 computadores', '1 computador', '2 computadores', '3 computadores', '4 computadores', '5 ou mais computadores'],
      datasets: [{
        label: 'Famílias',
        data: nrComputadoresList,
        borderWidth: 1,
        backgroundColor: '#F68D2E'
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return Number.isInteger(value) ? value : '';
            }
          }
        }
      },
      indexAxis: 'y',
      beginAtZero: true,
      plugins: {
        title: {
          display: true,
          text: 'Número de computadores por família de cada integrante do ELLP',
        }
      },
    }
  });
}

//NUMERO DE CELULARES
const showNrCelularesChart = () => {
  new Chart(chartNrCelulares, {
    type: 'bar',
    data: {
      labels: ['0 celulares', '1 celular', '2 celulares', '3 celulares', '4 celulares', '5 ou mais celulares'],
      datasets: [{
        label: 'Famílias',
        data: nrCelularesList,
        borderWidth: 1,
        backgroundColor: '#007BCC'
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return Number.isInteger(value) ? value : '';
            }
          }
        }
      },
      indexAxis: 'y',
      beginAtZero: true,
      plugins: {
        title: {
          display: true,
          text: 'Número de celulares por família de cada integrante do ELLP',
        }
      },
    }
  });
}

const showAcessoInternetChart = () => {
  new Chart(chartAcessoInternet, {
    type: 'bar',
    data: {
      labels: ['Possui acesso à internet', 'Não possui acesso à internet',],
      datasets: [{
        label: 'Famílias',
        data: acessoInternetList,
        borderWidth: 1,
        backgroundColor: '#F68D2E'
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return Number.isInteger(value) ? value : '';
            }
          }
        }
      },
      indexAxis: 'y',
      beginAtZero: true,
      plugins: {
        title: {
          display: true,
          text: 'Acesso à internet por cada família',
        }
      },
    }
  });
}