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
