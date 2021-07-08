import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="recipe__instruction container--recipe">
        <h2>Instruction :</h2>
        <p>
          {this.props.instructions ||
            'Sorry this recipe do not have a instrucion'}
        </p>
      </div>
    );
  }
}

export default Instructions;
