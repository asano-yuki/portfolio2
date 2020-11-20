import React, { useRef, useEffect } from 'react'
import MyChart, { ChartConfiguration } from 'chart.js'

export interface Props {
  params : ChartConfiguration
  style  : React.CSSProperties
}

/**
 * chart.jsライブラリでチャートを構築
 * 参照先：https://www.chartjs.org/docs/latest/
 */
const Chart: React.FC<Props> = ({
  params,
  style
}: Props) => {
  const _style = Object.assign({
    position: 'relative'
  }, style)

  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const context = ref.current?.getContext('2d')
    if (!context) return
    new MyChart(context, params)
  }, [])

  return (
    <div style={_style}>
      <canvas ref={ref} />
    </div>
  )
}

export default Chart
