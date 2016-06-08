var i = 0;
var countLimit = 8;

while (i < countLimit) {
	console.log('while: ' + i);
	i++;
}

for (var i = 0; i < countLimit; i++) {
	console.log('for: ' + i);	
}

function countDownWhile (startPoint, stopPoint) {
	if (startPoint < stopPoint) {
		console.log('Error: Invalid start and stop points.')
	} else {
		while (startPoint > stopPoint) {
			console.log('while: ' + startPoint);
			startPoint--;
		}
	}
}

function countDownFor (startPoint, stopPoint) {
	if (startPoint < stopPoint) {
		console.log('Error: Invalid start and stop points.')
	} else {
		for (var i = startPoint; i > stopPoint; i--) {
			console.log('for: ' + i);	
		}
	}
}

countDownWhile(110, 100);
countDownFor(10, 1);

