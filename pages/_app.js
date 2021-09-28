import '../styles/globals.css'
import { CreditProvider } from './product/CreditList'

function MyApp({ Component, pageProps }) {
  return (
    <CreditProvider>
      <Component {...pageProps} />
    </CreditProvider>
  )
}

export default MyApp
