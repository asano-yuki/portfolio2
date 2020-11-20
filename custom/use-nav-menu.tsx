import { useMemo } from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faHome, faLaptop, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export interface NavMenuInfo {
  key       : string
  path      : string
  text      : string
  Icon      : IconDefinition
}

export interface Props {
  infos         : NavMenuInfo[],
  unTitledInfos : NavMenuInfo[]
}

/**
 * ナビゲーションメニューの構築
 */
const useNavMenu = (): Props => {
  // ナビゲーションメニューの各項目情報を取得
  const infos = useMemo(() => {
    return [
      {
        key  : 'top',
        path : '/',
        text : 'トップ',
        Icon : faHome,
      },
      {
        key  : 'skill',
        path : '/skill',
        text : 'スキル',
        Icon : faLaptop,
      },
      {
        key  : 'experience',
        path : '/experience',
        text : '実務経験',
        Icon : faBriefcase,
      },
      {
        key  : 'contact',
        path : '/contact',
        text : '実務経験',
        Icon : faEnvelope,
      }
    ]
  }, [])

  // タイトル情報を取り除いたナビゲーションメニューの各項目情報を取得
  const unTitledInfos = useMemo(() => {
    const _infos = infos.map(item => Object.assign({}, item, { text: '' }))
    return _infos
  }, [])

  return { infos, unTitledInfos }
}

export default useNavMenu
