import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faKeyboard, faGlobe } from '@fortawesome/free-solid-svg-icons'
import TitledText from '../../atoms/TitledText'

import styles from './style.module.scss'

export interface Props {
  field      : string[]
  technology : string[]
  work       : string[]
}

/**
 * スキル概要を構築
 */
const SkillOverview: React.FC<Props> = ({
  field,
  technology,
  work
}: Props) => {
  const items = [
    {
      icon      : faFolderOpen,
      title     : '得意分野',
      text      : field.join('、'),
      color     : '#ffd6e0',
      iconClass : styles.icon__field
    },
    {
      icon      : faKeyboard,
      title     : '得意技術',
      text      : technology.join('、'),
      color     : '#fffcd6',
      iconClass : styles.icon__tech
    },
    {
      icon      : faGlobe,
      title     : '得意業務',
      text      : work.join('、'),
      color     : '#d6f2ff',
      iconClass : styles.icon__work
    }
  ]

  return (
    <ul className={styles.root}>
      {
        items.map((item, i) => {
          const { icon, title, text, iconClass } = item
          return (
            <li key={i} className={styles.item}>
              <div className={styles.outer}>
                <Icon icon={icon} className={`${styles.icon} ${iconClass}`} />
                <div className={styles.body}>
                  <TitledText title={title} text={text} />
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillOverview
