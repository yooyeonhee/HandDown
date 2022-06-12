import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="outer">
    <div className="inner bg-yellow">1</div>
    <div className="inner bg-blue">2</div>
    <div className="inner bg-pink">3</div>
  </div>
  )
}

export default Home
