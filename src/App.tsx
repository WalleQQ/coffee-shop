import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Cart} from './components/cart/Cart';
import {PageWrapper} from './components/layout/page-wrapper/PageWrapper';
import {Catalog} from './components/pages/catalog/Catalog';
import {HomePage} from './components/pages/homePage/HomePage';
import {User} from './components/user/User';
import './globalCss.css';

const App = () => {
  const routes = (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/user' element={<User />} />
    </Routes>
  );
  return (
    <BrowserRouter>
      <div className='App'>
        <PageWrapper>{routes}</PageWrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;
