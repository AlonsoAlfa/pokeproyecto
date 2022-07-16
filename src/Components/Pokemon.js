import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";
import { useTranslation } from 'react-i18next';

const Pokemon = (props) => {
  const { t, i18n } = useTranslation(['translate']);
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

 

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(t.pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img onClick 
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            { pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Pokemon;
