import React from 'react'

import styles from './style.module.scss'

export interface Props {
  thText : string
  tdText : string
  width? : string
}

/**
 * ラベル(th要素)と内容(td要素)を関連付けたテーブル行を構築
 */
const RelationTableRow: React.FC<Props> = ({
  thText,
  tdText,
  width = '100%'
}: Props) => (
  <tr className={styles.root} style={{ width }}>
    <th
      className={styles.head}
      dangerouslySetInnerHTML={{ __html: thText }}
    />
    <td
      className={styles.body}
      dangerouslySetInnerHTML={{ __html: tdText }}
    />
  </tr>
)

export default RelationTableRow
