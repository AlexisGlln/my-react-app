import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";


function App() {
  
  const [pokemonIndex , setPokemonIndex] = useState(0);
  const Previous= () => {
    console.log('%c⧭', 'color: #00e600', pokemonIndex);
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    } 
  }

  const Next= () => {
    console.log('%c⧭', 'color: #00a3cc', pokemonIndex);
    console.log('%c⧭', 'color: #e50000', pokemonList.length);
    if (pokemonIndex <= pokemonList.length -2) {
      setPokemonIndex(pokemonIndex +1);
    } else {

    }

  }
      const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "charmander",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
          name: "squirtle",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
          name: "pikachu",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
          name: "mew",
          imgSrc : "",
        },
      ];


      return (
        <div>
          <PokemonCard {...pokemonList[pokemonIndex]} />
          <button onClick={Previous}>Precedent</button>;
          <button onClick={Next}>Suivant</button>;
        </div>

      );
    }

    export default App;