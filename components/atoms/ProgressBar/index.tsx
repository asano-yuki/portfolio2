import React from 'react'

import styles from './style.module.scss'

export interface Props {
  max?           : number
  height?        : number
  val            : number
  correctionVal? : number
  labels         : string[]
  background?    : string
}

/**
 * 進捗度等を表すプログレスバーを構築
 */
const ProgressBar: React.FC<Props> = ({
  max = 100,
  height = 20,
  val,
  correctionVal = 0.05,
  labels,
  background = '#8197e0'
}: Props) => {
  const _val  = val > 0 ? val + correctionVal : val
  const width = `${_val / max * 100}%`
  // 目盛りを等間隔に配置する要素を構築
  const scale = labels.map((label, i) => <div key={i} className={styles.label}>{label}</div>)
  return (
    <div className={styles.root}>
      <div className={styles.bar} style={{ height }}>
        <div className={styles.meter} style={{ width, background }}></div>
      </div>
      <div className={styles.scale}>
        {scale}
      </div>
    </div>
  )
}

export default ProgressBar
