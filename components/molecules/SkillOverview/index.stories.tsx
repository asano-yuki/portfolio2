import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SkillOverview, { Props } from './index'

export default {
  title     : 'Molecules/SkillOverview',
  component : SkillOverview
} as Meta

const Template: Story<Props> = args => <SkillOverview {...args} />

export const Sample = Template.bind({})
Sample.args = {
  field      : ['分野1', '分野2', '分野3'],
  technology : ['技術1', '技術2', '技術3'],
  work       : ['業務1', '業務2', '業務3']
}
