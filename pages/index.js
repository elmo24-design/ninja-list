import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
     <>
         <Head>
            <title>Ninja List | Home</title>
            <meta name="keywords" content="ninjas"/>
         </Head>
         <div>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim quam id placeat sunt numquam voluptates ipsum. Impedit saepe nihil assumenda magni cumque recusandae repellendus illo consectetur porro, veniam eius.</p>
            <Link href="/ninjas">
               <a className={styles.btn}>See Nina Listing</a>
            </Link>
         </div>
     </>
  )
}
