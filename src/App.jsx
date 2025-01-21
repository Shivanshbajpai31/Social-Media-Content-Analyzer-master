import React, { useState } from 'react';
import FileUploader from './components/FileUploader/FileUploader';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <button onClick={toggleDarkMode} className="toggle-dark-mode">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <FileUploader />
        </div>
    );
}

export default App;
