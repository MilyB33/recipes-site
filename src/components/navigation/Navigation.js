import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import RegLink from './RegLink';
import AccountLink from './AccountLink';
import Socials from './Socials';
import NavBtn from './NavBtn';
import history from '../../history';
import { getUser } from '../../actions';

class Navigation extends React.Component {
  state = {
    showNav: false,
  };

  componentDidMount() {
    this.props.getUser();
    history.listen(() => {
      window.scrollTo(0, 0);
    });

    if (window.matchMedia('(min-width:800px)').matches)
      this.setState({ showNav: true });
    else
      history.listen(() => {
        this.setState({ showNav: false });
      });

    window
      .matchMedia('(min-width:800px)')
      .addEventListener('change', (event) => {
        if (event.matches) {
          this.setState({ showNav: true });
        } else {
          // When Url change close menu
          history.listen(() => {
            if (event.matches) return;
            this.setState({ showNav: false });
          });

          this.setState({ showNav: false });
        }
      });
  }

  toggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  render() {
    return (
      <Fragment>
        <NavBtn onClick={this.toggleNav} />

        {this.state.showNav && (
          <nav className="navigation">
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
