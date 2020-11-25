import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import IconList, { Props } from './index'

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


export default {
  title      : 'Atoms/IconList',
  component  : IconList,
} as Meta

const Template: Story<Props> = args => <IconList {...args} />

export const Sample = Template.bind({})
Sample.args = {
  items : [
    {
      id    : 1,
      icon  : faChevronCircleRight,
      label : '詳細'
    },
    {
      id    : 2,
      icon  : faChevronCircleRight,
      label : '詳細'
    },
    {
      id    : 3,
      icon  : faChevronCircleRight,
      label : '詳細'
    },
  ]
}
