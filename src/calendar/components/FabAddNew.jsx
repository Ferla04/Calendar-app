//Fab = Floating Action Button
import { addHours } from 'date-fns'
import { useCalendarStore, useUiStore } from '../../hooks'

export const FabAddNew = () => {

  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const handleClickNew = () => {
    setActiveEvent({
      title: 'Fer',
      notes: 'Holaaaa',
      start: new Date(),
      end: addHours( new Date(), 2 ),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Fernanda'
      }
    })
    openDateModal()
  }

  return (
    <button
      className='btn btn-primary fab'
      onClick={ handleClickNew }
    >
      <i className='fas fa-plus'></i>
    </button>
  )
}
