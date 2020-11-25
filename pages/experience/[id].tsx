import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from 'components/layout'
import Breadcrumb from 'components/atoms/Breadcrumb'
import Structure from 'components/atoms/Structure'
import ExperienceDetail from 'components/organisms/ExperienceDetail'
import { fetchExperiences, fetchExperience, ExperienceProps } from 'utils/api'

import styles from 'styles/experience.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetchExperiences()
  const paths = res.map(item => {
    const id = item.id
    return { params: { id } }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetchExperience(params.id as string)
  return {
    props : { data }
  }
}

export interface Props {
  data : ExperienceProps
}

const ExperienceContents: React.FC<Props> = ({
  data
}: Props) => {
  const title = data.title
  return (
    <Layout>
      <Head>
        <title>asan&#39;s portfolio | {title}</title>
        <meta name="description" content={`
          Webサイト、Webアプリ開発を中心に活動しているasanです。
          CSS(SCSS)、React、TypeScript、Nextなどの技術スタックを活用して、
          デザインからコーディングまで幅広く対応しております。
        `} />
      </Head>
      <div className={styles.breadcrumb}>
        <Breadcrumb items={[
          { title: '実務経験一覧', path: '/experience' },
          { title }
        ]} />
      </div>
      <Structure title='実務経験詳細'>
        <ExperienceDetail {...data} />
      </Structure>
    </Layout>
  )
}

export default ExperienceContents
