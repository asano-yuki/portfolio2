import React from 'react'
import TitledText from '../../atoms/TitledText'
import LangExplanation from '../../molecules/LangExplanation'

import styles from './style.module.scss'

/**
 * 使用スキル・ツールを構築
 */
const About: React.FC = () => {
  // 画像要素、LangExplanationコンポーネントのパラメータ定義
  const params = [
    {
      Image : <img src='img/scss.svg' width='100%' alt='SCSSのロゴ画像' />,
      title : 'SCSS',
      text  : 'CSS設計として「CSS Modules + BEM」を採用することで、ローカルスコープの確保と煩雑になりやすいソースコードの保守性を向上。',
    },
    {
      Image : <img src='img/react.svg' width='100%' alt='Reactのロゴ画像' />,
      title : 'React',
      text  : '関数コンポーネントのHooksAPIを導入。デザインシステムにAtomicDesignを取り入れて、疎結合で再利用性の高いコンポーネントを構築。',
    },
    {
      Image : <img src='img/typescript.svg' width='80%' alt='TypeScriptのロゴ画像' />,
      title : 'TypeScript',
      text  : '潜在的なバグの早期発見やアプリケーションの品質向上を目的に採用。',
    },
    {
      Image : <img src='img/nextjs.svg' width='100%' alt='Next.jsのロゴ画像' />,
      title : 'Next.js',
      text  : 'SSGによるパフォーマンスとSEOの向上を目的に採用。',
    },
    {
      Image : <img src='img/jest.svg' width='70%' alt='Jestのロゴ画像' />,
      title : 'Jest',
      text  : 'テストランナー、アサーション、モックやスタブなどの機能をオールインワンで提供されており、使い勝手が良いフレームワークのため採用。',
    },
    {
      Image : <img src='img/storybook.svg' width='120%' alt='Storybookのロゴ画像' />,
      title : 'Storybook',
      text  : '独立したコンポーネントの開発、UIテストを目的に採用。',
    },
    {
      Image : <img src='img/cms.svg' width='100%' alt='CMSのロゴ画像' />,
      title : 'microCMS',
      text  : 'プロフィール、スキル、実務経験等の各種コンテンツの管理とページレイアウトの自由度を確保するために、APIベースのヘッドレスCMSを採用。',
    }
  ]

  // LangExplanationWithThumbnailsの子コンポーネントを構築
  const items = params.map((item, i) => {
    const { Image, title, text } = item
    // LangExplanationコンポーネントのパラメータ
    const langParams = { title, text }
    // LangExplanationコンポーネントのli要素1、2番目以外に区切り線を設定
    const borderTop: string = i > 1 ? '1px solid #e0e0e0' : 'none'
    return {
      Image,
      TitledText : <TitledText {...langParams} />,
      style      : { padding: '40px 0', borderTop }
    }
  })

  return (
    <section className={styles.root}>
      <LangExplanation items={items} />
    </section>
  )
}

export default About
