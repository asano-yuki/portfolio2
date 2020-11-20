import React from 'react'

import styles from './style.module.scss'

export interface Props {
  children   : React.ReactNode
  title      : string
  width?     : string | number
  className? : string
}

/**
 * organismsディレクトリ配下にある、
 * コンポーネントの枠組みを構築
 */
const Structure: React.FC<Props> = ({
  children,
  title,
  width,
  className
}: Props) => {
  const classModifier = className ? `${styles[`root__${className}`]}` : ''
  return (
    <section
      style={{ width }}
      className={`${styles.root} ${classModifier}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </section>
  )
}

export default Structure
