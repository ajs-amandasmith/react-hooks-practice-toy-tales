import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, deleteToy }) {
  const displayToys = toyData.map(toy => (
    <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} deleteToy={deleteToy} />
  ))


  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
