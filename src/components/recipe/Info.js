import React from 'react';
import _ from 'lodash';

const Info = ({ recipe }) => {
  const _recipe = _.toPairs(
    _.pick(recipe, ['vegetarian', 'vegan', 'glutenFree', 'dairyFree'])
  );

  const renderList = () => {
    return _recipe.map((item, index) => {
      const name = _.chain(item[0])
        .words()
        .join(' ')
        .capitalize()
        .value();

      return (
        <tr key={index} className="recipe__row">
          <td className="recipe__column">
            <p>{name}</p>
          </td>
          <td className="recipe__column">
            <p>{item[1] ? 'Yes' : 'No'}</p>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="recipe__info container--recipe">
      <caption>
        <h2 className="recipe__caption">Info :</h2>
      </caption>
      <tbody className="recipe__box">{renderList()}</tbody>
    </table>
  );
};

export default Info;
