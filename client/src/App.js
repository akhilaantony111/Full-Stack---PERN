import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from "../src/store";
import AddProduct from './modules/AddProduct';
import ProductList from './modules/ProductList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/add-product" component={AddProduct}/>
          <Route path="/products/:id" component={AddProduct}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
