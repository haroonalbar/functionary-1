import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Part1 from '../components/Part1'
import Services from '../components/Services'
import Utilities from '../components/Utilities'
import About from '../components/About'
import Vision from '../components/Vision'
import Credits from '../components/Credits'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='sticky top-0 z-40'>
      <Header/>
    </div>
    <section id='home'>
      <Part1/>
    </section>
    <section id='services' >
      <Services/>
    </section>
    <section id='utilities'>
      <Utilities/>
    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='vision'>
      <Vision/>
    </section>
    <section id='credits'>
      <Credits/>
    </section>
      <section id='contact'>
      <Contact/>
      </section>
    </>
  )
}
