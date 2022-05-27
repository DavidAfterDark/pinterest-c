import { useQuery } from 'react-query'
import { ALL_PINS, PIN } from '../constant'
import { API_ALL_PINS, API_PINS_BY_ID } from '../api'

export const usePin = (id?: string) => {
  //  query all pins
  const allPins = useQuery(ALL_PINS, () => fetch(API_ALL_PINS).then(res => res.json()))

  //  query pins by id
  const pinByID = useQuery([PIN, id], () => fetch(`${API_PINS_BY_ID}/${id}`).then(res => res.json()))

  return {
    allPins,
    pinByID
  }
}
