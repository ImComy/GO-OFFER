# GO-OFFER

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Introduction
GO-OFFER is a full-stack web application built with React and Node.js, designed to streamline coupons and offers management. It features user authentication, secure data handling, and a user friendly interface.

## Features
- User Signup/Login
- Authentication with JWT
- Secure password handling with bcrypt
- Integration with MongoDB for data storage
- Responsive UI with React
- RESTful API with Express
- Profile Page
- Coupons, Offers and Stores Pages
- Well-made Home Page

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/ImComy/GO-OFFER.git
    cd GO-OFFER/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add your environment variables:
    ```env
    PORT=8000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage
1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up for a new account or log in with an existing account.
3. Manage your job offers efficiently with the provided interface.

## API Endpoints
- `POST /api/signup`: Register a new user
- `POST /api/login`: Authenticate a user
- `GET /api/logout`: Logout a user


## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
