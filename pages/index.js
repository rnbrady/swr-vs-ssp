import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <h1 className="font-bold">Homepage</h1>
        <p className='pb-4'>This page links to two pages with next/link, both will show the name of the user after 3 seconds:</p>

          <li>
            <Link href="/swr"><span className='underline'>SWR page</span> (performs a request to /api/user which returns the name of the user after 3 seconds)</Link>
          </li>
          <li>
            <Link href="/ssp"><span className='underline'>SSP page</span> (has getServerSideProps function which returns the name of the user after 3 seconds)</Link>
          </li>

        <p className='pt-4'>Try them out to compare loading states behaviour. Visit easch one twice to compare caching behaviour.</p>
      </div>
    </main>
  )
}
