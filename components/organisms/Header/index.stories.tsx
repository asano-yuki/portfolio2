import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'
import Header, { Props } from './index'

export default {
  title      : 'Organisms/Header',
  component  : Header,
  decorators : [withNextRouter]
} as Meta

const Template: Story<Props> = args => <Header {...args} />

export const Open = Template.bind({})
Open.args = {
  openState : true
}

export const Close = Template.bind({})
Close.args = {
  openState : false
}
