import { FC } from 'react'

import { Heading } from '@ui/heading/Heading'

import { Meta } from '@utils/meta/Meta'

export const Home: FC = () => {
  return (
    <Meta title="Home" description="Home page">
      <Heading title="Home" />
    </Meta>
  )
}
