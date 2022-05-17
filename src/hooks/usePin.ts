import { useQuery } from 'react-query'
import { ALL_PINS } from '../constant'
import { useNhostClient } from '@nhost/react'

export const usePin = () => {
  const nhost = useNhostClient()

  const queryAllPins = useQuery(ALL_PINS, () => nhost.graphql.request(`
  query MyQuery {
    pins {
      id
      image_url
      description
    }
  }
  `), {
    onSuccess: (data) => {
      console.log('data query pins')
      console.log(data)
    }
  })

  return {
    pins: queryAllPins
  }
}
