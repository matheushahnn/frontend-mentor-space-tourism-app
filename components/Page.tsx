import { ReactNode } from 'react'
import Title from '../elements/Title'
import Layout from './layout'
import Navbar from './navbar'

export default function Page({
  title = '',
  subTitle = '',
  backgroundImages = '',
  number = 1,
  children,
}: {
  children: ReactNode
  backgroundImages: string
  number: number
  title: string
  subTitle: string
}) {
  return (
    <div
      className={`min-h-screen bg-center bg-cover bg-zinc-800 ${backgroundImages}`}
    >
      <Layout title={title}>
        <Navbar />
        <div className="lg:max-w-7xl lg:mx-auto">
          <Title title={subTitle} number={number} />
          {children}
        </div>
      </Layout>
    </div>
  )
}
