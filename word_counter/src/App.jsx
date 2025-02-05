import { useEffect , useState} from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0);
  
  useEffect(() => {
    // Your side effect logic goes here
    const wordsArray = text.trim().split(/\s+/);
    const charactersArray = text.split('');
    
    return () => {
      setWords(wordsArray.length);
      setCharacters(charactersArray.length +1 );
        };
  }, [text]);

///fix  bug in counter when c
  const clearText = (e) => {
    e.preventDefault();
    setText('');
    setWords(0);
    setCharacters(0);
  }


  return (
    <>
      <h1>
        WORD COUNTER
      </h1>
      <form action="">
        <textarea name="" id="" cols="30" 
        value={text} onChange={(e) => setText(e.target.value)}
        rows="10" placeholder='Enter your text here'>
        </textarea>
        <button onClick={clearText}>Clear</button>
      </form>
      <div> Characters = {characters} </div>
      <div> Words = {words} </div>
    </>
  )
}

export default App
