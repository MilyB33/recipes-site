import React from 'react';
import Slider from '../home/Slider';
import BrowseFrom from './BrowseForm';
import Results from './Results';

class Browse extends React.Component {
  render() {
    return (
      <main className="container container--home">
        <Slider text="Search for recipe" />
        <BrowseFrom param={this.props.match.params.type} />
        <Results />
      </main>
    );
  }
}

export default Browse;
