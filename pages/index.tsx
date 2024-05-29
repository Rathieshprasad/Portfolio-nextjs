import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rathiesh Portfolio</title>
      </Head>
      <Header/>
    </div>  
  )
}

export default Home
