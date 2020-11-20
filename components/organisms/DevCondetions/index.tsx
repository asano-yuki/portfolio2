import React from 'react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'
import Legend from '../../atoms/Legend'

import styles from './style.module.scss'

const DynamicChart = dynamic(
  () => import('../../atoms/Chart'),
  { ssr: false }
)

/**
 * 開発希望条件を構築
 * chart.jsライブラリのパラメータを構築
 * https://www.chartjs.org/
 */
const DevConditions = (): JSX.Element => {
  // チャート・凡例で使用するラベル
  const labels = [
    'React',
    'TypeScript',
    'UIデザイン',
    'BtoC向けサービス',
    'Atomic Design'
  ]
  // チャート・凡例で使用する背景色
  const backgroundColors = [
    'rgba(253, 111, 145, 0.6)',
    'rgba(255, 246, 176, 0.6)',
    'rgba(58, 144, 184, 0.6)',
    'rgba(255, 234, 214, 0.6)',
    'rgba(148, 215, 199, 0.6)'
  ]
  // chart.js専用パラメータ
  const params = {
    type : 'pie',
    data : {
      labels,
      datasets : [{
        data            : [40, 20, 10, 10, 10],
        backgroundColor : backgroundColors,
        borderWidth     : 0
      }]
    },
    options : {
      maintainAspectRatio : false,
      legend : {
        display : false
      },
      tooltips : {
        enabled : false
      }
    }
  }
  // グラフ・チャートに表示する凡例パラメータを定義
  const items = [
    {
      label : labels[0],
      text  : '強く希望',
      color : backgroundColors[0]
    },
    {
      label : labels[1],
      text  : '可能であれば',
      color : backgroundColors[1]
    },
    {
      label : labels[2],
      text  : '可能であれば',
      color : backgroundColors[2]
    },
    {
      label : labels[3],
      text  : '可能であれば',
      color : backgroundColors[3]
    },
    {
      label : labels[4],
      text  : '可能であれば',
      color : backgroundColors[4]
    }
  ]

  // 円グラフのスタイルをデバイスに応じて定義
  const chartStyle = useMediaQuery({ query: '(min-width: 480px)' })
    ? { width: '50%' , height: 250 }
    : { width: '100%', height: 200, marginBottom: 30 }
  // 凡例のプロパティ、スタイルを定義
  const legendParams = {
    items,
    style : { width : '40%' }
  }

  return (
    <div className={styles.root}>
      <DynamicChart params={params} style={chartStyle} />
      <div className={styles.legend}>
        <Legend {...legendParams} />
      </div>
    </div>
  )
}

export default DevConditions
