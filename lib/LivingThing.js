
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

  get multiCellular(){
    if (this.uniCellular === false){
      return true;
    } else {
      return false;
    }
  }
  set multiCellular(uniCellular){
    if (uniCellular === true){
      this._uniCellular = false;
    } else {
      this._uniCellular = true;
    }
  }

  get eukaryote(){
    if (this._trueNucleus === true){
      return true;
    } else {
      return false;
    }
  }
  set eukaryote(trueNucleus){
    if (trueNucleus === true){
      this._trueNucleus = true;
    } else {
      this._trueNucleus = false;
    }
  }

  get prokaryote(){
    if (this._trueNucleus === false){
      return true;
    } else {
      return false;
    }
  }
  set prokaryote(trueNucleus){
    if (trueNucleus === false){
      this._trueNucleus = true;
    } else {
      this._trueNucleus = false;
    }
  }

  get anaerobic(){
    if (this._anaerobic === true){
      return true;
    } else {
      return false;
    }
  }
  set anaerobic(anaerobic){
    if (anaerobic === true){
      this._anaerobic = true;
    } else {
      this.anaerobic = false;
    }
  }

  get aerobic(){
    if (this._anaerobic === false){
      return true;
    } else {
      return false;
    }
  }
  set aerobic(anaerobic){
    if (anaerobic === false){
      this._anaerobic = true;
    } else {
      this._anaerobic = false;
    }
  }

  get asexual(){
    if (this._asexual === true){
      return true;
    } else {
      return false;
    }
  }
  set asexual(asexual){
    if (asexual === true){
      this._asexual = true;
    } else {
      this._asexual = false;
    }
  }

  get sexual(){
    if (this._asexual === false){
      return true;
    } else {
      return false;
    }
  }
  set sexual(asexual){
    if (asexual === false){
      this._asexual = true;
    } else {
      this._asexual = false;
    }
  }

  get mobile(){
    if (this._mobile === true){
      return true;
    } else {
      return false;
    }
  }
  set mobile(mobile){
    if (mobile === true){
      this._mobile = true;
    } else {
      this._mobile = false;
    }
  }

  get immobile(){
    if (this._mobile === false){
      return true;
    } else {
      return false;
    }
  }
  set immobile(mobile){
    if (mobile === false){
      this._mobile = true;
    } else {
      this._mobile = false;
    }
  }
};