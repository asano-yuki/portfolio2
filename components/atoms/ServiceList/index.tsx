import React from 'react'

import styles from './style.module.scss'

/**
 * 各サービスに遷移するためのリンクアイコン一覧
 */
const ServiceList: React.FC = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <a
          href='https://github.com/asano-yuki/portfolio2'
          className={styles.link}
          target='_blank'
          rel="noreferrer"
        >
          <img src='/img/github.svg' className={styles.img} alt='GitHub' />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href='https://zenn.dev/asano'
          className={styles.link}
          target='_blank'
          rel="noreferrer"
        >
          <img src='/img/zenn.jpg' className={styles.img} alt='zenn' />
        </a>
      </li>
    </ul>
  )
}

export default ServiceList
