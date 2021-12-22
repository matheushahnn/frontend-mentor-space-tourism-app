import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import Page from '../../components/Page'
import Title from '../../elements/Title'
import { ICrew, getCrew } from '../../lib/crew'

export default function Crew({ id }: { id: any }) {
  const [crewId, setCrewId] = useState(id)

  const crewList = getCrew()
  const crew = crewList[crewId]

  return (
    <Page
      title="Meet your crew"
      number={2}
      backgroundImages="bg-[url('../public/images/crew/background-crew-mobile.jpg')] 
    sm:bg-[url('../public/images/crew/background-crew-tablet.jpg')] 
    lg:bg-[url('../public/images/crew/background-crew-desktop.jpg')]`}"
    >
      <div
        className="mt-8 flex flex-col items-center px-6 
          sm:flex-col-reverse sm:h-full 
          lg:flex-row-reverse lg:items-start lg:mx-auto lg:px-0 lg:justify-between
          "
      >
        <div className="flex sm:justify-end lg:flex-start lg:flex-1 lg:pr-10">
          <div
            className="w-[327px] h-[233px] relative sm:w-[456px] sm:h-[572px] 
          lg:max-h-[712px] lg:max-w-[568px] lg:row-end-2 lg:ml-10 lg:-mt-16"
          >
            {crewList.map((value: ICrew) => (
              <Image
                priority
                className={`${
                  value.name.toLowerCase() ===
                  crewList[crewId].name.toLowerCase()
                    ? 'translate-x-0'
                    : 'translate-x-96 sm:translate-x-[1000px]'
                } transition-[transform] duration-[1200ms] ease-move-planet sm:translate-y-20 absolute lg:-translate-y-0 lg:ease-linear lg:top-[40%]`}
                src={value?.images.webp || ''}
                alt="Image of"
                layout="fill"
                objectFit="contain"
                key={value.name}
              />
            ))}
          </div>
        </div>
        <hr className="text-thirdy-text-color w-full sm:hidden" />
        <div className="flex flex-col items-center sm:flex-col-reverse lg:items-start lg:mt-16 flex-1">
          <div className="mt-9 flex space-x-6 sm:mt-10">
            {crewList.map((value: ICrew, index) => (
              <Link href={`/crew/${index}`} shallow key={value.name}>
                <a
                  className={`cursor-pointer bg-white rounded-full w-3 h-3 pb-2 transition-opacity duration-500 ${
                    value.name.toLowerCase() ===
                    crewList[crewId].name.toLowerCase()
                      ? ''
                      : 'opacity-20 hover:opacity-50'
                  }`}
                  key={value.name}
                  onClick={() => setCrewId(index)}
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center sm:max-w-7xl lg:items-start lg:max-w-md lg:flex-1">
            <span className="mt-9 font-bellefair text-white text-lg uppercase opacity-50 tracking-widest sm:text-2xl lg:text-3xl">
              {crew?.role}
            </span>
            <span className="mt-4 font-bellefair text-white text-2xl uppercase sm:text-4xl lg:text-5xl">
              {crew?.name}
            </span>
            <span className="mt-2 font-barlow text-secondary-text-color text-sm leading-6 text-center sm:text-base sm:mt-4 lg:text-left lg:text-lg lg:min-h-[10.5rem] lg:max-w-md">
              {crew?.bio}
            </span>
          </div>
        </div>
      </div>
    </Page>
  )
}

export async function getStaticPaths() {
  const crewList = getCrew()

  return {
    paths: crewList.map((crew, index) => ({
      params: {
        id: String(index),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: any }
}) {
  return {
    props: {
      id,
    },
  }
}
