# Pasula Shloka - Developer Portfolio

A modern, responsive portfolio website built using **React 19**, **Vite**, **Tailwind CSS**, and **React Router v7**.

🔗 **Live Website**: [https://pasula-shloka.github.io/Portfolio-new/](https://pasula-shloka.github.io/Portfolio-new/)

---

## 🚀 Features

- **Responsive & Modern Design**: Clean UI that looks great across mobile, tablet, and desktop screens.
- **Dark Mode Support**: Seamless toggle between Dark and Light themes with persistent state.
- **Interactive Projects Gallery**: Real-time project search and dynamic category filtering (React, Web Development, Java).
- **Downloadable Resume**: Built-in resume viewer and one-click PDF download.
- **Contact & Socials**: Interactive contact form with direct links to GitHub and LinkedIn.
- **Automated GitHub Pages Deployment**: GitHub Actions workflow and `gh-pages` support for instant continuous delivery.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Routing**: React Router (`HashRouter` for zero-configuration GitHub Pages hosting)
- **Bundler**: Vite
- **Deployment**: GitHub Actions / GitHub Pages

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Pasula-Shloka/Portfolio-new.git
cd Portfolio-new
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🚀 Deployment to GitHub Pages

### Option A: GitHub Actions (Recommended)
This repository includes `.github/workflows/deploy.yml`. 
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every push to `main` will automatically build and deploy the portfolio.

### Option B: npm run deploy
Run:
```bash
npm run deploy
```
This builds the site and pushes the production bundle to the `gh-pages` branch. In **Settings** > **Pages**, set **Source** to `Deploy from a branch` and select `gh-pages` / `/ (root)`.
