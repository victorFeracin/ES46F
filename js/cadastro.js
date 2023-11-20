import FamiliaController from "../controllers/FamiliaController.js";

const getIntegranteELLP = document.getElementById('integrante');
const getNrIntegrantes = document.getElementById('nrIntegrantes');
const getRendaMensal = document.getElementById('rendaMensal');
const getNrComputadores = document.getElementById('nrComputadores');
const getNrCelulares = document.getElementById('nrCelulares');
const getAcessoInternetOptions = document.getElementsByName('acessoInternet');
let getAcessoInternet = '';

const formCadastro = document.getElementById('form-cadastro');

formCadastro.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    getAcessoInternetOptions.forEach((op) => {
      if (op.checked) getAcessoInternet = op.value;
    });
    const familiaController = new FamiliaController();
    let user = JSON.parse(localStorage.getItem('user'));
    await familiaController.createFamilia(getIntegranteELLP.value, getNrIntegrantes.value, getRendaMensal.value, getNrComputadores.value, getNrCelulares.value, getAcessoInternet, user.uid);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});