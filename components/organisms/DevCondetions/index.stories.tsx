import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import DevCondetions from './index'

export default {
  title     : 'Organisms/DevCondetions',
  component : DevCondetions
} as Meta

const Template: Story = args => <DevCondetions {...args} />

export const Sample = Template.bind({})
Sample.args = {}
