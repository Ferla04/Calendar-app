import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew } from '../'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessagesES } from '../../helpers'
import { useCalendarStore, useUiStore } from '../../hooks'


export const CalendarPage = () => {

  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  const [ heightNavbar, setHeightNavbar ] = useState( 0 ) 
  const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' )

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    return {
      background: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
  }

  const onDoubleClick = () => {
    openDateModal()
  }

  const onSelect = ( event ) => {
    //Evento click
    setActiveEvent( event )
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
      <FabAddNew />
    </>
  )
}
