import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { calendarApi } from '../api'
import { convertEventsToDateEvents } from '../helpers'
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {

  const { events, activeEvent } = useSelector( state => state.calendarStore )
  const { user } = useSelector( state => state.authStore )
  const dispatch = useDispatch()

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  //THUNKS
  const startSavingEvent = async( calendarEvent ) => {
    try {

      if( calendarEvent.id ){
        // Actualizando
        await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent)
        dispatch( onUpdateEvent({ ...calendarEvent, user }) )
        return
      }

      // Creando
      const { data } = await calendarApi.post('/events', calendarEvent)
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.result.id, user }) )
      
    } catch (error) {
      Swal.fire('Error al guardar', error.response.data.message, 'error')
    }
  }

  const startDeletingEvent = async() => {
    try {
      await calendarApi.delete(`/events/${ activeEvent.id }`)
      dispatch( onDeleteEvent() )
      
    } catch (error) {
      Swal.fire('Error al eliminar', error.response.data.message, 'error')
    }
  }

  const startLoadingEvents = async() => {
    try {
      const { data: { result } } = await calendarApi.get('/events')
      const newEvents = convertEventsToDateEvents( result )
      dispatch( onLoadEvents( newEvents ) )

    } catch (error) {
      console.log( error )
    }
  }


  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Metodos
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  }

}
