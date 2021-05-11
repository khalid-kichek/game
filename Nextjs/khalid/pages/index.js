import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <>
     <Head>
       <title>Khalid List</title>
     </Head>

    <div>
      <Image src="/vercel.svg" width={24} height={20}  />
      <h1 className={styles.title}>Home app</h1>
      <p className={styles.text}>khalid lorem  </p>
      <p className={styles.text}>khalid lorem  </p>
      <Link href="/core">
        <a className={styles.btn}>khalids</a>
      </Link>
    </div>
    </>
  )
}
