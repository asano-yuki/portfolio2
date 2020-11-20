import React from 'react'

import styles from './style.module.scss'

export interface Props {
  texts  : string[]
}

/**
 * プロフィールの簡易情報を構築
 * 最大で3要素まで表示するリストを構築
 */
const ProfileSummary: React.FC<Props> = ({
  texts
}: Props) => {
  const _texts = texts.slice(0, 3)
  const items  = _texts.map((text, i) => <li key={i} className={styles.item}>{text}</li>)
  return <ul className={styles.root}>{items}</ul>
}

export default ProfileSummary
