import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import HomeLayout from "../components/Home/Home";
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />

      <HomeLayout data={props.data.news} />
    </div>
  );
}
export async function getServerSideProps(context) {
  // to generate page from server
  const res = await fetch(`http://80.240.21.204:1337/news?skip=0&limit=5`);
  const data = await res.json();

  return { props: { data } };
}
