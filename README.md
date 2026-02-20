# Simple Website — HTML, CSS, JS & PWA

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

A simple Progressive Web Application (PWA) demonstrating how to turn a basic HTML/CSS/JS website into an installable, offline-capable app.

## Overview

This project extends a basic static website with Progressive Web App capabilities, including a Web App Manifest and a Service Worker. It serves as an introductory example for developers learning how to convert a traditional website into a PWA that can be installed on mobile and desktop devices. The page features interactive DOM manipulation, a random image, and full PWA support with custom icons for all major platforms.

## Features

- Progressive Web App with installable manifest and service worker
- Custom app icons for Android, Apple, and Microsoft platforms in multiple resolutions
- Service Worker with install, activate, and fetch event listeners
- Interactive JavaScript button that toggles paragraph text colour
- Responsive HTML5 layout with custom CSS styling
- Standalone display mode for a native app-like experience

## Prerequisites

- A modern web browser with PWA support (Chrome, Firefox, Safari, or Edge)
- A local web server or hosting platform (PWA features require HTTPS or localhost)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielcregg/simple-website-html-css-js-pwa.git
   ```
2. Navigate into the project directory:
   ```bash
   cd simple-website-html-css-js-pwa
   ```

### Usage

Serve the project using a local web server. For example, using Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. The service worker will register automatically, and you can install the app using your browser's "Add to Home Screen" or "Install App" option.

**Live Demo:** [https://danielcregg.github.io/simple-website-html-css-js-pwa/](https://danielcregg.github.io/simple-website-html-css-js-pwa/)

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling and layout |
| JavaScript | DOM manipulation and service worker registration |
| Service Worker | Offline support and fetch interception |
| Web App Manifest | PWA metadata, icons, and install configuration |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
