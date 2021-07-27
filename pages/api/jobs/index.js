import nc from "next-connect";

const handler = nc({ attachParams: true });
async function getJobs(req, res) {
  try {
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
async function createJob(req, res) {
  try {
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
handler.get(getJobs).post(createJob);

export default handler;
