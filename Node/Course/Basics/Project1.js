var bankAccount = {
	currentbalance: 100
}

//deposit
function deposit (bankAccount, amount) {
	bankAccount.currentbalance += amount;
	console.log('You have deposited $' + amount + ' into your account.');
	console.log('Now you have $' + bankAccount.currentbalance + ' left.');
}

//withdraw
function withdraw (bankAccount, amount) {
	bankAccount.currentbalance -= amount;
	console.log('You have withdrawn $' + amount + ' from your account.');
	console.log('Now you have $' + bankAccount.currentbalance + ' left.');
}

//getBalance
function getBalance (bankAccount) {
	console.log('Your current balance is $' + bankAccount.currentbalance);
}


deposit(bankAccount, 50);
withdraw(bankAccount, 2.50);
getBalance(bankAccount);