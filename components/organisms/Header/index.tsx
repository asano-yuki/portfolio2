import React from 'react'
import { useRouter } from 'next/router'
import NavMenu from '../../molecules/NavMenu'
import ServiceList from '../../atoms/ServiceList'
import useNavMenu from '../../../custom/use-nav-menu'

import styles from './style.module.scss'

const Header: React.FC = () => {
  // 現在表示しているページ(パス)を取得
  const router     = useRouter()
  const activePage = router.pathname.split('/')[1] || 'top'
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>asan&apos;s portfolio</h1>
      <div className={styles.list}>
        <div className={styles.nav}>
          <NavMenu
            items={useNavMenu().infos}
            activeKey={activePage}
          />
        </div>
        <div className={styles.service}>
          <ServiceList />
        </div>
      </div>
    </header>
  )
}

export default Header
