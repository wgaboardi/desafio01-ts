import { DioAccount } from "./DioAccount.js"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      if (amount <= 0) {
        throw new Error(`Valor inválido: ${amount}`)
      }
      this.setBalance(amount);
    }

  }
}
