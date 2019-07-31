import { CHANGE_MODO, CHANGE_NAME } from './actionTypes';

export function changeModo(payload){
  return {type: CHANGE_MODO, payload}
}

export function changeName(payload){
  return {type: CHANGE_NAME, payload}
}