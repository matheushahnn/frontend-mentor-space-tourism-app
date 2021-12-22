import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div
      className={`pb-20 min-h-screen bg-[url('../public/images/home/background-home-mobile.jpg')] sm:bg-[url('../public/images/home/background-home-tablet.jpg')] lg:bg-[url('../public/images/home/background-home-desktop.jpg')] bg-center bg-cover`}
    >
      <Layout title="Home">
        <Navbar />
        <div className="mt-8 flex flex-col items-center px-6 sm:px-40 sm:mx-auto sm:mt-24 lg:flex-row lg:mt-30 lg:px-0 lg:items-end lg:max-w-7xl lg:mx-auto">
          <div className="flex flex-col items-center lg:items-start flex-1 lg:max-w-md">
            <h1 className="font-barlow text-secondary-text-color uppercase text-lg sm:text-xl lg:text-3xl flex-1">
              So, you want to travel to
            </h1>
            <span className="mt-4 font-bellefair text-white text-[80px] uppercase sm:text-[9.25rem] sm:mt-2">
              SPACE
            </span>
            <span className="mt-8 font-barlow text-secondary-text-color text-sm leading-6 text-center sm:text-base sm:mt-0 lg:text-lg lg:text-left">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </div>
          <div className="flex flex-1 justify-end lg:pr-20">
            <Link href="/destinations/0">
              <a
                className="mt-20 rounded-full bg-white w-40 h-40 flex items-center justify-center relative
                hover:after:content-[''] hover:after:animate-ping-once hover:after:bg-white hover:after:h-full hover:after:w-full 
                after:rounded-full hover:after:absolute
                sm:w-60 sm:h-60 lg:mt-0"
              >
                <span className="uppercase font-bellefair text-black text-xl sm:text-3xl">
                  Explore
                </span>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
