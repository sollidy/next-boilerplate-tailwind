import { FC, ReactNode } from 'react'

import { Layout } from '@/components/layout/Layout'

import { HeadProvider } from './HeadProvider/HeadProvider'

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HeadProvider>
      <Layout>{children}</Layout>
    </HeadProvider>
  )
}
