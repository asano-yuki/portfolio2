import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import IconTitle, { Props } from './index'

import { faHome } from '@fortawesome/free-solid-svg-icons'


export default {
  title      : 'Atoms/IconTitle',
  component  : IconTitle,
} as Meta

const Template: Story<Props> = args => <IconTitle {...args} />

export const Horizon = Template.bind({})
Horizon.args = {
  icon  : faHome,
  title : 'ホーム'
}

export const Vertical = Template.bind({})
Vertical.args = {
  icon       : faHome,
  title      : 'ホーム',
  isVertical : true
}
