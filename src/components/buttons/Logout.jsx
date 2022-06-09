import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Button } from '@mui/material'
const LogOut = () => {
    const {logOut} = UserAuth()
    const handleOut = async (e) => {
        // e.preventDefault()
        try{
            await logOut()
        window.location.reload()
        console.log('out')
        }catch(e){
            console.log(e.message);
        }

    }
  return (
    <Button
    onClick={() => handleOut()}>
    <span className='fa fa-sign-in me-1'></span> Log Out
  </Button>
  )
}

export default LogOut