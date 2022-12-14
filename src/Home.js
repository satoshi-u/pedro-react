import React, { useEffect, useState, useContext } from 'react';
import styles from './App.module.css';
import { Project } from './Project';
import Axios from 'axios';
import { AppContext } from './App';
import { useQuery } from '@tanstack/react-query';

// npx create-react-app .
const Home = () => {
  // STATE
  const [projectList, setProjectList] = useState([]);
  const [showAddProject, setShowAddProject] = useState(false);
  const [name, setName] = useState('');
  const [chain, setChain] = useState('');
  const [budget, setBudget] = useState(0);
  const [status, setStatus] = useState(false);
  const { user } = useContext(AppContext);

  // USE EFFECT
  useEffect(() => {
    fetchProjectsAPI();
  }, []);

  // USE QUERY
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(['unique-key-cat'], () => {
    let respData = Axios.get('https://catfact.ninja/fact').then(
      (res) => res.data
    );
    while (!respData) {
      respData = refetch().then((res) => res.data);
    }
    return respData;
  });
  if (isError)
    console.error('got error in useQuery for fetching cat fact!');
  else console.log('random cat fact: ', catData?.fact);

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
  const fetchProjectsAPI = () => {
    Axios.get('http://localhost:5000').then((res) => {
      console.log(res.data);
      setProjectList(res?.data);
    });
  };

  // RENDER
  return (
    <div className={styles.App}>
      <div className={styles.User}>User : {user}</div>
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
                // @ts-ignore
                deleteProject={deleteProject}
                toggleProjectStatus={toggleProjectStatus}
              />
            </div>
          );
        })}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.CatFact}>
          <div style={{ color: 'lime', minWidth: '100px' }}>
            Cat-Fact :
          </div>
          {catData?.fact}
        </div>
      )}
    </div>
  );
};

export default Home;
