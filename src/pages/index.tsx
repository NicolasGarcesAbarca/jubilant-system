import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return <main className="bg-white">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:p-8">
        <div className="flex lg:flex-1">
          <a href="/">
            <span className="sr-only">Graphs</span>
            <Image src="/rect111.svg" width={35} height={35} alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/line" className="text-sm font-semibold leading-6 text-gray-900">one line</Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph2</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph1</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph1</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">log in</a>
        </div>
      </nav>
    </header>
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10  blur-3xl transform-gpu overflow-hidden sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#00ff95] to-[#ff008c] opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(0% 58%, 4% 36%, 13% 28%, 21% 28%, 33% 41%, 41% 53%, 54% 51%, 63% 42%, 71% 32%, 83% 33%, 87% 48%, 90% 70%, 81% 86%, 75% 62%, 66% 56%, 57% 64%, 45% 63%, 38% 63%, 27% 51%, 17% 41%, 12% 68%, 4% 72%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-10 md:py-40 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900">Check the graphs of chart js and d3</h1>
        <p className="mt-6 text-gray-600 leading-8">Charts generated using chartjs react-charts-2 and d3 packages. The data was obtained from the chilean government free data</p>
      </div>
    </div>

  </main>
}