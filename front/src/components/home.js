import React from 'react';
import Card from './card';
import '../App.css';

const Order = (props) => {

    return (
        <React.Fragment>
            <div><h1>Buy Online Laptops</h1></div>

            <div className="cards">

                <Card title="HP" details="15.6 laptop" amount={'20000'} />
                <Card title="ACER" details="15.6 laptop" amount={'25000'} />
                <Card title="LENOVO" details="15.6 laptop" amount={'18000'} />
                <Card title="DELL" details="15.6 laptop" amount={'26000'} />

            </div>
        </React.Fragment>


    )
}

export default Order;