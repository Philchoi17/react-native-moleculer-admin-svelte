import { AuthRoutes, HomeRoutes } from '@/Screens/SCREENS'
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

export type HomeStackParams = {
  [HomeRoutes.HOME_SCREEN]: undefined
}

export type HomeScreenProps = NativeStackNavigationProp<
  HomeStackParams,
  HomeRoutes
>

// export type RootRouteProps<RouteName extends keyof AppStackParams> = RouteProp<
//   AppStackParams,
//   RouteName
// >
