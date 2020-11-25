import axios from 'axios'

const Path    = 'https://asansportfolio.microcms.io/api/v1'
const API_Key = '13d67533-b19b-479a-b117-4d329b5e46ea'

// 全てのAPIで共通の型
type CommonProps = {
  id          : string
  createdAt   : Date
  updatedAt   : Date
  publishedAt : Date
}

// 取得したデータの改行を変換
export const convertIndection = (text: string): string => {
  const _text = text.replace(/\n/g, '<br/>')
  return _text
}


// プロフィール情報の取得
export interface ProfileProps extends CommonProps {
  name                 : string
  sex                  : string[]
  birthday             : string
  job                  : string
  capacity             : CommonProps & { name : string }[]
  specialty_field      : CommonProps & { name : string }[]
  specialty_technology : CommonProps & { name : string }[]
  specialty_work       : CommonProps & { name : string }[]
  pr                   : string
}

export const fetchProfile = async (): Promise<ProfileProps> => {
  const res = await axios.get(`${Path}/profile`, {
    headers : { 'X-API-KEY': API_Key }
  })
  return res.data.contents[0]
}

// スキル情報の取得
export interface SkillProps extends CommonProps {
  name         : string
  category     : string[]
  sub_category : string
  year         : number
  level        : number
}

export const fetchSkill = async (): Promise<SkillProps[]> => {
  const res = await axios.get(`${Path}/skill?limit=100`, {
    headers : { 'X-API-KEY': API_Key }
  })
  return res.data.contents
}

// 実務経験情報の取得
export interface ExperienceProps extends CommonProps {
  start_date : string
  end_date   : string
  title      : string
  content    : string
  scale      : string
  contract   : string
  style      : string
  role       : string
  key_skill  : string
  language?  : string
  db?        : string
  os?        : string
  mw?        : string
  fw?        : string
  tool?      : string
  charge?    : string
}

export const fetchExperiences = async (): Promise<ExperienceProps[]> => {
  const res = await axios.get(`${Path}/experience`, {
    headers : { 'X-API-KEY': API_Key }
  })
  return res.data.contents
}

export const fetchExperience = async (id: string): Promise<ExperienceProps> => {
  const res = await axios.get(`${Path}/experience/${id}`, {
    headers : { 'X-API-KEY': API_Key }
  })
  return res.data
}
