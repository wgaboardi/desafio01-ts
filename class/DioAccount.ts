export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      if (amount <= 0) {
        throw new Error(`Valor inválido: ${amount}`)
        }
      this.balance+=amount;
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus()){
      if (amount <= 0) {
        throw new Error(`Valor inválido: ${amount}`)
      }
      if (this.balance < amount) {
        throw new Error('Saldo insuficiente')
      }
      this.setBalance(amount*-1);
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (amount: number): void => {
    this.balance += amount;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
