const socket = io();
window.onload = function () {
	console.log('loaded');
	console.log('emitting music box connection..');
	socket.emit('musicBoxConnection');
	socket.on('gameStarted', () => {
		document.getElementById('mboxaudio').play();
	});
	socket.on('boxTimerRanOut', () => {
		document.getElementById('mboxaudio').pause();
	});
};