import React, { Fragment } from 'react';
import {
  restoreScroll,
  scrollFadeIn,
} from '../../animations/animations';

class ScrollBtn extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = {
    visible: false,
  };

  onClick = () => {
    restoreScroll();
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    });
  }

  componentDidUpdate() {
    if (this.state.visible) {
      scrollFadeIn(this.ref.current);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.visible === nextState.visible ? false : true;
  }

  render() {
    return (
      <Fragment>
        {this.state.visible && (
          <div ref={this.ref}>
            <button className="scrollBtn" onClick={this.onClick}>
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default ScrollBtn;
