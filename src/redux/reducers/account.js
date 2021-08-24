// 1. set up default state
const defaultState = {
  checking: 0,
  savings: 0
};

// 3. reducer/s
function account(state = defaultState, action) {
  switch (action.type) {
    case "DEPOSIT":
      // handle deposit
      return {
        ...state,
        [action.account]: state[action.account] + parseFloat(action.amount)
      };
    case "WITHDRAWAL":
      // handle withdrawal
      return {
        ...state,
        [action.account]: state[action.account] - parseFloat(action.amount)
      };
    default:
      return state;
  }
}

export default account;
