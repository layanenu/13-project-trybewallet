// Coloque aqui suas actions

// ACTIONS TYPES
export const GET_EMAIL = 'GET_EMAIL';
export const INITIAL_GET = 'INITIAL_GET';
export const GET_API = 'GET_API';
export const FAIL_REQ = 'FAIL_REQ';
export const SUBMIT_WALLET_FORM = 'SUBMIT_WALLET_FORM';
export const TOTAL_DESPESAS = 'TOTAL_DESPESAS';

// ACTIONS CREATORS
// Action para pegar o email -> reducer user
export const getEmail = (payload) => ({ type: GET_EMAIL, payload });

// Action de inicialização
export const initialRequest = () => ({ type: INITIAL_GET });

// Action com o resultado da req
export const responseApi = (payload) => ({ type: GET_API, payload });

// Action com o resultado da req
export const failApi = (erro) => ({ type: FAIL_REQ, erro });

// Action para pegar os dados do Wallet Form
export const submitWalletForm = (expenses) => (
  { type: SUBMIT_WALLET_FORM, payload: expenses });

// Action para somar as despesas
export const totalDespesas = (payload) => ({ type: TOTAL_DESPESAS, payload });

// THUNK PARA PEGAR OS TIPOS DE MOEDAS
export const getRequest = () => async (dispatch) => {
  try {
    dispatch(initialRequest()); // Dispara uma action de inicialização
    const response = await fetch('https://economia.awesomeapi.com.br/json/all'); // Faz a requisição
    const result = await response.json();
    // console.log(result);
    return dispatch(responseApi(
      Object.keys(result).filter((object) => object !== 'USDT'),
    )); // Dispara uma action com o valor da requisição
  } catch (e) {
    dispatch(failApi(e));
  }
};

// // THUNK PARA PEGAR O VALOR DA COTAÇAO
export const getRequestApiCotacao = (parametro) => async (dispatch) => {
  try {
    dispatch(initialRequest()); // Dispara uma action de inicialização
    const response = await fetch('https://economia.awesomeapi.com.br/json/all'); // Faz a requisição
    const result = await response.json();
    // console.log(result);
    const currencyConversion = result[parametro.currency].ask * parametro.value;
    // console.log(currencyConversion);
    dispatch(submitWalletForm({ ...parametro, exchangeRates: result }));
    dispatch(totalDespesas(currencyConversion));
  } catch (e) {
    dispatch(failApi(e));
  }
};
