import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss'

export interface Props {
  capacity : string[]
}

/**
 * 資格一覧を表示
 */
const CapacityList: React.FC<Props> = ({
  capacity
}: Props) => {
  return (
    <ul className={styles.root}>
      {
        capacity.map((item, i) => {
          return (
            <li key={i} className={styles.item}>
              <div>
                <Icon icon={faCheckSquare} className={styles.icon} />
                <span className={styles.label}>{item}</span>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CapacityList
