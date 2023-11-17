import Usuario from "../model/Usuario.js";
import translateError from "../js/translate-error.js";
import { app } from "../js/firebase-config.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, query, where, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default class UsuarioController {
  async login (email, senha) {
    try {
      const user = new Usuario();
      user.email = email;
      user.senha = senha;
      const credentials = await signInWithEmailAndPassword(auth, user.email, user.senha);
      window.location.href = './home.html';
      return credentials.user;
    } catch (error) {
      const errorMessage = translateError(error.code);
      Toastify({
        text: `${errorMessage}`,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #c60b0b, #cd3544)",
          fontFamily: ("Montserrat", "sans-serif"),
          borderRadius: "10px"
        },
  
      }).showToast();
    }
  };

  async logout () {
    try {
      await signOut(auth);
      window.location.replace("index.html");
    } catch (error) {
      Toastify({
        text: `${errorMessage}`,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #c60b0b, #cd3544)",
          fontFamily: ("Averia Libre", "sans-serif"),
        },
  
      }).showToast();
    }
  }
}