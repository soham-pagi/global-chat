# Global Chat

The Global Chat App is a real-time chat application built using Node.js, Express, and Socket.IO. It allows users to connect and chat with each other in real-time, send messages, and see who's typing.

**Note: This application does not save messages. Messages are not stored and will be lost once the server is restarted.**

## Features

- Real-time chat functionality using [Socket.IO](https://socket.io/)
- Sending and receiving messages instantly
- Displaying user IDs and typing notifications
- Simple and easy-to-use interface

## Getting Started

Follow these steps to set up and run the Global Chat App on your local machine:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/soham-pagi/global-chat.git
   ```

2. Navigate to the project directory:
   ```sh
   cd global-chat
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a .env file in the root directory and add your configuration:
   ```sh
   PORT=3000
   ```
5. Start the server:
   ```sh
   npm start
   ```
6. Open your web browser and go to http://localhost:3000 to access the chat app.
