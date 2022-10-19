import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { CalendarPages } from '../calendar'


export const AppRouter = () => {

  const authStatus = 'authenticated'//'not-authenticated'

  return (
    <Routes>
      {
        ( authStatus === 'not-authenticated' ) 
        ? <Route path='/auth/*' element={<LoginPage />}/>
        : <Route path='/*' element={<CalendarPages />}/>
      }

      <Route path='/*' element={ <Navigate to='/auth/login'/> }/>
    </Routes>
  )
}
