import Navbar  from "./components/Navbar";  
import Home from "./screens/Home";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./screens/Signup.js";
import Login from "./screens/Login.js";
import { CartProvider } from "./ContextReducer.js";
import Cart from "./screens/Cart.js";
import MyOrder from "./screens/MyOrder.js";
function App() {
  return (
    <CartProvider>
    <Router>
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/nav" element={<Navbar/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/myorder" element={<MyOrder/>}></Route>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
