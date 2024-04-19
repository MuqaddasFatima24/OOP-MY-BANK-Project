import inquirer from "inquirer";

class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    };
  
    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited ${amount} PKR: `);
    };
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} PKR: `);
      } else {
        console.log("Insufficient funds.");
      };
    };
  
    checkBalance(amount: number): void {
      console.log(`Current balance: ${this.balance} PKR: `);
    };
  };

  // Example usage:
const myAccount = new BankAccount(2400);
myAccount.checkBalance(1900); 
myAccount.deposit(50); 
myAccount.checkBalance(1900); 
myAccount.withdraw(30); 
myAccount.checkBalance(1900); 
myAccount.withdraw(200);