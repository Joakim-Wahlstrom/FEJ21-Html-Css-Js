export default class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.id = Date.now().toString()
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}