import React from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import Structure from 'components/atoms/Structure'
import ContactForm from 'components/organisms/ContactForm'

const Contact: React.FC = () => (
  <Layout>
    <Head>
      <title>asan&#39;s portfolio | お問い合わせ</title>
      <meta name="description" content={`
        Webサイト、Webアプリ開発を中心に活動しているasanです。
        CSS(SCSS)、React、TypeScript、Nextなどの技術スタックを活用して、
        デザインからコーディングまで幅広く対応しております。
      `} />
    </Head>
    <Structure title='お問い合わせ'>
      <ContactForm />
    </Structure>
  </Layout>
)

export default Contact
