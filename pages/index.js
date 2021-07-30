import HomeComponent from "../components/home";
import { connectToDatabase } from "./../utils/db";
export default function Home({ docs }) {
  return <HomeComponent docs={docs} />;
}

export async function getServerSideProps(ctx) {
  let docs = [];
  const aggregate = [
    { $match: { company: { $exists: true } } },
    {
      $limit: 20,
    },
  ];
  try {
    const { db } = await connectToDatabase();
    docs = JSON.parse(
      JSON.stringify(await db.collection("jobs").aggregate(aggregate).toArray())
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      docs,
    },
  };
}
