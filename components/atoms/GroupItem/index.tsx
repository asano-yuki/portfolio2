import React from 'react'

export interface Props {
  item   : string | React.ReactNode
  width? : string | number
}

/**
 * GroupListコンポーネントの各項目(スマホ対応)
 */
const GroupItem: React.FC<Props> = ({
  item,
  width = '100%',
}: Props) => (
  <li style={{ width }}>{item}</li>
)

export default GroupItem
