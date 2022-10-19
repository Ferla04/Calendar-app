import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import { Navbar } from '../'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessagesES } from '../../helpers'


const events = [{
  title: 'Navidad',
  notes: 'Vomprar regalos',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fernanda'
  }
}]


export const CalendarPages = () => {
  const [ heightNavbar, setHeightNavbar ] = useState(0)

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    console.log({ event, start, end, isSelected })
  }

  return (
    <>
      <Navbar setHeightNavbar={ setHeightNavbar }/>

      <Calendar
        culture='es'
        messages={ getMessagesES() }
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: `calc( 100vh - ${heightNavbar}px )` }}
        eventPropGetter={ eventStyleGetter }
      />
    </>
  )
}
