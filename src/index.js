import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import "./components/app.css";

render(
    <div>
        <h1>Welcome to REACT & Weabpack</h1>
        < App/>
    </div>,
document.getElementById('app')
);


/**
 * comandos npm 
 * 
 * npm init -y: crear archivo package.json
 * npx webpack-dev-server -d : ejecutar aplicacion 
 * o 
 * npm run dev : ejecutar aplicacion 
 * 
 * npm webpack -p : compilar codigo
 * 
 * 
 * 
 *  */ 
