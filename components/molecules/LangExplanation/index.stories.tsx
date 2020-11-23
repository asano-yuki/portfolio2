import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LangExplanation, { Props } from './index'
import TitledText from '../../atoms/TitledText'

export default {
  title     : 'Molecules/LangExplanation',
  component : LangExplanation,
} as Meta

const Template: Story<Props> = args => <LangExplanation {...args} />

export const Sample = Template.bind({})
Sample.args = {
  items : [
    {
      Image      : <img src='img/scss.svg' width='60px' />,
      TitledText : <TitledText title='タイトル1' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
    {
      Image           : <img src='img/scss.svg' width='60px' />,
      TitledText : <TitledText title='タイトル2' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
    {
      Image      : <img src='img/scss.svg' width='60px' />,
      TitledText : <TitledText title='タイトル3' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
    {
      Image      : <img src='img/scss.svg' width='60px' />,
      TitledText : <TitledText title='タイトル4' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
  ]
}
