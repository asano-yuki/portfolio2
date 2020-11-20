import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LifeCareer from './index'

export default {
  title      : 'Organisms/LifeCareer',
  component  : LifeCareer
} as Meta

const Template: Story = args => <LifeCareer {...args} />

export const Sample = Template.bind({})
Sample.args = {}
