export default class User {
  constructor (user) {
    this.uid = user.uid
    this.login = user.displayName
    this.email = user.email
    this.books = user.books || null
  }
}
