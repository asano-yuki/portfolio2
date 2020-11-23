import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GroupList, { Props } from './index'
import GroupItem from '../../atoms/GroupItem'

export default {
  title     : 'Molecules/GroupList',
  component : GroupList,
} as Meta

const Template: Story<Props> = args => (
  <GroupList {...args}>
    <GroupItem item='項目1' />
    <GroupItem item='項目2' />
    <GroupItem item='項目3' />
  </GroupList>
)

export const Sample = Template.bind({})
Sample.args = { isHead: true }
