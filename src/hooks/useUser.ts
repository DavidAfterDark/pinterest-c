import { useQuery } from 'react-query'
import { USER_DATA } from '../constant'
import { useNhostClient } from '@nhost/react'

export const useUser = () => {
  const nhost = useNhostClient()

  const queryUserData = useQuery(USER_DATA, () => nhost.graphql.request(`
  query MyQuery {
    pins {
      user {
        id
      }
    }
  }
  `), {
    onSuccess: (data) => {
      console.log('[queryUserData][success]', data)
    },

    onError: (error) => {
      console.log('[queryUserData][error]:', error)
    }
  })

  return {
    userData: queryUserData
  }
}
