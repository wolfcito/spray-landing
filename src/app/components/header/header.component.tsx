import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import sprayIcon from '~/public/favicon.png'

export function Header() {
  return (
    <div
      className={clsx(
        'sticky top-0 z-20 flex h-16 items-center justify-between bg-black/75 px-4'
      )}
    >
      <div className="ml-4 mr-6 items-center gap-2">
        <Link href="/" passHref>
          <div className="group flex items-center">
            <Image
              src={sprayIcon}
              alt="icon of Mode Spray"
              width={28}
              height={28}
            />
            <span className="font-chakra ml-2 text-3xl font-bold leading-tight text-white">
              SPRAY
            </span>
            <div className="hidden items-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100 md:flex">
              <div
                aria-label="divider"
                className="mx-2 h-px w-6 bg-neutral-700"
              ></div>
              <span className="text-neutral font-mono text-sm text-gray-400">
                spray ether or tokens to multiple addresses
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="bg-mode mx-2 my-16 flex text-center text-sm">
        <Link
          href="https://app.modespray.xyz"
          passHref
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-chakra bg-mode mt-2 rounded-sm p-4 leading-tight text-black">
            Launch
          </span>
        </Link>
      </div>
    </div>
  )
}
