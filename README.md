# GPTAI Fitness :muscle:

## Generate personalized workout plans using GPT-4 and OpenAI API.

GPTAI Fitness is a full-stack application that leverages OpenAI's GPT-4 API to generate personalized workout plans based on user input. The application is a combination of a Node.js backend and a simple HTML/CSS/JS frontend.

---

### Table of Contents

1. [Introduction](#introduction)
2. [User Instructions](#user-instructions)
3. [Developer Instructions](#developer-instructions)
4. [Build & Install](#build--install)
5. [Known Issues](#known-issues)

---

### Introduction

GPTAI Fitness aims to revolutionize your fitness journey by generating workout plans tailored to your specific needs. By providing simple information like your age, workout experience, and fitness goals, you get a personalized workout plan right in your browser!

```plaintext
   User --------------->  Frontend --------------->  Backend --------------->  GPT-4
   (Provides Info)      (Collects Info & Sends)   (Processes & Queries)     (Generates Plan)
                         <--------------          <---------------          <---------------
                         (Displays Plan)          (Receives & Forwards)     (Sends Plan)
```

---

### User Instructions

1. Open the application in your web browser.
2. Fill in the various input fields such as Age, Experience, Intensity, Rest, Length, and Goals.
3. Click the "Generate Workout Plan" button.
4. Wait for a few seconds as your personalized workout plan gets generated.
5. Once the plan appears, you can choose to follow it as is or input new details to generate another plan.

---

### Developer Instructions

If you are interested in contributing to the project or tweaking it for your specific needs, follow these instructions:

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/BraydenG623/GPTAI_Fitness.git
   ```
2. Navigate to the project directory.
   ```bash
   cd GPTAI_Fitness
   ```
3. Setup and Install required packages.
   ```bash
   npm init
   npm install express openai body-parser cors
   ```
4. Create a index.js and reference OpenAI's API reference for more detials.

   ```bash
   Go to website info how on to configure the API to your needs: https://platform.openai.com/
   Setup Account and get your API key and make sure to create a .env to hide your key

   OPENAI_API_KEY=your-api-key-here
   ```

5. Start the development server.
   ```bash
   npm start
   ```

---

### Known Issues

1. The frontend UI is still under development for a more visually appealing experience.
2. Backend responses are being fine-tuned for more specific user needs.
