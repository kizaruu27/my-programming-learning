/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';
import Description from './components/Description';

function App() {  
  const students = ['Amba', 'Rusdi', 'Fais'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
      setLikes(likes + 1);
  }

  return (
      <>
          <Header nama="Ujang" course="React JS"/>
          <Description />

          <ul>
              {
                  students.map((student, index) => (
                      <li key={index}>{student}</li>
                  ))
              }
          </ul>
          <button onClick={handleClick}>Likes ({likes})</button>
      </>
  )
}

export default App
