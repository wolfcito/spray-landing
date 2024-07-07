import Image from 'next/image'
import { supportedChains } from '~/app/const'

export function Allies() {
  return (
    <div className="my-8 flex w-screen flex-col items-center justify-center bg-gradient-to-tr from-black via-zinc-600/20 to-black">
      <div className="animate-fade-in flex flex-col text-center">
        <div className="md:via-mode/5 my-8 flex flex-col items-center justify-center gap-32 p-4 md:w-screen md:max-w-screen-md md:flex-row md:bg-gradient-to-r md:from-transparent md:to-transparent">
          {supportedChains.map((chain) => (
            <div
              className="flex flex-col items-center justify-center gap-2"
              key={chain.name}
            >
              <Image src={chain.url} alt={chain.alt} width={52} height={52} />
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-in mt-36 flex flex-col text-center">
        <div className="flex">
          <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-[#dffe00] bg-clip-text pb-4 font-display text-4xl text-transparent duration-100 sm:text-6xl">
            Powerful Alliance
          </h1>
        </div>
      </div>

      <div className="animate-fade-in my-8 mb-20 flex w-screen max-w-screen-sm flex-col items-center gap-4 text-center lg:flex-row">
        <div className="flex flex-col">
          <Image
            src={
              'https://res.cloudinary.com/guffenix/image/upload/v1720321428/modespray/mochadxyz.gif'
            }
            alt="icon of Mode Spray"
            width={350}
            height={350}
          />
          <h2 className="mt-4 text-xl text-gray-600">ModeChad</h2>
        </div>
        <p className="mt-4 flex flex-1 text-balance p-4 text-left text-xl text-gray-300">
          ModeChad & ModeSpray joined forces to enhance Mode&apos;s community
          and meme culture. $MOCHAD rewards active members, while ModeSpray
          ensures quick, efficient token distribution, highlighting it as the
          top multi-sender on Mode.
        </p>
      </div>
    </div>
  )
}
