import Head from 'next/head'
import { FC, ReactNode } from 'react'

import { bgColor } from '@/config/constants'

export const HeadProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* <Favicons /> */}

        <meta name="theme-color" content={bgColor} />
        <meta name="msapplication-navbutton-color" content={bgColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={bgColor} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {children}
    </>
  )
}
