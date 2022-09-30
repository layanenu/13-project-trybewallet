import { GET_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

// Coloca o email no estado global para usar no header
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
