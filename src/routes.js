import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';


export default function Routes(){
    return(
    <BrowserRouter>
    <Header />
        <Switch>
            <Route path="/" exact  component={ProductList}/>
            <Route path="/cart" component={ShoppingCart}/>
        </Switch>
    </BrowserRouter>
    )
}