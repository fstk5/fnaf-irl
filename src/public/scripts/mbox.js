const socket = io();
window.onload = function () {
	console.log('loaded');
	console.log('emitting music box connection..');
	socket.emit('musicBoxConnection');
	socket.on('boxTimerRanOut', () => {
		document.getElementById('mboxaudio').pause();
	});
};