import FamiliaController from "../controllers/FamiliaController.js";

const cardList = document.getElementById('card-list');
const btnDeleteConfirm = document.getElementById('btn-delete-confirm');
const familiaController = new FamiliaController();

let familiaList = [];

window.addEventListener('load', async () => {
  familiaList = await familiaController.getFamilias();

  if(familiaList.length > 0) {
    familiaList.map((familia) => {
      const formatRenda = (familia?.data?.renda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

      cardList.innerHTML += `
      <div class="card-container">
        <div class="card-title-container">
          <h2>Família de <span style="color: #F68D2E">${familia?.data?.integrante_ellp}</span></h2>
        </div>
        <div class="card-content-container">
          <div class="card-content">
            <p>Integrante do ELLP: <span style="color: #F68D2E">${familia?.data?.integrante_ellp}</span></p>
            <p>Número de Integrantes: <span style="color: #F68D2E">${familia?.data?.nr_integrantes}</span></p>
            <p>Renda familiar mensal: <span style="color: #F68D2E">${formatRenda}</span></p>
            <p>Nº total de computadores: <span style="color: #F68D2E">${familia?.data?.nr_computadores}</span></p>
            <p>Nº total de celulares: <span style="color: #F68D2E">${familia?.data?.nr_celulares}</span></p>
            <p>Possui acesso à internet: <span style="color: #F68D2E">${familia?.data?.acesso_internet}</span></p>
          </div>
          <div class="card-btns-container">
            <a class="card-btn" href="editar.html#${familia?.id}">
              <i class="material-icons" style='color: #007BCC'>edit</i>
            </a>
            <button class="card-btn" onclick="openPopUp('${familia?.id}')">
              <i class="material-icons" style='color: #F36A6A'>delete</i>
            </button>
          </div>
        </div>
      </div>
      `;
    })
  } else {
    cardList.innerHTML += `
    <h1 style="color:#F36A6A; margin:0 auto; font-size: 1.5rem">Nenhuma família cadastrada</h1>
    `;
  }
});

btnDeleteConfirm.addEventListener('click', async () => {
  const cardId = btnDeleteConfirm.getAttribute('class');
  if(cardId) {
    await familiaController.deleteFamilia(cardId);
  }
  closePopUp();
});