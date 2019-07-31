import { CHANGE_MODO, CHANGE_NAME} from './actionTypes';

const initialState = {
  modo:"dia",
  modoTitle:'dia',
  name: 'Li'
}

function rootReducer(state=initialState, action) {
  if(action.type === CHANGE_MODO ) {
    return  Object.assign({},state,{
      modo: state.modo === 'dia' ? state.modo = 'noche' : state.modo = 'dia',
      modoTitle: state.modoTitle === 'dia' ? state.modoTitle = 'noche' : state.modoTitle = 'dia',
    })
  }
  if(action.type === CHANGE_NAME ) {
    return  Object.assign({},state,{
      name: action.payload
    })
  }
  return state

}

export default rootReducer