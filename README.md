# Adrian Ortiz Portfolio

Welcome to my personal portfolio website, built for the MET CS 601 Term Project. This repository features a responsive, multi-page site showcasing professional experience, projects, skills, and interactive enhancements.

**Live Demo:** https://adrianeortiz.github.io/

---

## Table of Contents

1. [Overview](#overview)  
2. [Repository Structure](#repository-structure)  
3. [Pages & Features](#pages--features)  
4. [Enhancements](#enhancements)  
   - [Contact Form](#contact-form)  
   - [Skill Badge Filter](#skill-badge-filter)  
   - [Back to Top Button](#back-to-top-button)  
5. [Local Preview & Testing](#local-preview--testing)  
6. [Deployment on GitHub Pages](#deployment-on-github-pages)  
7. [Asset Organization](#asset-organization)  
8. [Styling & Responsive Behavior](#styling--responsive-behavior)  
9. [Credits & Acknowledgments](#credits--acknowledgments)  

---

## Overview

This portfolio demonstrates:

- Modern **HTML5** structure with semantic elements.  
- **CSS3** Flexbox and Grid for layout and responsiveness.  
- **JavaScript** interactivity (FILTER, smooth-scroll, Formspree integration).  
- External API integration (Formspree) for contact form — extra credit.  
- Custom JS features: skill badge filtering and Back‑to‑Top button — extra credit.

---

## Repository Structure

```
adrianeortiz.github.io/
├── assets/                
│   └── images/            # All project and logo images
├── css/                   
│   └── styles.css         # Core styles and uniform image rules
├── js/
│   └── app.js             # Contact form, filtering, Back‑to‑Top
├── about.html             
├── contact.html           # Formspree-powered contact form
├── index.html             
├── projects.html          # Organized with .projects-section class
├── resume.html            
├── skills.html            
└── README.md              
```

---

## Pages & Features

### Home (`index.html`)
- Hero section and featured project cards.

### Projects (`projects.html`)
- Four project sections with consistent 250×250 image boxes (`.projects-section img`).

### About Me (`about.html`)
- Sidebar biography and fun facts.

### Skills (`skills.html`)
- Technical skills list and interactive skill badge filter.

### Resume (`resume.html`)
- Full professional history with uniform 60×60 logos.
- Education and certifications.

### Contact (`contact.html`)
- Formspree-integrated contact form (no `mailto:`).

All pages include the same navigation header and footer for consistency.

---

## Enhancements

### Contact Form

- Uses **Formspree** to send messages via API.
- Removes default `mailto:` behavior.
- Displays status messages via JS (in `js/app.js`).

### Skill Badge Filter

- Text input to filter skill cards by keyword.
- Implemented in `js/app.js` using DOM events.

### Back to Top Button

- Fixed button appears after scrolling.
- Smooth-scroll back to top using JS (`window.scrollTo`).

---

## Local Preview & Testing

1. **Clone the repo**  
   ```bash
   git clone https://github.com/adrianeortiz/adrianeortiz.github.io.git
   cd adrianeortiz.github.io
   ```
2. **Open files**  
   ```bash
   open index.html    # macOS
   start index.html   # Windows
   ```
3. **Verify**  
   - Navigation links, CSS, JS interactivity, and image layouts.
   - Responsive at <800px width.

---

## Deployment on GitHub Pages

- Hosted as a **User Page** from the `main` branch root.

---

## Asset Organization

All static images are in `assets/images/`. Logos are uniform via CSS (`.resume-section img` and `.projects-section img` rules in `styles.css`).

---

## Styling & Responsive Behavior

Key CSS features in `css/styles.css`:

- **Global reset** and base typography.  
- **Flexbox/Grid** layouts for header, main content, and project grid.  
- **Uniform image sizing** for project thumbnails (250×250) and resume logos (60×60).  
- **Media queries** for single-column layout on small screens.

---

## Credits & Acknowledgments

- **Design & Code** by Adrian Ortiz (MET CS 601).  
- **Assets** (GIFs, screenshots) created by Adrian Ortiz.  
- **Logos** pulled from LinkedIn CDN or hosted locally, styled uniformly.  
- **Formspree** for contact form handling.

---

Thank you for exploring my portfolio! Feel free to reach out via the [Contact page](contact.html) or at **adrian.everardo.ortiz@gmail.com**.
