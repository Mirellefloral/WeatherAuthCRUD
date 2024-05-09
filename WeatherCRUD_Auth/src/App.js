import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Login } from "./components/Login";
import Signup from './components/signup';
import Blog from './MyBlog/weatherBlog'
import Weather from './Weather';
import "./index.css";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
       </Router>
  );
}

export default App;







// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import Blog from './MyBlog/weatherBlog'
// import { Login } from "./components/Login";
// import Signup from './components/signup';
// import Weather from './Weather';
// import Header from "./Header";
// import Footer from "./Footer";
// axios.defaults.withCredentials = true;

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<Blog />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
          
//           <Route path="/weather" element={<Weather />} />
//         </Routes> 
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;





