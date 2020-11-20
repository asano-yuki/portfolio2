import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss'

export interface Props {
  items: {
    title: string
    path?: string
  }[]
}

/**
 * パンくずリストを構築
 * pathプロパティが指定   → リンクテキスト表示
 * pathプロパティが未指定 → テキスト表示
 * ex. Top > About > Profile > ...
 */
const Breadcrumb: React.FC<Props> = ({
  items
}: Props) => {
  // リストの各項目を構築
  const len = items.length - 1
  const _items: JSX.Element[] = items.map((prop, i) => {
    const { title = '', path } = prop
    let icon: JSX.Element | null = null
    // 先頭要素以外にはアイコン(>)を追加
    if (i !== len) icon = <Icon icon={faAngleRight} className={styles.icon} />
    let item = <span>{title}</span>
    if (path) {
      item = (
        <Link href={path}>
          <a className={styles.link}>{item}</a>
        </Link>
      )
    }
    return (
      <li key={i} className={styles.item}>
        {item}
        {icon}
      </li>
    )
  })
  return <ul className={styles.root}>{_items}</ul>
}

export default Breadcrumb
