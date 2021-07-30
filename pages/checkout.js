import { connectToDatabase } from "./../utils/db";
import { ObjectId } from "mongodb";

export default function Checkout() {
  return <></>;
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  if (id) {
    try {
      const { db } = await connectToDatabase();
      await db
        .collection("jobs")
        .updateMany({ _id: ObjectId(id) }, [{ $set: { paid: true } }]);
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
