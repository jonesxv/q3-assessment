const receiveData = (type, payload) => {
  return {
    type: type,
    payload: payload
  }
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const removeFromCart = id => {
  return async dispatch => {
    const data = await fetch(`http://localhost:8000/cameras/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({inCart: false}),
    })
    const json = await data.json()
    dispatch(receiveData(REMOVE_FROM_CART, json))
  }
}