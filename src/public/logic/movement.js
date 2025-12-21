function canMove(aiValue = 0, failedAttempts = 0) {
	let finalRandomValue;
	let rng = getRandomInt(0, 20);
	if (failedAttempts !== 0 && rng !== 20) {
		let failedAttemptsWeight = failedAttempts * 0.24;
		finalRandomValue = Math.round(rng + failedAttemptsWeight);
	} else {
		finalRandomValue = rng;
	}
	return finalRandomValue <= aiValue;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}