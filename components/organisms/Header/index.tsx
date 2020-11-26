import React from 'react'
import dynamic from 'next/dynamic'
import NavMenu from '../../molecules/NavMenu'
import useNavMenu from '../../../custom/use-nav-menu'

import styles from './style.module.scss'

const DynamicArrowButton = dynamic(
  () => import('../../molecules/ArrowButton'),
  { ssr : false }
)

export interface Props {
  activePage    : string
  openState     : boolean
  setOpenState? : React.Dispatch<React.SetStateAction<boolean>>,
  isVertical?   : boolean
}

/**
 * ヘッダー部分を構築
 * ・ナビゲーションメニューの追加
 * ・ナビゲーションメニュ－の開閉機能 ※PCサイズのみ
 */
const Header: React.FC<Props> = ({
  activePage,
  openState,
  setOpenState = () => {},
  isVertical = false
}: Props) => {
  // icon-menuコンポーネントに渡すパラメータ
  const { infos, unTitledInfos } = useNavMenu()
  // ヘッダーがクローズ状態であれば、titleを非表示
  const navInfos = openState ? infos : unTitledInfos
  return (
    <header className={`
      ${styles.root}
      ${openState ? styles.root__open : styles.root__close}
    `}>
      <div className={styles.arrow_button}>
        <DynamicArrowButton color='#fff' clickHandler={() => setOpenState(!openState)} />
      </div>
      <NavMenu
        items={navInfos}
        isVertical={isVertical}
        activeKey={activePage}
      />
    </header>
  )
}

export default Header
