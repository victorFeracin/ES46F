import Familia from "../model/Familia.js";
import translateError from "../js/translate-error.js";
import { app } from "../js/firebase-config.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc, addDoc, query, where, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

export default class FamiliaController {

  async createFamilia (integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet) {
    try {
      onAuthStateChanged(auth, async (user) => {
        const userUid = user.uid;
        if(acessoInternet === "1") {
          acessoInternet = true;
        } else {
          acessoInternet = false;
        }

        const familia = new Familia(integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet, userUid);
        const familiaDoc = {
          integrante_ellp: familia.integranteEllp,
          nr_integrantes: familia.nrIntegrantes,
          renda: familia.renda,
          nr_computadores: familia.nrComputadores,
          nr_celulares: familia.nrCelulares,
          acesso_internet: familia.acessoInternet,
          user_uid: familia.userUid
        };
  
        await addDoc(collection(db, 'familia'), familiaDoc);
        
        Toastify({
          text: "Cadastro realizado com sucesso!",
          duration: 3000,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #06d455, #4bd17e)",
            fontFamily: ("Averia Libre", "sans-serif"),
          },
      
        }).showToast();
        setTimeout(() => {
          window.location.href = "./home.html";
        }, 1500);
      });

    } catch(error) {
      const errorMessage = translateError(error.code);
      Toastify({
        text: `Erro: ${errorMessage}`,
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
    };
  }

  async getFamilias () {
    try {
      const familiasCol = collection(db, 'familia');
      const familiasSnapshot = await getDocs(familiasCol);
      const familiasList = familiasSnapshot.docs.map((doc) => {
        const docId = doc.id;
        const docData = doc.data();
        if(docData.acesso_internet === true) {
          docData.acesso_internet = "Sim";
        } else {
          docData.acesso_internet = "Não";
        }
        return { id: docId, data: docData };
      });

      const familiasListSorted = familiasList.sort((a, b) => {
        const nameA = a.data.integrante_ellp.toUpperCase();
        const nameB = b.data.integrante_ellp.toUpperCase();
  
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      return familiasListSorted;
    } catch (error) {
      const errorMessage = translateError(error.code);
      Toastify({
        text: `Erro: ${errorMessage}`,
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

  async getFamiliaById(id) {
    try {
      const familiaToGet = await doc(collection(db, 'familia'), id);
      let familia = await getDoc(familiaToGet);
      familia = { id: familia.id, data: familia.data() };

      return familia;
    } catch(error) {
      const errorMessage = translateError(error.code);
      Toastify({
        text: `Erro: ${errorMessage}`,
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

  async updateFamilia(id, integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet) {
    try {
      onAuthStateChanged(auth, async (user) => {
        const userUid = user.uid;
        if(acessoInternet === "1") {
          acessoInternet = true;
        } else {
          acessoInternet = false;
        }

        const familia = new Familia(integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet, userUid);
        const familiaDoc = {
          integrante_ellp: familia.integranteEllp,
          nr_integrantes: familia.nrIntegrantes,
          renda: familia.renda,
          nr_computadores: familia.nrComputadores,
          nr_celulares: familia.nrCelulares,
          acesso_internet: familia.acessoInternet,
          user_uid: familia.userUid
        };
  
        await updateDoc(doc(db, 'familia', id), familiaDoc);
        
        Toastify({
          text: "Dados atualizados com sucesso!",
          duration: 3000,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #06d455, #4bd17e)",
            fontFamily: ("Averia Libre", "sans-serif"),
          },
      
        }).showToast();
        setTimeout(() => {
          window.location.href = "./home.html";
        }, 1500);
      });

    } catch(error) {
      const errorMessage = translateError(error.code);
      Toastify({
        text: `Erro: ${errorMessage}`,
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

  async deleteFamilia(id) {
    try {
      const familiaToDelete = await doc(collection(db, 'familia'), id);
      await deleteDoc(familiaToDelete);

      Toastify({
        text: "Vacina deletada com sucesso!",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #06d455, #4bd17e)",
          fontFamily: ("Averia Libre", "sans-serif"),
        },
      }).showToast();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch(error) {
      const errorMessage = translateError(error.code);
      Toastify({
        text: `Erro: ${errorMessage}`,
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