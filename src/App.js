import React from 'react';
import styles from './App.module.css';
import { User } from './User';
import { Footer } from './Footer';

// npx create-react-app .
function App() {
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
      <Footer />
    </div>
  );
}

export default App;
