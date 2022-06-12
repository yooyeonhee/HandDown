import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/commons/layout'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Global styles={globalStyles}/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
