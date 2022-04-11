import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined;

  Pin: { id: string };

  CreatePin: {
    album: string,
    totalImages: number,
    albums?: { count: number, title: string }[]
  };

  AlbumPicker: {
    album: string,
    totalImages: number,
    albums: { count: number, title: string }[]
   };
}

export type TabParamList = {
  HomeScreen: NavigatorScreenParams<MainStackParamList>;
  ButtonModal: undefined;
  Profile: { userId: string };
}

//  home screen
export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>

//  pin screen
export type PinScreenProps = NativeStackScreenProps<MainStackParamList, 'Pin'>
export type PinScrenNavigationProps = PinScreenProps['navigation']
export type PinScreenRouteProps = PinScreenProps['route']

//  create Pin screen
type CreatePinScreenProps = NativeStackScreenProps<MainStackParamList, 'CreatePin'>
export type CreatePinScreenNavigationProps = CreatePinScreenProps['navigation']
export type CreatePinScreenRouteProps = CreatePinScreenProps['route']

//  album screen
type AlbumPickerScreenProps = NativeStackScreenProps<MainStackParamList, 'AlbumPicker'>
export type AlbumPickerScreenNavigationProps = AlbumPickerScreenProps['navigation']
export type AlbumPickerScreenRouteProps = AlbumPickerScreenProps['route']
