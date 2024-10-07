import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import OurOffers from './components/OurOffers';
import ContactUs from './components/ContactUs';
import Categories from './components/Products/Categories';
import AddProduct from './components/Products/AddProduct';
import ProductDetails from './components/Products/ProductDetails';
import EditProducts from './components/Products/EditProduct';
import EditProduct from './components/Products/EditProduct';
import DeleteProduct from './components/Products/DeleteProduct';
import AddOffers from './components/AddOffers';

function App() {
  return (
    <div className="App"style={{}}>
     
     < BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offers' element={<OurOffers />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/categories/add' element={<AddProduct/>} />
        <Route path='/categories/details/:id' element={<ProductDetails/>}/>
        <Route path='/categories/edit/:id' element={<EditProduct/>}/>
        <Route path='/categories/delete/:id' element={<DeleteProduct/>}/>
        <Route path='/offers/add' element={<AddOffers/>} />
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
