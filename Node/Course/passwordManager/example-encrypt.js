var crypto = require('crypto-js');

/*
var secretMessage = 'I hid the message.';
var secretKey = '123ABC';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

// Decrypt Message, will get converted to bytes
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
console.log('Decrypted Bytes: ' + bytes);

//Convert the message to a readable string
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log('Decrypted Message: ' + decryptedMessage);

*/

var secretMessage = {

	name: 'John Draper',
	secretName: 'Fallen Angel'

};
var secretKey = '123ABC';

console.log(secretMessage);

var secretMessageJSON = JSON.stringify(secretMessage);

console.log('Object String: ' + secretMessageJSON);

var encryptedMessage = crypto.AES.encrypt(secretMessageJSON, secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
console.log('Decrypted Bytes: ' + bytes);

var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log('Decrypted Message: ' + decryptedMessage);

var secretOBJ = JSON.parse(decryptedMessage);

console.log(secretOBJ);

