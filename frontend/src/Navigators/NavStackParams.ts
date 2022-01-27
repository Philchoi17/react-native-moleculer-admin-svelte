import { AuthRoutes, HomeRoutes, ChatRoutes } from '@/Screens/SCREENS'
import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthStackParams = {
  [AuthRoutes.INITIAL_SCREEN]: undefined
  [AuthRoutes.LOGIN_SCREEN]: undefined
  [AuthRoutes.SIGNUP_SCREEN]: undefined
}

export type AuthScreenProps = NativeStackNavigationProp<
  AuthStackParams,
  AuthRoutes
>

export type MainParams = {
  [HomeRoutes.HOME_SCREEN]: undefined
  [HomeRoutes.PROFILE_SCREEN]: undefined
  [ChatRoutes.CHAT_ROOMS_SCREEN]: undefined
  [ChatRoutes.CHAT_ROOM_SCREEN]: undefined
  [ChatRoutes.CHAT_REQUEST_SCREEN]: undefined
  [ChatRoutes.CHAT_SEARCH_SCREEN]: undefined
}

export type HomeScreenProps = NativeStackNavigationProp<MainParams, HomeRoutes>

export type RootRouteProps<RouteName extends keyof MainParams> = RouteProp<
  MainParams,
  RouteName
>
