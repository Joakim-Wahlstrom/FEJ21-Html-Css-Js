import UserService from './services/UserService.js';
import { validate as val } from './functions/functions.js'

const user = {
  firstName: '',
  lastName: 'Wahlström',
  email: 'joakim@mail.com',
  password: 'BytMig123'
}


if(val(user))
  UserService.signUp(user)