const receiveData = (type, payload) => {
  return {
    type: type,
    payload: payload
  }
}

export const FETCH_CAMERAS = 'FETCH_CAMERAS'
export const fetchCameras = () => {
  return async dispatch => {
    const data = await fetch('http://localhost:8000/cameras')
    const json = await data.json()
    const obj = {}
    json.forEach(cam => {
      obj[cam.id] = cam
    })
    dispatch(receiveData(FETCH_CAMERAS, obj))
  }
}

export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = id => {
  return async dispatch => {
    const data = await fetch(`http://localhost:8000/cameras/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({inCart: true}),
    })
    const json = await data.json()
    dispatch(receiveData(ADD_TO_CART, json))
  }
}