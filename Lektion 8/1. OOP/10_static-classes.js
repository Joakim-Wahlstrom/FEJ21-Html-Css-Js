// class User {
//   constructor(email, password) {
//     this.email = email
//     this.password = password
//   }

//   signIn() {
//     console.log(`Signing i with email and password`)
//   }
//   signOut() {
//     console.log(`Logging out!`)
//   }

// }


// const user1 = new User('joakim@mail.com', 'BytMig123')
// user1.signIn();

function userSignUp(user) {
  console.log('Registrating the user');
  console.log(user);
}

function userSignIn(email, password) {
  console.log('signing in with email and password');
}

function adminSignUp(user) {
  console.log('Registrating a new admin user.');
  console.log(user);
}

function adminSignIn(email, password) {
  console.log('signing in with email and password');
}



class UserService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('Registrating the user');
    console.log(user);
  }

  static signIn(email, password) {
    console.log('signing in with email and password');
  }
}


UserService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
UserService.signIn()