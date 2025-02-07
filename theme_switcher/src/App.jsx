import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() { 
  const [theme, setTheme] = useState('Dark');

  useEffect(() => {
    if (theme === 'Dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'Dark' ? 'Light' : 'Dark');
  }

  return (
    <>

    <Navbar/>
      <h2>Theme Switcher</h2>
      <button type='button' onClick={toggleTheme}>
        {theme === 'Dark' ? 'Light' : 'Dark'}
      </button>
    </>
  );
}

export default App;
