import React from 'react'
import Link from 'next/link'
import IconTitle from '../../atoms/IconTitle'
import { NavMenuInfo } from '../../../custom/use-nav-menu'

import styles from './style.module.scss'

export interface Props {
  items       : NavMenuInfo[],
  isVertical? : boolean
  activeKey?  : string
}

/**
 * ナビゲーションメニューを構築
 */
const NavMenu: React.FC<Props> = ({
  items,
  isVertical = false,
  activeKey = ''
}: Props) => {
  // メニュー項目の並べ方(水平 or 垂直)を定義
  const _items = items.map((item, i) => {
    const { key, path, Icon, text } = item
    return (
      <li key={i} className={styles.item}>
        <Link href={path}>
          <a className={`
            ${styles.link}
            ${isVertical ? styles.link__vertical : ''}
            ${ key === activeKey ? styles.link__on : ''}
          `}>
            <IconTitle {...item} title={text} icon={Icon} isVertical={isVertical} />
          </a>
        </Link>
      </li>
    )
  })
  return <ul className={`${styles.root} ${isVertical && styles.root__vertical}`}>{_items}</ul>
}

export default NavMenu
