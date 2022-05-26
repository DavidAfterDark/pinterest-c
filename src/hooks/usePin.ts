import { useQuery } from 'react-query'
import { ALL_PINS, PIN } from '../constant'
import { API_ALL_PINS } from '../api/index'

export const usePin = () => {
  const queryAllPins = useQuery(ALL_PINS, () => fetch(API_ALL_PINS).then(res => res.json()))

  const pinByID = (id: string) => {
    const form = new FormData()

    form.append('id', '0f948061-07c4-41a5-9790-5827dff9f767')

    fetch('https://viqxpumkyjqduxkhcsju.nhost.run/api/rest/pin/id', {
      method: 'POST',
      body: form
    })
      .then(res => res.json().then(res => console.log(res, '<<<<2')))
  }

  return {
    allPins: queryAllPins,
    pinByID
  }
}
