// import { app } from "./firebase-config.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { getFirestore, collection, getDocs, addDoc, query, where, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export const login = async (email, password) => {
//   try {
//     const credentials = await signInWithEmailAndPassword(auth, email, password);
//     window.location.href = './home.html';
//     return credentials.user;
//   } catch (error) {
//     const errorMessage = translateError(error.code);
//     Toastify({
//       text: `Erro: ${errorMessage}`,
//       duration: 3000,
//       close: true,
//       gravity: "bottom",
//       position: "right",
//       stopOnFocus: true,
//       style: {
//         background: "linear-gradient(to right, #c60b0b, #cd3544)",
//         fontFamily: ("Averia Libre", "sans-serif"),
//       },

//     }).showToast();
//   }
// };