import { CompanyBank } from './classes/CompanyBank';
import { PeopleAccount } from './classes/PeopleAccount';

const company1: CompanyBank = new CompanyBank('Google', 8000, 1);
// company1.createAccount();
// console.log(company1.setDeposit(6000));
// console.log(company1)

const people1: PeopleAccount = new PeopleAccount('Jose', 2000, 2);
people1.createAccount();
people1.setDeposit(5000);
console.log(people1.name)
console.log(people1)

