import React from 'react'
import { AppProps } from 'next/app'

import 'styles/reset.scss'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
