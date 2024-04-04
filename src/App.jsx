import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";



function App() {

      const [pokemonIndex , setPokemonIndex] = useState(0);

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
          imgSrc : "https://pbs.twimg.com/media/EtnWhj2WYAQTwIW.jpg",
        },
        {
          name: "raichu",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        },
        {
          name: "sabelette",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
        },
        {
          name: "sablaireau",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        },
        {
          name: "nidoran",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
        },
        {
          name: "nidorina",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
        },
        {
          name: "aspicot",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        },
        {
          name: "nidoqueen",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        },
        {
          name: "nidoran",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
        },
        {
          name: "nidorino",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
        },
        {
          name: "voltobre",
          alt: "???",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
        },
        {
          name: "Grotadmorv",
          alt: "???",
          imgSrc: "https://eternia.fr/public/media/pokedex/7g/sl_sprites/089.png",
        },
        {
          name: "Poiscaille",
          alt : "???",
          imgSrc: "https://media.fortniteapi.io/images/117f54c-2985b28-ee59013-a625629/full_featured.png",
        },
        {
          name: "Ratatac",
          alt : "???",
          imgSrc: "https://risibank.fr/cache/medias/0/29/2903/290307/full.png",
        },
      ];


      return (
        <div>
          <PokemonCard {...pokemonList[pokemonIndex]} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex}/>
          <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex}/>
        </div>

      );
    }

    export default App;