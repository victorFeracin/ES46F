import FamiliaController from "../controllers/FamiliaController.js";

const getIntegranteELLP = document.getElementById('integrante');
const getNrIntegrantes = document.getElementById('nrIntegrantes');
const getRendaMensal = document.getElementById('rendaMensal');
const getNrComputadores = document.getElementById('nrComputadores');
const getNrCelulares = document.getElementById('nrCelulares');
const getAcessoInternetOptions = document.getElementsByName('acessoInternet');
let getAcessoInternet = '';

const formCadastro = document.getElementById('form-cadastro');

getRendaMensal.addEventListener('input', () => {
  var rendaValue = getRendaMensal.value.replace(/[^0-9]/g, '');
  var rendaBRLValue = (Number(rendaValue) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  getRendaMensal.value = rendaBRLValue;
})

formCadastro.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    getAcessoInternetOptions.forEach((op) => {
      if (op.checked) getAcessoInternet = op.value;
    });
    const rendaFloatValue = parseFloat(getRendaMensal.value.replace(/[^\d,]/g, "").replace(",", "."));
    const familiaController = new FamiliaController();
    await familiaController.createFamilia(getIntegranteELLP.value, getNrIntegrantes.value, rendaFloatValue, getNrComputadores.value, getNrCelulares.value, getAcessoInternet);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});