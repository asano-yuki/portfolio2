import React from 'react'
import { _ } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.min.css'
import { SkillProps } from '../../../utils/api'
import ProgressBar from '../../atoms/ProgressBar'
import ExtendGrid from '../../atoms/ExtendGrid'

export interface Props {
  height? : string,
  data    : {
    name         : SkillProps['name']
    category     : string
    sub_category : SkillProps['sub_category']
    year         : SkillProps['year']
    level        : SkillProps['level']
  }[]
}

/**
 * スキル一覧テーブル
 */
const SkillTable: React.FC<Props> = ({
  height = '800px',
  data
}: Props) => {
  const skill = data.map(item => {
    const { name, category, sub_category = '', year, level } = item
    // 1レコードに表示する各セル項目を構築
    return [
      name,
      category,
      sub_category,
      _(<ProgressBar  {...{
        max        : 4,
        val        : year,
        labels     : ['', '1年', '2年', '3年', ''],
        background : '#fd6f90aa'
      }} />),
      _(<ProgressBar  {...{
        max        : 10,
        val        : level,
        labels     : ['', '初心者', '', '中級者', '', '上級者', ''],
        background : '#3a90b8aa'
      }} />),
    ]
  })

  return (
    <ExtendGrid
      isFixedHeader={true}
      height={height}
      data={skill}
      columns={[
        'スキル名',
        'カテゴリー',
        'サブカテゴリー',
        {
          name  : '経験年数',
          width : '160px',
          sort  : {
            compare : (a: JSX.Element, b: JSX.Element) => {
              const aVal = a.props.element.props.val
              const bVal = b.props.element.props.val
              if (aVal > bVal) return 1
              else if (aVal < bVal) return -1
              else 0
            }
          }
        },
        {
          name  : 'スキルレベル',
          width : '160px',
          sort  : {
            compare : (a: JSX.Element, b: JSX.Element) => {
              const aVal = a.props.element.props.val
              const bVal = b.props.element.props.val
              if (aVal > bVal) return 1
              else if (aVal < bVal) return -1
              else 0
            }
          }
        },
      ]}
    />
  )
}

export default SkillTable
