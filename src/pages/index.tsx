import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { AboutUs } from '../components/AboutUs'
import { NewRegisterModal } from '../components/NewRegisterModal'
import { OurServices } from '../components/OurServices'
import { Slide } from '../components/Slide'
import Modal from 'react-modal'
import { useModal } from '../hooks/useModal'
import { ContactUs } from '../components/ContactUs'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#__next')


const Home: NextPage = () => {
  const { isOpen, setIsOpen } = useModal()

  const onRequestClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Head>
        <title>Home | Plexidata</title>
      </Head>

      <main>
        <NewRegisterModal
          isOpen={isOpen}
          onRequestClose={onRequestClose} />
        <Slide/>
        <AboutUs/>
        <OurServices />
        <ContactUs />
        <ToastContainer />
      </main>
    </>
  )
}

export default Home
