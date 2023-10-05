import Image from 'next/image'

import Hero from './components/hero'
import ContactUs from './components/contactUs'
import Faq from './components/faq'


export default function Home() {
  return (
    <>
      <Hero/>
      <Faq/>
      <ContactUs/>
    </>    
  )
}
