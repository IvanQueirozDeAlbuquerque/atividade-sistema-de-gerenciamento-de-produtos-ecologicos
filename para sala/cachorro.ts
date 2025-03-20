import { Animal } from "./animal";

class Cachorro implements Animal{
    raca:String
    nome:string
    idade:number

    constructor (raca:string, nome:string, idade:number){
        this.raca = raca
        this.nome = nome
        this.idade = idade
    }

    som(): void {
        console.log("min de papai")
    }
}

const cao = new Cachorro ("doberman", "mel", 5)
cao.som