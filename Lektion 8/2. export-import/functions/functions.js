export const validate = user => {
  if(user.firstName !== '') {
    console.log('Users firstName looks good');
    return true
  } else {
    console.log('All Users must have a first Name!');
    return false
  }
}

export const hasNumber = string => {
  return /\d/.test(string);
}