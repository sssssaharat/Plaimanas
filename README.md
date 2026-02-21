# Frontend Developer — Practical Test Assignment

A fully responsive, single-page website built strictly according to the provided Figma design. This project focuses on pixel-perfect implementation, smooth interactions, and robust cross-browser compatibility without relying on external UI frameworks.

👉 **Live Demo:** [https://test-assignment-plaimanas.vercel.app/](https://test-assignment-plaimanas.vercel.app/)

## ⏱ Time Spent
- **Approximately 3 Days**

## 🛠 Technologies Used
As per the core requirements, this project was built from scratch to demonstrate strong fundamental web development skills:
- **HTML5** (Semantic structuring)
- **CSS3** (Flexbox, CSS Grid, Custom Media Queries)
- **Vanilla JavaScript** (DOM manipulation, Event Listeners)

## ✨ Key Highlights & My Approach

While developing this project, I focused heavily on edge cases, maintainability, and providing a seamless experience across all devices and browsers:

### 1. Cross-Browser Video Autoplay (Safari / iOS Fix)
Safari and iOS have strict autoplay policies (Strict Autoplay Policy) that often block background videos. I implemented specific attributes (`muted`, `playsinline`, `autoplay`, `loop`) and added a **JavaScript fallback** to force-play the video upon DOM content loading. This ensures the background video plays seamlessly everywhere.

### 2. Maintainable & Modular CSS Architecture
Instead of a single massive CSS file, I adopted a modular approach. The styles are logically separated (e.g., `layout.css`, `navbar.css`, `responsive.css`) to keep the codebase clean, readable, and easy to scale or maintain in the future.

### 3. Precision Responsive Design & UI Polish
- **Conditional Formatting:** Addressed specific mobile vs. desktop layout challenges using targeted media queries (e.g., controlling line breaks `<br>` that only apply on desktop to maintain design fidelity, while allowing fluid text wrapping on mobile).
- **Clean UI Elements:** Used custom CSS pseudo-elements to hide native browser scrollbars (`::-webkit-scrollbar`) and number input spinners (`::-webkit-inner-spin-button`) for a cleaner, more app-like aesthetic.

## 🚀 How to Run Locally

Since the project uses purely fundamental web technologies, there is no need to install dependencies or run build commands.

1. Clone or download the repository.
2. Ensure the main HTML file is named `index.html` for proper server routing.
3. Open `index.html` directly in your preferred web browser (or use an extension like VSCode Live Server).

---
*My Portfolio:* [https://portfoliossh.netlify.app/](https://portfoliossh.netlify.app/)