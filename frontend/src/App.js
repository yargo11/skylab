import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import Header from './components/Header';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  console.log(projects);

  // const handleAddProject = () => setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  async function handleAddProject() {

    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Yargo Valerio"
    });

    const project = response.data;
    console.log(response);

    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Homepage" />
      <button type="button" onClick={handleAddProject} > Submit </button>
      <ul>
        {projects.map(project => <li key={project.id} >{project.title}</li>)}
      </ul>
      <hr></hr>
    </>
  );
}
/**
 *
 * useState retorna um array com 2 posicoes
 *
 * 1. variavel com o seu valor inicial
 * 2. funcao para atualizarmos esse valor
 *
 */