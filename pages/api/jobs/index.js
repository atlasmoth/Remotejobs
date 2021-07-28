import nc from "next-connect";
import path from "path";

const handler = nc({ attachParams: true });
async function getJobs(req, res) {
  try {
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
async function createJob(req, res) {
  res.send({ success: true, message: "this works son" });
  try {
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
handler.get(getJobs).post(createJob);
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
