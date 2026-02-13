# Edi Mehaj - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

![Portfolio Preview](preview.png)

## ✨ Features

- **Modern Design** - Dark theme with glassmorphism elements and subtle gradients
- **Smooth Animations** - Framer Motion powered animations throughout
- **Fully Responsive** - Mobile-first design that works on all devices
- **Interactive Elements** - Particle background, hover effects, and micro-interactions
- **Clean Architecture** - Well-organized component structure
- **Production Ready** - Optimized and deployable to Vercel

## 🛠 Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── AnimatedBackground.jsx
│   │       ├── Button.jsx
│   │       ├── LoadingScreen.jsx
│   │       ├── Navbar.jsx
│   │       ├── ScrollProgress.jsx
│   │       └── SectionWrapper.jsx
│   ├── constants/
│   │   └── data.js
│   ├── hooks/
│   │   └── useAnimations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/edimehaj/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to complete deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Vite settings. Click "Deploy"

6. Your site will be live at `your-project.vercel.app`

### Environment Variables (Optional)

If you add backend form submission later, create a `.env` file:

```env
VITE_API_URL=your_api_url
```

## 🎨 Customization

### Personal Information

Edit `src/constants/data.js` to update:

- Name, role, and tagline
- Social links (GitHub, LinkedIn, Email)
- Projects
- Skills and proficiency levels

### Colors & Theme

Modify `tailwind.config.js` to customize:

- Primary colors
- Accent colors (purple, cyan, pink)
- Fonts

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/constants/data.js`

## 🔧 Future Improvements

- [ ] Add a blog section
- [ ] Implement contact form backend (e.g., with Formspree or EmailJS)
- [ ] Add project detail pages with routing
- [ ] Implement dark/light theme toggle
- [ ] Add multi-language support
- [ ] Add downloadable resume button
- [ ] Integrate CMS for easier content updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Edi Mehaj** - Backend Developer

- GitHub: [@edimehaj](https://github.com/edimehaj)
- LinkedIn: [Edi Mehaj](https://linkedin.com/in/edimehaj)

---

Built with ❤️ using React, Vite, and Tailwind CSS
