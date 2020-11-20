import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'
import NavMenu, { Props } from './index'
import { faHome, faUser, faTag, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default {
  title      : 'Molecules/NavMenu',
  component  : NavMenu,
  decorators : [withNextRouter]
} as Meta

const items: Props['items'] = [
  {
    key  : 'home',
    path : './',
    text : 'ホーム',
    Icon : faHome
  },
  {
    key  : 'user',
    path : './',
    text : 'ユーザ',
    Icon : faUser
  },
  {
    key  : 'tag',
    path : './',
    text : 'タグ',
    Icon : faTag
  },
  {
    key  : 'contact',
    path : './',
    text : 'お問い合わせ',
    Icon : faEnvelope
  }
]

const Template: Story<Props> = args => <NavMenu {...args} />

export const Horizon = Template.bind({})
Horizon.args = { items }

export const Vertical = Template.bind({})
Vertical.args = { items, isVertical: true }
