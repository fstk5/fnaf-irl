const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
require('dotenv').config({ path: path.join(__dirname, '../.env') });

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

// 3. Socket.io "Flow of Data"
io.on('connection', (socket) => {
	console.log('A device connected:', socket.id);
	
	// Listen for the Guard winding the box
	socket.on('boxInteract', (data) => {
		// Broadcast the new level to the Music Box logic and the Guard UI
		io.emit('boxIncrease', data.newLevel);
	});
});

io.on('playerConnection', (socket) => {
	console.log('A device connected:', socket.id);
})

for (socket.id in io) {

}

const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
	console.log(`FNAF Server running at http://localhost:${PORT}`);
});