import { Livro } from "./livro";

class LivroDigital implements Livro{
    formato:string
    titulo:string;
    autor:string;

    constructor (formato:string, titulo:string, autor:string){
        this.formato = formato
        this.titulo = titulo
        this.autor = autor
    }

    detalhes():string{
        return `formato: ${this.formato}\n
                titulo: ${this.titulo}\n
                autor ${this.autor}`
    }
}

const meuLivro = new LivroDigital ("pdf","Harry Potter and the Phylosophal Stone", "J.K. Rowling")
meuLivro.detalhes