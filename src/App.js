import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { About } from './About';
import Home from './Home';
import { Navbar } from './Navbar';

// npx create-react-app .
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Page Not Found 404 :/</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

/*
                                          USE EFFECT

This runs subsequently for any change in component, when states or props update
useEffect(()=>{
  ...
})

This runs subsequently only when the things specified in dependency array [], the second arg, changes
useEffect(()=>{
  ...
}, [x])

useEffect(()=>{
  ...
  return () => {code} // code runs only when the component is about to unmount
}, [])

NOTE: If you call an API in the component which changes the component-state outside the useEffect;
      It will run forever.

*/
