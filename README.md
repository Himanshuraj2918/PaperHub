# 📚 PaperHub - Engineering Notes Platform

<div align="center">
  <h3>A modern platform for engineering students to access and share academic notes</h3>
</div>

## 🌟 Overview

PaperHub is a web application designed to streamline the process of accessing and sharing engineering notes. It provides a user-friendly interface for students to find semester-wise notes across different engineering branches.

## ⚡ Live Demo

[View Demo](https://paperhub-yspm.onrender.com/)

## 🎯 Features

- 📝 **Branch-wise Organization**: Easy access to branch-specific notes
- 📊 **Semester Categorization**: Well-organized semester-wise content
- 🔍 **Intuitive Search**: Quick note lookup
- 📱 **Responsive Design**: Works on all devices
- 📤 **Easy Upload**: Simple note sharing system

## 🛠️ Built With

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 📋 API Routes

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|-----------|
| GET | `/api/v1/notes/get-notes` | Get notes by branch & semester | Query: `branch`, `semester` | `{ success: true, data: [...notes] }` |
| POST | `/api/v1/notes/upload` | Upload new note | Form-data: `file`, `metadata` | `{ success: true, message: "Note uploaded" }` |

---

## 🗂️ Project Structure
```bash
PaperHub
├── 📁client
│   ├── 📁src
│   │   ├── 📁components
│   │   │   ├── 📄Navbar
│   │   │   ├── 📄Output
│   │   │   └── 📄UploadForm
│   │   ├──📁pages
│   │   │   ├──📄Home
│   │   │   └──📄Notes
│   │   └──📁services
│   │       └──📁api
│   └── 📄 package.json
├──📁server
│   ├──📁controllers
│   │   └──📄notes.controllers
│   ├──📁db
│   │   └──📄db.js
│   ├──📁middleware
│   │   └──📄multer.middleware
│   ├──📁models
│   │   └──📄notes.models
│   └──📁routes
│       └──📄notes.routes
├──📁utils
│   ├──📄cloudinary
│   ├──📄asyncHandler
│   └──📄apiresponse
└──📄Readme.md

````
---

## 🛠️ Technology Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Storage**: Cloudinary
- **State Management**: React Hooks
- **Routing**: React Router

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Himanshuraj2918/PaperHub.git
```

2. **Install dependencies**

```bash
cd client && npm install
cd server && npm install
```

3. **Environment Setup**

- Create a `.env` file in the `server` directory and add the following:

```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Start the development server**

```bash
cd server && npm run dev
```
---

## 📱 Pages and Features

### Home Page
- Welcome section
- Branch selection
- Quick navigation

### Notes Page
- Semester-wise organization
- PDF preview cards
- Download functionality
- Upload option

### Upload System
- File upload with metadata
- Progress indication
- Success/Error feedback

--- 

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  
  <!-- Home Page -->
  <div style="flex: 1 1 50%; max-width: 50%; text-align: center;">
    <h3>1. Home Page</h3>
    <img src="https://github.com/Himanshuraj2918/PaperHub/blob/main/client/src/assets/output-images/Page-1.png" alt="Home Page" style="width: 100%;">
  </div>
  
  <!-- Notes Page -->
  <div style="flex: 1 1 50%; max-width: 50%; text-align: center;">
    <h3>2. Notes Page</h3>
    <img src="https://github.com/Himanshuraj2918/PaperHub/blob/main/client/src/assets/output-images/Page-2.png" alt="Notes Page" style="width: 100%;">
  </div>
  
  <!-- Warning -->
  <div style="flex: 1 1 50%; max-width: 50%; text-align: center; margin-top: 10px;">
    <h3>3. Warning</h3>
    <img src="https://github.com/Himanshuraj2918/PaperHub/blob/main/client/src/assets/output-images/Page-3.png" alt="Warning" style="width: 100%;">
  </div>
  
  <!-- Upload File -->
  <div style="flex: 1 1 50%; max-width: 50%; text-align: center; margin-top: 10px;">
    <h3>4. Upload File</h3>
    <img src="https://github.com/Himanshuraj2918/PaperHub/blob/main/client/src/assets/output-images/Page-4.png" alt="Upload File" style="width: 100%;">
  </div>
  
</div>


