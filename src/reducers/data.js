const initialState = {
  heros: [],
}

function data(state = initialState, action) {
  switch (action.type) {
    case 'GET_HEROS':
      return {
        ...state,
        heros: action.payload.heros
      };
    default:
      return state;
  }
}

export default data;