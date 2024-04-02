import PropTypes from "prop-types";

function PokemonCard(props) {

  let result;

  props.imgSrc ? result = `
    <figure class="card">
      <img class="card-img" src=${props.imgSrc} alt={${props.alt}}/>
      <figcaption>
        ${props.name}
      </figcaption>
    </figure>
   `: result = `
    <figure class="card">
      <p>???<p/>
      <figcaption>
        ${props.name}
      </figcaption>
    </figure>
`
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

  return (
    <div dangerouslySetInnerHTML={{ __html: result }} />
  );

}



export default PokemonCard;