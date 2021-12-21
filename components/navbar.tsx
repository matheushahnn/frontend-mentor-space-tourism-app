import { NextComponentType, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'
import styles from './layout.module.css'
import hamburgerIcon from '../public/hamburger.svg'
import menuIcon from '../public/menuIcon.svg'
import closeIcon from '../public/images/shared/icon-close.svg'

import MenuItem from '../elements/MenuItem'
import { route } from 'next/dist/server/router'

const menuItemList = [
  { name: 'home', number: '00', description: 'Home' },
  { name: 'destinations', number: '01', description: 'Destination' },
  { name: 'crew', number: '02', description: 'Crew' },
  { name: 'technology', number: '03', description: 'Technology' },
]

export default function Navbar() {
  const router = useRouter()
  const activeRoute = (href: string) =>
    router.asPath === href || router.asPath.split('/').includes(href)

  const [active, setActive] = useState(false)

  return (
    <nav className="flex justify-between w-full px-5 py-6 items-center relative sm:p-0 sm:pl-6">
      <div>
        <Image src={menuIcon} alt="Space Tourism Icon" height={40} width={40} />
      </div>
      <div
        className={`${active ? 'hidden' : ''} sm:hidden`}
        onClick={() => setActive(true)}
      >
        <Image src={hamburgerIcon} alt="Menu Icon" height={21} width={24} />
      </div>
      <div className="hidden left-12 flex-[1_0_0] relative lg:block">
        <hr className="w-11/12 z-10 text-white absolute top-1/2 -right-2 opacity-25" />
      </div>
      <div className="hidden sm:block p-10 bg-white bg-opacity-[0.04] backdrop-blur-[82px] relative lg:pl-32 lg:flex-[1_0_0]">
        <ul className="space-x-8 flex w-full">
          {menuItemList.map((item, index) => {
            if (index === 0)
              return <MenuItem key={item.name} active={activeRoute('/')} />
            return (
              <MenuItem
                key={item.name}
                number={item.number}
                route={`${item.name}/0`}
                description={item.description}
                active={activeRoute(item.name)}
              />
            )
          })}
        </ul>
      </div>
      <div
        className={`${
          active ? 'translate-x-0' : 'translate-x-96'
        } z-10 bg-white bg-opacity-[0.01] backdrop-blur-[20px] h-screen w-72 
        fixed right-0 top-0 transition-[transform] duration-[500ms] ease-linear`}
      >
        <div
          className="text-3xl text-secondary-text-color p-6 text-right"
          onClick={() => setActive(false)}
        >
          <Image src={closeIcon} alt="Close menu button" />
        </div>
        <div className="mt-10 flex flex-col space-y-9 ">
          <Link href="/">
            <div className="px-6 flex space-x-5 cursor-pointer">
              <span className="font-barlow uppercase text-2xl text-white font-bold tracking-widest">
                00
              </span>
              <span className="font-barlow uppercase text-2xl text-white tracking-widest">
                Home
              </span>
            </div>
          </Link>
          <Link href="/destinations/0">
            <div className="px-6 flex space-x-5 cursor-pointer">
              <span className="font-barlow uppercase text-2xl text-white font-bold tracking-widest">
                01
              </span>
              <span className="font-barlow uppercase text-2xl text-white tracking-widest">
                Destination
              </span>
            </div>
          </Link>
          <Link href="/crew/0">
            <div className="px-6 flex space-x-5 cursor-pointer">
              <span className="font-barlow uppercase text-2xl text-white font-bold tracking-widest">
                02
              </span>
              <span className="font-barlow uppercase text-2xl text-white tracking-widest">
                Crew
              </span>
            </div>
          </Link>
          <Link href="/technology/0">
            <div className="px-6 flex space-x-5 cursor-pointer">
              <span className="font-barlow uppercase text-2xl text-white font-bold tracking-widest">
                03
              </span>
              <span className="font-barlow uppercase text-2xl text-white tracking-widest">
                Technology
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
