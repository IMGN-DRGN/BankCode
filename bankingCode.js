const prompt = require('prompt-sync')({ sigint: true });

console.log('========== WELCOME TO IMGN-TRUST =============\n\n');
console.log('Enter Your 4 (Four) Digit Pin To Proceed');

let attempt = 0;
const maxAttempt = 3;
const defaultPin = '1111';

let passCode = prompt(`Enter Pin: `);

while (attempt < maxAttempt) {
  if (passCode !== defaultPin) {
    attempt++;
    console.log(`Invalid Input`);
    passCode = prompt(`Enter Your 4 Digit Pin: `);
  } else {
    console.log(`Welcome, Esteemed Customer!!!`);
    break;
  }
}

if (attempt === maxAttempt) {
  console.log(`Terminated.... Too Many Attempts... Try Again Later`);
} else {
  console.log(`1. Open Savings Account \n2. Open Current Account \n3. Check Balance \n4. Delete Account`);
  let selectOption = prompt(`Enter Option: `);

  let account = {
    savingsAcc: {},
    currentAcc: {}
  };

  function createSavingsAcc() {
    let savingsAcc = { initialBalance: `N721,392,026,00` };
    let accountDetails = [`Account Name`, `Account Number`, `Contact`, `Address`];
    for (const details of accountDetails) {
      savingsAcc[details] = prompt(`Enter ${details} : `).toUpperCase();
    }
    account.savingsAcc = savingsAcc;
    console.log(account.savingsAcc);
  }

  function createCurrentAcc() {
    let currentAcc = { initialBalance: `N721,392,026,00` };
    let accountDetails = [`Account Name`, `Account Number`, `Contact`, `Address`];
    for (const details of accountDetails) {
      currentAcc[details] = prompt(`Enter ${details} : `).toUpperCase();
    }
    account.currentAcc = currentAcc;
    console.log(account.currentAcc);
  }

  function balCheck() {
    let accNum = prompt(`Enter Account Number To Verify Balance : `);
    if (accNum === account.savingsAcc['Account Number']) {
      console.log(`Account Balance:`, account.savingsAcc.initialBalance);
    } else if (accNum === account.currentAcc['Account Number']) {
      console.log(`Account Balance:`, account.currentAcc.initialBalance);
    } else {
      console.log(`Account not found.`);
    }
  }

  switch (selectOption) {
    case '1':
      console.log(`Open Savings Account`);
      createSavingsAcc();
      break;
    case '2':
      console.log(`Open Current Account`);
      createCurrentAcc();
      break;
    case '3':
      console.log(`Check Balance`);
      balCheck();
      break;
    case '4':
      console.log(`Delete Account`);
      break;
    default:
      while (attempt < maxAttempt) {
        if (selectOption !== '1' && selectOption !== '2' && selectOption !== '3' && selectOption !== '4') {
          attempt++;
          console.log(`Invalid Input...`);
          selectOption = prompt(`Enter Option (1 - 4): `);
        } else {
          console.log(selectOption);
          break;
        }
      }
      if (attempt === maxAttempt) {
        console.log(`Exit`);
      }
      break;
  }
}

