import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, despesaTotal } = this.props;
    return (
      <div>
        <h2
          data-testid="email-field"
        >
          `Email:
          $
          {' '}
          {email}
          `
        </h2>
        <h2
          data-testid="total-field"
        >
          `Despesa Total:
          $
          {despesaTotal}
          `
        </h2>
      </div>
    );
  }
}

// Para renderizar o email (que esta na store) para colocar no header
const mapStateToProps = (state) => ({
  email: state.user.email,
  despesaTotal: state.wallet.despesaTotal,
});
// chave que vou passar para o componente
// nome do reducer
// chave

export default connect(mapStateToProps)(Header);
