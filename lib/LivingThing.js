'use strict';

module.exports = class LivingThing {
  constructor( name, uniCellular, trueNucleus, anaerobic, asexual, mobile ){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
  get name(){
    return this._name;
  }
  set name(name){
    if (typeof name !== 'string'){
      throw new TypeError('LivingThing.name must be a string');
    }
    this._name = name;
  }
  get uniCellular(){
    if (this._uniCellular === true){
      return true;
    } else {
      return false;
    }
  }
  set uniCellular(uniCellular){
    if (typeof (uniCellular) !== 'string'){
    this._uniCellular = uniCellular;
    } else {
      throw new TypeError('uniCellular must be a string');

    }
  }
};