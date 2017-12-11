import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './container/FilterableProductTable'
import PRODUCTS from './container/Products'
import './index.css';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<FilterableProductTable products={PRODUCTS} />,
 document.getElementById('root'));
registerServiceWorker();
