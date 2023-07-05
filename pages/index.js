import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <h1 className="font-bold">Homepage</h1>
        <p>This page link to two pages with next/link:</p>

          <li>
            <Link href="/swr">SWR</Link>
          </li>
          <li>
            <Link href="/ssp">SSP</Link>
          </li>

      </div>
    </main>
  )
}
