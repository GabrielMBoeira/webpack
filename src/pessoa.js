/*export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!!!'
    }
}                                             ESTE É O JEITO DE EXPORTAR ES2015 POREM NODE NAO DEIXA*/

/*module.exports = class Pessoa {
    cumprimentar() {
        return 'Bom dia!!!' //DEIXOU AGOAR DEVIDO O CODE RUNNER INSTALADO (PLUGIN)
    }
}*/
import './modulos/moduloA'

export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!!!'
    }
}


