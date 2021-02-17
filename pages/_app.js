import '../styles/globals.css'
import { Layout } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
          <link rel="shortcut icon" href="./favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
          <title>Friends of Stringer's Ridge</title>
          <meta property="og:title" content="Friends of Stringer's Ridge" />
          <meta name="description" content="The Friends of String's Ridge is a group dedicated to supporting and protecting Stringer's Ridge park in Chattanooga Tennessee." />
          <meta name="og:description" content="The Friends of String's Ridge is a group dedicated to supporting and protecting Stringer's Ridge park in Chattanooga Tennessee." />
          <meta name="robots" content="index, follow" />
        </Head>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp