import type { AppProps } from 'next/app'
import '../styles/main.scss'
import { FilterContextProvider } from '../context/filter.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilterContextProvider>
      <Component {...pageProps} />
    </FilterContextProvider>
  )
}
export default MyApp
