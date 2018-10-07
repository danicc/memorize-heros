const initialState = {
  firstPick: {},
  secondPick: {},
  unmaskedHeros: [],
}

function game(state = initialState, action) {
  switch (action.type) {
    case 'PICK_FIRST':
      return {
        ...state,
        firstPick: action.payload.hero
      };
    case 'PICK_SECOND':
      return {
        ...state,
        secondPick: action.payload.hero
      };
    case 'UNMASK_HERO':
      return {
        ...state,
        unmaskedHeros: [...state.unmaskedHeros, action.payload.firstPickIndex, action.payload.secondPickIndex]
      };
    case 'RESTART_GAME':
      return {
        ...state,
        firstPick: {},
        secondPick: {},
        unmaskedHeros: [],
      };
    default:
      return state;
  }
}

export default game;