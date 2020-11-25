import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ExperienceGroup, { Props } from './index'

export default {
  title     : 'Organisms/ExperienceGroup',
  component : ExperienceGroup
} as Meta

const Template: Story<Props> = args => <ExperienceGroup {...args} />

export const Sample = Template.bind({})
Sample.args = {
  data : [
    {
      _id        : 1,
      title      : 'タイトル1',
      start_date : new Date(2019, 1, 1),
      end_date   : new Date(2020, 11, 1)
    },
    {
      _id        : 2,
      title      : 'タイトル1',
      start_date : new Date(2019, 1, 1),
      end_date   : new Date(2020, 11, 1)
    },
    {
      _id        : 3,
      title      : 'タイトル1',
      start_date : new Date(2019, 1, 1),
      end_date   : new Date(2020, 11, 1)
    },
  ]
}
