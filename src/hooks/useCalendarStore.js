import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {

  const { events, activeEvent } = useSelector( state => state.calendarStore )
  const dispatch = useDispatch()

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  //THUNKS
  const startSavingEvent = async( calendarEvent ) => {
    // TODO: llegar al backend

    if( calendarEvent._id ){
      // Actualizando
      dispatch( onUpdateEvent({ ...calendarEvent }) )
    }else{
      // Creando
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }
  }

  const startDeletingEvent = async() => {
    // TODO: llegar al backend
    dispatch( onDeleteEvent() )
  }


  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Metodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  }

}
