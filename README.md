# 🧪 Ziad Elshihy – Software QA Engineer Portfolio

A modern, fully responsive personal portfolio showcasing my experience as a **Software Quality Assurance Engineer**, built with **React, TypeScript, and Tailwind CSS**.

This portfolio highlights my skills, projects, testing experience, and certifications with a clean UI and scalable architecture.

---

## 🚀 Live Demo
👉 https://your-vercel-link.vercel.app

---

## 🛠 Tech Stack

- **Frontend:** React + TypeScript  
- **Styling:** Tailwind CSS (Utility-first, default spacing system)  
- **UI Components:** shadcn/ui  
- **Routing:** React Router v6  
- **Build Tool:** Vite  
- **Linting:** ESLint  
- **Deployment:** Vercel  

---

## ✨ Key Features

- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Clean and consistent spacing system
- ✅ Fixed floating navigation bar across all pages
- ✅ Modular and scalable component structure
- ✅ Dedicated pages for each section
- ✅ QA-focused project presentation
- ✅ Project Details pages with responsive card layouts

---

## 📄 Pages & Routes

| Page | Route |
|----|----|
| Home | `/` |
| About | `/about` |
| Skills | `/skills` |
| Projects | `/projects` |
| Project Details | `/projects/:id` |
| Experience | `/experience` |
| Certifications | `/certifications` |
| Contact | `/contact` |

---

## 📱 Responsive Design Strategy

- **Mobile-first approach**
- Tailwind default breakpoints:
  - `base` → Mobile
  - `md` → Tablet / Small Desktop
  - `lg` → Desktop
- Project cards:
  - Mobile → 1 column
  - Desktop → 2–3 columns (depending on page)

---

## 🧩 Project Structure

```txt
src/
├─ components/
│  ├─ layout/
│  │  ├─ Container.tsx
│  │  └─ FloatingNav.tsx
│  └─ ui/
├─ pages/
│  ├─ Home.tsx
│  ├─ About.tsx
│  ├─ Skills.tsx
│  ├─ Projects.tsx
│  ├─ ProjectDetails.tsx
│  ├─ Experience.tsx
│  ├─ Certifications.tsx
│  └─ Contact.tsx
├─ router/
│  └─ AppRouter.tsx
└─ main.tsx
