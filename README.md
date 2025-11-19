# Mohammed Ashique S - Portfolio Website

A modern, professional portfolio website built with the MERN stack showcasing skills, projects, and experience as an aspiring MERN Stack Developer.

## Features

- **Responsive Design**: Works seamlessly on all devices
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Framer Motion animations
- **Contact Form**: Functional contact form with email integration
- **Modern UI**: Clean and professional design
- **API Integration**: Backend API for portfolio data and contact form

## Tech Stack

### Frontend
- React.js with TypeScript
- Framer Motion for animations
- React Icons
- Axios for API calls
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- Nodemailer for email functionality
- CORS for cross-origin requests

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Update `.env` file with your email credentials:
```env
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Email Configuration

To enable the contact form functionality:

1. Use Gmail with App Password:
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password for the application
   - Use your Gmail address as `EMAIL_USER`
   - Use the App Password as `EMAIL_PASS`

2. Update the backend `.env` file with your credentials

## Project Structure

```
Portfolio New/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   └── package.json
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## Customization

### Personal Information
Update the portfolio data in `backend/server.js` in the `/api/portfolio` endpoint to reflect your personal information, skills, projects, and experience.

### Styling
Modify `frontend/src/App.css` to customize colors, fonts, and layout according to your preferences.

### Components
Each component is modular and can be easily modified or extended with additional features.

## Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to your preferred hosting service

### Backend Deployment (Heroku/Railway)
1. Deploy the backend directory to your preferred hosting service
2. Update environment variables in the hosting platform
3. Update the API URLs in the frontend to point to your deployed backend

## Contact

- **Email**: ashiqueoffl7@gmail.com
- **Phone**: +91 79028 57903
- **LinkedIn**: [mohammed-ashique-s-13613b339](https://linkedin.com/in/mohammed-ashique-s-13613b339)
- **GitHub**: [mohammedashiqueofficial7](https://github.com/mohammedashiqueofficial7)

## License

This project is open source and available under the [MIT License](LICENSE).