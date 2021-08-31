import React, { useEffect, useState } from 'react';
import IngredientsCard from './IngredientsCard';

function ExploreDrinksByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const exploreLimits = 12;
  // const one = 1;

  const fetchIngredients = async () => {
    const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(endPoint);
    return response.json();
  };

  useEffect(() => {
    fetchIngredients().then((response) => {
      setIngredients(response.drinks);
    });
  }, []);

  return (
    <div>
      <h1 data-testid="page-title">Explorar Ingredientes</h1>
      { ingredients.slice(0, exploreLimits).map((ingredient, index) => (
        <IngredientsCard
          key={ index }
          ingredientImg={ ingredient.strIngredient1 }
          ingredientName={ ingredient.strIngredient1 }
          index={ index }
          path="thecocktaildb"
        />
      ))}
    </div>
  );
}

export default ExploreDrinksByIngredients;
