import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number
    }

    constructor (nome:string, preco:number, dimensoes: {
        largura: number;
        altura: number;
        profundidade: number
    }){
        this.nome = nome
        this.preco = preco
        this.dimensoes = dimensoes
    }

    exibir ():string{
        return `nome: ${this.nome}\n
                preco: ${this.preco}\n
                data de dimensoes: ${this.dimensoes}`
    }
}
const item = new ItemDecoracaoSustentavel ("vaso de planta", 123, {
    largura: 123, altura:123, profundidade: 123
})
item.exibir