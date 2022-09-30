// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { GET_DESPESA } from '../actions/index';

const INITIAL_STATE = {
  despesaTotal: 0,
};

// Coloca a despesa porque vai precisar ir aumentando a despesa no header
// conforme vai colocando items na carteira
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case GET_DESPESA:
  //   return {
  //     ...state,
  //     despesa: action.payload,
  //   };
  default:
    return state;
  }
};

export default wallet;
