import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import About from './index'

export default {
  title     : 'Organisms/About',
  component : About
} as Meta

const Template: Story = args => <About {...args} />

export const Sample = Template.bind({})
Sample.args = {}
