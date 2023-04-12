import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/navbar'
import RegisterModal from './components/modal/registerModal'
import ToasterProvider from './providers/toasterProvider'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
