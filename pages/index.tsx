import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Part1 from '../components/Part1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
      <Header/>
    </div>
      <Part1/>
    </>
  )
}
