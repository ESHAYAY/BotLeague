# BotLeague – India's Ultimate Robotics Arena

A static front-end landing page for **BotLeague**, a national robotics competition platform. Built as part of the Full Stack Developer Intern assignment for BotMakers Pvt Ltd.

🔗 **Live Design Reference:** Recreated from the provided Figma design.

## Overview

BotLeague is presented as India's competitive robotics ecosystem — covering live events, national rankings, registration flows for competitors/judges/volunteers, and a showcase of competition disciplines (Robo Race, Line Follower, RC Racing, FPV Drone Racing, Robo Hockey, Robo War).

This repository contains a pixel-matched, fully responsive implementation of the homepage using plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools required.

## Tech Stack

- **HTML5** – semantic markup, inline SVG icons (no external icon library)
- **CSS3** – custom properties (CSS variables), CSS Grid & Flexbox, responsive breakpoints
- **JavaScript (Vanilla)** – smooth scrolling for nav links, basic form/button interactivity
- **Google Fonts** – [Gruppo](https://fonts.google.com/specimen/Gruppo) (headings), [Rajdhani](https://fonts.google.com/specimen/Rajdhani) (labels/UI), [Inter](https://fonts.google.com/specimen/Inter) (body text)

## Project Structure

```
.
├── index.html        # Page markup
├── styles.css         # All styling
├── script.js           # Interactivity (smooth scroll, button handlers)
└── Media/                 # Image assets used across the page
    ├── Hero.png
    ├── RoboRace.png
    ├── LineFollower.png
    ├── RCRace.png
    ├── DroneFVP.png
    ├── RoboHockey.png
    ├── RoboWar.png
    └── Wires.png
```

> **Note:** The `Media/` folder is not included in this repo by default — add your own image assets at the paths above, or swap the `src` attributes in `index.html` to point to your hosted images.

## Sections

- **Navbar** – sticky nav with logo, links, login/register CTAs
- **Live Ticker** – current live event banner
- **Hero** – headline, tagline, primary CTAs
- **Competitions & Events** – live bracket, upcoming events, past results
- **User Journey** – 4-step path to joining the league
- **What is BotLeague?** – feature highlights
- **Categories** – age/skill-based competition tiers
- **Competition Disciplines** – image grid of event types
- **Why Register?** – value props + live leaderboard widget
- **Join the Ecosystem** – sign-up forms for judges, volunteers, community members
- **Sponsors** – partner logos
- **Footer** – quick links + social media

## Getting Started

No build step needed — this is a static site.

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000`

## Responsiveness

The layout adapts for tablet/mobile via a `max-width: 768px` media query — grids collapse to a single column and the nav links/buttons are hidden for smaller screens.

## Screenshots

<img width="1898" height="911" alt="image" src="https://github.com/user-attachments/assets/5af7390c-a8a2-49fc-aa34-93cb58d894f9" /> 

<img width="1902" height="913" alt="image" src="https://github.com/user-attachments/assets/6eb2986b-aad3-4743-a07e-e85eb5c0606f" /> 

<img width="1898" height="911" alt="image" src="https://github.com/user-attachments/assets/6bfedd60-3f7d-4afe-852d-57948c2be938" />


## Author

Submitted as part of the Full Stack Developer Intern assignment for **BotMakers Pvt Ltd**.
