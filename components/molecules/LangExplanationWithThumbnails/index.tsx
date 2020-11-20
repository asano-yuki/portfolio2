import React from 'react'

import styles from './style.module.scss'

export interface Props {
  items : {
    Image           : JSX.Element
    LangExplanation : JSX.Element
  }[]
}

/**
 * サムネイル付き言語解説リスト
 */
const LangExplanationWithThumbnails: React.FC<Props> = ({
  items
}: Props) => {
  const _items: React.ReactNode = items.map((item, i) => {
    const { Image, LangExplanation } = item
    return (
      <li key={i} className={styles.item}>
        <div className={styles.thumbnail}>
          {Image}
        </div>
        { LangExplanation }
      </li>
    )
  })
  return <ul className={styles.root}>{_items}</ul>
}

export default LangExplanationWithThumbnails
