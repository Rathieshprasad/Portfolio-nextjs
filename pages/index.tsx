import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Rathiesh Portfolio</title>
      </Head>
      <Header/>
      <section id='hero'>
        <Hero/>
      </section>
    </div>  
  )
}

export default Home
