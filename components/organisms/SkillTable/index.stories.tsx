import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SkillTable, { Props } from './index'

export default {
  title      : 'Organisms/SkillTable',
  component  : SkillTable
} as Meta

const Template: Story<Props> = args => <SkillTable {...args} />

export const Sample = Template.bind({})
Sample.args = {
  height : '300px',
  data : [
    {
      name         : 'スキル名1',
      category     : 'カテゴリー1',
      sub_category : 'サブカテゴリー1',
      year         : 3,
      level        : 8
    },
    {
      name         : 'スキル名2',
      category     : 'カテゴリー2',
      sub_category : 'サブカテゴリー2',
      year         : 2.5,
      level        : 5
    },
    {
      name         : 'スキル名3',
      category     : 'カテゴリー3',
      sub_category : 'サブカテゴリー3',
      year         : 1,
      level        : 9
    }
  ]
}
