export default {
  getUser(state) {
    return state.user;
},
  checkUser (state) {
    return state.user == null
  },
  getBooks(state) {
    console.log(state.user.books)
    return state.user.books;
},
};
