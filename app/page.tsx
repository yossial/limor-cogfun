import Image from 'next/image'

import Hero from './components/hero'
import ContactUs from './components/contactUs'
import Faq from './components/faq'
import Testimonials from './components/testimonials'
import Features from './components/features'


export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
    </>    
  )
}
