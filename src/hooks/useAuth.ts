import { useMutation, useQueryClient } from 'react-query'
import { USER_AUTH } from '../constant'
import { useNhostClient, useAuthenticationStatus } from '@nhost/react'

interface signUpProps {
  email: string;
  password: string
}

interface signInProps extends signUpProps {}

export const useAuth = () => {
  const nhost = useNhostClient()

  const { isLoading, isError, isAuthenticated } = useAuthenticationStatus()

  /* <----- auth user -----> */
  const queryClient = useQueryClient()

  /* <----- sign up user -----> */
  const signUpMutaton = useMutation(({ email, password }: signUpProps) => nhost.auth.signUp({ email, password }))

  /* <----- sign in user -----> */
  const signInMutation = useMutation(({ email, password }: signInProps) => nhost.auth.signIn({ email, password }), {
    onSuccess: (data) => {
      queryClient.refetchQueries(USER_AUTH)

      if (data.error) throw Error(data.error.message)

      console.log(data)
    },

    onError: (error) => {
      console.log(':( ocurrio un error')
      console.log(error)
    }
  })

  /* <----- sign out -----> */
  const signOut = async () => {
    await nhost.auth.signOut()
    queryClient.invalidateQueries(USER_AUTH)
    console.log('sign out')
  }

  return {
    authUser: {
      isAuth: isAuthenticated,
      isLoading: isLoading,
      isError: isError
    },

    signIn: signInMutation.mutate,
    signInIsLoading: signInMutation.isLoading,

    signUp: signUpMutaton.mutate,
    signUpIsLoading: signUpMutaton.isLoading,

    signOut: signOut
  }
}
