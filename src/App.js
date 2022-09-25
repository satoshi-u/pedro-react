import React from 'react';
import './App.css';

function App() {
  // const userJSX = (
  //   <div className="App-header">
  //     <h1>Sarthak</h1>
  //     <h2>sarthak@settlemint.com</h2>
  //     <h3>Belgium</h3>
  //   </div>
  // );

  return (
    <div className="App">
      {/* {userJSX} */}
      <User
        name="Sarthak"
        email="sarthak@settlemint.com"
        location="Belgium"
        age={25}
      />
      <User
        name="Pedro"
        email="pedro@settlemint.com"
        location="Belgium"
        age={21}
      />
    </div>
  );
}

const User = (props) => {
  return (
    <div className="App-header">
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h3>{props.location}</h3>
      <h4>{props.age}</h4>
    </div>
  );
};

export default App;
