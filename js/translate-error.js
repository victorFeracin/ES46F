const translateError = (error) => {
  switch (error) {
    case 'auth/email-already-in-use':
      return 'E-mail já cadastrado';

    case 'auth/invalid-login-credentials':
      return 'E-mail e/ou senha inválidos';

    case 'auth/wrong-password':
      const warn1 = document.querySelector('.wrong-credentials-warn');
      if(warn1 !== null) {
        warn1.setAttribute('style', 'display: block')
      }
      return 'Email e/ou senha inválidos';
    
    case 'auth/user-not-found':
      const warn2 = document.querySelector('.wrong-credentials-warn');
      if(warn2 !== null) {
        warn2.setAttribute('style', 'display: block')
      }
      return 'Email e/ou senha inválidos';

    case 'auth/too-many-requests':
      return 'Muitas tentativas de login. Tente novamente mais tarde';
    
    case 'auth/network-request-failed':
      return 'Sem conexão com a internet'; 

    case 'auth/invalid-email':
      return 'Email inválido';

    case 'storage/unknown':
      return 'Erro desconhecido. Tente novamente mais tarde.';

    case 'storage/object-not-found':
      return 'Arquivo não encontrado.';

    case 'storage/retry-limit-exceeded':
      return 'Limite de tentativas excedido. Tente novamente mais tarde.';

    case 'storage/invalid-argument':
      return 'Argumento inválido.';

    default:
      return error;
  }
}

export default translateError;