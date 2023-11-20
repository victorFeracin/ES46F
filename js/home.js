import FamiliaController from "../controllers/FamiliaController.js";

const cardList = document.getElementById('card-list');

window.addEventListener('load', async () => {
  const familiaController = new FamiliaController();
  const familiaList = await familiaController.getFamilias();

  if(familiaList.length > 0) {
    familiaList.map((familia) => {
      cardList.innerHTML += `
      <div class="card-container">
        <div class="card-title-container">
          <h2>Família de <span style="color: #F68D2E">${familia?.data?.integrante_ellp}</span></h2>
        </div>
        <div class="card-content-container">
          <div class="card-content">
            <p>Integrante do ELLP: <span style="color: #F68D2E">${familia?.data?.integrante_ellp}</span></p>
            <p>Número de Integrantes: <span style="color: #F68D2E">${familia?.data?.nr_integrantes}</span></p>
            <p>Renda familiar mensal: <span style="color: #F68D2E">R$ ${familia?.data?.renda}</span></p>
            <p>Nº total de computadores: <span style="color: #F68D2E">${familia?.data?.nr_computadores}</span></p>
            <p>Nº total de celulares: <span style="color: #F68D2E">${familia?.data?.nr_celulares}</span></p>
            <p>Possui acesso à internet: <span style="color: #F68D2E">${familia?.data?.acesso_internet}</span></p>
          </div>
          <div class="card-btns-container">
            <a class="card-btn" href="editar.html#${familia?.id}">
              <i class="material-icons" style='color: #007BCC'>edit</i>
            </a>
            <button class="card-btn" onclick="openPopUp()">
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