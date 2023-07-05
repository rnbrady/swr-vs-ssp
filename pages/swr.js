import useSWR from 'swr'
 
export default function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', (url) =>
  fetch(url).then((r) => r.json()),)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}