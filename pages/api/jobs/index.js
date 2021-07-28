import nc from "next-connect";

const handler = nc({ attachParams: true });

async function getJobs(req, res) {
  try {
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
async function createJob(req, res) {
  console.log(req.body);
  res.send({ success: true, message: "this works son" });
  try {
  } catch (error) {
    console.log(error);
    res.status(400).send({ success: false, error: error.message });
  }
}

handler.get(getJobs).post(upload.single("logo"), createJob);

export default handler;
