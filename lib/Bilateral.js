var Animal = require('./Animal');

module.exports = class Bilateral extends Animal{
  constructor(name, body){
    super(name, 'bilateral');
    this._body = body;
  }
  get body(){
    return this._body;
  }
  set body(symmetry){
    this._body = symmetry;
  }

};