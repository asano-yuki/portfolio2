import React from 'react'
import { useRouter } from 'next/router'
import { _ } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.min.css'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import ExtendGrid from '../../atoms/ExtendGrid'
import IconList from '../../atoms/IconList'
import useMakeDate from '../../../custom/use-make-date'
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
 * 実務経験一覧テーブル
 */
const ExperienceTable: React.FC<Props> = ({
  data
}: Props) => {
  const router = useRouter()
  const { getDatePeriod } = useMakeDate()
  // extend-grid.tsxのdataプロパティを構築
  const experience = data.map(item => {
    const { id, title, start_date, end_date, style, key_skill } = item
    // 年月表記による所属期間の表示
    const period = getDatePeriod(start_date, end_date)
    // 詳細ボタンのアイコンコンポーネントを構築
    const iconLink = _(<IconList items={[
      {
        id    : id,
        icon  : faChevronCircleRight,
        label : '詳細',
        click : () => { router.push(`/experience/${id}`) }
      }
    ]} />)
    return [
      title,
      period,
      style,
      key_skill,
      iconLink
    ]
  })

  return (
    <ExtendGrid
      data={experience}
      columns={[
        '概要',
        {
          name : '期間',
          sort : {
            compare : (a: number, b: number) => {
              if (a === b) return 0
              return a > b ? 1 : -1
            }
          }
        },
        '勤務形態',
        '主要スキル',
        {
          name : '　',
          sort : {
            enabled : false
          }
        }
      ]}
    />
  )
}

export default ExperienceTable
