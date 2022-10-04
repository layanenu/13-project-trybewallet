import { GET_EMAIL, TOTAL_DESPESAS, SUB_DESPESA } from '../actions/index';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
  totalDespesas: 0,
};

// Coloca o email no estado global para usar no header
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  case TOTAL_DESPESAS: {
    // console.log(state, action);
    const somaDespesas = (Number(state.totalDespesas) + Number(action.payload));
    // console.log(somaDespesas);
    return {
      ...state,
      totalDespesas: somaDespesas.toFixed(2),
    };
  }
  case SUB_DESPESA: {
    const subDespesas = Math.abs((Number(state.totalDespesas) - Number(action.payload)));
    return {
      ...state,
      totalDespesas: subDespesas.toFixed(2),
    };
  }
  default:
    return state;
  }
};

export default user;
