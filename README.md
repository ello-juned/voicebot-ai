# Quick Start Guide for Voicebot-AI Application

Follow these simple steps to quickly get the Voicebot-AI application up and running:

**1. Clone the Repository**

Start by cloning the project repository to your local machine. Open your terminal and run:

```bash
git clone git@github.com:ello-juned/voicebot-ai.git
```

**2. Configure the Environment Variable**

Create a `.env` file in the project's root directory if it doesn't already exist. Open the file and set the environment variable to your backend server's URL. Replace `YOUSE LIVE URL OR NGROK PROXY URL` with the actual URL:

```plaintext
VITE_REACT_APP_SERVER_URL=YOUR_BACKEND_SERVER_URL
```

**3. Run the Application**

Now, it's time to install the necessary project dependencies. Run the following command:

```bash
npm install
```

After the installation is complete, you can start the application:

```bash
npm run dev
```

Your Voicebot-AI React app will be accessible at `http://localhost:3000`.
