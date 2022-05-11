import { useQuery, useQueryClient } from 'react-query'
import { DataStore, Predicates, graphqlOperation, API } from 'aws-amplify'
import { ALL_PINS, USER_BOARD } from '../constant'
import { Pin, Board } from '../models'
import { useUser } from './useUser'

// list2.map( function (item) { res = imgs.includes(item)})

export const usePin = () => {
  const { userData } = useUser()

  const queryClient = useQueryClient()

  const queryAllPins = useQuery(USER_BOARD, () => DataStore.query(Pin))
  // queryClient.setQueryData()

  return {
    Pins: queryAllPins
  }
}
