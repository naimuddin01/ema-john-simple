// import { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Header from './composents/Header/Header';
import Inventory from './composents/Inventory/Inventory';
import NotFound from './composents/NotFound/NotFound';
import ProductDetail from './composents/ProductDetail/ProductDetail';
import Review from './composents/Review/Review';
import Shop from './composents/Shop/Shop';
// import data from './data/data.json';

function App() {

  // const [clubs, setClubs] = useState([]);

  // console.log('data', data);
  // useEffect(()=> {
  //   setClubs(data);
  //   console.log(data.first_name)
  // }, [])

  return (
    <div>

      {/* <h5>kire hosse na</h5>

      <ul>
        {
          clubs.map(club => <li>{club.first_name}</li>)
        }
      </ul> */}
      <Header></Header>
      <Router>
      <Routes>
        <Route exact path = "/" element = {<Shop/>}></Route>
        <Route path = "/shop" element = {<Shop/>}></Route>
        <Route path = "/review" element = {<Review/>}></Route>
        <Route path = "/inventory" element = {<Inventory/>}></Route>
        <Route path = "/product/:productKey" element = {<ProductDetail/>}></Route>
        <Route path='*' element = {<NotFound/>}></Route>
      </Routes>
      </Router>
      

      {/* <Router>
        <Routes>

          <Route path='/manage'>
            <Shop></Shop>
          </Route>

          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Routes>
      </Router> */}
      
    </div>
  );
}

export default App;
