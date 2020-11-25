import React from 'react'
import { useMediaQuery } from 'react-responsive'
import RelationTable from '../../molecules/RelationTable'
import RelationTableRow from '../../atoms/RelationTableRow'
import useMakeDate from '../../../custom/use-make-date'
import { convertIndection, ExperienceProps } from '../../../utils/api'

export type Props = ExperienceProps

const ExperienceDetail: React.FC<Props> = ({
  start_date,
  end_date,
  content,
  scale,
  style,
  role,
  language = '',
  db = '',
  os = '',
  mw = '',
  fw = '',
  tool = '',
  charge = ''
}: Props) => {
  // 年月表記による所属期間の表示
  const { getDatePeriod } = useMakeDate()
  const period = getDatePeriod(start_date, end_date)
  const isSmartPhone = useMediaQuery({ query: '(max-width: 480px)' })
  return (
    <RelationTable>
      <RelationTableRow thText='期間' tdText={period} width={isSmartPhone ? '100%' : '47.5%' } />
      <RelationTableRow thText='規模' tdText={scale} width={isSmartPhone ? '100%' : '47.5%' } />
      <RelationTableRow thText='役割' tdText={role} width={isSmartPhone ? '100%' : '47.5%' } />
      <RelationTableRow thText='勤務形態' tdText={style} width={isSmartPhone ? '100%' : '47.5%' } />
      <RelationTableRow thText='業務内容' tdText={convertIndection(content)} />
      <RelationTableRow thText='使用言語' tdText={convertIndection(language)} />
      <RelationTableRow thText='OS' tdText={convertIndection(os)} />
      <RelationTableRow thText='DB' tdText={convertIndection(db)} />
      <RelationTableRow thText='MW' tdText={convertIndection(mw)} />
      <RelationTableRow thText='FW' tdText={convertIndection(fw)} />
      <RelationTableRow thText='ツ‐ル' tdText={convertIndection(tool)} />
      <RelationTableRow thText='担当工程' tdText={convertIndection(charge)} />
    </RelationTable>
  )
}

export default ExperienceDetail
