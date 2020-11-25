import React from 'react'

export interface Props {
  item   : string | React.ReactNode
  style? : React.CSSProperties
}

/**
 * GroupListコンポーネントの各項目(スマホ対応)
 */
const GroupItem: React.FC<Props> = ({
  item,
  style = { width: '100%' }
}: Props) => (
  <li style={style}>{item}</li>
)

export default GroupItem
