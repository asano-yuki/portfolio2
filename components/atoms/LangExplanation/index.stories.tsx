import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LangExplanation, { Props } from './index'

export default {
  title     : 'Atoms/LangExplanation',
  component : LangExplanation,
} as Meta

const Template: Story<Props> = args => <LangExplanation {...args} />

export const Sample = Template.bind({})
Sample.args = {
  title : 'タイトル',
  text  : 'テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。'
}
