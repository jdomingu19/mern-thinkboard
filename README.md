# MERN Stack Note Taking App 📝

A modern, full-stack note-taking application built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It provides a clean UI, responsive design, and complete CRUD functionality with rate limiting powered by Upstash Redis.

## Tech Stack ⚙️

![Static Badge](https://img.shields.io/badge/react-18+-1C2024?style=for-the-badge&logo=react&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/react_router-8+-1C2024?style=for-the-badge&logo=reactrouter&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/node.js-20+-1C2024?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/express.js-4+-1C2024?style=for-the-badge&logo=express&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/mongodb-atlas-1C2024?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/axios-1.19+-1C2024?style=for-the-badge&logo=axios&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/tailwindcss-3+-1C2024?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/daisyui-4+-1C2024?style=for-the-badge&logo=daisyui&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/upstash_rate_limit-2+-1C2024?style=for-the-badge&logo=upstash&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/redis-1.34+-1C2024?style=for-the-badge&logo=redis&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/vite-8+-1C2024?style=for-the-badge&logo=vite&logoColor=white&labelColor=101010)

## Features ✨

- **Create, Read, Update, Delete (CRUD)** notes with a clean UI.
- **Rate limiting** to prevent abuse, powered by Upstash Redis.
- **Responsive design** with TailwindCSS + DaisyUI themes.
- **Toast notifications** for user feedback.
- **Reusable axios instance** for API calls.
- **MongoDB Atlas** integration for cloud database storage.
- **Professional error handling** with clear UI states:
  - Loading spinner
  - Empty state (`NotesNotFound`)
  - Rate limit warning (`RateLimitedUI`)

## Installation & Setup 🚀

Clone the repository and install dependencies:

```bash
git clone https://github.com/jdomingu19/mern-thinkboard.git
cd mern-thinkboard
```

### Backend Setup ⚡

```bash
cd backend
npm install
npm install @upstash/ratelimit@2.0.5
npm install @upstash/redis@1.34.9
npm install cors
npm install dotenv
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup 🎨

```bash
cd frontend
npm install
npm create vite@latest .
npm install react-router
npm install react-hot-toast
npm install axios
npm install lucide-react
npm install -D tailwindcss@3 postcss autoprefixer daisyui@v4
npx tailwindcss init -p
```

Start the frontend:

```bash
npm run dev
```

## Project Structure 📂

```
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/        # Database & Upstash setup
│   │   ├── controllers/   # Notes controllers
│   │   ├── middleware/    # Rate limiter
│   │   ├── models/        # Note model
│   │   ├── routes/        # Notes API routes
│   │   └── server.js      # Express server entry
├── frontend/
│   ├── src/
│   │   ├── components/    # NavBar, NoteCard, UI states
│   │   ├── lib/           # axios instance, utils
│   │   ├── pages/         # HomePage, CreatePage, NoteDetailsPage
│   │   ├── App.jsx        # Routes and layout
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Tailwind base styles
```

## Contributing 🤝

Contributions are welcome!

Open an issue or submit a pull request with improvements, bug fixes, or new features

## License ⚖️

This project is distributed under the [Apache License 2.0](LICENSE). You are free to use, modify, and share the code, provided that proper attribution is given and derivative works remain open to the community.

##

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
