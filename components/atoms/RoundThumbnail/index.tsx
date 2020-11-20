import React from 'react'

import styles from './style.module.scss'

export interface Props {
  imgPath : string
  alt?    : string
}

/**
 * 丸型サムネイルを構築
 */
const RoundThumbnail: React.FC<Props> = ({
  imgPath,
  alt = 'サムネイル画像'
}: Props) => {
  const img = <img src={imgPath} className={styles.img} alt={alt} />
  return <div className={styles.root}>{img}</div>
}

export default RoundThumbnail
