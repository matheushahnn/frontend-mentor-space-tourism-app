import { NextComponentType, NextPageContext } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import styles from './layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className="lg:pt-10 lg:pl-14">{children}</main>
    </>
  )
}
