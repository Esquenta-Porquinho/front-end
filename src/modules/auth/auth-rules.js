import {email, lengthBiggerThan, lengthLessThan, required} from "@/modules/rules/common-rules";


const nameRules = [
  v => required(v, 'Email'),
  v => lengthBiggerThan(v, 'Name', 3)
]

const emailRules = [
  v => required(v, 'Email'),
  v => email(v)
]

const passwordRules = [
  v => required(v, 'Password'),
  v => lengthBiggerThan(v, 'Password', 8),
  v => lengthLessThan(v, 'Password', 16),
]



export {
  nameRules,
  emailRules,
  passwordRules,
}

