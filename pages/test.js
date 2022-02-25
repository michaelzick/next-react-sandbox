function Page({ data }) {
  console.log(data);
  return (
    <>
      <h1>This is the test page.</h1>
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

export default Page;
