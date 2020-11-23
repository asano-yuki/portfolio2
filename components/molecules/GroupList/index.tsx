import React from 'react'

import styles from './style.module.scss'

export interface Props {
  isHead?  : boolean
  children : React.ReactNode
}

/**
 * グループ化した繰り返し項目を構築(スマホ対応)
 */
const GroupList: React.FC<Props> = ({
  isHead = false,
  children
}: Props) => (
  <ul className={`
    ${styles.root}
    ${isHead ? `${styles.root__head}` : ''
  }`}>
    {children}
  </ul>
)

export default GroupList
