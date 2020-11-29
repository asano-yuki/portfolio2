import React from 'react'
import { Formik, Form, Field, FieldProps, ErrorMessage, FormikBag } from 'formik'
import * as yup from 'yup'
import swal from 'sweetalert'
import axios from 'axios'

import styles from './style.module.scss'

interface ValueProps {
  name     : string
  email    : string
  summary  : string
  contents : string
}

interface SubmitProps {
  dirty        : boolean
  isValid      : boolean
  isSubmitting : boolean
  handleReset  : () => void
}

/**
 * お問い合わせフォームの構築
 */
const ContactForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name     : '',
        email    : '',
        summary  : 'サイトについて',
        contents : ''
      }}
      validationSchema={
        yup.object().shape({
          name  : yup.string()
            .required('必須項目です。')
            .max(50, '50文字以内で入力して下さい。'),
          email : yup.string()
            .required('必須項目です。')
            .email('メールアドレスの形式に間違いがあります。'),
          contents : yup.string()
            .required('必須項目です。')
            .max(500, '500文字以内で入力して下さい。')
        })
      }
      onSubmit={async (values: ValueProps, formik: any) => {
        swal({
          text                : 'メール送信中',
          icon                : 'info',
          buttons             : { visible: false },
          closeOnClickOutside : false,
          timer               : 20000
        })
        const res = await axios.post(`${window.location.origin}/api/contact`, values, { timeout: 10000 })
        // 送信成功・失敗時のアラート
        const isSuccess = res.data.errors ? false : true
        if (!isSuccess) return swal({ title: '送信に失敗しました', icon: 'error' })
        swal({ title: '送信しました!', icon: 'success' })
        formik.resetForm()
      }}
    >
      {
        ({
          dirty,
          isValid,
          isSubmitting,
          handleReset
        }: SubmitProps) => {
          // 送信ボタンの活性・非活性を定義
          const isActive = dirty && isValid
          return (
            <Form className={styles.root}>
              <label>
                <span className={styles.label}>名&nbsp;前</span>
                <Field name='name' className={styles.name} />
                <p className={styles.error}>
                  <ErrorMessage name='name' />
                </p>
              </label>
              <label>
                <span className={styles.label}>メールアドレス</span>
                <Field name='email' type='email' className={styles.email} />
                <p className={styles.error}>
                  <ErrorMessage name='email' />
                </p>
              </label>
              <div>
                <span className={styles.label}>種&nbsp;類</span>
                <Field name='summary'>
                  {
                    ({ field }: FieldProps) => {
                      const { value }  = field
                      const props = { type: 'radio', name: 'summary' }
                      return (
                        <div className={styles.summary}>
                          <label
                            className={`
                              ${styles.summary_item}
                              ${value === 'サイトについて' && `${styles.summary_item__checked}`}
                            `}
                          >
                            <Field
                              {...props}
                              value='サイトについて'
                              className={`
                                ${styles.summary_radio}
                              `}
                            />
                            サイトについて
                          </label>
                          <label
                            className={`
                              ${styles.summary_item}
                              ${value === '仕事依頼' && `${styles.summary_item__checked}`}
                            `}>
                            <Field {...props} value='仕事依頼' className={styles.summary_radio} />
                            仕事依頼
                          </label>
                          <label
                            className={`
                              ${styles.summary_item}
                              ${value === 'その他' && `${styles.summary_item__checked}`}
                            `}>
                            <Field {...props} value='その他' className={styles.summary_radio} />
                            その他
                          </label>
                        </div>
                      )
                    }
                  }
                </Field>
                <p className={styles.error}></p>
              </div>
              <label>
                <span className={styles.label}>内&nbsp;容</span>
                <Field name='contents' as='textarea' className={styles.contents} />
                <p className={styles.error}>
                  <ErrorMessage name='contents' />
                </p>
              </label>
              <div className={styles.btn_group}>
                <button
                  type='submit'
                  className={`
                    ${styles.submit}
                    ${isActive ? styles.submit__on : ''}
                  `}
                  disabled={!(isActive || isSubmitting)}
                >
                  送&nbsp;信
                </button>
                <button
                  className={styles.clear}
                  onClick={handleReset}
                >
                  クリア
                </button>
              </div>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default ContactForm
