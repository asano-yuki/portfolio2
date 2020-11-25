import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useMediaQuery } from 'react-responsive'
import Layout from 'components/layout'
import Structure from 'components/atoms/Structure'
import SkillOverview from '../components/molecules/SkillOverview'
import CapacityList from '../components/atoms/CapacityList'
import SkillTable from 'components/organisms/SkillTable'
import SkillGroup from 'components/organisms/SkillGroup'
import { fetchProfile, fetchSkill, ProfileProps, SkillProps } from 'utils/api'

export const getStaticProps: GetStaticProps = async () => {
  const profile = fetchProfile()
  const skill   = fetchSkill()
  const res = await Promise.all([profile, skill])
  return { props : { profile: res[0], skill: res[1] } }
}

export interface Props {
  profile : ProfileProps
  skill   : SkillProps[]
}

const Skill: React.FC<Props> = ({
  profile,
  skill
}: Props) => {
  // プロフィール情報の取得・加工
  const field      = profile.specialty_field.map(item => item.name)
  const technology = profile.specialty_technology.map(item => item.name)
  const work       = profile.specialty_work.map(item => item.name)
  const capacity   = profile.capacity.map(item => item.name)
  // スキル情報の取得・加工
  const _skill = skill.map(item => {
    const { name, category, sub_category, year, level } = item
    return { name, category: category[0], sub_category, year, level }
  })
  const isSmartPhone = useMediaQuery({ query: '(max-width: 480px)' })
  return (
    <Layout>
      <Head>
        <title>asan&#39;s portfolio | スキル</title>
        <meta name="description" content={`
          Webサイト、Webアプリ開発を中心に活動しているasanです。
          CSS(SCSS)、React、TypeScript、Nextなどの技術スタックを活用して、
          デザインからコーディングまで幅広く対応しております。
        `} />
      </Head>
      <Structure title='スキル概要'>
        <SkillOverview
          field={field}
          technology={technology}
          work={work}
        />
      </Structure>
      <Structure title='資格一覧' className='capacity'>
        <CapacityList capacity={capacity} />
      </Structure>
      <Structure title='スキル一覧' className='skill-table'>
        { isSmartPhone ? <SkillGroup data={_skill} /> : <SkillTable data={_skill} /> }
      </Structure>
    </Layout>
  )
}

export default Skill
