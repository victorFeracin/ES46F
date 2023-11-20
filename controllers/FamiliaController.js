import Familia from "../model/Familia.js";
import translateError from "../js/translate-error.js";
import { app } from "../js/firebase-config.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, query, where, orderBy, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

export default class FamiliaController {

  async createFamilia (integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet, userUid) {
    try {
      const familia = new Familia(integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet);
      const familiaDoc = {
        integrante_ellp: familia.integranteEllp,
        nr_integrantes: familia.nrIntegrantes,
        renda: familia.renda,
        nr_computadores: familia.nrComputadores,
        nr_celulares: familia.nrCelulares,
        acesso_internet: familia.acessoInternet,
        user_uid: userUid
      };

      if(familiaDoc.acesso_internet === "1") {
        familiaDoc.acesso_internet = true;
      } else {
        familiaDoc.acesso_internet = false;
      }
  
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


}
