export default class Familia {
  constructor(id, nrIntegrantes, renda, nrComputadores, nrCelulares, acessoInternet) {
    this._id = id;
    this._nrIntegrantes = nrIntegrantes;
    this._renda = renda;
    this._nrComputadores = nrComputadores;
    this._nrCelulares = nrCelulares;
    this._acessoInternet = acessoInternet;
  }

  // Getters
  get id() {
      return this._id;
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

  // Setters
  set id(id) {
      this._id = id;
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
}