import React, { useContext } from 'react';
import styles from './App.module.css';
import { AppContext } from './App';

export const About = () => {
  const { user } = useContext(AppContext);
  return (
    <div className={styles.About}>
      <div className={styles.User}>User : {user}</div>
      <h1>
        The #1 high-performance low-code platform for developing
        blockchain applications
      </h1>
      <h3>
        It is our mission to make it possible for any organization to
        innovate with blockchain incredibly fast — whether you are
        looking to improve efficiency, bring new customer experiences,
        or completely reinvent existing business models. How do we do
        this? By taking the complexity out of blockchain technology,
        so any organization can accelerate blockchain adoption and
        leverage the benefits it brings.
      </h3>
      <h3>
        Our low-code platform makes it easy for IT teams to deliver
        blockchain applications rapidly, taking a visual development
        approach. The platform includes a suite of ready-to-use tools,
        frameworks, templates, and APIs to speed up the development of
        your blockchain use case. Your blockchain application will be
        up and running in weeks! And yes, you can do it yourself
        without prior experience with the technology.
      </h3>
      <h3>
        SettleMint offers a full-fledged
        Blockchain-Platform-as-a-Service solution. We offer not only a
        deployment environment, but also a complete development and
        middleware environment, all available over the internet. This
        makes us the most complete platform to innovate fast with
        blockchain.
      </h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h3>
          &#169; 2016-2022 &#160; | &#160; Settlemint &#160;| &#160;
          All rights reserved
        </h3>
      </div>
    </div>
  );
};
