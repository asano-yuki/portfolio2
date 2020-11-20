import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Profile, { Props } from './index'

export default {
  title      : 'Organisms/Profile',
  component  : Profile
} as Meta

const Template: Story<Props> = args => <Profile {...args} />

export const Sample = Template.bind({})
Sample.args = {
  name     : '山田太郎',
  job      : 'エンジニア',
  birthday : '1990/05/23'
}
