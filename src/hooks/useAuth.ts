import { Auth } from 'aws-amplify'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { USER_AUTH, USER_DATA } from '../constant'

interface signUpProps {
  email: string;
  password: string
}

interface signInProps extends signUpProps {}

export const useAuth = () => {
  /* <----- auth user -----> */
  const queryClient = useQueryClient()

  const queryCurrentAuthUser = useQuery(USER_AUTH, () => Auth.currentAuthenticatedUser({ bypassCache: true }), {
    onSuccess: () => {
      queryClient.refetchQueries(USER_DATA)
    },

    onError: (e) => {
      console.log(e)
      console.log('error')
    }
  })

  /* <----- sign up user -----> */
  const signUpMutaton = useMutation(({ email, password }: signUpProps) => Auth.signUp({ username: email, password: password }))

  /* <----- sign in user -----> */
  const signInMutation = useMutation(({ email, password }: signInProps) => Auth.signIn({ username: email, password: password }), {
    onSuccess: () => {
      queryClient.refetchQueries(USER_AUTH)
    }
  })

  /* <----- sign out -----> */
  const signOut = async () => {
    await Auth.signOut()
    queryClient.invalidateQueries(USER_AUTH)
    console.log('sign out')
  }

  return {
    authUser: {
      isAuth: queryCurrentAuthUser.isSuccess,
      isLoading: queryCurrentAuthUser.isLoading
    },

    signIn: signInMutation.mutate,
    signInIsLoading: signInMutation.isLoading,

    signUp: signUpMutaton.mutate,
    signUpIsLoading: signUpMutaton.isLoading,

    signOut: signOut
  }
}
