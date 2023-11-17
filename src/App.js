import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { ProductsAndCartLoader } from './loaders/Products&CartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/routes/PrivateRoute';
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess';
import PaymentFaild from './components/PaymentFaild/PaymentFaild';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          //loader ta 3 vabe lekhe lokera
          //way 1
          // loader: () => {
          //   return fetch('http://localhost:5000/products')
          // },
          //way 2
          loader: ProductsAndCartLoader,//ProductsAndCartLoader.js er vitore loader er jonno fetch kora hosse
          element: <Shop></Shop>
        },
        {
          path: '/orders', // '/' dile o hobe na dile o hobe, sudu naam ta link er vitore je naam disi seta dite hobe
          //loader ta 3 vabe lekhe lokera
          //way 1
          // loader: () => {
          //   return fetch('products.json')
          // },
          //way 2
          loader: ProductsAndCartLoader,//onno ekta file e kore ekane inpurt korce
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'payment/success/:tranId',
          element: <PaymentSuccess/>
        },
        {
          path: 'payment/fail/:tranId',
          element: <PaymentFaild/>
        },
        { 
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }


      ]
    }
  ])
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
