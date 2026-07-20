import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import {logout} from '../store/authSlice'
import Logo from '../Components/Logo'
import { useSelector } from 'react-redux'
import { addPosts } from '../store/postSlice'
import {LogoutBtn} from './LogoutBtn'

function Header() {
  const Navigate=useNavigate()
  const Authcheck= useSelector((state)=>{state.auth.status})
  const NavItems=[{
    name:Home ,
    slug :"/",
    active:true
  },{
    name:Login ,
    slug:"/login",
    active:!Authcheck
  },
{
  name:Signup,
  slug:"/signup",
  active:!Authcheck
},{
  name:Allpost,
  slug:"all-post",
  active:Authcheck
},{
  name:addPosts,
  slug: "/addPosts",
  active:Authcheck
}]
  return (
   <header className='shadow py-3 bg-gray-500'>
    <Container >
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px' />
          </Link>
        </div>
        <ul className='flex ml-auto'>
          {NavItems.map((item)=>(
             item.active? <li key={item.name}>
             <button className='inline-bock px-6 py-2 duration-100 hover:bg-blue-100 rounded-full' onClick={Navigate(item.slug)}>{item.name}</button>

             </li>:null
          ))}
          {Authcheck &&(
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
      </nav>
    </Container>
   </header>
  )
}

export default Header