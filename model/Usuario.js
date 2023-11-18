export default class Usuario {
  constructor() {
    this._uid = "";
    this._email = "";
    this._senha = "";
    this._ativo = false;
  }

  // Getters
  get uid() {
      return this._uid;
  }

  get email() {
      return this._email;
  }

  get senha() {
      return this._senha;
  }

  get ativo() {
      return this._ativo;
  }

  // Setters
  set uid(uid) {
      this._uid = uid;
  }

  set email(email) {
      this._email = email;
  }

  set senha(senha) {
      this._senha = senha;
  }

  set ativo(ativo) {
      this._ativo = ativo;
  }
}