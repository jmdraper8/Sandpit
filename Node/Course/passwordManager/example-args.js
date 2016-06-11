var argv = require('yargs')
	.command('hello', 'Greets the user.', function (yargs) {
		yargs.options({
			name: {
				demand: true, 
				alias: 'n',
				description: 'Your first name goes here.'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here.'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);
/*
if (argv._[0] === 'Hello') {
	console.log('Hello World!');
} else {
	console.log('Hey');
}

if (argv.name !== 'undefined') {
	console.log('Hello ' + argv.name);
}
*/

if (command === 'hello' && typeof argv.name !== 'undefined') {
	if (typeof argv.lastname !== 'undefined') {
		console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
	} else {
		console.log('Hello ' + argv.name);
	}
} else if (command === 'hello') {
	console.log('Hello World!');
}