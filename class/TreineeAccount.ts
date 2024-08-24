import { DioAccount } from "./DioAccount.js"

export class TreineeAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      if (amount <= 0) {
        throw new Error(`Valor inválido: ${amount}`)
        }
        this.setBalance(amount+10); // adiciona sempre 10 reais ao deposito
    }
  }
}
