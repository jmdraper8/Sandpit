var accounts = [];

var bankAccount = {
	currentBalance: 0,
	userName: ''
}

//create account (Pushes onto accounts array, return account)
function createAccount (account) {
	accounts.push(account);
	console.log(accounts);
	return account;
}

function getAccount (username) {

	var matchedAccount;

	for (var i = 0; i < accounts.length; i++) {
		if(username === accounts[i].userName) {
			//console.log(account);
			matchedAccount = accounts[i];
			
		}
	};

	return matchedAccount;
}

//deposit
function deposit (bankAccount, amount) {

	if (typeof amount === 'number') {
		bankAccount.currentBalance += amount;
		console.log(bankAccount.userName + ' you have deposited $' + amount + ' into your account.');
		console.log('Now you have $' + bankAccount.currentBalance + ' left.');
	} else {
		console.log('Error: Amount is not a valid Number.');
	}
}


//withdraw
function withdraw (bankAccount, amount) {
	if (typeof amount === 'number') {
		bankAccount.currentBalance -= amount;
		console.log(bankAccount.userName + ' you have withdrawn $' + amount + ' from your account.');
		console.log('Now you have $' + bankAccount.currentBalance + ' left.');
	} else {
		console.log('Error: Amount is not a valid Number.');
	}
}

//getBalance
function getBalance (bankAccount) {
	console.log(bankAccount.userName + ' your current balance is $' + bankAccount.currentBalance);
}

//createBalanceGetter

function createBalanceGetter (account) {
	return function balanceGetter () {
			return account.currentBalance;
	}
}


var johnsAccount = createAccount({
	userName: 'John',
	currentBalance: 100
});

var jennysAccount = createAccount({
	userName: 'Jenny',
	currentBalance: 150
});

deposit(johnsAccount, 100);
deposit(jennysAccount, 150);

withdraw(johnsAccount, 10);

console.log(accounts);

bankAccount = getAccount('John');

console.log(bankAccount);

var johnsBalance = createBalanceGetter(johnsAccount);

var balance = johnsBalance();

console.log(balance);
console.log(johnsBalance());







