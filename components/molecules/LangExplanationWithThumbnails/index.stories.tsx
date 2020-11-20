import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LangExplanationWithThumbnails, { Props } from './index'
import LangExplanation from '../../atoms/LangExplanation/index'

export default {
  title     : 'Molecules/LangExplanationWithThumbnails',
  component : LangExplanationWithThumbnails,
} as Meta

const Template: Story<Props> = args => <LangExplanationWithThumbnails {...args} />

export const Sample = Template.bind({})
Sample.args = {
  items : [
    {
      Image           : <img src='img/scss.svg' width='100%' />,
      LangExplanation : <LangExplanation title='タイトル1' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
    {
      Image           : <img src='img/scss.svg' width='100%' />,
      LangExplanation : <LangExplanation title='タイトル2' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
    {
      Image           : <img src='img/scss.svg' width='100%' />,
      LangExplanation : <LangExplanation title='タイトル3' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
    {
      Image           : <img src='img/scss.svg' width='100%' />,
      LangExplanation : <LangExplanation title='タイトル4' text='テキスト。テキスト。テキスト。テキスト。テキスト。' />
    },
  ]
}
