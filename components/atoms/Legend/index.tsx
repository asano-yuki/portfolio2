import React from 'react'

import styles from './style.module.scss'

export interface Props {
  items : {
    label : string
    text  : string
    color : string
  }[]
}

/**
 * グラフ・チャートの凡例を構築
 * 各ラベル、背景色、テキストの表示順は配列で確保
 */
const Legend: React.FC<Props> = ({
  items
}: Props) => {
  const _items: JSX.Element[] = items.map((item, i) => {
    const { label, text, color } = item
    return (
      <li key={i} className={styles.item}>
        <div className={styles.color} style={{ backgroundColor: color }}></div>
        <span className={styles.title}>{label}</span>
        <span className={styles.text}>{text}</span>
      </li>
    )
  })
  return <ul>{_items}</ul>
}

export default Legend
