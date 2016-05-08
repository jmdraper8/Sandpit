function printAvatar() {
	console.log("Avatar: PG-13");
}

function printAliens () {
	console.log("Aliens: MA");
}

//Only what is exported is visible
module.exports.avatar = printAvatar;
