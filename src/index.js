import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App1} from './app1.js'
import {App2} from './app2.js'
import {App3} from './app3.js'
import {App4} from './app4.js'
import {App5} from './app5.js'
import { Display } from './display.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div className='container'>
            <div><h1>{<App1/>}</h1></div>
            <div><h1>{<App2/>}</h1></div>
        </div>
        <div className='container'>
            <div><h1>{<App3/>}</h1></div>
            <div><h1>{<App4/>}</h1></div>
        </div>
        <div className='container'>
            <div><h2>{<App5/>}</h2></div>
            <div><h1>{<Display/>}</h1></div>
        </div>
    </>

);