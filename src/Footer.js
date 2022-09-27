import React, { useState } from 'react';
import styles from './App.module.css';

export const Footer = () => {
  // DATA
  const locations = ['Belgium', 'Dubai', 'Singapore', 'Delhi'];

  // STATE
  const [isCompanyOpen, setIsCompanyOpen] = useState(true);
  const [countProjects, setCountProjects] = useState(0);
  const [email, setEmail] = useState('');
  const [showEamilInput, setShowEamilInput] = useState(true);

  // ACTION
  const handleEmailChange = (event) => {
    console.log('event.target.value: ', event.target.value);
    setEmail(event.target.value);
  };

  // RENDER
  return (
    <div className={styles.Footer}>
      <div className={styles.Company}>
        <h1 style={{ color: isCompanyOpen ? '#61dafb' : '#F7E8A0' }}>
          Settlemint =&gt; Blockchain Technology made Simple
        </h1>
        <div className={styles.UnionRow}>
          {isCompanyOpen ? (
            <h2 style={{ color: '#A5E0AB' }}>open for business :)</h2>
          ) : (
            <h2 style={{ color: '#EC635A' }}>check back later :(</h2>
          )}
          <button
            onClick={() => {
              setIsCompanyOpen(!isCompanyOpen);
            }}
          >
            {isCompanyOpen ? 'CLOSE' : 'OPEN'}{' '}
          </button>
        </div>
        <div className={styles.UnionRow}>
          <h3>Projects Delivered : {countProjects}</h3>
          {
            <button
              onClick={() => {
                setCountProjects(countProjects + 1);
              }}
            >
              ++
            </button>
          }
        </div>
      </div>
      <div className={styles.ContactUs}>
        <p>Contact Us (email)</p>
        <input type="text" onChange={handleEmailChange}></input>
        <button onClick={() => setShowEamilInput(!showEamilInput)}>
          show
        </button>
        {showEamilInput && <p>{email}</p>}
      </div>
      <div className={styles.Locations}>
        {locations &&
          locations.map((location, key) => {
            return (
              <h3 key={key} style={{ margin: '0px 50px' }}>
                {location}
              </h3>
            );
          })}
      </div>
    </div>
  );
};
