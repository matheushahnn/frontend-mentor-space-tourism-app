import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Page from '../../components/Page'
import { IDestination, getDestinations } from '../../lib/destinations'

export default function Destination({ id }: { id: string }) {
  const [destinationId, setDestinationId] = useState(id)

  const destinationList = getDestinations()
  const destination = destinationList[Number(destinationId)]

  return (
    <Page
      title="Pick your destination"
      number={1}
      backgroundImages="bg-[url('../public/images/destination/background-destination-mobile.jpg')] 
    sm:bg-[url('../public/images/destination/background-destination-tablet.jpg')] 
    lg:bg-[url('../public/images/destination/background-destination-desktop.jpg')]`}"
    >
      <div className="mt-8 flex justify-center items-center flex-wrap px-6 sm:mt-16 lg:px-0">
        <div className="flex justify-center flex-1 sm:flex-[1_0_500px] lg:flex-[1_0_450px]">
          <div className="w-96 h-40 relative sm:h-[450px] lg:h-[445px] lg:w-[445px]">
            {destinationList.map((value: IDestination) => (
              <Image
                priority
                className={`${
                  value.name.toLowerCase() ===
                  destinationList[
                    Number(destinationId)
                  ].name.toLocaleLowerCase()
                    ? 'translate-x-0'
                    : 'translate-x-96 lg:translate-x-[1000px]'
                } transition-[transform] duration-[1200ms] ease-move-planet`}
                src={value?.images.png || ''}
                alt="Image of"
                layout="fill"
                objectFit="contain"
                key={value.name}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center sm:flex-[1_0_500px] lg:items-start lg:flex-[1_0_200px]">
          <ul className="mt-5 flex space-x-6 sm:mt-14 lg:mt-0">
            {destinationList.map((value: IDestination, index) => (
              <li
                className={`cursor-pointer font-barlow uppercase text-lg tracking-widest relative pb-2 
                    after:content-[""] after:absolute after:w-full after:h-1 after:top-full after:left-0 after:bg-white
                    after:transition-opacity after:duration-500 ${
                      value.name.toLowerCase() ===
                      destinationList[
                        Number(destinationId)
                      ].name.toLocaleLowerCase()
                        ? 'text-white after:opacity-100'
                        : 'text-secondary-text-color after:opacity-0 hover:after:opacity-50'
                    }`}
                key={value.name}
                onClick={() => setDestinationId(String(index))}
              >
                <Link href={`/destinations/${index}`} shallow>
                  {value.name}
                </Link>
              </li>
            ))}
          </ul>
          <span className="mt-4 font-bellefair text-white text-[56px] uppercase lg:text-[100px]">
            {destination?.name}
          </span>
          <span className="mt-2  font-barlow text-secondary-text-color text-sm leading-6 text-center sm:text-lg lg:text-left">
            {destination?.description}
          </span>
          <hr className="text-thirdy-text-color w-full mt-9" />
          <div className="flex flex-col sm:flex-row sm:flex-wrap mt-8 w-full">
            <div className="flex flex-col items-center  flex-1 sm:flex-[1_0_200px] lg:items-start lg:flex-[1_0_0]">
              <span className="text-secondary-text-color uppercase text-sm font-barlow tracking-widest">
                AVG. Distance
              </span>
              <span className="text-white uppercase text-2xl font-bellefair mt-3">
                {destination?.distance}
              </span>
            </div>
            <div className="flex flex-col items-center flex-1 sm:flex-[1_0_200px] mt-9 sm:mt-0 lg:items-start lg:flex-[1_0_0]">
              <span className="text-secondary-text-color uppercase text-sm font-barlow tracking-widest">
                Est. travel time
              </span>
              <span className="text-white uppercase text-2xl font-bellefair mt-3">
                {destination?.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export async function getStaticPaths() {
  const destinationList = getDestinations()

  return {
    paths: destinationList.map((destination, index) => ({
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
  params: { id: string }
}) {
  return {
    props: {
      id,
    },
  }
}
