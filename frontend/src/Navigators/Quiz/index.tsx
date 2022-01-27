import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  QuizChooseScreen,
  QuizQuestionScreen,
  QuizResultScreen,
} from '@/Screens/Quiz'

import { QuizRoutes } from '@/Screens/SCREENS'

const { Navigator, Group, Screen } = createNativeStackNavigator()

export default function () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen
          component={QuizChooseScreen}
          name={QuizRoutes.QUIZ_CHOOSE_SCREEN}
        />
        <Screen
          component={QuizQuestionScreen}
          name={QuizRoutes.QUIZ_QUESTION_SCREEN}
        />
        <Screen
          component={QuizResultScreen}
          name={QuizRoutes.QUIZ_RESULT_SCREEN}
        />
      </Group>
    </Navigator>
  )
}
