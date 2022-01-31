import React from 'react';
import { useEffect } from 'react'
import { logOut } from '../../services/users'
import { useNavigate } from 'react-router-dom'
import './LogOut.css'

export default function LogOut({ setLoggedIn }) {
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      //We use the signOut service which will remove the jwt
      await logOut()
      setLoggedIn(false)
      navigate('/')
    }
    signOutUser()
  }, [navigate, setLoggedIn])



  return ''
}
