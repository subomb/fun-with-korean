# Fun With Korean

Welcome to **Fun With Korean!** This project is a learning platform designed to help users learn the Korean language and explore Korean culture. The platform includes lessons for different proficiency levels, quizzes, exercises with audio, and a translator.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Lessons**: Structured lessons organized by books (Book 1, Book 2, etc.) for different proficiency levels.
- **Quizzes and Exercises**: Interactive quizzes and exercises with audio to enhance learning.
- **Translator**: Translate text between English and Korean using the Google Translate API.
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Restricted Content**: Access to advanced lessons (Book 2 and beyond) is restricted to non-authenticated users.

## Technologies Used

- **Frontend**: React, Vite, CSS
- **Backend**: Firebase (Authentication, Firestore)
- **API**: Google Translate API via RapidAPI
- **Hosting**: Netlify
- **Audio**: ResponsiveVoice.js library for text-to-speech functionality

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/subomb/fun-with-korean.git
   cd fun-with-korean
2. Install dependencies:
   ```bash
   npm install
3. Set up Firebase:
   - Create a Firebase project at Firebase Console.
   - Set up Firebase Authentication and Firestore.
   - Create a `.env` file in the root directory and add your Firebase and RapidAPI keys:
      ```bash
      VITE_RAPIDAPI_KEY=your_rapidapi_key
      VITE_FIREBASE_API_KEY=your_firebase_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
      VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
      VITE_FIREBASE_APP_ID=your_firebase_app_id
      VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
4. Build the project:
   ```bash
   npm run build
5. Serve the project locally:
   ```bash
   npm run dev
   
Usage
-----

*   Visit the home page to start learning Korean and explore Korean culture.
    
*   Navigate to the Lessons page for structured lessons by books.
    
*   Use the Translator page to translate text between English and Korean.
    
*   Register or log in to access advanced features, quizzes, exercises, and restricted content.

Demo
--------------------
You can access the deployed application at [Fun With Korean](https://fun-with-korean.netlify.app/)

Here is a video walkthrough of the website to showcase the features and functionality. 

https://github.com/subomb/fun-with-korean/assets/119646112/6ba5e8a1-0175-4c31-9e35-a1b04f2a4da8

Contributing
------------

Contributions are welcome! Please fork the repository and create a pull request to propose changes.

1.  Fork the repository
    
2.  Create a new branch (git checkout -b feature-branch)
    
3.  Commit your changes (git commit -m 'Add new feature')
    
4.  Push to the branch (git push origin feature-branch)
    
5.  Create a pull request

Contact
-------

For any questions or feedback, please contact:

*   [Subeom Kang](https://github.com/subomb)
    
*   Email: subeomkang03@gmail.com

