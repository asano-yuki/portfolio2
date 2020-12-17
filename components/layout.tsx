import React, { useReducer } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from 'components/organisms/Header'
import MainTitle from 'components/molecules/MainTitle'
import Copyright from 'components/atoms/Copyright'
import { openMenu, closeMenu } from 'utils/actionCreators'
import { reducer } from 'utils/reducer'

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
  const [state, dispatch] = useReducer(reducer, { isOpen: false })
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
          <Header
            activePage={activePage}
            isOpen={state.isOpen}
            changeIcon={() => {
              state.isOpen ?
                dispatch(closeMenu()) :
                dispatch(openMenu())
            }}
          />
        </div>
        <div className={`
          ${styles.title}
          ${state.isOpen ? styles.title__open : styles.title__close}
        `}>
          <MainTitle openState={state.isOpen} />
        </div>
        <div className={`
          ${styles.contents}
          ${state.isOpen ? styles.contents__open : styles.contents__close}
        `}>
          { children }
          <footer className={styles.footer}>
            <Copyright />
          </footer>
        </div>
        <div className={styles.header_bottom}>
          <Header
            activePage={activePage}
            isOpen={true}
            isVertical={true}
          />
        </div>
      </div>
    </>
  )
}

export default Layout
