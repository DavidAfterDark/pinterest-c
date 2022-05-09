import { useQuery } from 'react-query'
import { DataStore } from 'aws-amplify'
import { USER_DATA } from '../constant'
import { User } from '../models'

export const useUser = () => {
  const queryUserData = useQuery(USER_DATA, () => DataStore.query(User), {
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
