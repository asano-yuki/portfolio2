import React from 'react'
import { SkillProps } from '../../../utils/api'
import GroupList from '../../molecules/GroupList'
import GroupItem from '../../atoms/GroupItem'
import ProgressBar from '../../atoms/ProgressBar'

export interface Props {
  data : {
    name         : SkillProps['name']
    category     : string
    sub_category : SkillProps['sub_category']
    year         : SkillProps['year']
    level        : SkillProps['level']
  }[]
}

const SkillGroup: React.FC<Props> = ({
  data
}: Props) => {
  const skillItems = data.map((item, i) => {
    const { name, year, level } = item
    // 1レコードに表示する各セル項目を構築
    return (
      <GroupList key={i}>
        <GroupItem item={name} />
        <GroupItem item={
          <ProgressBar key={i} {...{
            max        : 4,
            height     : 10,
            val        : year,
            labels     : ['', '1年', '2年', '3年', ''],
            background : '#fd6f90aa'
          }} />}
        />
        <GroupItem item={
          <ProgressBar key={i} {...{
            max        : 10,
            height     : 10,
            val        : level,
            labels     : ['', '初心者', '', '中級者', '', '上級者', ''],
            background : '#3a90b8aa'
          }} />}
        />
      </GroupList>
    )
  })
  return (
    <>
      <GroupList isHead={true}>
        <GroupItem item='使用言語' />
        <GroupItem item='経験年数' />
        <GroupItem item='スキルレベル' />
      </GroupList>
      {skillItems}
    </>
  )
}

export default SkillGroup
