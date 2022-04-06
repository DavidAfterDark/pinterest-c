import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined;
  Pin: { id: string }
}

export type TabParamList = {
  HomeScreen: NavigatorScreenParams<MainStackParamList>;
  ButtonModal: undefined;
  Profile: { userId: string };
}

export type PinScreenProps = NativeStackScreenProps<MainStackParamList, 'Pin'>

export type PinScreenRouteProps = PinScreenProps['route']
