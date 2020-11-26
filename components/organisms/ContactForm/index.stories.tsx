import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ContactForm from './index'

export default {
  title     : 'Organisms/ContactForm',
  component : ContactForm
} as Meta

const Template: Story = args => <ContactForm {...args} />

export const Sample = Template.bind({})
Sample.args = {}
