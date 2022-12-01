import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'

import { Heading } from '../ui/heading/Heading'

export const Home: FC = () => {
  return (
    <>
      <Meta title="Home" description="Home page">
        <Heading title="Home" />
      </Meta>
    </>
  )
}
