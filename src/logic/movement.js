function canMove(aiValue, failedAttempts) {
	let rng = getRandomInt(0, 20);
	return rng + 1 <= aiValue;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
