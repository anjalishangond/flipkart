import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import { Box } from '@mui/material'
import React from 'react'
import './App.css';

//components
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart'; 
import ProductList from './Components/ProductList'; 
import GenAI from './Components/GenAI';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path='/genai' element={<GenAI />}></Route>
            </Routes>
          </Box>
        <ProductList></ProductList>
        </BrowserRouter> 
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
// CustomButtons mai bot add kar diya hai. Usko style karna hai.