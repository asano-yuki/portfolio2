import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Structure, { Props } from './index'

export default {
  title      : 'Atoms/Structure',
  component  : Structure
} as Meta

const Template: Story<Props> = args => <Structure {...args} />

export const Width100 = Template.bind({})
Width100.args = {
  title: 'タイトル',
  width: '100%'
}

export const Width50 = Template.bind({})
Width50.args = {
  title: 'タイトル',
  width: '50%'
}

export const Width25 = Template.bind({})
Width25.args = {
  title: 'タイトル',
  width: '25%'
}
