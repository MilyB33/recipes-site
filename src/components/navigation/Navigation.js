import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import RegLink from './RegLink';
import AccountLink from './AccountLink';
import Socials from './Socials';
import NavBtn from './NavBtn';
import history from '../../history';
import { slideIn, slideOut } from '../../animations/animations';
import { getUser } from '../../actions';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    visible: false,
  };

  componentDidMount() {
    this.props.getUser();
    history.listen(() => {
      window.scrollTo(0, 0);
    });

    if (window.matchMedia('(min-width:800px)').matches)
      this.setState({ visible: true });
    else
      history.listen(() => {
        this.setState({ visible: false });
      });

    window
      .matchMedia('(min-width:800px)')
      .addEventListener('change', (event) => {
        if (event.matches) {
          this.setState({ visible: true });
        } else {
          // When Url change close menu
          history.listen(() => {
            if (event.matches) return;
            this.setState({ visible: false });
          });

          this.setState({ visible: false });
        }
      });
  }

  toggleNav = () => {
    if (this.state.visible) {
      slideOut(this.ref.current, () => {
        this.setState({ visible: !this.state.visible });
      });
    } else {
      this.setState({ visible: !this.state.visible });
    }
  };

  componentDidUpdate() {
    if (this.state.visible && window.innerWidth < 800)
      slideIn(this.ref.current);
  }

  render() {
    return (
      <Fragment>
        <NavBtn onClick={this.toggleNav} />

        {this.state.visible && (
          <nav className="navigation" ref={this.ref}>
            <Link to="/" className="logo__link">
              <img
                src="../../static/food-serving.png"
                alt="Site logo"
                className="logo"
              />
            </Link>

            <ul className="navigation__list">
              <NavLink url="/" text="HOME" />
              <NavLink url="/browse/default" text="BROWSE" />
              <NavLink url="/contact" text="CONTACT" />
              <RegLink />

              <Socials />

              <AccountLink />
            </ul>
          </nav>
        )}
      </Fragment>
    );
  }
}

export default connect(null, { getUser })(Navigation);
