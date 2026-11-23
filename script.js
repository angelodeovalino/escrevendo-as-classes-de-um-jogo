let ataques = require('./ataques.json')

class heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        for(const i in ataques) {
            if(i === this.tipo){
                console.log(`O ${this.tipo} atacou usando ${ataques[i]}`)
            }
        }
    }
}

let mago = new heroi("Gab", "65", "mago")
let guerreiro = new heroi("Adam", "23", "guerreiro")
let monge = new heroi("Harold", 47, "monge")
let ninja = new heroi("Alicia", 29, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
