import React from 'react'

import styles from './style.module.scss'

export interface Props {
  items : {
    Image      : JSX.Element
    TitledText : JSX.Element
  }[]
}

/**
 * サムネイル付き言語解説リスト
 */
const LangExplanation: React.FC<Props> = ({
  items
}: Props) => {
  const _items: React.ReactNode = items.map((item, i) => {
    const { Image, TitledText } = item
    return (
      <li key={i} className={styles.item}>
        <div className={styles.thumbnail}>
          {Image}
        </div>
        <div className={styles.titled_text}>
          { TitledText }
        </div>
      </li>
    )
  })
  return <ul className={styles.root}>{_items}</ul>
}

export default LangExplanation
