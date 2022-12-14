import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExploreDrinks() {
  const history = useHistory();

  const SurpriseMe = async () => {
    const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const { drinks: [{ idDrink }] } = await fetch(endPoint)
      .then((response) => response.json());
    history.push(`/bebidas/${idDrink}`);
  };

  const headerProps = {
    title: 'Explorar Bebidas',
    renderSearchBar: false,
  };

  return (
    <div>
      <Header { ...headerProps } />
      <Link to="/explorar/bebidas/ingredientes">
        <section className="explore-food-father">
          <section className="explore-ingredient-drink">
            <button
              type="button"
              className="explore-btn"
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </button>
          </section>
        </section>
      </Link>
      <section className="explore-food-father">
        <section className="explore-surprise-me">
          <button
            type="button"
            className="explore-btn"
            data-testid="explore-surprise"
            onClick={ () => SurpriseMe() }
          >
            Me Surpreenda!
          </button>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
