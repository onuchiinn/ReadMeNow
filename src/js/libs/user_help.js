export default class User {
  constructor (user) {
    this.id = user.uid
    this.login = user.displayName
    this.email = user.email
  }
}
