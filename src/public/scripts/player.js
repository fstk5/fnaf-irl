const socket = io.connect();
let failedMovements = 0;
let dataElement1;
let dataElement2;
let dataElement3;
let aiValue;
window.addEventListener('load', () => {
	socket.emit('playerConnected');
	dataElement1 = document.getElementById('data1');
	dataElement2 = document.getElementById('data2');
	dataElement3 = document.getElementById('data3');
	dataElement1.textContent = `Failed Attempts: ${failedMovements}`;
	aiValue = prompt("Please enter your AI value:", "0");
});

function attemptMove() {
	if (canMove(aiValue, failedMovements)) {
		dataElement1.textContent = `Failed Attempts: ${failedMovements}`;
		dataElement2.textContent = `Movement attempt FAILED!`;
		failedMovements = 0;
	} else {
		failedMovements++;
		dataElement2.textContent = `Failed Attempts: ${failedMovements}`;
	}
}