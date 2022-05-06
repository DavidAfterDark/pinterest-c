import { Auth, DataStore } from 'aws-amplify'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import { USER_AUTH } from '../constant'
import { User } from '../models'

interface signUpProps {
  email: string;
  password: string
}

interface signInProps extends signUpProps {}

export const useAuth = () => {
  /*  > auth user ----- */
  const [authUser, setAuthUser] = useState<boolean | null>(null)

  const queryClient = useQueryClient()

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((res) => {
        console.log(res)
        console.log('todo correcto! usuario autenticado 😎👍')
        setAuthUser(true)
      })
      .catch((err) => {
        console.log(err)
        console.log('error :(')
        setAuthUser(false)
      })
  }, [authUser])

  /*  > sign up user ----- */
  const signUpMutaton = useMutation(({ email, password }: signUpProps) => Auth.signUp({ username: email, password: password }))

  /*  > sign in user ----- */
  const signInMutation = useMutation(({ email, password }: signInProps) => Auth.signIn({ username: email, password: password }), {
    onSuccess: () => {
      setAuthUser(true)
    }
  })

  /*  > sign out ----- */
  const signOut = async () => {
    Auth.signOut()
      .then(() => {
        queryClient.removeQueries(USER_AUTH)
        queryClient.refetchQueries(USER_AUTH)
        setAuthUser(false)
      })
  }

  return {
    isAuthUser: authUser,

    signIn: signInMutation.mutate,
    signInIsLoading: signInMutation.isLoading,

    signUp: signUpMutaton.mutate,
    signUpIsLoading: signUpMutaton.isLoading,

    signOut
  }
}
