import { CHANGE_MODO} from './actionTypes';

const initialState = {
  modo:"dia",
  modoTitle:'dia'
}

function rootReducer(state=initialState, action) {
  if(action.type === CHANGE_MODO ) {
    return  Object.assign({},state,{
      modo: state.modo === 'dia' ? state.modo = 'noche' : state.modo = 'dia',
      modoTitle: state.modoTitle === 'dia' ? state.modoTitle = 'noche' : state.modoTitle = 'dia',
    })
  }
  return state

}

export default rootReducer