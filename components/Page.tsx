import { ReactNode } from 'react'
import Title from '../elements/Title'
import Layout from './layout'
import Navbar from './navbar'

export default function Page({
  title = '',
  backgroundImages = '',
  number = 1,
  children,
}: {
  children: ReactNode
  backgroundImages: string
  number: number
  title: string
}) {
  return (
    <div
      className={`min-h-screen bg-center bg-cover bg-zinc-800 ${backgroundImages}`}
    >
      <Layout>
        <Navbar />
        <div className="lg:max-w-7xl lg:mx-auto">
          <Title title={title} number={number} />
          {children}
        </div>
      </Layout>
    </div>
  )
}
