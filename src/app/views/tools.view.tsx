import Image from 'next/image'
import Link from 'next/link'
import { blockchainTools } from '~/app/const'

export function Tools() {
  return (
    <div className="mx-2 flex w-screen flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-fade-in mt-36 flex flex-col text-center">
        <div className="flex">
          <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-[#dffe00] bg-clip-text pb-4 font-display text-4xl text-transparent duration-100 sm:text-6xl">
            Blockchain Tools
          </h1>
        </div>
      </div>

      <div className="animate-fade-in my-8 flex w-screen max-w-screen-lg flex-col items-center justify-center gap-4 pb-10 text-center md:flex-row">
        {blockchainTools.map((tool) => (
          <Link
            key={tool.handle}
            className="border-mode/30 items-center justify-center rounded-sm border-[0.5px] p-4"
            href={tool.url}
            target="_blank"
          >
            <Image
              src={tool.image}
              alt="icon of Mode Spray"
              width={350}
              height={350}
              className="h-auto w-full md:h-40 md:w-auto"
            />
            <h2 className="mt-4 text-xl text-gray-600">{tool.handle}</h2>
            <p className="mt-4 flex text-base text-gray-300">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
