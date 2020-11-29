import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface Contact {
  name     : string
  email    : string
  summary  : string[]
  contents : string
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const user = process.env['MAIL_ADDRESS']
  const pass = process.env['MAIL_PASSWORD']
  // トランスポートオブジェクトの定義
  const transporter = nodemailer.createTransport({
    host   : 'smtp.gmail.com',
    port   : 465,
    secure : true,
    auth   : { user, pass }
  })

  // メール送信
  const { name, email, summary, contents }: Contact = req.body
  await transporter.sendMail({
    from    : email,
    to      : user,
    subject : `【${summary} | ${email}】 ${name}`,
    text    : contents
  }).catch(e => {
    console.error(e)
    res.status(500).json({ errors: ['Server Error'] })
  })
  res.status(200).json({ errors: null })
}
