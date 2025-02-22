import { useState,useEffect } from 'react'
 import './App.css'
function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
     const convertCurrency = async () => {
        try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
          const data = await response.json();
          console.log(data)
          const result = (data.rates[toCurrency] * amount);
          setConvertedAmount(result);
        } catch (error) {
          console.log(error);
        }
     }
     convertCurrency();
   
  }, [amount, fromCurrency, toCurrency]);
  

  return (
    <>
     <h2>
        Currency Converter
     </h2>
     <label for="amount">Enter the Amount:</label>
        <input type="number" placeholder='Enter the amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <br />
        <label for="from">From Currrency:</label>
        <input type="text" placeholder='select currency from'  value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}/>
        <br />
        <label for="to">To Currency:</label>
        <input type="text" placeholder='select currency to' value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}/>
<br />
<br />
{convertedAmount != 0 && (
             
        <div>
         Amount= {convertedAmount}
        </div>
)}
         
    </>
  )
}
export default App
