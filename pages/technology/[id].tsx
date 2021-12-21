import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import Page from '../../components/Page'
import Title from '../../elements/Title'
import { ITechnology, getTechnology } from '../../lib/technology'

export default function Technology({ id }: { id: any }) {
  const [TechnologyId, setTechnology] = useState(id)

  const technologyList = getTechnology()
  const technology = technologyList[TechnologyId]

  return (
    <Page
      title="Space launch 101"
      number={3}
      backgroundImages="bg-[url('../public/images/technology/background-technology-mobile.jpg')] 
      sm:bg-[url('../public/images/technology/background-technology-tablet.jpg')] 
      lg:bg-[url('../public/images/technology/background-technology-desktop.jpg')]`}"
    >
      <div className="mt-8 flex flex-col items-center lg:items-start lg:mx-auto lg:flex-row lg:justify-between">
        <div className="flex w-full lg:hidden">
          <div className="w-full h-[170px] sm:h-80 relative">
            {technologyList.map((value: ITechnology) => (
              <Image
                priority
                className={`${
                  value.name.toLowerCase() ===
                  technologyList[TechnologyId].name.toLowerCase()
                    ? 'translate-x-0'
                    : 'translate-x-[2000px]'
                } transition-[transform] duration-[1200ms]`}
                src={value?.images.landscape || ''}
                alt="Image of"
                layout="fill"
                objectFit="cover"
                key={value.name}
              />
            ))}
          </div>
        </div>
        <ul className="mt-9 flex space-x-6 lg:flex-col lg:space-x-0 lg:space-y-9">
          {technologyList.map((value: ITechnology, index) => (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={`/technology/${index}`} shallow key={value.name}>
              <li
                className={`cursor-pointer bg-white rounded-full w-10 h-10 relative flex items-center justify-center transition-opacity duration-500 lg:w-20 lg:h-20 lg:text-3xl ${
                  value.name.toLowerCase() ===
                  technologyList[TechnologyId].name.toLowerCase()
                    ? ''
                    : 'opacity-20 hover:opacity-50'
                }`}
                key={value.name}
                onClick={() => setTechnology(index)}
              >
                <span className="absolute">{Number(index) + 1}</span>
              </li>
            </Link>
          ))}
        </ul>
        <div className="mt-9 px-6 flex flex-col items-center sm:max-w-lg lg:items-start lg:px-0">
          <span className="font-bellefair text-white text-lg uppercase opacity-50 tracking-widest lg:text-base">
            The therminology ...
          </span>
          <span className="mt-4 font-bellefair text-white text-2xl uppercase lg:text-6xl">
            {technology?.name}
          </span>
          <span className="mt-2 font-barlow text-secondary-text-color text-sm leading-6 text-center lg:text-left lg:text-lg lg:leading-8">
            {technology?.description}
          </span>
        </div>
        <div className="flex-1 hidden lg:flex justify-end lg:max-w-lg">
          <div className="max-w-[515px] w-full h-[500px] relative">
            {technologyList.map((value: ITechnology) => (
              <Image
                priority
                className={`${
                  value.name.toLowerCase() ===
                  technologyList[TechnologyId].name.toLowerCase()
                    ? 'translate-x-0'
                    : 'translate-x-[2000px]'
                } transition-[transform] duration-[1200ms]`}
                src={value?.images.portrait || ''}
                alt="Image of"
                layout="fill"
                objectFit="cover"
                key={value.name}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}

export async function getStaticPaths() {
  const technologyList = getTechnology()

  return {
    paths: technologyList.map((technology, index) => ({
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
