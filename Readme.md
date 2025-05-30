# 📁 MERN File Storing System (with Download Support)

A full-stack web application for securely uploading, storing, and downloading files using the MERN stack. Styled with Tailwind CSS and DaisyUI in a sleek dark theme.

---

## 🚀 Features

- 🔒 User Authentication (Login/Signup)
- 📤 Upload files (PDF, images, docs, etc.)
- 📥 Download stored files anytime
- 🧾 File metadata (name, type, size, upload date)
- 🌙 Beautiful dark-themed UI with Tailwind + DaisyUI
- ⚙️ REST API using Express + MongoDB
- 🪪 JWT-based protected routes

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- DaisyUI
- Axios

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for file upload handling)
- JWT (Authentication)

---

## 🎨 Dark Theme Color Palette

| **Purpose**        | **Tailwind Class**    | **Hex Code** | **Usage**                      |
| ------------------ | --------------------- | ------------ | ------------------------------ |
| Background (Main)  | `bg-zinc-900`         | `#18181b`    | Main background                |
| Card / Surface     | `bg-zinc-800`         | `#27272a`    | Panels, cards, modals          |
| Navbar / Sidebar   | `bg-zinc-950`         | `#09090b`    | Topbar, sidebar                |
| Text (Primary)     | `text-zinc-100`       | `#f4f4f5`    | Main text                      |
| Text (Secondary)   | `text-zinc-400`       | `#a1a1aa`    | Placeholder, labels, meta text |
| Accent (Primary)   | `text-indigo-500`     | `#6366f1`    | Action buttons, active states  |
| Accent (Hover)     | `text-indigo-400`     | `#818cf8`    | On hover effect                |
| Borders / Dividers | `border-zinc-700`     | `#3f3f46`    | Panel and input borders        |
| Success Text/Icon  | `text-emerald-400`    | `#34d399`    | For success states             |
| Error Text/Icon    | `text-rose-400`       | `#fb7185`    | For error states               |
| Filled Button      | `bg-indigo-600`       | `#4f46e5`    | Primary buttons                |
| Hover Button       | `hover:bg-indigo-500` | `#6366f1`    | Lighter shade for hover        |

---

## 📂 Folder Structure

mern-file-storage/ ├── client/ # React frontend │ ├── public/ │ └── src/ │ ├── components/ │ ├── pages/ │ ├── App.jsx │ └── ... ├── server/ # Node.js backend │ ├── controllers/ │ ├── routes/ │ ├── models/ │ ├── uploads/ # Uploaded files storage │ ├── server.js ├── .env └── README.md

yaml
Copy
Edit
#   d o c s  
 