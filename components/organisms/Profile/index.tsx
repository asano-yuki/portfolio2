import React from 'react'
import RoundThumbnail from '../../atoms/RoundThumbnail'
import ProfileSummary from '../../atoms/ProfileSummary'

import styles from './style.module.scss'

export interface Props {
  name     : string
  job      : string
  birthday : string
}

const Profile: React.FC<Props> = ({
  name,
  job,
  birthday
}: Props) => {
  // 誕生日をもとに、現在の年齢を取得
  let age = new Date().getTime() - new Date(birthday).getTime()
  age = Math.floor(age / (1000 * 60 * 60 * 24 * 365))
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <RoundThumbnail
          imgPath='img/thumbnail.jpg'
          alt='プロフィール画像'
        />
      </div>
      <div className={styles.item}>
        <ProfileSummary
          texts={[name, job, `満${age}歳`]}
        />
      </div>
    </div>
  )
}

export default Profile
