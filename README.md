# fnaf-irl

| Category | Information |
| :--- | :--- |
| **License** | [GPLv2](LICENSE) (Code Only) |
| **Features & Code Overview** | Node.js, pnpm, MJPEG Streams |
| **Platform** | Broser-based, Node.js for server |
| **Status** | Barebones/Functional |

## License

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](LICENSE)

### Software
All source code in this repository (including `.js`, `.html`, and `.css` files) is licensed under the **GNU General Public License v2.0**. 

### Assets
Note that this license **does not** apply to non-code media assets. All audio and image files are reserved by their respective copyright holders and are not covered by the GPLv2.

See the [LICENSE](LICENSE) file for the full license text.

---
Copyright (c) 2026 fstk5

## Contributing
Feel free to fork and add your own features or improvements, but it would be greatly appreciated if you could open a PR to update the main code as well :).

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

## Disclaimer

This is a non-profit, fan-made project. **fnaf-irl** is not affiliated with, authorized, maintained, sponsored, or endorsed by Scott Cawthon or any of his affiliates.

* **Intellectual Property:** *Five Nights at Freddy's*, its characters, names, sounds, and related assets are the property of Scott Cawthon and/or their respective owners.
* **Non-Commercial Use:** This project is intended for personal and educational enjoyment only. It may not be sold or used for commercial purposes.
* **No Copyright Infringement Intended:** All rights to the original franchise materials are reserved by the original creators. If you are a rights holder and wish for any content to be removed, please contact me through GitHub.