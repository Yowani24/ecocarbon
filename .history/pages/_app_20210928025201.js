import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CreditProvider>
      <Component {...pageProps} />
    </CreditProvider>
  )
}

export default MyApp
