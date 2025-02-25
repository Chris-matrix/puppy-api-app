# Puppy Image Generator with React

## Introduction
Welcome to this step-by-step tutorial series where we'll build a React application that fetches and displays random dog images. By the end of this series, you'll have a fully functional app with features like favorites, settings, and more!

## Prerequisites
Before you get started, make sure you have:
- Basic knowledge of HTML, CSS, and JavaScript
- Node.js and npm installed on your computer
- A code editor (like VS Code)

## Part 1: Getting Started with React and Building a Simple Dog Image Generator

### Step 1: Setting Up the Project
First, let's create a new React project using Vite:
```bash
npm create vite@latest puppy-app -- --template react
cd puppy-app
npm install
Step 2: Creating Our First Component - GetPuppy
We'll start with the simplest version of our dog image generator component.

Create a New File: Create a file called GetPuppy.jsx in the src directory.

Write the Component Code: Paste the following code into GetPuppy.jsx:

javascript
import { useState } from "react";

function GetPuppy() {
    const [pup, setPup] = useState("");

    // Run this function when the button is clicked
    async function pupAPI() {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        console.log(data);
        setPup(data.message);
    }

    return (
        <> 
            <h2>Random Puppy Generator</h2> 
            <img src={pup} alt="Random dog" />
            <button onClick={pupAPI}>Get Puppy</button> 
        </> 
    );
}

export default GetPuppy;
Step 3: Integrating the Component in App.jsx
Update App.jsx: Modify your App.jsx to use the new GetPuppy component:

javascript
import GetPuppy from './GetPuppy';
import './App.css';

function App() {
  return (
    <div className="App">
      <GetPuppy />
    </div>
  );
}

export default App;
Step 4: Adding Styles with App.css
Create or update the App.css file to style your app:

css
.App {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
}

h2 {
  color: #333;
}

button {
  background-color: #008cba;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #005f5f;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
Step 5: Testing the Application
Run the Development Server:

bash
npm run dev
Visit the URL: Open the URL shown in your terminal (typically http://localhost:5173/). You should see a heading and a button. When you click the button, a random dog image will appear!

Part 2: Improving Our App with Loading States, Error Handling, and useEffect
Step 1: Creating an Enhanced Version
Create a new file called GetPuppyUseState.jsx:

javascript
import { useState, useEffect } from "react";

function GetPuppy() {
    const [dogImage, setDogImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch function
    async function pupAPI() {
        try {
            setLoading(true); // Start loading
            setError(null); // Clear previous errors

            const response = await fetch("https://dog.ceo/api/breeds/image/random");

            if (!response.ok) {
                throw new Error("Failed to fetch dog image");
            }

            const data = await response.json();
            setDogImage(data.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    // useEffect to fetch data on mount
    
