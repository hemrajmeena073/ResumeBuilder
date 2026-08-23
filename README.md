# 📝 Resume Builder

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  <b>AI-powered resume builder for creating professional, ATS-friendly resumes</b>
</p>

<p align="center">
  Create • Edit • Preview • Analyze • Download
</p>

---

## 📌 About The Project

**Resume Builder** is a full-stack web application that helps users create professional resumes using multiple templates and AI-assisted content generation.

Users can enter their personal information, education, experience, skills, projects, achievements, and other details through a structured multi-step form. The application provides a **live resume preview**, **PDF export**, and **ATS score analysis** with suggestions for improvement.

The project follows a **MERN-style architecture** with React on the frontend, Node.js/Express on the backend, MongoDB for data storage, and Google Gemini API for AI-powered features.

---

## ✨ Features

### 📄 Resume Creation

* Create professional resumes
* Multi-step resume form
* Personal information
* Education
* Experience
* Projects
* Skills
* Achievements
* Additional information
* Add professional links

### 🎨 Multiple Templates

Choose from multiple professionally designed resume templates.

```text
Templates
│
├── Template 1
├── Template 2
├── Template 3
├── Template 4
├── Template 5
├── Template 6
├── Template 7
├── Template 8
└── Template 9
```

The repository includes multiple resume template components and template assets.

### 🤖 AI-Assisted Content

Google Gemini API is integrated to assist users with resume content generation and improvement.

Potential use cases include:

* Improve resume descriptions
* Generate professional content
* Improve project descriptions
* Enhance experience descriptions
* Generate better resume wording

### 📊 ATS Score Checker

The application includes an **ATS Score Checker** that evaluates a resume and provides suggestions for improvement.

```text
Resume
  │
  ▼
ATS Analysis
  │
  ├── Score
  ├── Missing Information
  ├── Improvement Suggestions
  └── Optimization
```

### 👀 Live Resume Preview

Users can view their resume while editing it.

```text
┌──────────────────┐     ┌──────────────────┐
│   Resume Form    │ ──► │   Live Preview   │
│                  │     │                  │
│ Personal Info    │     │     RESUME       │
│ Education        │     │                  │
│ Experience       │     │   Education      │
│ Skills           │     │   Experience     │
│ Projects         │     │   Skills         │
└──────────────────┘     └──────────────────┘
```

### 📥 PDF Export

Users can download or print their completed resume as a PDF using the project's PDF-generation libraries.

### ☁️ Resume Management

Users can save and manage multiple resumes through the application.

### 🔐 Authentication

The application includes user authentication features such as:

* Login
* Signup
* OTP verification
* Forgot password
* Password update
* Authentication middleware

The backend includes dedicated user, OTP, password, and authentication modules.

---

## 🧰 Tech Stack

| Technology           | Purpose             |
| -------------------- | ------------------- |
| ⚛️ React.js          | Frontend            |
| 🎨 Tailwind CSS      | UI styling          |
| 🟢 Node.js           | Backend runtime     |
| 🚀 Express.js        | REST API            |
| 🍃 MongoDB           | Database            |
| 🤖 Google Gemini API | AI features         |
| 🔄 Redux Toolkit     | State management    |
| 🧭 React Router      | Routing             |
| 🎞️ Framer Motion    | Animations          |
| 📄 React PDF / jsPDF | PDF generation      |
| 🎯 React Hook Form   | Form management     |
| 🎨 Lucide React      | Icons               |
| ⚡ Vite               | Frontend build tool |

The current `package.json` includes React, Redux Toolkit, Axios, Framer Motion, PDF libraries, React Router, React Hook Form, Tailwind CSS, Vite, and related dependencies.

---

## 🏗️ Project Architecture

```text
                    📝 Resume Builder
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
       ⚛️ Frontend                  🟢 Backend
          React                     Node.js
             │                      Express.js
             │                           │
             ▼                           ▼
       Redux Toolkit              REST APIs
             │                           │
             │                    ┌──────┴──────┐
             │                    │             │
             │                    ▼             ▼
             │                MongoDB       Gemini AI
             │
             ▼
      Resume Templates
             │
             ▼
       Live Preview
             │
             ▼
         PDF Export
```

---

## 📁 Project Structure

```text
ResumeBuilder/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Accordion.jsx
│   │   ├── MultiStepForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── Resume.jsx
│   │   ├── ProgressIndicator.jsx
│   │   └── ...
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── CreateResume.jsx
│   │   ├── YourResume.jsx
│   │   ├── Templates.jsx
│   │   ├── ATS.jsx
│   │   └── ...
│   │
│   ├── Services/
│   │   ├── apiConnector.jsx
│   │   ├── apis.jsx
│   │   ├── resumeAPI.jsx
│   │   └── userAPI.jsx
│   │
│   ├── Slices/
│   ├── store/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── Controllers/
│   │   ├── ContactUs.js
│   │   ├── ResetPassword.js
│   │   ├── Resume.js
│   │   └── User.js
│   │
│   ├── Middlewares/
│   │   └── auth.js
│   │
│   ├── Models/
│   │   ├── OTP.js
│   │   ├── Resume.js
│   │   └── User.js
│   │
│   ├── Routes/
│   │   ├── Contact.js
│   │   ├── Password.js
│   │   ├── Resume.js
│   │   └── User.js
│   │
│   ├── Templates/
│   ├── utils/
│   │   ├── dbConnect.js
│   │   ├── gemini.js
│   │   └── mailSender.js
│   │
│   └── index.js
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

The repository contains separate frontend and backend structures with dedicated controllers, models, routes, middleware, services, and utilities.

---

## 🔄 Application Flow

```text
              👤 User
                │
                ▼
          🔐 Authentication
                │
                ▼
          📝 Create Resume
                │
                ▼
        Multi-Step Resume Form
                │
        ┌───────┴────────┐
        ▼                ▼
   Resume Data        AI Assistant
        │                │
        └───────┬────────┘
                ▼
         🎨 Select Template
                │
                ▼
          👀 Live Preview
                │
        ┌───────┴────────┐
        ▼                ▼
    📊 ATS Check       📥 PDF
        │                │
        ▼                ▼
 Suggestions        Download
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/hemrajmeena073/ResumeBuilder.git
```

### 2. Navigate into the project

```bash
cd ResumeBuilder
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Install backend dependencies

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key

