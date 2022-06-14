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

  return (
    <>
      <Header />
      {showForm ? <ToyForm submitNewToy={submitNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} deleteToy={deleteToy} />
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

When the like button is clicked, make a PATCH request to /toys/:id with the id of the toy that was clicked, along with the new number of likes (this should be sent in the body of the PATCH request, as a object: { likes: 10 }), to update the toy on the server. Clicking on the button should also increase the number of likes on the DOM.

*/
