import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Appbar from './components/Appbar';
import { HomeProduct } from './components/Product/HomeProduct';
import { Product } from './components/Product/Product';
import { ProductDetails } from './components/Product/ProductDetails';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <Appbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="products" element={<HomeProduct />}>
          <Route path="/" element={<Product />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
