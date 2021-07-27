import nc from "next-connect";
import formidable from "formidable-serverless";

const handler = nc({ attachParams: true });
async function getJobs(req, res) {
  try {
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
async function createJob(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = process.cwd();
  form.keepExtensions = true;
  form.encoding = "binary";

  form.addListener("file", function (name, file) {
    // do something with uploaded file
  });

  form.addListener("end", function () {
    res.end();
  });

  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log(err);
    }
  });
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
