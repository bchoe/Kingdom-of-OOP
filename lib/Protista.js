var Eukaryota = require('./Eukaryota');

module.exports = class Protista extends Eukaryota{
  constructor(name, uniCellular, mobile, hetertroph){
    super(name, uniCellular, true, mobile, hetertroph);
  }
};