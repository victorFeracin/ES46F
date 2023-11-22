import Chart from 'chart.js/auto';
import FamiliaController from "../controllers/FamiliaController.js";

const filter = document.getElementById('filter-not-selected');

filter.addEventListener('click', () =>{
  window.location.href = 'relatorio.html';
});