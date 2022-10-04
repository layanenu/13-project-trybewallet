import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buttonExclui, subtraiDespesa } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch, expenses } = this.props;
    const newExpense = expenses.filter((element) => (element.id !== id));
    const subExpense = expenses.find((element) => (element.id === id));
    const currency = Number(
      subExpense.exchangeRates[subExpense.currency].ask,
    );
    dispatch(buttonExclui(newExpense));
    dispatch(subtraiDespesa(currency * subExpense.value));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((element) => {
              const value = Number(element.value);
              const cambio = element.exchangeRates[element.currency].name;
              const currencyConversion = Number(
                element.exchangeRates[element.currency].ask,
              )
              * Number(element.value);
              const currency = Number(
                element.exchangeRates[element.currency].ask,
              );
              return (
                <tr key={ element.id }>
                  <td>{element.description}</td>
                  <td>{element.tag}</td>
                  <td>{element.method}</td>
                  <td>{value.toFixed(2)}</td>
                  <td>{cambio}</td>
                  <td>{currency.toFixed(2)}</td>
                  <td>{currencyConversion.toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.handleClick(element.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  totalDespesas: state.user.totalDespesas,
});

export default connect(mapStateToProps)(Table);
