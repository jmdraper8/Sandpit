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

	accounts.forEach(function (account) {
		//console.log(account.userName);
		if(username === account.userName) {
			//console.log(account);
			matchedAccount = account;
			
		}
	});
	return matchedAccount;
}

//deposit
function deposit (bankAccount, amount) {
	bankAccount.currentBalance += amount;
	console.log(bankAccount.userName + ' you have deposited $' + amount + ' into your account.');
	console.log('Now you have $' + bankAccount.currentBalance + ' left.');
}


//withdraw
function withdraw (bankAccount, amount) {
	bankAccount.currentBalance -= amount;
	console.log(bankAccount.userName + ' you have withdrawn $' + amount + ' from your account.');
	console.log('Now you have $' + bankAccount.currentBalance + ' left.');
}

//getBalance
function getBalance (bankAccount) {
	console.log(bankAccount.userName + ' your current balance is $' + bankAccount.currentBalance);
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

bankAccount = getAccount('Jenny');

console.log(bankAccount);






