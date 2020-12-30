import React from 'react';
import { Hero,Product,Feature,Footer } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import { productsData,productsDataTwo } from '../src/components/Product/Data';

function App() {
  return (
    <Router>
      <GlobalStyles/>
    <Hero />
    <Product heading='Choose your favorite' data={productsData} />
    <Feature/>
      <Product heading='Choose your favorite' data={productsDataTwo} />
    <Footer />
    </Router>
  );
}

export default App;
