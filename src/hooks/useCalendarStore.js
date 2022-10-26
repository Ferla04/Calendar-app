import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent } from '../store'

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
    }else{
      // Creando
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }
  }


  return {
    activeEvent,
    events,
    setActiveEvent,
    startSavingEvent
  }

}
