import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toys => setToyData(toys))
    },
    []
  )

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function submitNewToy(newToy) {
    setToyData([...toyData, newToy]);
  }

  function deleteToy(id) {
    const newToys = toyData.filter(toy => toy.id !== id)
    setToyData(newToys);
  }

  function updateLikes(updatedToy) {
    const newToys = toyData.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    })
    setToyData(newToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm submitNewToy={submitNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} deleteToy={deleteToy} updateLikes={updateLikes} />
    </>
  );
}

export default App;

/*
App
  |__Header
  |__ToyForm
  |__ToyContainer
        |__ToyCard
*/
