import '../styles/globals.css'
import { AppPropsWithLayout } from '@/models/index'
import { SWRConfig } from 'swr/_internal'
import axiosClient from '@/api/axiosClient'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SWRConfig value={{
      fetcher: url => axiosClient.get(url),
      shouldRetryOnError:false
    }}>
      {getLayout(<Component {...pageProps} />)}
    </SWRConfig>
  )
}
