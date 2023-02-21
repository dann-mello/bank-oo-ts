import { DioBank } from "./DioBank";

export class PeopleAccount extends DioBank {

    constructor(name: string, balance: number, numberAccount: number) {
        super(name, balance, numberAccount)
    }

    setDeposit = (money: number): string => {
        if (this.validateStatus() && money > 0) {
            this.balance += money + 10;
        }
        return `Depósito de ${money + 10} efetuado com sucesso !`
    }
}