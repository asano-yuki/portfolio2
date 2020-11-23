import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CapacityList, { Props } from './index'

export default {
  title     : 'Atoms/CapacityList',
  component : CapacityList,
} as Meta

const Template: Story<Props> = args => <CapacityList {...args} />

export const Sample = Template.bind({})
Sample.args = {
  capacity : ['資格1', '資格2', '資格3', '資格4', '資格5']
}
