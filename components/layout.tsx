import React from 'react'
import Head from 'next/head'
import Header from './organisms/Header'
import { useRouter } from 'next/router'
import useNavMenu from '../custom/use-nav-menu'
import NavMenu from 'components/molecules/NavMenu'
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
  // 現在表示しているページ(パス)を取得
  const router     = useRouter()
  const activePage = router.pathname.split('/')[1] || 'top'
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.contents}>
          { children }
          <footer className={styles.footer}>
            <Copyright />
          </footer>
        </div>
        <div className={styles.nav_bottom}>
          <NavMenu
            items={useNavMenu().infos}
            isVertical={true}
            activeKey={activePage}
          />
        </div>
      </div>
    </>
  )
}

export default Layout
