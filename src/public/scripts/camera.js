const socket = io.connect();
const urlParams = new URLSearchParams(window.location.search);
const myID = urlParams.get('id');
socket.emit('cameraConnected', myID);
socket.on('currentCamera', (data) => {
	if (data === myID) {
		document.getElementById('beep').play();
	} else {
		document.getElementById('beep').pause();
	}
});