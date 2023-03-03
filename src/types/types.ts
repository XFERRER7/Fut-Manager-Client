export interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IPlayer {
  id: string
  position: string
  age: number
  name: string
  birthDate: string
  weight: number
  height: number
  nationality: string
  salary: number
  avatar: string
  isInjured: boolean
}