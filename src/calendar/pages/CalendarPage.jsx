import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import { Navbar, CalendarEvent, CalendarModal } from '..'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessagesES } from '../../helpers'
import { useUiStore } from '../../hooks'


const events = [{
  title: 'Navidad',
  notes: 'Comprar regalos',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fernanda'
  }
}]


export const CalendarPage = () => {

  const { openDateModal } = useUiStore()
  const [ heightNavbar, setHeightNavbar ] = useState( 0 ) 
  const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' )

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    //console.log({ event, start, end, isSelected })
  }

  const onDoubleClick = ( event ) => {
    // console.log({ doubleClick: event })
    openDateModal()
  }

  const onSelect = ( event ) => {
    console.log({ click: event })
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event)
    setLastView( event )
  }

  return (
    <>
      <Navbar setHeightNavbar={ setHeightNavbar }/>

      <Calendar
        culture='es'
        messages={ getMessagesES() }
        defaultView={ lastView }
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: `calc( 100vh - ${heightNavbar}px )` }}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />
    </>
  )
}
