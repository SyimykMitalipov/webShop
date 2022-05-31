import React from 'react'
import { UserAuth } from '../context/AuthContext'
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
    <button
    onClick={() => handleOut()}
    type="button"
    className="btn btn-outline-primary"
    id='btn_logout'
    >
    <span className='fa fa-sign-in me-1'></span> Log Out
  </button>
  )
}

export default LogOut