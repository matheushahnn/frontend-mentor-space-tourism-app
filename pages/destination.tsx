import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { IDestination, getDestinations } from '../lib/destinations'
import Moon from '../../public/images/destination/image-moon.png'
import { useState } from 'react'

export default function Destination() {
  const [destinationName, setDestinationName] = useState('Moon')

  const destinationList = getDestinations()
  const destination = destinationList.find(
    (value: IDestination) => value.name === destinationName
  )

  return (
    <div
      className={`pb-20 min-h-screen bg-[url('../public/images/destination/background-destination-mobile.jpg')] sm:bg-[url('../public/images/destination/background-destination-tablet.jpg')] lg:bg-[url('../public/images/destination/background-destination-desktop.jpg')] bg-center bg-cover`}
    >
      <Layout>
        <Navbar />
        <div className="flex justify-center">
          <span className="opacity-25 font-bold font-barlow text-white text-lg">
            01
          </span>
          <h1 className="ml-4 font-barlow text-white uppercase text-lg tracking-widest">
            Pick your destination
          </h1>
        </div>
        <div className="mt-8 flex flex-col items-center px-6">
          <div className="flex">
            <div className="w-96 h-40 relative">
              {destinationList.map((value: IDestination) => (
                <Image
                  className={`${
                    value.name === destinationName
                      ? 'translate-x-0'
                      : 'translate-x-96'
                  } animate-move-destination transition-[transform] duration-[1500ms]`}
                  src={value?.images.png || ''}
                  alt="Image of"
                  layout="fill"
                  objectFit="contain"
                  key={value.name}
                />
              ))}
            </div>
          </div>
          <ul className="mt-5 flex space-x-6">
            {destinationList.map((value: IDestination) => (
              <li
                className={`cursor-pointer font-barlow uppercase text-lg tracking-widest relative pb-2 ${
                  value.name === destinationName
                    ? 'text-white after:content-[""] after:absolute after:w-full after:h-1 after:bg-white after:top-full after:left-0'
                    : 'text-secondary-text-color'
                }`}
                key={value.name}
                onClick={() => {
                  setDestinationName(value.name)
                }}
              >
                {value.name}
              </li>
            ))}
          </ul>
          <span className="mt-4 font-bellefair text-white text-[56px] uppercase">
            {destination?.name}
          </span>
          <span className="mt-2 font-barlow text-secondary-text-color text-sm leading-6 text-center">
            {destination?.description}
          </span>
          <hr className="text-thirdy-text-color w-full mt-9" />
          <div className="flex flex-col items-center mt-8">
            <span className="text-secondary-text-color uppercase text-sm font-barlow tracking-widest">
              AVG. Distance
            </span>
            <span className="text-white uppercase text-2xl font-bellefair mt-3">
              {destination?.distance}
            </span>
          </div>
          <div className="flex flex-col items-center mt-9">
            <span className="text-secondary-text-color uppercase text-sm font-barlow tracking-widest">
              Est. travel time
            </span>
            <span className="text-white uppercase text-2xl font-bellefair mt-3">
              {destination?.travel}
            </span>
          </div>
        </div>
      </Layout>
    </div>
  )
}
