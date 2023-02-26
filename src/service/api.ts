import axios from "axios";
import { IUserSignIn, IUserSignUp } from "../types/types";

const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const useApi = () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzI2ODg4OTUsImV4cCI6MTY3Mjc3NTI5NSwic3ViIjoiZWJlYzMwZmYtNTkxMi00Y2Y5LThhZTYtMWY3NzMxZjM0MzJlIn0.-ZA8114E43JyWjE1684ooM791gyNKPceC6erjrbzVTE'

  const optionsGet = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`
    }
  }

  const optionsPost = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`
    }
  }

  const optionsPatch = {
    method: 'PATCH',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }

  const optionsDelete = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`
    }
  }


  return {
    signUp: async (user: IUserSignUp) => {

      try {
        const response = await api.post('/create-user', user, optionsPost)

        const data = await response.data

        return data
      }
      catch (error: any) {
        console.log(error.response.data)
      }


    },
    signIn: async (user: IUserSignIn) => {

      try {
        const response = await api.post('/authenticate-user', user, optionsPost)

        const data = await response.data

        return data
      }
      catch (error: any) {
        console.log(error.response.data)
      }

      const response = await api.post('/authenticate-user', user, optionsPost)

      const data = await response.data

      return data

    },
    getPlayersByTeam: async (teamId: string) => {

      const response = await api.get(`/get-players/${teamId}`, optionsGet)

      const data = await response.data

      return data

    },
    getTeamById: async (teamId: string) => {

      const response = await api.get(`/get-team/${teamId}`, optionsGet)

      const data = await response.data

      return data

    }

  }

}