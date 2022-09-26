import React from 'react';
import styles from './App.module.css';

export const User = (props) => {
  return (
    <div>
      <h1 className={styles.UserName}>{props.name}</h1>
      <h2>{props.email}</h2>
      <h3>{props.location}</h3>
      <h4>{props.age}</h4>
    </div>
  );
};
