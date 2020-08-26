import React from 'react';
import './App.css'
import Bikes from './components/bikes'



function App() {
  
  return (
    <div>
          <h1 style={{textAlign:"center"}}>Facebook</h1>
          <div className="content">
            <Bikes name="Bikes Lover" desc="It never gets easier, you just go faster" />
          </div>

    </div>
  );
}

export default App;
