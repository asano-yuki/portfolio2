import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ExtendGrid, { Props } from './index'

export default {
  title     : 'Atoms/ExtendGrid',
  component : ExtendGrid,
} as Meta

const Template: Story<Props> = args => <ExtendGrid {...args} />

export const Sample = Template.bind({})
Sample.args = {
  columns : ['Name', 'Email', 'Phone Number'],
  data : [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com'  , '(01) 22 888 4444']
  ]
}
