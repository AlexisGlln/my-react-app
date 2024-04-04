import React, { useState } from 'react';

function NavBar ({ pokemonIndex, setPokemonIndex, pokemonList }) {
    
    const Previous= () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1);
      } 
    }
  
  
    const Next= () => {
      console.log('%c⧭', 'color: #0088cc', pokemonIndex);
      if (pokemonIndex < pokemonList.length -1) {
        setPokemonIndex(pokemonIndex +1);
      } else {
        console.log('%c⧭', 'color: #000000', pokemonIndex);
      }
    }
      return (
    <div>
      <button onClick={Previous}>Precedent</button>
      <button onClick={Next}>Suivant</button>
    </div>
    )
}

export default NavBar;