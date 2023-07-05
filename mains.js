class Account {
  constructor(accountNumber, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Vklad ve výši ${amount} Kč byl proveden.`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Výběr ve výši ${amount} Kč byl proveden.`);
    } else {
      console.log("Nedostatečný zůstatek na účtu.");
    }
  }

  displayBalance() {
    console.log(`Aktuální zůstatek na účtu ${this.accountNumber} je ${this.balance} Kč.`);
  }
}

class Bank {
  constructor() {
    this.accounts = {};
  }

  createAccount(accountNumber, initialBalance = 0) {
    if (this.accounts.hasOwnProperty(accountNumber)) {
      console.log("Účet s tímto číslem již existuje.");
    } else {
      this.accounts[accountNumber] = new Account(accountNumber, initialBalance);
      console.log(`Účet s číslem ${accountNumber} byl vytvořen.`);
    }
  }

  getAccount(accountNumber) {
    if (this.accounts.hasOwnProperty(accountNumber)) {
      return this.accounts[accountNumber];
    } else {
      console.log("Účet s tímto číslem neexistuje.");
      return null;
    }
  }
}

const bank = new Bank();

while (true) {
  console.log("\n******** Bankovní aplikace ********");
  console.log("1. Vytvořit nový účet");
  console.log("2. Vklad na účet");
  console.log("3. Výběr z účtu");
  console.log("4. Zobrazit zůstatek na účtu");
  console.log("5. Konec");

  const choice = prompt("Zadejte číslo volby: ");

  switch (choice) {
    case "1":
      const accountNumber = prompt("Zadejte číslo účtu: ");
      const initialBalance = parseFloat(prompt("Zadejte počáteční zůstatek na účtu: "));
      bank.createAccount(accountNumber, initialBalance);
      break;

    case "2":
      const depositAccountNumber = prompt("Zadejte číslo účtu: ");
      const depositAccount = bank.getAccount(depositAccountNumber);
      if (depositAccount) {
        const depositAmount = parseFloat(prompt("Zadejte částku k vložení: "));
        depositAccount.deposit(depositAmount);
      }
      break;

    case "3":
      const withdrawAccountNumber = prompt("Zadejte číslo účtu: ");
      const withdrawAccount = bank.getAccount(withdrawAccountNumber);
      if (withdrawAccount) {
        const withdrawAmount = parseFloat(prompt("Zadejte částku k výběru: "));
        withdrawAccount.withdraw(withdrawAmount);
      }
      break;

    case "4":
      const balanceAccountNumber = prompt("Zadejte číslo účtu: ");
      const balanceAccount = bank.getAccount(balanceAccountNumber);
      if (balanceAccount) {
        balanceAccount.displayBalance();
      }
      break;

    case "5":
      console.log("Děkujeme, že jste použili bankovní aplikaci. Ukončení programu.");
      process.exit(0);

    default:
      console.log("Neplatná volba. Zadejte číslo volby znovu.");
      break;
  }
}
