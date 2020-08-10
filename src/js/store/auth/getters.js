export default {
  getUser(state) {
    return state.user;
},
  checkUser (state) {
    return state.user == null
  },
  getBooks(state) {
    return state.user.books;
},
};
