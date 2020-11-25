import React from 'react'

import styles from './style.module.scss'

export interface Props {
  children : React.ReactChild | React.ReactChild[]
}

/**
 * ラベルと内容を関連付けたテーブルを構築
 */
const RelationTable: React.FC<Props> = ({
  children
}: Props) => (
  <table className={styles.root}>
    <tbody className={styles.tbody}>
      {children}
    </tbody>
  </table>
)

export default RelationTable
