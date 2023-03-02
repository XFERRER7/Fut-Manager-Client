import axios from "axios";
import { IUserSignIn, IUserSignUp } from "../types/types";
import useStoreAuth from '../stores/AuthStore'

const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const useApi = () => {

  const { token } = useStoreAuth()

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

    },
    createTeam: async ({ name, userId, shield }: { name: string, userId: string, shield: File | null }) => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('userId', userId)
      if (shield) {
        formData.append('shield', shield)
      }
      const response = await api.post('/create-team', formData, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      const data = await response.data
      return data
    },
    getDataUser: async (userId: string) => {

      try {
        const response = await api.get(`/get-user/${userId}`, optionsGet)
        const data = await response.data
        return data
      }
      catch (error: any) {
        console.log(error.response.data)
      }
    }

  }

}