import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Legend, { Props } from './index'

export default {
  title      : 'Atoms/Legend',
  component  : Legend,
} as Meta

const Template: Story<Props> = args => <Legend {...args} />

export const Sample = Template.bind({})
Sample.args = {
  items: [
    {
      label : '凡例1',
      text  : 'テキスト1',
      color : 'red'
    },
    {
      label : '凡例2',
      text  : 'テキスト2',
      color : 'blue'
    },
    {
      label : '凡例3',
      text  : 'テキスト3',
      color : 'green'
    },
    {
      label : '凡例4',
      text  : 'テキスト4',
      color : 'orange'
    },
    {
      label : '凡例5',
      text  : 'テキスト5',
      color : 'purple'
    },
  ]
}
