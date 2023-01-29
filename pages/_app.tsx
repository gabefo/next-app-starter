import '@assets/globals.css'

import { FC, ReactNode } from 'react'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <style jsx global>{`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
