import Link from 'next/link';

function TestPage({ data }) {
  console.log(data);
  return (
    <>
      <Link href='/'>Go back home.</Link>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default TestPage;
