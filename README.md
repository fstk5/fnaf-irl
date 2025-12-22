# fnaf-irl

## Overview

fnaf-irl is a project I started working on and finished in like.. 5 days?
It's mainly a simple camera interface with a music box and sound effects that play on the cameras.
It's very simple and barebones, but hey, I made it in less than a week.

## Features
- Camera interface with multiple camera views
- Music box that runs on CAM_01
- Up to 8 supported cameras (you can add more if you figure it out)
- Sound effects that play if a camera is active
- Player pages for movement opportunities

## Playing

### Prerequisites
- Node.js
- pnpm
- Android or iOS devices for cameras
- A computer for the main server

### Setup
1. Clone the repository or download the source
2. Navigate to the project directory
3. Install dependencies using pnpm
4. Start the server

```bash
git clone https://github.com/fstk5/fnaf-irl
cd fnaf-irl
pnpm install
pnpm start
```

## How to play
On your computer, open the camera view for the guards. This is located at `https://<computer-ip>:8080/cameras`
On your mobile device, open the player view for movement. This is located at `https://<computer-ip>:8080/player`
Make sure both devices are connected to the same network.
On the devices being used as cameras, have them exporting an MJPEG stream and seperate the links in your .env file.
Also, open `https://<computer-ip>:8080/camera` to have audio play when it is active.
On the music box webcam, also open `https://<computer-ip>:8080/mbox` for the audio to work.

## Contributing
Feel free to fork and add your own features or improvements, but it would be greatly appreciated if you could open a PR to update the main code as well :).