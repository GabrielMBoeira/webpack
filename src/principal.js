
/*//import Pessoa from './pessoa' => este é o jeito padrão do ES2015 para importar porem node não deixa. 
const Pessoa = require('./pessoa')

const atendente = new Pessoa
console.log(atendente.cumprimentar()) //DEIXOU EXECUTAR POIS TEM O PLUGIN CODERUNNER INSTALADO*/

import Pessoa from './pessoa'
import './assets'


const atendente = new Pessoa
console.log(atendente.cumprimentar())