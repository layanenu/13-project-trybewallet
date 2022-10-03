import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRequest, getRequestApiCotacao } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    // exchangeRates: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getRequest());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    // e.preventDefault();
    const { dispatch } = this.props;
    const { id } = this.state;
    dispatch(getRequestApiCotacao(this.state));
    this.setState({
      id: id + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
    // dispatch(getRequest());
  };

  render() {
    const { currencies } = this.props; // Vem do estado global
    // console.log(currencies);
    const { value, currency, method, tag, description } = this.state;

    return (
      <div>
        <form>
          {/* VALOR DA DESPESA */}
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleChange }

            />
          </label>

          {/* TIPO DE MOEDA */}
          <label
            htmlFor="currency"
          >
            Moeda:
            <select
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((element, index) => (
                  <option key={ index } value={ element }>{element}</option>
                ))
              }
            </select>
          </label>

          {/* MÉTODO DE PAGAMENTO */}
          <label
            htmlFor="method"
          >
            Método de pagamento:
            <select
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          {/* CATEGORIA PARA A DESPESA */}
          <label
            htmlFor="tag"
          >
            Categoria:
            <select
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer" selected>Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          {/* DESCRICAO DA DESPESA */}
          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </form>

        <button
          type="button" // Lembrar do prevent default
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
