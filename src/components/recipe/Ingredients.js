import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => {
  return (
    <table className="recipe__ingredients container--recipe">
      <caption>
        <h2 className="recipe__caption">Ingredients :</h2>
      </caption>
      <thead className="recipe__box"></thead>
      <tbody className="recipe__box">
        <tr className="recipe__row">
          <th className="recipe__column">
            <h3>Name :</h3>
          </th>
          <th className="recipe__column">
            <h3>Measure :</h3>
          </th>
        </tr>

        {ingredients?.map((ingredient, index) => (
          <tr className="recipe__row" key={index}>
            <td className="recipe__column">
              <p>{ingredient.name}</p>
            </td>
            <td className="recipe__column">
              <p>{`${ingredient.measures.metric.amount} ${ingredient.unit}`}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.array,
};

Ingredients.defaultProps = {
  ingredients: [],
};

export default Ingredients;
