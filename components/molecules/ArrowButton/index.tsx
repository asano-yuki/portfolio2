import React, { useRef, useEffect } from 'react'
import Snap from 'snapsvg'
import SvgButton from '../../atoms/SvgButton'
import useArrowParam from '../../../custom/use-arrow-button'

export interface Props {
  color?         : string
  initDirection? : 'left' | 'right'
  duration?      : number
  clickHandler?  : () => void
}

interface PathParam {
  top    : string,
  middle : string,
  bottom : string
}

/**
 * 矢印ボタンをSnap.jsライブラリを用いて構築
 * 参照先：http://snapsvg.io/docs/
 * @param {string} color 矢印アイコンの色
 * @param {string} initDirection hoverイベント時の初期アイコン向き
 * @param {number} duration アニメーション時間
 * @param {function} clickHandler クリックイベントハンドラー
 */
const ArrowButton: React.FC<Props> = ({
  color         = '#c7c7c7',
  initDirection = 'left',
  duration      = 250,
  clickHandler  = () => {}
}: Props) => {
  // イベント発火時に、矢印ボタンの動作を決定するpath要素のパラメータ、ハンドラーを取得
  const { defaultArrowParam, getCurrentArrowParam, getChangedArrowParam } = useArrowParam(initDirection)
  const ref = useRef<SVGSVGElement | null>(null)

  // アニメーションを用いて、path要素にパラメータを設定
  // 上辺、下辺を0.25秒(デフォルト)かけてpath要素を変形
  const setParamToPath = ({ top, middle, bottom }: PathParam): void => {
    if (ref.current === null) return
    const svgElem: SVGElement = ref.current
    const $pathSet  = Snap(svgElem).selectAll('path')
    const easeinout = mina.easeinout
    $pathSet.animate(
      [{ d: top    }, duration, easeinout],
      [{ d: middle }, duration, easeinout],
      [{ d: bottom }, duration, easeinout]
    )
  }

  // SvgButtonコンポーネントのプロパティを定義
  const props = {
    style   : { margin: '10px 15px 0 0' },
    onClick : clickHandler
  }
  // アイコンのアニメーション表示を実装
  Object.assign(props, {
    onClick : (): void => {
      clickHandler()
      setParamToPath(getChangedArrowParam())
    },
    onMouseEnter : (): void => { setParamToPath(getCurrentArrowParam()) },
    onMouseLeave : (): void => { setParamToPath(defaultArrowParam) }
  })

  // path要素にデフォルトパラメータを設定
  useEffect((): void => { setParamToPath(defaultArrowParam) }, [])

  return (
    <SvgButton {...props}>
      <g ref={ref}>
        <path fill={color} d={defaultArrowParam.top}></path>
        <path fill={color} d={defaultArrowParam.middle}></path>
        <path fill={color} d={defaultArrowParam.bottom}></path>
      </g>
    </SvgButton>
  )
}

export default ArrowButton
