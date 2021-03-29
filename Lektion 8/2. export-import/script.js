import UserService from './services/UserService.js';
import { validate as val, hasNumber } from './functions/functions.js'

const user = {
  firstName: '',
  lastName: 'Wahlström',
  email: 'joakim@mail.com',
  password: 'BytMig123'
}


if(val(user))
  UserService.signUp(user)


  class Person {
    constructor(firstName) {
      this.firstName = firstName;
    }
    get id() {
      return Math.floor(Math.random() * 100000000000).toString()
    }
    // get lastName() {
    //   return 'Mattin-Lassei'
    // }
    get name() {
      return this.lastName.toUpperCase()
    }
    set name(newName) {
      if(!hasNumber(newName)) {
        this.lastName = newName;
      } else {
        console.log('Error, name contains numbers')
      }
    }
  }


  const hans = new Person('Hans')
  hans.name = 'Wahlström'
  // hans.lastName = 'Wahlström'
  console.log(hans.name)