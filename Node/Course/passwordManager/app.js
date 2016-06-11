console.log('Starting password manager');
var crypto = require('crypto-js');

var argv = require('yargs')
	.command('create', 'Create a new account.', function (yargs) {
		yargs.options({
			accountName: {
				demand: true, 
				alias: 'a',
				description: 'Your Account name goes here.',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Your username name goes here.',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Your password goes here.',
				type: 'string'
			},
			passkey: {
				demand: true,
				alias: 'k',
				description: 'Master private key.',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Retrieve an existing account.', function (yargs) {
		yargs.options({
			accountName: {
				demand: true, 
				alias: 'a',
				description: 'Your Account name goes here.',
				type: 'string'
			},
			passkey: {
				demand: true,
				alias: 'k',
				description: 'Master private key.',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0];

//Require: built in Node.JS function
var storage = require('node-persist');
storage.initSync();

//two arguments
/*storage.setItemSync('accounts', [{
	username: 'John',
	balance: 0
}]);
var accounts = storage.getItemSync('accounts');


var jennysAccount = {
	username: 'Jenny',
	balance: 100
}


accounts.push({
	username: 'Jen',
	balance: 75
});

storage.setItemSync('accounts', accounts);

console.log(accounts);

*/

//create -accountName -username -password


//get -accountName


//Project 1 
//account.name Facebook
//account.username User123
//account.password Password123

function getAccounts (passkey) {
	
	var encryptedAccounts = storage.getItemSync('accounts');
	var accounts = []
	//decrypt
	if (typeof encryptedAccounts !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccounts, passkey);
		var accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	return accounts;
}

function saveAccounts (accounts, passkey) {
	//encrypt
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), passkey);
	//setItems Sync
	storage.setItemSync('accounts', encryptedAccounts.toString());
	return accounts;

}

function createAccount (account, passkey) {

	var accounts = getAccounts(passkey);

	accounts.push(account);
	console.log(accounts);

	saveAccounts(accounts, passkey);
	return account;

}

function getAccount (accountName, passkey) {
	var accounts = getAccounts(passkey);

	for (var i = 0; i < accounts.length; i++) {

		if (accounts[i].name === accountName) {
			return accounts[i];
		}
	};

	return 'undefined';
}


if (command === 'create') {
	try {

		var createdAccount = createAccount({
			name: argv.accountName,
			username: argv.username,
			password: argv.password
		}, argv.passkey);


		console.log('Account created!');
		console.log(createdAccount);

	} catch (e) {
		console.log('Account not created successfully!');
	}

} else if (command === 'get') {
	
	try {
		var searchAccount = getAccount(argv.accountName, argv.passkey);
		console.log('Account Found!');
		console.log(searchAccount);
	} catch (e) {
		console.log('Accounts not fetched successfully!');
	}
}








