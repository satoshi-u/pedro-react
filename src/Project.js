import React from 'react';
import styles from './App.module.css';

export const Project = (props) => {
  return (
    <div
      className={
        props.status ? styles.ProjectLive : styles.ProjectDev
      }
    >
      <h3 style={{ color: '#17152F' }}>ID: {props.id}</h3>
      <h1 style={{ color: '#7669EB' }}>{props.name}</h1>
      <h2 style={{ color: '#5249A4' }}>Built on {props.chain}</h2>
      <h3 style={{ color: '#6A8D26' }}>$ {props.budget}</h3>
      <h4 style={{ color: '#17152F' }}>
        {props.status ? 'LIVE' : 'DEV'}
        <button onClick={() => props.toggleProjectStatus(props.id)}>
          Toggle
        </button>
      </h4>
      <button onClick={() => props.deleteProject(props.id)}>
        Remove
      </button>
    </div>
  );
};
