import UsuarioController from "../controllers/UsuarioController.js";

const btnLogout = document.getElementById("btn-sair-container");

btnLogout.addEventListener("click", async () => {
  const usuarioController = new UsuarioController();
  await usuarioController.logout();
  localStorage.removeItem('user');
})