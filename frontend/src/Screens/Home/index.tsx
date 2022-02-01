import * as React from 'react'
import { ScrollView } from 'react-native'
import { Div } from 'react-native-magnus'

import { useAppSelector, useAppDispatch } from '@/Hooks'
import MainContainer from '@/Containers/MainContainer'
import { Text, Button, Icon, Search, ActionSheetOpener } from '@/Components'
import { FeedTile } from '@/Components/Tiles'
import { logoutUser } from '@/Store/Global'
import Config from '@/Config'
import { useGetFeedQuery } from '@/Services/api'
import Logger from '@/Utils/Logger'
import { feedType } from '@/Types'

const { useEffect, useState } = React
export default function () {
  const dispatch = useAppDispatch()
  const logout = () => {
    dispatch(logoutUser())
    Config.reset()
  }

  const feed: any = useGetFeedQuery(null)
  Logger.debug('feed =', feed)

  const FilterOptions: React.FC = ({}) => (
    <ActionSheetOpener
      dropdownOptions={[
        {
          method: () => {},
          text: 'Recent',
          prefix: <Icon mr="md" name="chart-timeline" size="5xl" />,
        },
        {
          method: () => {},
          text: 'Popular',
          prefix: <Icon mr="md" name="chart-timeline-variant" size="5xl" />,
        },
      ]}
      dropdownTitle={'Search Filters'}>
      <Icon name="filter-variant" size="3xl" mr="sm" />
    </ActionSheetOpener>
  )

  return (
    <MainContainer
      headerProps={{
        heading: 'Home',
        headerRest: {
          prefix: null,
          suffix: (
            <Div pr="sm">
              <Button bg="transparent" left={3} onPress={logout}>
                <Icon size="6xl" name="logout" />
              </Button>
            </Div>
          ),
        },
      }}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Div flex={1} p="md" bg="light">
          <Search prefix={<FilterOptions />} />
        </Div>

        <Div flex={1} p="md">
          {feed.currentData &&
            feed.currentData.map(
              (
                { _id, date, description, image, link, title }: feedType,
                idx: number,
              ) => {
                return (
                  <FeedTile
                    key={`${idx}-${_id}`}
                    title={title}
                    description={description}
                    link={link}
                  />
                )
              },
            )}
        </Div>
      </ScrollView>
    </MainContainer>
  )
}
