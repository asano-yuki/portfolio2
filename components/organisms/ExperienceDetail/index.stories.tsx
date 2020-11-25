import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ExperienceDetail, { Props } from './index'

export default {
  title     : 'Organisms/ExperienceDetail',
  component : ExperienceDetail
} as Meta

const Template: Story<Props> = args => <ExperienceDetail {...args} />

export const Sample = Template.bind({})
Sample.args = {
  start_date : new Date(2019, 0, 1),
  end_date   : new Date(2020, 11, 31),
  title      : 'タイトル',
  content    : '業務内容',
  scale      : '開発規模',
  style      : '契約形態',
  role       : '役割',
  language   : '使用言語',
  db         : 'データベース',
  os         : 'オープンソースソフトウェア',
  mw         : 'ミドルウェア',
  fw         : 'フレームワーク',
  tool       : 'ツール',
  charge     : '担当工程'
}
