import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.LinkNav} to="/">
        Home
      </Link>
      <Link className={styles.LinkNav} to="/about">
        About
      </Link>
    </div>
  );
};
