import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import MainTitle, { Props } from './index'

export default {
  title     : 'Molecules/MainTitle',
  component : MainTitle
} as Meta

const Template: Story<Props> = args => <MainTitle {...args} />

export const Sample = Template.bind({})
Sample.args = {}
