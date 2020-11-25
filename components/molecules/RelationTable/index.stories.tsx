import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import RelationTable, { Props } from './index'
import RelationTableRow from '../../atoms/RelationTableRow'

export default {
  title      : 'Molecules/RelationTable',
  component  : RelationTable,
} as Meta

const Template: Story<Props> = args => (
  <RelationTable {...args}>
    <RelationTableRow
      thText='ヘッダー'
      tdText='ボディ'
    />
    <RelationTableRow
      thText='ヘッダー'
      tdText='ボディ'
    />
    <RelationTableRow
      thText='ヘッダー'
      tdText='ボディ'
    />
  </RelationTable>
)

export const Sample = Template.bind({})
Sample.args = {}
