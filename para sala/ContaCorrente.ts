import { ContaBancaria } from "./ContaBancaria";

class ContaCorrente implements ContaBancaria {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("O valor não pode ser sacado")
        }
    }
}

const conta = new ContaCorrente(1000)

conta.depositar(500)
conta.sacar(200)
conta.sacar(1301)