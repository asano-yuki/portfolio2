import React from 'react'

import styles from './style.module.scss'

export interface Props {
  children      : React.ReactNode
  onClick?      : (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void,
  onMouseEnter? : (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void,
  onMouseLeave? : (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

/**
 * 30×30のSVGボタンを構築
 * @param {object} children svg配下に格納するJSX要素
 * @param {function} onClick clickイベントハンドラー
 * @param {function} onMouseEnter mouseEnterイベントハンドラー
 * @param {function} onMouseLeave mouseLeaveイベントハンドラー
 */
const SvgButton: React.FC<Props> = ({
  children,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {}
}: Props) => {
  return (
    <div className={styles.root}>
      <svg
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        className={styles.svg}
      >
        {children}
      </svg>
    </div>
  )
}

export default SvgButton
