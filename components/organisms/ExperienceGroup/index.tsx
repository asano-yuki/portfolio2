import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import GroupItem from '../../atoms/GroupItem'
import GroupList from '../../molecules/GroupList'
import useMakeDate from '../../../custom/use-make-date'
import { ExperienceProps } from '../../../utils/api'

import styles from './style.module.scss'

export interface Props {
  data : {
    id         : ExperienceProps['id']
    title      : ExperienceProps['title']
    start_date : ExperienceProps['start_date']
    end_date   : ExperienceProps['end_date']
  }[]
}

const ExperienceGroup: React.FC<Props> = ({
  data
}: Props) => {
  const { getDatePeriod } = useMakeDate()
  return (
    <>
      <GroupList isHead={true}>
        <GroupItem item='期 間' />
        <GroupItem item='概 要' />
      </GroupList>
      {
        data.map((item, i) => {
          const { id, title, start_date, end_date } = item
          const period = getDatePeriod(start_date, end_date)
          return (
            <GroupList key={i}>
              <GroupItem item={period} style={{ padding: '10px' }} />
              <GroupItem item={title} style={{ padding: '0 20px 10px' }} />
              <GroupItem
                item={
                  <Link href={`/experience/${id}`}>
                    <a className={styles.link}>
                      <p className={styles.text}>詳細</p>
                      <Icon icon={faChevronCircleRight} />
                    </a>
                  </Link>
                }
                style={{ padding: '0 20px 10px' }}
              />
            </GroupList>
          )
        })
      }
    </>
  )
}

export default ExperienceGroup
