import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ExperienceTable, { Props } from './index'

export default {
  title      : 'Molecules/ExperienceTable',
  component  : ExperienceTable,
} as Meta

const Template: Story<Props> = args => <ExperienceTable {...args} />

export const Sample = Template.bind({})
Sample.args = {
  data : [
    {
      _id        : 1,
      start_date : new Date(2019, 1, 1),
      end_date   : new Date(2020, 1, 1),
      title      : 'タイトル1',
      style      : '契約形態1',
      key_skill  : '主要スキル1'
    },
    {
      _id        : 2,
      start_date : new Date(2019, 1, 1),
      end_date   : new Date(2020, 1, 1),
      title      : 'タイトル2',
      style      : '契約形態2',
      key_skill  : '主要スキル2'
    },
    {
      _id        : 3,
      start_date : new Date(2019, 1, 1),
      end_date   : new Date(2020, 11, 1),
      title      : 'タイトル3',
      style      : '契約形態3',
      key_skill  : '主要スキル3'
    },
  ]
}
