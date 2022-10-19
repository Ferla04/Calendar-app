import { useLayoutEffect, useRef } from 'react'

export const Navbar = ({ setHeightNavbar }) => {
  
  const navH = useRef()

  useLayoutEffect(() => {
    setHeightNavbar( navH.current.clientHeight + 24 )
  }, [])


  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4' ref={ navH }>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt'></i>
        &nbsp;
        Fernanda
      </span>

      <button className='btn btn-outline-danger'>
        <i className='fas fa-sign-out-alt'></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
