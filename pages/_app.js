import '@/styles/globals.css'
import { StateContext } from '@/context/stateContext'

import { Layout } from '@/components'
export default function App({ Component, pageProps }) {
  return (
      <StateContext>
        <Layout>
           <Component {...pageProps} />
        </Layout>
    </StateContext>
  )
}
