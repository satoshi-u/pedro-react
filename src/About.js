import React, { useContext } from 'react';
import styles from './App.module.css';
import { AppContext } from './App';

export const About = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <div className={styles.User}>User : {user}</div>
      <h1>About Page</h1>;
    </div>
  );
};
