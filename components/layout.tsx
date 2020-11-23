import React, { useState } from 'react'
import Head from 'next/head'
import Header from 'components/organisms/Header'
import MainTitle from 'components/molecules/MainTitle'
import Copyright from 'components/atoms/Copyright'

import styles from '../styles/layout.module.scss'

export interface Props {
  children : React.ReactNode
}

/**
 * 各ページ共通のレイアウト定義
 */
const Layout: React.FC<Props> = ({
  children
}: Props) => {
  // ナビゲーションメニューの開閉フラグを管理
  const [openState, setOpenState] = useState<boolean>(true)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <Header openState={openState} setOpenState={setOpenState} />
      </div>
      <div className={`
        ${styles.title}
        ${openState ? styles.title__open : styles.title__close}
      `}>
        <MainTitle openState={openState} />
      </div>
      <div className={`
        ${styles.contents}
        ${openState ? styles.contents__open : styles.contents__close}
      `}>
        { children }
        <footer className={styles.footer}>
          <Copyright />
        </footer>
      </div>
      <div className={styles.header_bottom}>
        <Header openState={true} setOpenState={setOpenState} isVertical={true} />
      </div>
    </>
  )
}

export default Layout
