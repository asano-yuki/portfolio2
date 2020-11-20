import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ServiceList from './index'

export default {
  title     : 'Atoms/ServiceList',
  component : ServiceList
} as Meta

const Template: Story = args => <ServiceList {...args} />

export const Sample = Template.bind({})
Sample.args = {}
