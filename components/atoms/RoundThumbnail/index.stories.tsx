import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import RoundThumbnail, { Props } from './index'

import sampleImg from '../../../public/img/thumbnail.jpg'

export default {
  title      : 'Atoms/RoundThumbnail',
  component  : RoundThumbnail
} as Meta

const Template: Story<Props> = args => <RoundThumbnail {...args} />

export const Sample = Template.bind({})
Sample.args = {
  imgPath: sampleImg
}
