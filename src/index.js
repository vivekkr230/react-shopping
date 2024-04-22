import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import {NetflixText} from "./component/netflixcomponent";
import reportWebVitals from './reportWebVitals';
// import {NetflixHeaderComponent} from "../src/component/NetflixHeader"
// import {NetflixIndexComponent} from "./component/NetflixIndex"
// import {DatabindingComponent} from "./databinding.js"
// import {IndexComponent} from "./shopping/index.jsx"
//import {FlipkartComponent} from "./component/flipkart/index"
import {ComplexComponent} from './component/flipkart/index2.jsx'
import {Getname} from "./component/examples/index.jsx"
import {FormComponent} from "./component/examples/form"
import {UpdateFormComponent} from "./component/examples/updateform"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UpdateFormComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
