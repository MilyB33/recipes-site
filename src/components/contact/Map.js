import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div className="map" ref={this.ref}>
        <iframe
          title="map"
          className="map__frame"
          style={{ border: '0' }}
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_KEY}&q=Space+Needle,Seattle+WA`}
        ></iframe>
      </div>
    );
  }
}

export default Map;
