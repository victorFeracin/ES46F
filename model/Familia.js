export default class Familia {
  constructor(integranteEllp, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet, userUid) {
    this._integranteEllp = integranteEllp;
    this._nrIntegrantes = nrIntegrantes;
    this._renda = renda;
    this._nrComputadores = nrComputadores;
    this._nrCelulares = nrCelulares;
    this._acessoInternet = acessoInternet;
    this._userUid = userUid;
  }

  // Getters
  get id() {
      return this._id;
  }

  get integranteEllp() {
    return this._integranteEllp;
  }

  get nrIntegrantes() {
      return this._nrIntegrantes;
  }

  get renda() {
      return this._renda;
  }

  get nrComputadores() {
      return this._nrComputadores;
  }

  get nrCelulares() {
      return this._nrCelulares;
  }

  get acessoInternet() {
      return this._acessoInternet;
  }

  get userUid() {
    return this._userUid;
  }

  // Setters
  set id(id) {
      this._id = id;
  }

  set integranteEllp(integranteEllp) {
    this._integranteEllp = integranteEllp;
  }

  set nrIntegrantes(nrIntegrantes) {
      this._nrIntegrantes = nrIntegrantes;
  }

  set renda(renda) {
      this._renda = renda;
  }

  set nrComputadores(nrComputadores) {
      this._nrComputadores = nrComputadores;
  }

  set nrCelulares(nrCelulares) {
      this._nrCelulares = nrCelulares;
  }

  set acessoInternet(acessoInternet) {
      this._acessoInternet = acessoInternet;
  }

  set userUid(userUid) {
    this._userUid = userUid;
}
}