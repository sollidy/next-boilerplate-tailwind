import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

import { siteName } from '@config/constants'
import { mergeTitle } from '@config/seo.config'

import { onlyText } from '../text/clearText'

import { ISeo } from './meta.interface'

export const Meta: FC<ISeo & { children: ReactNode }> = ({
  title,
  description,
  children,
  image,
}) => {
  const { asPath } = useRouter()
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`

  return (
    <>
      <Head>
        <title itemProp="headline">{mergeTitle(title)}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={onlyText(description, 152)}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={mergeTitle(title)} />
            <meta property="og:url" content={currentUrl} />
            {/* <meta property="og:image" content={image || logoImage} /> */}
            <meta property="og:site_name" content={siteName} />
            <meta
              property="og:description"
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  )
}
