let numero:number = 10;
console.log(numero);

let nome:string = "Ivan";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao (nome:string, idade:number){
    console.log(`Ola eu me chamo ${nome} e tenho ${idade} anos`);
}
const nomeUsuario:string = "Ivan";
const idade:number = 22;
saudacao(nomeUsuario, idade);

//Objeto
const pessoa = {
    nome: "Ivan",
    idade: 18,
    cidade: "Rio de Janeiro",
    apresentar:function ():string{
        return `Ola meu nome e ${this.nome}, e tenho ${this.idade}, sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function somar(a:number, b:number): number{
    return a + b;
}
console.log(somar(3,4))