import {GAME, OPENCELL, REMOVED, CLOSE} from "../actionTypes/actionTypes";

export const countAC = (payload)=>({
  type: GAME,
  payload
})

export const openCellAC= (payload)=>({
  type: OPENCELL,
  payload
})

export const REMOVEDAC= (payload)=>({
  type: REMOVED,
  payload
})

export const CLOSEAC= (payload)=>({
  type: CLOSE,
  payload
})
