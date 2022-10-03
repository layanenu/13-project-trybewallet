import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalDespesas } = this.props;
    // console.log(totalDespesas);
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
          {totalDespesas}
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
  totalDespesas: PropTypes.number,
}.isRequired;

// Para renderizar o email e a despesa total (que esta na store) para colocar no header
const mapStateToProps = (state) => ({
  email: state.user.email,
  totalDespesas: state.user.totalDespesas,
});
// chave que vou passar para o componente
// nome do reducer
// chave

export default connect(mapStateToProps)(Header);
