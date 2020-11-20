import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileSummary, { Props } from './index'

export default {
  title      : 'Atoms/ProfileSummary',
  component  : ProfileSummary
} as Meta

const Template: Story<Props> = args => <ProfileSummary {...args} />

export const Sample = Template.bind({})
Sample.args = {
  texts : ['項目1', '項目2', '項目3']
}
