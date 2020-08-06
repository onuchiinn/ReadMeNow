export default {
  SET_LOGIN: (state, payload) => {
    state.user = payload
  },
  CLEAR_LOGIN: (state) => {
    state.user = null
  },
};
