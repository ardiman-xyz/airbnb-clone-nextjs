import { Nunito } from 'next/font/google'

import './globals.css'

import Navbar from './components/navbar/navbar'
import RegisterModal from './components/modal/registerModal'
import ToasterProvider from './providers/toasterProvider'
import LoginModal from './components/modal/loginModal'

import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({ children }: {children: React.ReactNode }) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
