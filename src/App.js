import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

import Appbar from './components/Appbar';
import { Home } from './components/Home';
import { Product } from './components/Product/Product';
import { ProductDetails } from './components/ProductDetails';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <Router>
      <Appbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="products" element={<Product />}>
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
