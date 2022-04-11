import React, { useContext } from 'react'
import { View, Platform, Pressable, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomModalContext from '../context/BottomModal/BottomModalContext'
import { MainStackParamList, TabParamList } from '../types/NavigationProps'

//  screens
import Home from '../screens/Home'
import Pin from '../screens/Pin'
import Profile from '../screens/Profile'
import CreatePin from '../screens/CreatePin'
import AlbumPicker from '../screens/AlbumPicker'

//  icons
import IconHome from '../components/Svg/IconHome'
import IconProfile from '../components/Svg/IconProfile'
import IconShareAndroid from '../components/Svg/IconShareAndroid'
import IconShareIos from '../components/Svg/IconShareIos'
import IconEllipsis from '../components/Svg/IconEllipsis'
import IconPlus from '../components/Svg/IconPlus'
import IconX from '../components/Svg/IconX'
import IconChevronDown from '../components/Svg/IconChevronDown'

const Stack = createNativeStackNavigator<MainStackParamList>()

const Tab = createBottomTabNavigator<TabParamList>()

const MainStack = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }} >
      <Stack.Group screenOptions={{ animation: 'slide_from_right' }}>
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
      </Stack.Group>

      <Stack.Screen
        name='CreatePin'
        component={CreatePin}
        initialParams={{ album: undefined, totalImages: undefined }}
        options={({ navigation, route }) => ({
          title: '',
          headerLeft: () => (
            <Pressable onPress={(() => navigation.goBack())}>
              <IconX color={theme.dark ? '#fff' : '#000'} size={27} />
            </Pressable>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('AlbumPicker', { totalImages: route.params.totalImages, albums: route.params.albums })}>
                <Text style={{ marginRight: 14, color: theme.dark ? '#fff' : '#000', fontFamily: 'Inter-Medium', fontSize: 15 }}>{route.params.album || 'Todas las fotos'}</Text>
                <IconChevronDown color={theme.dark ? '#fff' : '#000'} size={10} />
              </Pressable>
              <Pressable style={{ backgroundColor: 'red', borderRadius: 20, marginLeft: 20 }}>
                <Text style={{ fontFamily: 'Inter-Bold', fontSize: 15, color: '#fff', paddingVertical: 9, paddingHorizontal: 12 }}>Siguiente</Text>
              </Pressable>
            </View>
          )
        })}
      />

      <Stack.Group screenOptions={{ animation: 'slide_from_bottom' }}>
        <Stack.Screen
          name='AlbumPicker'
          component={AlbumPicker}
          options={() => ({
            title: 'Elige una carpeta',
            headerTitleStyle: { fontSize: 16 }
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const MainTabs = () => {
  const theme = useTheme()

  const { setVisible } = useContext(BottomModalContext)

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
