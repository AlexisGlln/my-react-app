import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      alt: "???",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      alt: "???",
    },
  ];

  return (
    <div>
      <PokemonCard {...pokemonList[0]} />
      <PokemonCard {...pokemonList[1]} />
    </div>
  );
}

export default App;