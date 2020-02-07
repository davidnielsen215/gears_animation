import React from 'react';
// import logo2 from './logo2.png';
import blueGear from './blue_gear.png'
import greenGear from './green_gear.png'
import aquaGear from './aqua_gear.png'
import { Spring } from 'react-spring/renderprops'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='gears'>
        <Spring 
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 1000}}
            >
            { props => (
            <div style={props}>
        <img src={blueGear} className="App-logo" alt="logo" />
            </div>
            )}
        </Spring>
        <Spring 
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 1000}}
            >
            { props => (
            <div style={props}>
        <img src={aquaGear} className="App-logo3" alt="logo" />
        </div>
            )}
        </Spring>
        <Spring 
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 1000}}
            >
            { props => (
            <div style={props}>
        <img src={greenGear} className="App-logo2" alt="logo" />
        </div>
            )}
        </Spring>
        </div>
        <Spring 
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 1000}}
            >
              { props => (
            <div style={props}>
        <div className="logo-txt">
        <p>
          V  L  O  R  M
        </p>
        </div>
        </div>
            )}
        </Spring>
        
        
        
      </header>
    </div>
  );
}

export default App;
