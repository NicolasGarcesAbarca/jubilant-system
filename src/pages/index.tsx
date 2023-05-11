import Image from "next/image"
export default function Home() {
  return <main className="bg-white">
    <header className="">
      <nav className="flex items-center justify-between p-6">
        <div className="flex lg:flex-1">
          <a href="/">
            <span className="sr-only">Graphs</span>
            <Image src="/rect111.svg" width={35} height={35} alt="logo" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph1</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph2</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph1</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">graph1</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">log in</a>
        </div>
      </nav>
    </header>
    <div className="relative isolate">
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