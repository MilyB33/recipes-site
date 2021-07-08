import React from 'react';

const Ingredients = ({ ingredients }) => {
  const renderIngredientsList = () => {
    return ingredients?.map((ingredient, index) => {
      return (
        <tr className="recipe__ingredients__row" key={index}>
          <td className="recipe__ingredients__column">
            <p>{ingredient.name}</p>
          </td>
          <td className="recipe__ingredients__column">
            <p>{`${ingredient.measures.metric.amount} ${ingredient.unit}`}</p>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="recipe__ingredients">
      <caption>
        <h2 className="recipe__ingredients__caption">
          Ingredients :
        </h2>
      </caption>
      <tr className="recipe__ingredients__row">
        <th className="recipe__ingredients__column">
          <h3>Name :</h3>
        </th>
        <th className="recipe__ingredients__column">
          <h3>Measure :</h3>
        </th>
      </tr>
      {renderIngredientsList()}
    </table>
  );
};

export default Ingredients;
