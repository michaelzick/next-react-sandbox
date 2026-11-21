import { NavLink } from '../src/StyledComponents';
import { hello } from '../src/hello';

function TestPage({ data }) {
  console.log(data);
  return <NavLink href='/'>Go back home.</NavLink>;
}

export function getServerSideProps() {
  return { props: { data: hello } };
}

export default TestPage;