JWT_SECRET=your_jwt_secret

EMAIL_HOST=your_email_host
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
```

> ⚠️ Never upload `.env` files or secret API keys to GitHub.

---

## ▶️ Run the Application

### Start Backend

From the `server` directory:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

The repository's documented development setup uses Vite for the frontend and a separate Node/Express server.

---

## 📜 Available Scripts

### Frontend

```bash
npm run dev
```

Start the Vite development server.

```bash
npm run build
```

Create a production build.

```bash
npm run preview
```

Preview the production build.

### Backend

```bash
npm run dev
```

Start the backend development server.

The project also includes a combined startup script for running frontend and backend processes together.

---

## 📊 Main Modules

### 👤 User Module

Handles:

* Signup
* Login
* OTP verification
* Password reset
* User authentication

### 📄 Resume Module

Handles:

* Creating resumes
* Editing resumes
* Saving resumes
* Retrieving resumes
* Managing multiple resumes

### 🎨 Template Module

Handles multiple resume designs and template selection.

### 🤖 AI Module

Uses Gemini AI for resume content assistance.

### 📊 ATS Module

Analyzes resume quality and provides improvement suggestions.

### 📥 PDF Module

Converts resume content into downloadable/printable PDF documents.

---

# 🚀 Future Goals

### 1. 🤖 Advanced AI Resume Assistant

* Improve AI-generated content
* Add job-description-based resume optimization
* Generate professional summaries
* Generate personalized bullet points

### 2. 🎯 Advanced ATS Optimization

* Keyword matching with job descriptions
* ATS compatibility analysis
* Section-by-section scoring
* Industry-specific recommendations

### 3. 💼 Job Description Matching

* Upload or paste a job description
* Compare resume against job requirements
* Show matching skills
* Identify missing skills
* Suggest relevant keywords

### 4. 📄 More Resume & Document Templates

* Add more professional templates
* Add modern and minimal designs
* Add industry-specific templates
* Add cover-letter templates
* Add portfolio templates

### 5. 🔗 Career Platform Integration

* Import information from LinkedIn/GitHub
* GitHub project integration
* Job application tracking
* Resume version management
* Shareable resume links

### 6. 📊 Advanced Analytics

* Resume performance tracking
* ATS score history
* Resume comparison
* Download statistics
* User dashboard analytics

### 7. 🌍 Production-Ready Platform

* Deploy frontend and backend
* Improve scalability
* Add automated testing
* Add CI/CD
* Improve security
* Optimize API performance
* Add cloud storage

---

## 🗺️ Development Roadmap

| Phase    | Goal                        | Status        |
| -------- | --------------------------- | ------------- |
| Phase 1  | Resume Builder UI           | ✅ Completed   |
| Phase 2  | Multiple Templates          | ✅ Implemented |
| Phase 3  | Authentication              | ✅ Implemented |
| Phase 4  | Resume Management           | ✅ Implemented |
| Phase 5  | PDF Export                  | ✅ Implemented |
| Phase 6  | AI Content Generation       | ✅ Implemented |
| Phase 7  | ATS Score Checker           | ✅ Implemented |
| Phase 8  | Job Description Matching    | 🔄 Planned    |
| Phase 9  | Advanced AI Assistant       | 🔮 Future     |
| Phase 10 | Career Platform Integration | 🔮 Future     |

---

## 📚 Learning Outcomes

This project demonstrates practical experience with:

* React.js
* MERN architecture
* REST APIs
* MongoDB
* Express.js
* Redux Toolkit
* Authentication
* OTP verification
* JWT-based authorization
* AI API integration
* PDF generation
* Form management
* Responsive UI design
* State management
* Backend API development

---

## 🔒 Security

For production deployment:

* Keep API keys in environment variables
* Never expose Gemini secret keys
* Secure authentication endpoints
* Validate user input
* Protect private resume APIs
* Use secure password handling
* Configure CORS properly
* Use HTTPS
* Add rate limiting

---

## 👨‍💻 Author

### HEMRAJ MEENA

**B.Tech — Information Technology & Engineering**
**National Institute of Technology Srinagar**

<p align="left">
  <a href="https://github.com/hemrajmeena073">
    <img src="https://img.shields.io/badge/GitHub-hemrajmeena073-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

## ⭐ Support

If you like this project:

⭐ **Star the repository**

🍴 **Fork the repository**

🐛 **Report issues**

💡 **Suggest improvements**

---

## 📄 License

This project is developed for educational and development purposes.

---

<p align="center">
  <b>Built with ❤️ using MERN + Google Gemini AI</b>
</p>

<p align="center">
  📝 <b>Resume Builder — Build Better. Apply Smarter. Get Hired.</b>
</p>
