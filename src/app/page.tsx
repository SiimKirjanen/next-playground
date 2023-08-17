import Image from 'next/image'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Playground App',
  description: 'This is a Next playground app',
}

export default function Home() {
  return (
    <main className="flex flex-col">
      Homepage
    </main>
  )
}
