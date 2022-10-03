import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRequest } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRequest());
  }

  render() {
    const { currencies } = this.props; // Vem do estado global
    // console.log(currencies);

    return (
      <form>
        {/* VALOR DA DESPESA */}
        <label htmlFor="valor-despesa">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="valor-despesa"
          />
        </label>

        {/* TIPO DE MOEDA */}
        <label
          htmlFor="tipo-moeda"
        >
          Moeda:
          <select name="tipo-moeda" data-testid="currency-input">
            {
              currencies.map((element, index) => (
                <option key={ index } selected>{element}</option>
              ))
            }

          </select>
        </label>

        {/* MÉTODO DE PAGAMENTO */}
        <label
          htmlFor="metodo-pagamento"
        >
          Método de pagamento:
          <select name="metodo-pagamento" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="cartão-de-crédito" selected>Cartão de crédito</option>
            <option value="cartão-de-débito">Cartão de débito</option>
          </select>
        </label>

        {/* TAG PARA A DESPESA */}
        <label
          htmlFor="categoria"
        >
          Categoria:
          <select name="categoria" data-testid="tag-input">
            <option value="alimentação">Alimentação</option>
            <option value="lazer" selected>Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>

        {/* DESCRICAO DA DESPESA */}
        <label htmlFor="descricao-despesa">
          Descrição:
          <input
            data-testid="description-input"
          />
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
