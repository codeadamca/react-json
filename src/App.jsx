import { useState, useEffect } from 'react'
import './App.css'
import Project from './Project'

function App() {
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // fetch('http://localhost:8888/api/projects').then(res => res.json()).then(projects => {
    fetch('projects.json').then(res => res.json()).then(projects => {
        setProjects(projects);
    })
  }, [])

  return (
    <div>
      <h1>Projects from Laravel Console</h1>
      {
        projects.map((project, index) => (
          <Project project={project} key={index} />
        ))
      }
    </div>
  )
}

export default App
