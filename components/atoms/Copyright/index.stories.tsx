import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Copyright from './index'

export default {
  title     : 'Atoms/Copyright',
  component : Copyright,
} as Meta

const Template: Story = args => <Copyright {...args} />

export const Sample = Template.bind({})
Sample.args = {}
