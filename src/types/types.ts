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
  weight: number | string
  height: number | string
  nationality: string
  salary: number | string
  avatar: string
  isInjured: boolean
}

export interface ISidebarItem {
  title: string;
  icon: any;
}