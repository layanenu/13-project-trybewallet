// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { INITIAL_GET, GET_API } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INITIAL_GET:
    return {
      ...state,
      loading: true,
    };
  case GET_API:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
