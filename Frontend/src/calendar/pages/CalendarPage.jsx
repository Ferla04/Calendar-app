import { useState, useEffect } from 'react'
import { Calendar } from 'react-big-calendar'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, getMessagesES } from '../../helpers'
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks'


export const CalendarPage = () => {

  const { user } = useAuthStore()
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()

  const [ heightNavbar, setHeightNavbar ] = useState( 0 ) 
  const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' )

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid )

    const style = {
      backgroundColor:  isMyEvent ? '#174c6a' : '#828282',
      borderRadius: '3px',
      opacity: 0.8,
      color: '#fff',    
    }

    if( isSelected && isMyEvent ) style.backgroundColor = '#082c41'
    return { style }
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

  useEffect(() => {
    startLoadingEvents()
  }, [])
  

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
      <FabDelete />
    </>
  )
}
