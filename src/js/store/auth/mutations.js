export default {
  SET_LOGIN: (state, payload) => {
    state.user = payload
  },
  CLEAR_LOGIN: (state) => {
    state.user = null
  },

  ADD_NEW_BOOK: (state, books) => {
    state.user.books.push(books)
  },
};
