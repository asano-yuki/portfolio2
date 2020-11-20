import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Layout from 'components/layout'
import { API } from 'utils/path'
import { ProfileProps } from 'utils/api-types'
import Structure from 'components/atoms/Structure'
import Profile from 'components/organisms/Profile'
import LifeCareer from 'components/organisms/LifeCareer'
import Motivation from 'components/organisms/Motivation'
import DevCondetions from 'components/organisms/DevCondetions'
import About from 'components/organisms/About'

export const getStaticProps: GetStaticProps = async () => {
  // プロフィール情報の取得
  const res = await axios.get(`${API}/profile`, {
    headers: { 'X-API-KEY': '13d67533-b19b-479a-b117-4d329b5e46ea' }
  })
  return {
    props : { profile: res.data.contents }
  }
}

const Home: React.FC<ProfileProps> = ({
  profile
}: ProfileProps) => {
  const { name, job, birthday } = profile[0]
  return (
    <Layout>
      <Head>
        <title>asan&#39;s portfolio | トップページ</title>
        <meta name="description" content={`
          Webサイト、Webアプリ開発を中心に活動しているasanです。
          CSS(SCSS)、React、TypeScript、Nextなどの技術スタックを活用して、
          デザインからコーディングまで幅広く対応しております。
        `} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Structure title='プロフィール' className='profile'>
        <Profile name={name} job={job} birthday={birthday} />
      </Structure>
      <Structure title='ライフキャリア' className='life-career'>
        <LifeCareer />
      </Structure>
      <Structure title='モチベーション環境要因' className='motivation'>
        <Motivation />
      </Structure>
      <Structure title='希望開発条件' className='dev-condetions'>
        <DevCondetions />
      </Structure>
      <Structure title='当サイトについて' className='about'>
        <About />
      </Structure>
    </Layout>
  )
}

export default Home
