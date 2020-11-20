// 全てのAPIで共通の型
type CommonProps = {
  id                   : string
  createdAt            : Date
  updatedAt            : Date
  publishedAt          : Date
}

// API経由で取得するプロフィールの型
export interface ProfileProps {
  profile : CommonProps & {
    name                 : string
    sex                  : string[]
    birthday             : Date
    job                  : string
    capacity             : string[]
    specialty_field      : string[]
    specialty_technology : string[],
    specialty_work       : string[],
    pr                   : string
  }
}
