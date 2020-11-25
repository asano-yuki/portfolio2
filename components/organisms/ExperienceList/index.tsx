import React from 'react'
import Structure from '../../atoms/Structure'
import ExperienceTable from '../../molecules/ExperienceTable'
import { ExperienceProps } from '../../../utils/api'

export interface Props {
  data : {
    id         : ExperienceProps['id']
    start_date : ExperienceProps['start_date']
    end_date   : ExperienceProps['end_date']
    title      : ExperienceProps['title']
    style      : ExperienceProps['style']
    key_skill  : ExperienceProps['key_skill']
  }[]
}

/**
 * 実務経験一覧テーブルの構築
 */
const ExperienceList: React.FC<Props> = ({
  data
}: Props) => {
  return (
    <Structure title='実務経験一覧'>
      <ExperienceTable data={data}  />
    </Structure>
  )
}

export default ExperienceList
