import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'
import Breadcrumb, { Props } from './index'

export default {
  title      : 'Atoms/Breadcrumb',
  component  : Breadcrumb,
  decorators : [withNextRouter]
} as Meta

const Template: Story<Props> = args => <Breadcrumb {...args} />

export const Sample = Template.bind({})
Sample.args = {
  items : [
    { title: 'パンくず1', path: './' },
    { title: 'パンくず2', path: './' },
    { title: 'パンくず3' }
  ]
}
