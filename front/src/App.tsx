import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation/navigate';
// import Card from './components/card';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <div className="shop"><h1>NOIDA ONLINE LAPTOP SHOP</h1></div> */}

        <div className="cards">
          {/* <Card title="HP" details="15.6 laptop" amount={20000} />
          <Card title="ACER" details="15.6 laptop" amount={25000} />
          <Card title="LENOVO" details="15.6 laptop" amount={18000} />
          <Card title="DELL" details="15.6 laptop" amount={26000} /> */}
          <div>

            <Navigation />

          </div>

        </div>

      </div>
    );
  }
}

export default App;