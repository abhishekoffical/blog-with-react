import React from 'react'
import authService from '../appwrite/auth'
import {useDispatch} from 'react-redux'
import {logout} from '../store/authSlice'

function LogoutBtn() {
    const dispatch=useDispatch()
    const LogoutHandler=()=>authService.logout().then(()=>dispatch(logout())).
    catch((error)=>{console.error("logout failed",error)})
  return (
    <button className='inline-bock px-6 py-2 duration-100 hover:bg-blue-100 rounded-full' onClick={LogoutHandler}>Logout</button>
  )
}

export default LogoutBtn