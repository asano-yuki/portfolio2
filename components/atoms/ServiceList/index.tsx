import React from 'react'

import styles from './style.module.scss'

/**
 * 各サービスに遷移するためのリンクアイコン一覧
 */
const ServiceList: React.FC = () => {
  return (
    <ul>
      <li className={styles.item}>
        <a
          href='https://github.com/asano-yuki/portfolio'
          className={styles.link}
          target='_blank'
          rel="noreferrer"
        >
          <img src='img/github.svg' className={styles.img} alt='GitHub' />
        </a>
      </li>
    </ul>
  )
}

export default ServiceList
