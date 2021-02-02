import '../styles/globals.css';
import Layout from '../components/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet"></link>
        <title>Friends of Stringer's Ridge</title>
        </Head>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;