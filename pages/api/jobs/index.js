import nc from "next-connect";
import { connectToDatabase } from "./../../../utils/db";
import stripeInit from "stripe";
const stripe = stripeInit(process.env.PRIVATE_STRIPE);

const handler = nc({ attachParams: true });

async function getJobs(req, res) {
  const { page, terms } = req.query;

  const aggregate = [
    {
      $match: {
        $and: [
          { company: { $gt: "" } },
          { description: { $gt: "" } },
          { position: { $gt: "" } },
          { min: { $exists: true } },
          { paid: { $exists: true } },
        ],
      },
    },
    {
      $sort: {
        date: -1,
      },
    },
    {
      $limit: 20,
    },
    {
      $skip: Number(page || 0) * 20,
    },
  ];

  if (terms) {
    aggregate.unshift({
      $search: {
        text: {
          path: ["company", "position", "primaryTag", "otherTags", "location"],
          query: terms,
          fuzzy: {
            maxEdits: 2,
            prefixLength: 3,
          },
        },
      },
    });
  }

  try {
    const { db } = await connectToDatabase();
    const docs = await db.collection("jobs").aggregate(aggregate).toArray();

    res.send({ success: true, docs });
  } catch (error) {
    console.log(error);
    res.status(400).send({ success: false, error: error.message });
  }
}
async function createJob(req, res) {
  const {
    company,
    position,
    primaryTag,
    otherTags,
    location,
    min,
    max,
    description,
    apply,
    applyUrl,
    color,
  } = req.body;
  var date = new Date();
  date.setDate(date.getDate() + 30);
  date.setUTCHours(0, 0, 0, 0);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  try {
    const { db } = await connectToDatabase();
    const tempDoc = await db.collection("jobs").insertOne({
      company,
      position,
      primaryTag,
      otherTags: otherTags.split(","),
      location,
      min: Number(min),
      max: Number(max),
      description,
      apply,
      applyUrl,
      color,
      expiration: date.getTime(),
      date: today.getTime(),
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${position} @ ${company} @${location}`,
              images: [
                `https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80`,
              ],
            },
            unit_amount: 59700,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: process.env.STRIPE_URL + "?id=" + tempDoc.insertedId,
      cancel_url: process.env.STRIPE_URL,
    });
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(400).send({ success: false, error: error.message });
  }
}

handler.get(getJobs).post(createJob);

export default handler;
