import { useEffect, useState } from 'react';
import './App.css';
import Header from './composents/Header/Header';
import Shop from './composents/Shop/Shop';
import data from './data/data.json';

function App() {

  const [clubs, setClubs] = useState([]);

  console.log('data', data);
  useEffect(()=> {
    setClubs(data);
    console.log(data.first_name)
  }, [])

  return (
    <div>

      <h5>kire hosse na</h5>

      <ul>
        {
          clubs.map(club => <li>{club.first_name}</li>)
        }
      </ul>


      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
