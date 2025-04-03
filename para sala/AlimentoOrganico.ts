import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoEcologico implements ProdutoEcologico{
    nome: string;
    preco: number;
    data_validade: Date
    ingredientes:string[]

    constructor(nome:string, preco:number, data_validade:Date, ingredientes:string[]){
        this.nome = nome;
        this.preco = preco;
        this.data_validade = data_validade;
        this.ingredientes = ingredientes
    }
    
    exibir ():string{
        return `nome: ${this.nome}\n
                preco: ${this.preco}\n
                data de validade: ${this.data_validade}
                ingredientes: ${this.ingredientes}`
    }
}

const prod = new AlimentoEcologico ("bolo de vagem", 12, new Date ("2025-04-04") , ["vagem", "ovo", "fermento natural"])
prod.exibir