import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome: string;
    preco: number;
    volume: number;

    constructor (nome:string , preco:number , volume:number){
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }

    exibir ():string{
        return `nome: ${this.nome}\n
                preco: ${this.preco}\n
                data de volume: ${this.volume}`
    }
}
const prod = new ProdutoLimpezaBiodegradavel ("vanish", 123, 123)
prod.exibir