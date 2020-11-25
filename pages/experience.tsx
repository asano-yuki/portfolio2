import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useMediaQuery } from 'react-responsive'
import Layout from 'components/layout'
import ExperienceList from 'components/organisms/ExperienceList'
import ExperienceGroup from 'components/organisms/ExperienceGroup'
import { fetchExperiences, ExperienceProps } from 'utils/api'

export const getStaticProps: GetStaticProps = async () => {
  const experience = await fetchExperiences()
  return { props : { experience } }
}

export interface Props {
  experience : ExperienceProps[]
}

const Experience: React.FC<Props> = ({
  experience
}: Props) => {
  const isSmartPhone = useMediaQuery({ query: '(max-width: 480px)' })
  return (
    <Layout>
      <Head>
        <title>asan&#39;s portfolio | 実務経験</title>
        <meta name="description" content={`
          Webサイト、Webアプリ開発を中心に活動しているasanです。
          CSS(SCSS)、React、TypeScript、Nextなどの技術スタックを活用して、
          デザインからコーディングまで幅広く対応しております。
        `} />
      </Head>
      { isSmartPhone ?
        <ExperienceGroup data={
          experience.map(item => {
            const { id, title, start_date, end_date } = item
            return { id, title, start_date, end_date }
          })
        } /> :
        <ExperienceList data={
          experience.map(item => {
            const { id, title, start_date, end_date, style, key_skill } = item
            return { id, title, start_date, end_date, style, key_skill }
          })
        } />
      }
    </Layout>
  )
}

export default Experience
