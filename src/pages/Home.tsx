import React from 'react'
import useUserStore from '../stores/AuthStore'

export const Home = () => {

  const { email, password, token } = useUserStore()

  return (
    <div>
      <span>{email}</span>
      <span>{password}</span>
      <span>{token}</span>
    </div>
  )
}
