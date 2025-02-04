import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [BMI, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault(); // Prevent form submission
    const bmiValue = weight / ((height / 100) * (height / 100)); // Convert cm to meters
    setBMI(bmiValue.toFixed(2));
    setMessage(getBmiMessage(bmiValue));
  };

  const getBmiMessage = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
    if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form>
        <input
          type="number"
          placeholder="WEIGHT (in kgs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          placeholder="HEIGHT (in cm)"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="button" onClick={calculateBmi}>Calculate BMI</button>
      </form>

      {BMI && (
        <div style={{ marginTop: '20px' }}>
          <h2>BMI: {BMI}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
