import FamiliaController from "../controllers/FamiliaController.js";

const cardList = document.getElementById('card-list');
const btnDeleteConfirm = document.getElementById('btn-delete-confirm');
const filter = document.getElementById('filter-not-selected');
const getSearch = document.getElementById('input-search');
const formSearch = document.getElementById('form-search');
const familiaController = new FamiliaController();

let familiaList = [];

filter.addEventListener('click', () =>{
  window.location.href = 'relatorio-geral.html';
});

const loadFamiliaList = async () => {
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
}

window.addEventListener('load', loadFamiliaList);

btnDeleteConfirm.addEventListener('click', async () => {
  const cardId = btnDeleteConfirm.getAttribute('class');
  if(cardId) {
    await familiaController.deleteFamilia(cardId);
  }
  closePopUp();
});

getSearch.addEventListener('keyup', async () => {
  try {
  const search = familiaList.filter((familia) => {
    return familia.data.integrante_ellp.toLowerCase().includes(getSearch.value.toLowerCase());
  });
  console.log(search.length);
  if(search.length > 0) {
    cardList.innerHTML = "";
    search.map((familia) => {
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
    });
  } else if (search.length == 0) {
    cardList.innerHTML = "";
}
} catch (error) {
  console.log(`Error: ${error}`);
}
});

formSearch.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
  const search = familiaList.filter((familia) => {
    return familia.data.integrante_ellp.toLowerCase().includes(getSearch.value.toLowerCase());
  });
  console.log(search.length);
  if(search.length > 0) {
    cardList.innerHTML = "";
    search.map((familia) => {
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
    });
  } else if (search.length == 0) {
    await Toastify({
      text: "Nenhum resultado encontrado.",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #c60b0b, #cd3544)",
        fontFamily: ("Averia Libre", "sans-serif"),
      },

    }).showToast()
    loadFamiliaList();
}
} catch (error) {
  console.log(`Error: ${error}`);
}
});