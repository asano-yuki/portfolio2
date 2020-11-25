import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ExperienceList, { Props } from './index'

export default {
  title     : 'Organisms/ExperienceList',
  component : ExperienceList
} as Meta

const Template: Story<Props> = args => <ExperienceList {...args} />

export const Sample = Template.bind({})
Sample.args = {
  data : [
    {
      _id        : 1,
      start_date : new Date(2019, 0, 1),
      end_date   : new Date(2019, 11, 1),
      title      : 'タイトル1',
      style      : '勤務形態1',
      key_skill  : '主要スキル1'
    },
    {
      _id        : 2,
      start_date : new Date(2019, 0, 1),
      end_date   : new Date(2019, 11, 1),
      title      : 'タイトル2',
      style      : '勤務形態2',
      key_skill  : '主要スキル2'
    },
    {
      _id        : 3,
      start_date : new Date(2019, 0, 1),
      end_date   : new Date(2019, 11, 1),
      title      : 'タイトル3',
      style      : '勤務形態3',
      key_skill  : '主要スキル3'
    },
  ]
}
