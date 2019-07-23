
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const updateKeyword = str => {
  return {
    type: UPDATE_FILTER,
    payload: str
  }
}