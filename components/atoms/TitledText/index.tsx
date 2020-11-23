import React from 'react'

import styles from './style.module.scss'

export interface Props {
  title : string
  text  : string
}

/**
 * 言語解説コンポーネントの構築
 */
const TitledText: React.FC<Props> = ({
  title,
  text
}: Props) => {
  return (
    <div className={styles.root}>
      <h4>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default TitledText
