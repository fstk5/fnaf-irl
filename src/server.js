const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
require('dotenv').config({ path: path.join(__dirname, '../.env') });

let isGameStarted = false;
const rawUrls = process.env.CAMERA_URLS || "";
const urlArray = rawUrls.split(' ').filter(Boolean);
const cameraMap = {};
urlArray.forEach((url, index) => {
	cameraMap[index] = url;
});

// 1. Static File Middleware
// This tells Express to look into the 'public' folder for HTML/CSS/JS files
app.use(express.static(path.join(__dirname, 'public')));

// 2. Routing Logic
// Defining specific endpoints for your three main views

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
})
app.get('/cameras', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/cameras.html'));
});

app.get('/mbox', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/mbox.html'));
});

app.get('/player', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/player.html'));
});

io.on('connection', (socket) => {
	console.log('Device connected, waiting for page declaration. ID ', socket.id);
	socket.on('startGame', () => {
		isGameStarted = true;
		io.emit('gameStarted');
	});
	socket.on('cameraPageConnection', () => {
		console.log('Device Guard computer connected on ID ', socket.id);
		socket.on('ready', () => {
			console.log('client ready for data');
			socket.emit('URLS', cameraMap);
			console.log('data emitted');
		});
		socket.on('boxTimerRanOut', () => {
			io.emit('boxTimerRanOut');
		});
		socket.on('disconnect', () => {
			console.log('Guard computer disconnected from ID ', socket.id);
		});
	})
	socket.on('musicBoxConnection', () => {
		console.log('Device Music box connected on ID ', socket.id);
		socket.on('disconnect', () => {
			console.log('Music box disconnected from ID ', socket.id);
		});
	});
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
	console.log(`FNAF Server running at http://localhost:${PORT}`);
});