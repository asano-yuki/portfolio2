import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss'

export interface Props {
  icon        : IconDefinition
  title       : string,
  isVertical? : boolean
}

/**
 * アイコン付きタイトルを構築
 */
const IconTitle: React.FC<Props> = ({
  icon,
  title,
  isVertical = false
}: Props) => {
  return (
    <h3 className={`${styles.root} ${isVertical ? `${styles.root__vertical}` : ''}`}>
      <Icon icon={icon} className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </h3>
  )
}

export default IconTitle
