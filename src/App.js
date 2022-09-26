import React from 'react';
import styles from './App.module.css';
import { User } from './User';

// npx create-react-app .
function App() {
  const isCompanyOpen = true;
  const locations = ['Belgium', 'Dubai', 'Singapore', 'Delhi'];
  const users = [
    {
      name: 'Sarthak',
      email: 'sarthak@settlemint.com',
      location: 'Delhi',
      age: 25,
    },
    {
      name: 'Nandan',
      email: 'nandan@settlemint.com',
      location: 'Belgium',
      age: 35,
    },
  ];

  return (
    <div className={styles.App}>
      {users.map((user, key) => {
        return (
          <User
            name={user.name}
            email={user.email}
            location={user.location}
            age={user.age}
          />
        );
      })}
      <div className={styles.Footer}>
        {isCompanyOpen ? (
          <h1 style={{ color: 'green' }}>open for business</h1>
        ) : (
          <h2 style={{ color: 'red' }}>check back later</h2>
        )}
        {isCompanyOpen && <button>LogIn</button>}
        <h2 style={{ color: isCompanyOpen ? 'blue' : 'yellow' }}>
          Settlemint Pvt. Ltd.
        </h2>
        <div>
          <h1>Contact Us</h1>
          <div className={styles.ContactUs}>
            {locations &&
              locations.map((location, key) => {
                return (
                  <h2 key={key} style={{ margin: '0px 50px' }}>
                    {location}
                  </h2>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
