import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App'
import "bulma/css/bulma.css";
import axios from "axios"


axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

const title = 'Know your weather condition';
const blogText = 'Wish to know your weather? Proceed to the Login page';
root.render(
  <React.StrictMode>
    
    <div className="title">{title}</div> 
    
    <div className="blog-text">{blogText}</div>
    <App />
  </React.StrictMode>
);




// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import "./index.css";
// //import { store } from './app/store';
// import App from './App'
// import "bulma/css/bulma.css";
// import axios from "axios"

// axios.defaults.withCredentials = true;

// const container = document.getElementById('root');
// const root = createRoot(container);


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

