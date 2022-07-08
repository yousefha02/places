import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;500;600&display=swap" rel="stylesheet"/>
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
