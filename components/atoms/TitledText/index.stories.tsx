import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TitledText, { Props } from './index'

export default {
  title     : 'Atoms/TitledText',
  component : TitledText,
} as Meta

const Template: Story<Props> = args => <TitledText {...args} />

export const Sample = Template.bind({})
Sample.args = {
  title : 'タイトル',
  text  : 'テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。'
}
