import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return(
  <Component {...pageProps} className={'my-5'} />
  )
}

export default MyApp
