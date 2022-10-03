// Coloque aqui suas actions

// ACTIONS TYPES
export const GET_EMAIL = 'GET_EMAIL';
export const INITIAL_GET = 'INITIAL_GET';
export const GET_API = 'GET_API';
export const FAIL_REQ = 'FAIL_REQ';

// ACTIONS CREATORS
// Action para pegar o email -> reducer user
export const getEmail = (payload) => ({ type: GET_EMAIL, payload });

// Action de inicialização
export const initialRequest = () => ({ type: INITIAL_GET });

// Action com o resultado da req
export const responseApi = (payload) => ({ type: GET_API, payload });

// Action com o resultado da req
export const failApi = (erro) => ({ type: FAIL_REQ, erro });

// ISSO É O THUNK
export const getRequest = () => async (dispatch) => {
  try {
    dispatch(initialRequest()); // Dispara uma action de inicialização
    const response = await fetch('https://economia.awesomeapi.com.br/json/all'); // Faz a requisição
    const responseJson = await response.json();
    // console.log(result);
    return dispatch(responseApi(
      Object.keys(responseJson).filter((object) => object !== 'USDT'),
    )); // Dispara uma action com o valor da requisição
  } catch (e) {
    dispatch(failApi(e));
  }
};
