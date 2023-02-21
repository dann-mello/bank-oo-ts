import { DioBank } from './DioBank';

export class CompanyBank extends DioBank {

    constructor(name: string, balance: number, numberAccount: number) {
        super(name, balance, numberAccount)
    }

    getLoan = (loan: number) => {
        if (this.validateStatus() && loan > 0) {
            this.balance += loan;
        }
    }
}