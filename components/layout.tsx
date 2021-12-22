import { NextComponentType, NextPageContext } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import styles from './layout.module.css'

export default function Layout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="lg:pt-10 lg:pl-14">{children}</main>
    </>
  )
}
