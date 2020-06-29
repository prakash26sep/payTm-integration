import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';

import Home from '../components/home';
import Payment from '../components/payment';


function Navigation() {


    return (
        <BrowserRouter >

            <Switch >

                <Route path="/" exact>

                    <Home />
                </Route>

                <Route path="/payment" exact>
                    <Payment />
                </Route>


            </Switch>

        </BrowserRouter>
    );
}

export default Navigation;