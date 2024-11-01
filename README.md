# Contact Form with EmailJS

![Contact Form](![Contact From](image.png))

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project is a responsive contact form built with React that allows users to send messages directly to an inbox using **EmailJS**. It features smooth animations with **Framer Motion** and provides instant feedback using **React Hot Toast**.

## Features

- **Responsive Design**: The form adjusts to various screen sizes.
- **Real-time Notifications**: Users receive feedback on their message status.
- **Email Integration**: Uses EmailJS to send messages without a backend server.
- **Smooth Animations**: Enhances user experience with Framer Motion.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- A code editor (e.g., VSCode)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/omnandurkar/EmailJs.git
   cd EmailJs

   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS user ID:

   ```env
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_PUBLIC_KEY=your_public_key
   ```

 ### Running the Project

 To start the development server, run:
    
```bash
    npm run dev
```

Open your browser and go to http://localhost:5173 to view the application.

## Usage

Fill out the contact form with your name, email, and message, then hit "Submit." You will receive a notification indicating whether the message was sent successfully or if there was an error.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **EmailJS**: Service for sending emails directly from the client-side.
- **Framer Motion**: Animation library for React.
- **React Hot Toast**: Notification library for smooth alerts.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch:

   ```bash
   git checkout -b feature/new-feature
    ```

3. Commit your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

4. Push to the branch:

   ```bash
    git push origin feature/new-feature
    ```
5. Submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- GitHub: [omnandurkar](https://github.com/omnandurkar)
- Portfolio: [omnandurkar.me](https://omnandurkar.me/)
- LinkedIn: [Om Nandurkar](https://www.linkedin.com/in/om-nandurkar17/)
