import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          {email}
        </p>
        <p
          data-testid="total-field"
        >
          0
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

// Para renderizar o email (que esta na store) para colocar no header
const mapStateToProps = (state) => ({
  email: state.user.email,
  // despesaTotal: state.wallet.despesaTotal,
});
// chave que vou passar para o componente
// nome do reducer
// chave

export default connect(mapStateToProps)(Header);
