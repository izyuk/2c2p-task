import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from "./components/main/main";
import Products from "./components/productsList/products-list";
import Payment from "./components/payment/payment";
import SuccessPage from "./components/success-page/success-page";


const App = () => {
    return (
        <Switch>
            <Route path="/products">
                <Products/>
            </Route>
            <Route path="/payment">
                <Payment/>
            </Route>
            <Route path="/success">
                <SuccessPage/>
            </Route>
            <Route path="/">
                {Main}
            </Route>
        </Switch>
    )
};

export default App;
