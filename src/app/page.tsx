import Link from 'next/link'
import React from 'react'
import { Particles } from '~/app/components'
import sprayIcon from '../../public/favicon.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <Image
          src={sprayIcon}
          alt="icon of Mode Spray"
          width={96}
          height={96}
        />
      </div>
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-[#dffe00]/0 via-[#dffe00]/50 to-[#dffe00]/0 md:block" />
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <div className="flex">
        <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-white bg-clip-text pb-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Mode
        </h1>
        <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-[#dffe00] bg-clip-text pb-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Spray
        </h1>
      </div>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-[#dffe00]/0 via-[#dffe00]/50 to-[#dffe00]/0 md:block" />
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <h2 className="text-sm text-zinc-500">
          Send Tokens to Multiple Addresses in One Click
        </h2>
      </div>
      <div className="animate-fade-in my-16 flex flex-col text-center">
        <Link
          href="https://app.modespray.xyz"
          passHref
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-chakra text-neutral-content mt-2 rounded-sm bg-[#dffe00] p-4 leading-tight">
            Launh App
          </span>
        </Link>
      </div>
    </div>
  )
}
