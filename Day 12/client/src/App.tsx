import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [visit, setVisit] = useState()
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<any>('http://localhost:8000');
        setVisit(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);


  return (
    <>
      <div className="App">
        <h1>This Website has been visited {visit} times!</h1>
      </div>
    </>
  )
}

export default App;
