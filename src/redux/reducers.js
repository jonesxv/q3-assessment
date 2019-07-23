// import {  } from "../actions/CameraListActions";
import { FETCH_CAMERAS, ADD_TO_CART } from "./actions/CameraListActions"
// import {  } from "../actions/CartActions";
import { UPDATE_FILTER } from "./actions/FilterActions";
import { REMOVE_FROM_CART } from "./actions/CartActions";

const initialState = {
  cameras: {},
  filterKeyword: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMERAS:
      return {
        ...state,
        cameras: action.payload
      }
    case ADD_TO_CART:
      return {
        ...state,
        cameras: {
          ...state.cameras,
          [action.payload[0].id]: action.payload[0]
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cameras: {
          ...state.cameras,
          [action.payload[0].id]: {
            ...action.payload[0],
            inCart: false
          }
        }
      }
    case UPDATE_FILTER:
      return {
        ...state,
        filterKeyword: action.payload.toLowerCase()
      }
    default:
      return {...state}
  }
}

export default reducer