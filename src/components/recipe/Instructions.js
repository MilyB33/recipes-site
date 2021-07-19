import React, { Component } from 'react';
import { connect } from 'react-redux';

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    this.myRef.current.innerHTML =
      this.props.recipe.instructions ||
      `Look in detailed instruction <a href='${this.props.recipe.sourceUrl}'>Source</a>`;
  }

  render() {
    return (
      <article className="recipe__instruction container--recipe">
        <h2>Instruction :</h2>
        <p ref={this.myRef} className="recipe__instruction__text"></p>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipe: state.recipes.recipeInfo };
};

export default connect(mapStateToProps)(Instructions);
