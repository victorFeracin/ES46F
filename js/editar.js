import FamiliaController from "../controllers/FamiliaController.js";

const getIntegranteELLP = document.getElementById('integrante');
const getNrIntegrantes = document.getElementById('nrIntegrantes');
const getRendaMensal = document.getElementById('rendaMensal');
const getNrComputadores = document.getElementById('nrComputadores');
const getNrCelulares = document.getElementById('nrCelulares');
const getAcessoInternetOptions = document.getElementsByName('acessoInternet');
let getAcessoInternet = '';

const formEditar = document.getElementById('form-editar');

window.addEventListener('load', async () => {
  const familiaController = new FamiliaController();
  const familiaData = await familiaController.getFamiliaById((window.location.href).substring((window.location.href).indexOf('#') + 1));

  getIntegranteELLP.value = familiaData?.data?.integrante_ellp;
  getNrIntegrantes.value = familiaData?.data?.nr_integrantes;
  getRendaMensal.value = (familiaData?.data?.renda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  getNrComputadores.value = familiaData?.data?.nr_computadores;
  getNrCelulares.value = familiaData?.data?.nr_celulares;
  if(familiaData?.data?.acesso_internet === true) {
    getAcessoInternetOptions[0].checked = true;
    getAcessoInternet = getAcessoInternetOptions.value;
  } else {
    getAcessoInternetOptions[1].checked = true;
    getAcessoInternet = getAcessoInternetOptions.value;
  }
});

getRendaMensal.addEventListener('input', () => {
  var valorNumerico = getRendaMensal.value.replace(/[^0-9]/g, '');
  var valorFormatado = (Number(valorNumerico) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  getRendaMensal.value = valorFormatado;
})

formEditar.addEventListener('submit', async (event) => {
  event.preventDefault();
  try{
    getAcessoInternetOptions.forEach((op) => {
      if (op.checked) getAcessoInternet = op.value;
    });
    const rendaFloatValue = parseFloat(getRendaMensal.value.replace(/[^\d,]/g, "").replace(",", "."));
    const familiaController = new FamiliaController();
    const familiaId = (window.location.href).substring((window.location.href).indexOf('#') + 1);
    await familiaController.updateFamilia(familiaId, getIntegranteELLP.value, getNrIntegrantes.value, rendaFloatValue, getNrComputadores.value, getNrCelulares.value, getAcessoInternet);
  } catch(error) {
    console.log(`Error: ${error}`);
  }
});