🚀 React Project Setup & Deployment Guide
From the first spark of an idea to the world seeing your creation…

📦 Install Vite + React
bash
Copy
Edit
npm create vite@latest
👉 Choose your project name and select React framework with JavaScript or TypeScript as needed.

📂 Move Into Project Directory
bash
Copy
Edit
cd your-project-name
📥 Install Dependencies
bash
Copy
Edit
npm install
🎨 Start Development Server
bash
Copy
Edit
npm run dev
🖥️ Now open http://localhost:5173 to see your masterpiece take form.

📦 Build for Production
bash
Copy
Edit
npm run build
This will create a dist folder — your production-ready static files.

🔍 Preview Production Build
bash
Copy
Edit
npm run preview
🖋️ Initialize Git Repository
bash
Copy
Edit
git init
git add .
git commit -m "Initial commit"
🌍 Create New Repository on GitHub
Go to GitHub and create a new repository.

🔗 Connect Local Repo to GitHub
bash
Copy
Edit
git remote add origin https://github.com/yourusername/your-repo-name.git
🚀 Push Code to GitHub
bash
Copy
Edit
git push -u origin main
🌟 Deploy to GitHub Pages
1️⃣ Install gh-pages package
bash
Copy
Edit
npm install gh-pages --save-dev
2️⃣ Add deploy scripts to package.json
json
Copy
Edit
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
3️⃣ Deploy
bash
Copy
Edit
npm run deploy
Your site will be live at:
https://yourusername.github.io/your-repo-name/

🎉 Done!
“From the spark of a terminal command to the glow of a live site — your code now breathes on the web.”
