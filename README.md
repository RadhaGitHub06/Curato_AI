# 📚 Curato AI  
**The Next-Generation AI Course Curation Platform**  

Curato AI is an innovative platform that leverages **Generative AI** and a robust tech stack to redefine online education. It empowers educators and creators to generate, customize, and monetize comprehensive courses while offering learners unique, flexible learning paths.

---

## ✨ Features  

Curato AI provides a powerful suite of tools for both content creation and consumption:

- 🧠 **AI-Powered Course Creation**: Instantly generate structured course outlines, modules, and suggested content using the **Google Gemini API**.  
- ✂️ **Customizable Learning**: Refine, reorder, and integrate proprietary content into AI-generated structures.  
- 💰 **Course Marketplace**: Publish and sell courses; learners can browse and purchase access.  
- 🎥 **Integrated Video Curation**: Search and embed relevant video content with the **YouTube Data API**.  
- 🔒 **Secure User Management**: Authentication and profile management powered by **Clerk**.  

---

## 🛠️ Tech Stack  

Curato AI is built on a modern, high-performance, and scalable full-stack architecture:

| Category           | Technology         | Purpose                                                                 |
|--------------------|--------------------|-------------------------------------------------------------------------|
| **Frontend**       | Next.js (React)    | Full-stack framework for rendering, routing, and server components.     |
| **Styling**        | Tailwind CSS       | Utility-first CSS framework for rapid and consistent UI development.    |
| **Database**       | Neon (PostgreSQL)  | Serverless PostgreSQL for scalable, reliable, and decoupled persistence.|
| **ORM**            | Drizzle ORM        | Type-safe and performant TypeScript ORM for query building.             |
| **Authentication** | Clerk              | Secure user authentication, authorization, and profile management.      |
| **AI Integration** | Google Gemini API  | Powering generative and content-summarization features.                 |
| **Video**          | YouTube Data API   | Facilitating in-app video search and embedding.                         |
| **Storage**        | Firebase Storage   | Cloud storage for course assets, banners, and recordings.               |

---

## 🚀 Getting Started  

Follow these steps to set up and run the Curato AI project locally.  

### ✅ Prerequisites  
- Node.js (v18+)  
- npm or yarn  
- Neon PostgreSQL database instance  
- API keys for Clerk, Gemini, and YouTube  

### 📥 Installation  

1. **Clone the Repository**  
```bash
git clone https://github.com/RadhaGitHub06/Curato_AI.git
cd Curato_AI
2.Install Dependencies
npm install
# or
yarn install
Configure Environment Variables
Create a .env.local file in the root directory:

# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://user:password@endpoint-id.cloud.neon.tech/database_name?sslmode=require"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="<YOUR_CLERK_PUBLISHABLE_KEY>"
CLERK_SECRET_KEY="<YOUR_CLERK_SECRET_KEY>"

# AI & Video APIs
GEMINI_API_KEY="<YOUR_GEMINI_API_KEY>"
NEXT_PUBLIC_YOUTUBE_API_KEY="<YOUR_YOUTUBE_API_KEY>"

# Firebase Configuration (for Storage)
NEXT_PUBLIC_FIREBASE_API_KEY="..."
# Add other Firebase config variables...

4.Run Drizzle Migrations
 npm run db:migrate

5.Run the Development Server
npm run dev
# or
yarn dev
Visit 👉 http://localhost:3000
```
📂 Project Structure
```bash
Curato_AI/
├── app/                  # Next.js App Router (Routes & UI)
│   ├── (platform)/       # Core application routes (dashboard, course management, etc.)
│   ├── (auth)/           # Clerk authentication routes (sign-in, sign-up)
│   ├── api/              # Backend API routes (Gemini/YouTube requests, DB ops)
├── components/           # Reusable UI components (buttons, modals, course cards)
├── config/               # Config files (Clerk middleware, Firebase setup)
├── lib/                  # Utilities, helpers, and data access logic
│   ├── db/               # Drizzle connection + schema definition
│   ├── hooks/            # Custom React hooks
│   └── utils.ts          # General utility functions
├── public/               # Static assets (images, fonts)
├── styles/               # Tailwind CSS setup
└── package.json          # Dependencies and scripts
```
## 🗄️ Database Schema (Neon + Drizzle ORM)

## 1. `courses` Table (`courseList`)  
Stores course metadata, ownership, and marketplace details.  

| Field Name   | Data Type | Description                       | Key Points                           |
|--------------|-----------|-----------------------------------|--------------------------------------|
| **id**       | serial    | Primary Key.                      | Auto-incrementing.                    |
| **courseId** | varchar   | Unique course ID.                 | Links to chapters.                    |
| **name**     | varchar   | Course Title.                     | Required.                             |
| **category** | varchar   | Course subject.                   | Required.                             |
| **courseOutput** | json  | AI-generated course outline/data. | Stored as JSON object.                |
| **createdBy** | varchar  | Creator's Clerk User ID.          | Links to user management.             |
| **publish**  | boolean   | Marketplace visibility status.    | Default: `false` (draft).             |

---

### 2. `chapters` Table (`Chapters`)  
Stores detailed content for each module in a course.  

| Field Name   | Data Type | Description                  | Key Points                          |
|--------------|-----------|------------------------------|-------------------------------------|
| **id**       | serial    | Primary Key.                 | Auto-incrementing.                   |
| **courseId** | varchar   | Links to the parent course.  | References `courseList.courseId`.    |
| **chapterId**| integer   | Order of the chapter.        | Determines sequence.                  |
| **content**  | json      | Chapter text/instructions.   | Required.                             |
| **videoId**  | varchar   | YouTube video ID.            | Used for embedding.                   |

---

## 🔐 User Management (Clerk)

- **Seamless Authentication**: Secure sign-up and sign-in flows.  
- **Protected Routes**: Restrict content creation/viewing to authenticated users.  
- **User Profiles**: Manage identity, profile images, and course ownership (`createdBy`).
  

---

## 🖼️ Screenshots & Demo  

| Feature              | Description                                        | Media |
|-----------------------|----------------------------------------------------|-------|
| **User Management (Clerk)** | Secure sign-up, login, and profile handling. |<img width="1884" height="1017" alt="Screenshot 2025-09-30 115505" src="https://github.com/user-attachments/assets/34d06897-f86b-4046-8ae6-eac06b0e9e04" />|
| **Database Schema**   | Courses & Chapters tables using Drizzle + Neon.   | <img width="1711" height="772" alt="Screenshot 2025-09-30 121519" src="https://github.com/user-attachments/assets/56097553-9b4c-406a-b448-9001bc7a33ac" />|
| **Live Demo**         | Core creator workflow demo.                       | (https://drive.google.com/file/d/1dNUuwUvIvY-24smrADOUMJDjiZLvoHYN/view?usp=drive_link) |



https://github.com/user-attachments/assets/c30f12e2-558d-4c2f-9ecf-c1a42ff65656


---


Module Editor	Drag-and-drop interface for chapters/content.	

Live Demo	Core creator workflow demo.	Watch Video

(Replace placeholders with real screenshots & demo links)

🤝 Contribution

We welcome contributions! 🎉

Fork the repository.

Create your feature branch:

git checkout -b feature/NewFeature


Commit your changes:

git commit -m 'feat: Added New Feature'


Push to the branch:

git push origin feature/NewFeature

Open a Pull Request.

📧 Contact

Radha – rg9319738@gmail.com

🔗 Project Link: https://curato-ai-byradha.vercel.app/


---

