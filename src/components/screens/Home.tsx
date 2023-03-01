import { FC } from 'react'

import { Heading } from '@ui/heading/Heading'

import { Meta } from '@utils'

export const Home: FC = () => {
  return (
    <Meta title="Home" description="Home page">
      <Heading title="Home" />
    </Meta>
  )
}
