export abstract class DioBank {
    readonly name: string;
    protected balance: number;
    readonly numberAccount: number;
    private status: boolean = false;

    constructor(name: string, balance: number, numberAccount: number) {
        this.name = name;
        this.balance = balance;
        this.numberAccount = numberAccount;
    }

    //Métodos Especiais

    setDeposit = (money: number):string => {
        if (this.validateStatus() && money > 0) {
            this.balance += money;
        }
        return `Depósito de ${money} efetuado com sucesso !`;
    }

    setWithdraw = (money: number) => {
        if (this.validateStatus() && this.validadeMoney(money)) {
            this.balance -= money;
            console.log('Saque efetuado com sucesso !')
        }
    }

    getNumberAccount = () => {
        return this.numberAccount;
    }

    //Métodos 

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inexistente')
    }

    validadeMoney = (money: number): boolean => {
        if (money > 0 && this.balance > money) {
            return true
        }

        throw new Error('Solicitação inválida')
    }

    createAccount = () => {
        if (this.status === true) {
            console.log('Conta já está ativa !')
        } else {
            this.status = true;
            console.log('Conta criada com sucesso !')
        }

    }
}