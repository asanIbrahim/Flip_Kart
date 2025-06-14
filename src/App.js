import './App.css';
import  Home from'./Pages/Home/Home';
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'

function App() {
  return (
    <div className="App">
       App
     <Home/>
     <Products/>
     <ProductDetails/>
     <Cart/>
    </div>
  );
}

export default App;
