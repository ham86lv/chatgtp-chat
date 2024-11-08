# Chat GPT - Test task

## Overview

Chat GPT is a chat application that allows users to ask questions and receive answers from the ChatGPT model or a mock API. The app features:
- An interactive interface where users can enter queries and get answers.
- Integration with the ChatGPT API for generating responses (or a mock API for development).
- Auto-scrolling to the latest message.
- Error handling if the API request fails.

## Features

- **User-friendly interface**: Clean and responsive design using Ant Design components.
- **Real-time interaction**: Users can send questions and get answers instantly.
- **Mock API**: During development, the responses are simulated using a mock API.
- **Scroll to the latest message**: Messages automatically scroll to the most recent one.
- **Error handling**: A friendly error message is displayed if there’s an issue with the API request.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or later) — a JavaScript runtime for building and running the app.
- **npm** or **yarn** — package managers for installing dependencies.

### Steps to Run

1. **Clone the repository**  
   Open your terminal and run the following command to clone the repository:\
   git clone https://github.com/ham86lv/chatgtp-chat \
   cd chatgtp-chat
2. **Install dependencies**
   After cloning the repo, install the required dependencies by running:\
   npm install
3. **Run the development server**
   To start the app in development mode, run:\
   npm run start:dev

### Building for Production

1. **To build the app for production, run:
   npm run build

### API Configuration
  **To work with the actual ChatGPT API, you need an API key from OpenAI. You can configure it in the API configuration file**
  **API configuration file:**
1.  Open the chat.ts file in the api folder.
2.  Replace the CHAT_GPT_API_KEY variable with your actual OpenAI API key.
