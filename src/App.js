import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/LoginSignUp';
import NewsLetter from '../src/Components/NewsLetter/NewsLetter';

import Footer from '../src/Components/Footer/Footer';
import skincare_banner from './Components/Assets/banner_skincare.png';
import haircare_banner from './Components/Assets/banner_haircare.png';
import makeup_banner from './Components/Assets/banner_makeup.png';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Makeup' element={<ShopCategory banner = {makeup_banner} category = "Makeup"/>}/>
        <Route path='/SkinCare' element={<ShopCategory banner = {skincare_banner} category = "SkinCare"/>}/>
        <Route path='/HairCare' element={<ShopCategory banner = {haircare_banner} category = "HairCare"/>}/>
        <Route path="/Product" element ={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
