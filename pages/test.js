import Link from 'next/link';
import { NavLink } from '../src/StyledComponents';

function TestPage({ data }) {
  console.log(data);
  return (
    <Link href='/' passHref>
      <NavLink>Go back home.</NavLink>
    </Link>
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
