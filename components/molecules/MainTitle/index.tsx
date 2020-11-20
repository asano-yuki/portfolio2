import React from 'react'
import ServiceList from '../../atoms/ServiceList'

import styles from './style.module.scss'

export interface Props {
  openState : boolean
}

/**
 * サイトタイトル、サービス一覧を表示
 */
const MainTitle: React.FC<Props> = ({
  openState
}: Props) => {
  return (
    <div className={`${styles.root} ${openState ? styles.root__open : ''}`}>
      <h1 className={styles.title}>asan&apos;s portfolio</h1>
      <ServiceList />
    </div>
  )
}

export default MainTitle
