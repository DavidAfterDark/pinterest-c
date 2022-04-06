import React, { useContext } from 'react'
import { View, Platform, Pressable } from 'react-native'
import { useTheme, NavigatorScreenParams } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import ModalAddContext from '../context/ModalAdd/ModalAddContext'

//  screens
import Home from '../screens/Home'
import Pin from '../screens/Pin'
import Profile from '../screens/Profile'

//  icons
import IconHome from '../components/Svg/IconHome'
import IconProfile from '../components/Svg/IconProfile'
import IconShareAndroid from '../components/Svg/IconShareAndroid'
import IconShareIos from '../components/Svg/IconShareIos'
import IconEllipsis from '../components/Svg/IconEllipsis'
import IconPlus from '../components/Svg/IconPlus'

type MainStackParamList = {
  Home: undefined;
  Pin: { id: string }
}

type TabParamList = {
  HomeScreen: NavigatorScreenParams<MainStackParamList>;
  ButtonModal: undefined;
  Profile: { userId: string };
};

const Stack = createNativeStackNavigator<MainStackParamList>()

const Tab = createBottomTabNavigator<TabParamList>()

type Props = NativeStackScreenProps<MainStackParamList, 'Pin'>

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: 'transparent' }
      }}
    >
        <Stack.Screen
          name='Home'
          component={MainTabs}
          options={() => ({
            header: () => null
          })}
        />

        <Stack.Screen
          name='Pin'
          component={Pin}
          options={() => ({
            title: '',
            headerTransparent: true,
            headerBackVisible: true
          })}
        />
    </Stack.Navigator>
  )
}

const MainTabs = () => {
  const theme = useTheme()

  const { setVisible } = useContext(ModalAddContext)

  return (
     <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.dark ? '#fff' : '#000',
        tabBarInactiveTintColor: theme.dark ? '#4f4d4d' : 'gray'
      }}>
      <Tab.Screen
        name='HomeScreen'
        component={Home}
        options={() => ({
          header: () => null,
          tabBarIcon: ({ color }) => <IconHome color={color} size={35} />
        })} />

        <Tab.Screen
          name='ButtonModal'
          component={ButtonModal}
          options={{
            tabBarButton: () => (
              <Pressable
                style={{
                  backgroundColor: theme.dark ? '#3D3D3Dff' : '#EAEAEC',
                  width: 45,
                  height: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  top: -10
                }}
                onPress={() => setVisible(true)}
              >
                <IconPlus size={30} color={theme.dark ? '#fff' : '#000'} />
              </Pressable>
            )
          }}
          listeners={() => {
            return {
              tabPress: (e) => {
                e.preventDefault()
                setVisible(true)
              }
            }
          }}
        />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={() => ({
          title: '',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              {Platform.OS === 'android' ? <IconShareAndroid color={theme.colors.text} size={30} /> : <IconShareIos color={theme.colors.text} size={30} />}
              <View style={{ marginLeft: 10, marginRight: 5 }}><IconEllipsis color={theme.dark ? 'white' : 'black' } size={30} /></View>
            </View>
          ),
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <IconProfile color={color} size={35} />,
          headerTransparent: true
        })}
      />
    </Tab.Navigator>
  )
}

const ButtonModal = () => {
  return <View />
}

export default MainStack
