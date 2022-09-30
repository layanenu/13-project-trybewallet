// Coloque aqui suas actions

// ACTIONS TYPES
export const GET_EMAIL = 'GET_EMAIL';
// export const GET_DESPESA = 'GET_DESPESA';

// ACTIONS CREATORS
export const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});

// export const getDespesa = (payload) => ({
//   type: GET_DESPESA,
//   payload,
// });
