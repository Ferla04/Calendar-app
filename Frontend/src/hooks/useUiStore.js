import { useDispatch, useSelector } from 'react-redux'
import { onCloseDateModal, onOpenDateModal } from '../store'

export const useUiStore = () => {
  
  const { isDateModalOpen } = useSelector( state => state.uiStore )
  const dispatch = useDispatch()


  const openDateModal = () => {
    dispatch( onOpenDateModal() )
  }

  const closeDateModal = () => {
    dispatch( onCloseDateModal() )
  }

  return {
    //* Propiedades
    isDateModalOpen,
    //* Métodos
    openDateModal,
    closeDateModal,
  }
}
