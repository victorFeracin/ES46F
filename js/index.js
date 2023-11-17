import UsuarioController from "../controllers/UsuarioController.js";

const getEmail = document.getElementById('login-email');
const getPassword = document.getElementById('login-senha');

const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const usuarioController = new UsuarioController();
    const userData = JSON.stringify(await usuarioController.login(getEmail.value, getPassword.value));
    localStorage.setItem('user', userData);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});