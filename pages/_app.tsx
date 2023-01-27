import '@assets/globals.css'

import { FC, ReactNode } from 'react'
import type { AppProps } from 'next/app'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
