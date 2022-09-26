import React, { useState } from 'react';
import styles from './App.module.css';
import { Project } from './Project';
import { Footer } from './Footer';

// npx create-react-app .
function App() {
  // STATE
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      name: 'CocaCola NFTs',
      chain: 'Polygon',
      budget: 1000000,
      status: true,
    },
    {
      id: 2,
      name: 'CBN KYC',
      chain: 'Fabric',
      budget: 7500000,
      status: false,
    },
  ]);
  const [showAddProject, setShowAddProject] = useState(false);
  const [name, setName] = useState('');
  const [chain, setChain] = useState('');
  const [budget, setBudget] = useState(0);
  const [status, setStatus] = useState(false);

  // ACTION
  const handleName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const handleChain = (event) => {
    const chain = event.target.value;
    setChain(chain);
  };
  const handleBudget = (event) => {
    const budget = event.target.value;
    setBudget(parseInt(budget));
  };
  const handleStatus = (event) => {
    let status = event.target.value;
    status = status === 'true' ? true : false;
    setStatus(status);
  };
  const addProject = () => {
    setProjectList([
      ...projectList,
      {
        id: projectList.length
          ? projectList[projectList.length - 1].id + 1
          : 1,
        name,
        chain,
        budget,
        status,
      },
    ]);
  };
  const deleteProject = (id) => {
    // return true only for the object to be filtered
    setProjectList(
      projectList.filter((project) => project.id !== id)
    );
  };
  const toggleProjectStatus = (id) => {
    setProjectList(
      projectList.map((project) => {
        if (project.id === id)
          return { ...project, status: !project.status };
        else return project;
      })
    );
  };

  // RENDER
  return (
    <div className={styles.App}>
      <div className={styles.AddProject}>
        <button
          onClick={() => {
            setShowAddProject(!showAddProject);
          }}
        >
          {showAddProject ? 'Hide x' : 'Add Project ->'}
        </button>
        {showAddProject && (
          <div>
            <input
              onChange={handleName}
              placeholder=" name (Project X)"
            />
            <input
              onChange={handleChain}
              placeholder="chain (Ethereum)"
            />
            <input
              onChange={handleBudget}
              placeholder=" budget (1000000)"
            />
            <input
              onChange={handleStatus}
              placeholder="status (true|false)"
            />
            <button onClick={addProject}>Add Project</button>
          </div>
        )}
      </div>

      <div className={styles.ListProjects}>
        {projectList.map((project, key) => {
          return (
            <div key={key}>
              <Project
                id={project.id}
                name={project.name}
                chain={project.chain}
                budget={project.budget}
                status={project.status}
                deleteProject={deleteProject}
                toggleProjectStatus={toggleProjectStatus}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
