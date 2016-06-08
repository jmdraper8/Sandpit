console.log('Starting password manager');

//Require: built in Node.JS function
var storage = require('node-persist');
storage.initSync();

//two arguments
/*storage.setItemSync('accounts', [{
	username: 'John',
	balance: 0
}]);*/
var accounts = storage.getItemSync('accounts');

/*
var jennysAccount = {
	username: 'Jenny',
	balance: 100
}


accounts.push({
	username: 'Jen',
	balance: 75
});

storage.setItemSync('accounts', accounts);

*/
console.log(accounts);
