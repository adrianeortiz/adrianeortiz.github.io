# Adrian Ortiz Portfolio

Welcome to my personal portfolio website, built as part of the MET CS 601 Term Project. This repository contains a fully responsive, multi-page portfolio showcasing my background, projects, skills, and professional experience. The site is hosted on GitHub Pages at:

```
https://adrianeortiz.github.io/
```

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Repository Structure](#repository-structure)  
3. [Pages & Features](#pages--features)  
4. [Local Preview & Testing](#local-preview--testing)  
5. [Deployment on GitHub Pages](#deployment-on-github-pages)  
6. [Asset Organization](#asset-organization)  
7. [Styling & Responsive Behavior](#styling--responsive-behavior)  
8. [Credits & Acknowledgments](#credits--acknowledgments)  

---

## Project Overview

This portfolio site demonstrates:

- **HTML5 semantics** (use of `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, and `<footer>`).  
- **CSS3 Flexbox & Grid** for layout, responsive design, and component styling.  
- **JavaScript/DOM (optional enhancements)**—the core pages do not rely on external libraries, but can easily integrate small scripts if desired.  
- **Multi-page navigation**, with six core content pages:  
  - Home  
  - Projects  
  - About Me  
  - Skills  
  - Resume  
  - Contact  

All pages share a consistent header and footer, ensuring intuitive navigation across the site. The code is designed to validate cleanly under W3C standards and adapt gracefully to mobile and desktop viewports.

---

## Repository Structure

```text
adrianeortiz.github.io/              ← Root of the GitHub Pages repository
├── assets/                          ← All static images and media assets
│   └── images/
│       ├── Linux-Commands-Cheat-Sheet.jpg
│       ├── personal_finance_manager.png
│       ├── profile-pic-compressed.jpg
│       ├── pycalc-howto.gif
│       └── url-shortener-demo.gif
│
├── css/                             ← Main styles directory
│   └── styles.css                   ← Core CSS for layout, components, and responsiveness
│
├── about.html                       ← “About Me” page (biography & fun facts)
├── contact.html                     ← Contact form and direct email link
├── index.html                       ← Homepage (hero + featured projects)
├── projects.html                    ← Detailed project descriptions with images & links
├── resume.html                      ← Full resume (experience, education, skills, certifications)
├── skills.html                      ← List of technical skills & “skill badge” cards
└── README.md                        ← Project documentation (this file)
```

- **`.gitignore`**  
  Lists files/folders to ignore (e.g. OS-specific files, editor settings).  

- **`README.md`**  
  Describes the project, its structure, and instructions for local preview and deployment.

---

## Pages & Features

Below is a brief summary of each HTML page, including the key sections and functionality:

### 1. `index.html` (Home)
- **Hero Section**  
  - Large heading (“Hello, I’m Adrian Ortiz”), subtitle (Software Engineer | SRE | AI Enthusiast | Father), and a “Learn More About Me” button linking to `about.html`.  
- **Featured Projects Grid**  
  - A responsive grid of “project cards,” each with an image, title, short description, and a link to the corresponding project section on `projects.html`.  
  - Projects displayed:  
    1. PyCalc (PyQt-based calculator)  
    2. URL Shortener (FastAPI + SQLite)  
    3. Personal Finance Manager (Python + Google Sheets)  
    4. Linux Commands Cheat Sheet (Interactive Readme with Linux commands)  

### 2. `projects.html` (Projects)
- Contains four “project” sections, each with:  
  - A heading (e.g. “PyCalc”)  
  - An animated GIF or PNG screenshot under `assets/images/`  
  - A descriptive paragraph  
  - External link to GitHub repository or download  
- Uses `<hr />` separators to keep content visually distinct.

### 3. `about.html` (About Me)
- **Sidebar (Left Column)**  
  - “About Me” heading, avatar (`profile-pic-compressed.jpg`), and three paragraphs describing my background, education, and personal interests.  
- **Main Section (Right Column)**  
  - “Fun Facts” list (location, family, hobbies, etc.).  
- Demonstrates use of `<aside>` for secondary content and `<section>` for primary content.

### 4. `skills.html` (Skills)
- **Sidebar (Left Column)**  
  - “Technical Skills” heading and a bulleted list of languages, frameworks, DevOps tools, CI/CD, databases, and productivity tools.  
- **Main Section (Right Column)**  
  - “Skill Badges” displayed as a responsive grid of “skill cards” (Python, Java, Docker & Kubernetes, React).  
- Showcases CSS Grid usage in the `.projects-grid` class for a multi-column layout that wraps at smaller breakpoints.

### 5. `resume.html` (Resume)
- **Resume Header**  
  - Profile photo, full name, email link, location, LinkedIn & GitHub links.  
- **Experience Section**  
  - Seventeen (17) total entries pulled from LinkedIn (January 2015 – Present), including roles such as:  
    - Solutions Engineer @ Qase  
    - Chief Executive Officer @ EVEREXPAND ENTERPRISES INC  
    - Construction Professional @ CSM Waterworks 
    - Associate Site Reliability Engineer @ Workday  
    - Associate QA Engineer – Authentication @ Veeva Systems  
    - Child Support Specialist @ Kern County CMS  
    - Multiple volunteer positions (CrowdDoing)  
    - IT Support roles (Penumbra, RWS, Group Nine Media, San Francisco State University, Munchery)  
  - Each entry includes a logo (pulled from LinkedIn CDN or local asset) and bullet points of responsibilities/achievements.  
- **Education & Professional Development**  
  - Master of Science in Software Development (Boston University)  
  - Bachelor of Science in Business Information Systems (San Francisco State University)  
  - DevOps Bootcamp (TechWorld with Nana)  
- **Skills & Technologies**  
  - Comprehensive list of languages, frameworks, DevOps & SRE tools, testing & QA, web & mobile, databases, general tools, and soft skills.  
- **Certifications**  
  - AWS Technical Essentials (with AWS logo)  

### 6. `contact.html` (Contact)
- A simple contact form (name, email, message) that sends via `mailto:adrian.everardo.ortiz@gmail.com`  
- Alternative direct email link at the bottom.  
- Demonstrates basic form styling and accessibility using `<label>`, `<input>`, `<textarea>`, and `<button>`.

---

## Local Preview & Testing

To preview the site on your local machine, follow these steps:

1. **Clone the repository** (if you haven’t already):  
   ```bash
   git clone https://github.com/adrianeortiz/adrianeortiz.github.io.git
   cd adrianeortiz.github.io
   ```

2. **Verify folder structure**:  
   Ensure you see the `assets/`, `css/`, and all six `.html` files (index, about, projects, skills, resume, contact).

3. **Open each HTML file in your browser**:  
   - On macOS:  
     ```bash
     open index.html
     open about.html
     open projects.html
     open skills.html
     open resume.html
     open contact.html
     ```  
   - On Windows (PowerShell):  
     ```powershell
     start index.html
     start about.html
     start projects.html
     start skills.html
     start resume.html
     start contact.html
     ```  
   - Or simply double-click each file in your file explorer.

4. **Verify the following**:  
   - Navigation bar links correctly navigate between pages.  
   - CSS (`css/styles.css`) loads on every page—check the page background, fonts, and layout.  
   - Images from `assets/images/` display without 404 errors.  
   - Responsive behavior: resize the browser window below **800px**, and confirm the layout stacks vertically (single-column main content).  

5. **Lint & Validate** (optional, but recommended):  
   - Run your HTML files through the [W3C HTML Validator](https://validator.w3.org/) to catch any syntax issues.  
   - Run `css/styles.css` through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to ensure your CSS is standards-compliant.

---

## Deployment on GitHub Pages

This repository is configured as a **User Page**. GitHub Pages will automatically serve content from the `main` branch root folder. The published site URL is:

```
https://adrianeortiz.github.io/
```

### How to Push Updates

1. **Stage and commit changes**:
   ```bash
   git add .
   git commit -m "Update <page/file> with <changes>"
   ```

2. **Push to `main`**:
   ```bash
   git push origin main
   ```

3. **Wait 1–2 minutes** for GitHub Pages to rebuild the site. Then refresh:
   ```
   https://adrianeortiz.github.io/
   ```
   You should see your latest changes live.

### Custom Domain (Optional)

If I later decide to point `adrianeortiz.com` or another custom domain to this Pages site, I will follow these steps:
1. In the repository root, create a file named `CNAME` (no extension), containing exactly:
   ```
   adrianeortiz.com
   ```
2. In my DNS provider (or Cloudflare), add the following **A records** for `@` pointing to GitHub’s IPv4 addresses:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a **CNAME** record for `www` → `adrianeortiz.github.io`.  
4. After DNS propagation (usually a few minutes to 24 hours), GitHub Pages will serve the site at both `https://adrianeortiz.com` and `https://www.adrianeortiz.com`.

---

## Asset Organization

All images, GIFs, and logos are stored under:

```
assets/images/
```

- **`profile-pic-compressed.jpg`** (profile avatar used on About & Resume pages)  
- **`pycalc-howto.gif`** (animation for the PyCalc project)  
- **`url-shortener-demo.gif`** (animation for the URL Shortener project)  
- **`personal_finance_manager.png`** (screenshot for the Personal Finance Manager project)  
- **`Linux-Commands-Cheat-Sheet.jpg`** (static image used for the Linux cheat sheet)  

On `resume.html`, many logos are pulled directly from LinkedIn’s CDN (via `<img src="...">`). If any external link fails, the `onerror="this.style.display='none';"` attribute hides the broken image. You may choose to download these logos into `assets/images/` and update the `src` paths accordingly.

---

## Styling & Responsive Behavior

All pages share a single stylesheet at `css/styles.css`, which includes:

- **Global Reset**  
  Resets margin, padding, and box-sizing for all elements.

- **Base Typography**  
  Sets `font-family: Arial, Helvetica, sans-serif` and `line-height: 1.6` for readability.

- **Header & Navigation**  
  - `display: flex; justify-content: space-between; align-items: center`  
  - Dark background color (`#333`), white text (`#fff`), and hover states for links.

- **Grid Layout**  
  - On larger viewports:  
    ```css
    main {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2rem;
    }
    ```
  - On smaller viewports (`max-width: 800px`):  
    ```css
    main {
      grid-template-columns: 1fr;
    }
    ```

- **Projects Grid**  
  Uses CSS Grid with `repeat(auto-fill, minmax(250px, 1fr))` to wrap project cards fluidly.

- **Forms & Buttons**  
  Basic styling for `<form>` elements in `contact.html`, including label/input alignment and hover states for `.btn` and `<button>`.

- **Footer**  
  Simple dark background with centered white text.

---

## Credits & Acknowledgments

- **Portfolio Design & Implementation**  
  - Built by Adrian Ortiz as part of the MET CS 601 (Web App Dev) Term Project.  
  - CSS layout and responsive design reuse advanced concepts from Assignment 3 (Flexbox, CSS Grid, media queries).

- **Project Assets & Screenshots**  
  - Animated GIFs & screenshots created or captured by Adrian Ortiz.  
  - Linux Commands Cheat Sheet image sourced from a public domain or self-created.

- **Company Logos on `resume.html`**  
  - Pulled from LinkedIn’s CDN endpoints (company profile images) or publicly hosted SVG/PNG sources.  
  - Logos that fail to load are hidden gracefully via `onerror="this.style.display='none';"`.

- **Technologies & Libraries**  
  - Pure **HTML5** and **CSS3**—no external CSS frameworks.  
  - Optional integration points for JavaScript/DOM if adding interactive enhancements in the future.

---

Thank you for exploring my portfolio! If you have any questions, feedback, or opportunities, please feel free to reach out via the [Contact page](contact.html) or directly at <adrian.everardo.ortiz@gmail.com>.
