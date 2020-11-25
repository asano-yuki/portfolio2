import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss'

export interface Props {
  items : {
    id      : string | number
    icon    : IconDefinition
    label   : string
    click?  : (arg: any) => void
  }[]
}

/**
 * アイコン(Fontawesome)リストを構築
 */
const IconLink: React.FC<Props> = (props: Props) => {
  // アイコンコンポーネントの構築
  const _icons = props.items.map((item, i) => {
    const { id, icon, label, click } = item
    return (
      <li key={i}>
        <button className={styles.btn} value={id} onClick={click}>
          <Icon icon={icon} />
          <span className={styles.label}>{label}</span>
        </button>
      </li>
    )
  })

  return (
    <ul className={styles.root}>
      {_icons}
    </ul>
  )
}

export default IconLink
