import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ArrowButton, { Props } from './index'

export default {
  title      : 'Molecules/ArrowButton',
  component  : ArrowButton,
} as Meta

const Template: Story<Props> = args => <ArrowButton {...args} />

export const Sample = Template.bind({})
Sample.args = {}
