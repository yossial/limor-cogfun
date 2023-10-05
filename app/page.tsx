import Image from 'next/image'

import Hero from './components/hero'
import ContactUs from './components/contactUs'
import Faq from './components/faq'
import Testimonials from './components/testimonials'


export default function Home() {
  return (
    <>
      <Hero/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
    </>    
  )
}
