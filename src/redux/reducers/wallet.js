// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  INITIAL_GET,
  GET_API,
  SUBMIT_WALLET_FORM,
  BUTTON_EXCLUI,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  // editor: false, // valor booleano que indica de uma despesa está sendo editada
  // idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INITIAL_GET:
    return {
      ...state,
    };
  case GET_API: {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  case SUBMIT_WALLET_FORM: {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  }
  case BUTTON_EXCLUI:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
