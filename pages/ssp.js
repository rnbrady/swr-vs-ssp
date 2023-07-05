import useSWR from 'swr'
 
export default function Profile({ data, error }) {
 
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>Hello {data.name}!</div>
}

export async function getServerSideProps() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return { props: { data: {name: "John Doe"} } }
}
