# MatchWise
This is a web-based **resume analysis tool** that leverages AI for content evaluation. It parses uploaded PDF resumes and uses the **Google Gemini API** to perform semantic analysis, extracting insights on structure, keyword density, and formatting effectiveness. The system is designed to assist users in optimizing their resumes for **ATS and recruiter screening algorithms**.

## Features
- Upload resumes in PDF format using Multer for secure and efficient file handling.
- Uses Google Gemini API for AI-powered content evaluation.
- Extracts and parses text to assess structure and formatting.
- Analyzes keyword density and skill relevance.
- Provides feedback on ATS (Applicant Tracking System) compatibility.
- Displays AI insights in a clean, user-friendly React interface.

## Tech Stack
### Frontend
- **React.js** – For building a responsive and dynamic user interface
- **Axios** – For making HTTP requests to the backend
### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for handling API routes and logic
- **Multer** – Middleware for handling file uploads (PDF resumes)
- **pdf-parse** – For extracting text content from uploaded PDFs
### AI & Integration
- **Google Gemini API** – For AI-powered analysis and feedback generation
### Tools & Utilities
- **dotenv** – For managing environment variables like API KEY securely
- **cors** – For enabling cross-origin communication between frontend and backend

## Preview
<p align="center">
<strong>Homepage</strong><br><br>
<img src="./images/homepage.png"/>
</p>

<p align="center">
<strong>Loading Screen</strong><br><br>
<img src="./images/analyse.png"/>
</p>

<p align="center">
<strong>Results</strong><br><br>
<img src="./images/result.png"/>
</p>
