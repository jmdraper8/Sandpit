function Users() {
	this.name = "";
	this.life = 100;

	this.giveLife = function giveLife(targetPlayer) {
		targetPlayer.life += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

var John = new Users();
var Jenny = new Users();

John.name = "John";
Jenny.name = "Jenny";

John.giveLife(Jenny);

console.log("John:" + John.life);
console.log("Jenny" + Jenny.life);

//You can add functions to all objects
Users.prototype.upperCut = function upperCut(targetPlayer) {
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted" + targetPlayer.name);
};

Jenny.upperCut(John);

console.log("John:" + John.life);
console.log("Jenny" + Jenny.life);

//You can add properties to all objects
Users.prototype.magic = 60;
console.log(John.magic);
console.log(Jenny.magic);