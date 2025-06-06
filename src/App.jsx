import React, { useState, useEffect } from "react";
import Character from "./components/Character/Character";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3]")
      .then(res => res.json())
      .then(data => {
        setCharacters(Array.isArray(data) ? data : data); // Para asegurar que sea array
      });
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <Character
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
        />
      ))}
    </div>
  );
}

export default App;