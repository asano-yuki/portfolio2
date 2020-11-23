import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressBar, { Props } from './index'

export default {
  title      : 'Atoms/ProgressBar',
  component  : ProgressBar,
} as Meta

const Template: Story<Props> = args => <ProgressBar {...args} />

export const Sample = Template.bind({})
Sample.args = {
  val    : 70,
  labels : ['ラベル1', 'ラベル2', 'ラベル3', 'ラベル4', 'ラベル5']
}
