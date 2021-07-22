import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref);
  }

  render() {
    return (
      <div className="map" ref={this.ref}>
        {/* <iframe
          className="map__frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1228881313427!2d12.490042215764431!3d41.89021417263434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sKoloseum!5e0!3m2!1spl!2spl!4v1626960727607!5m2!1spl!2spl"
          style={{ border: '0' }}
          loading="lazy"
        ></iframe> */}
      </div>
    );
  }
}

export default Map;
