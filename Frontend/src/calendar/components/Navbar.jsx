import { useLayoutEffect, useRef } from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'

export const Navbar = ({ setHeightNavbar }) => {
  
  const { startLogout, user } = useAuthStore()
  const navH = useRef()

  useLayoutEffect(() => {
    setHeightNavbar( navH.current.clientHeight + 24 )
  }, [])


  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4' ref={ navH }>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt'></i>
        &nbsp;
        {user.name}
      </span>

      <button 
        className='btn btn-outline-danger'
        onClick={ startLogout }
      >
        <i className='fas fa-sign-out-alt'></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
