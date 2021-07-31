import Md from "./md";
import { loadStripe } from "@stripe/stripe-js";

const options = [
  {
    text: "Select a primary tag",
    value: "",
  },
  {
    text: "Software Development",
    value: "dev",
  },
  {
    text: "Customer Support",
    value: "customer support",
  },
  {
    text: "Sales",
    value: "sales",
  },
  {
    text: "Marketing",
    value: "marketing",
  },
  {
    text: "Design",
    value: "design",
  },
  {
    text: "Front End",
    value: "front end",
  },
  {
    text: "Back End",
    value: "backend",
  },
  {
    text: "Legal",
    value: "legal",
  },
  {
    text: "Testing",
    value: "testing",
  },
  {
    text: "Quality Assurance",
    value: "quality assurance",
  },
  {
    text: "Non-Tech",
    value: "non tech",
  },
  {
    text: "Other",
    value: "other",
  },
];
const levels = [];
for (let x = 0; x < 200000; x += 10000) {
  levels.push(x);
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLIC_STRIPE);

export default function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const stripe = await stripePromise;
    fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(async (session) => {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.log(errror);
        }
      })
      .catch(console.log);
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="form-body">
        <div>
          <label htmlFor="company">
            <span>Company Name*</span>
            <div>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company Name"
              />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="position">
            <span>position*</span>
            <div>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
              />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="primaryTag">
            <span>Primary Tag</span>
            <div>
              <select name="primaryTag" id="primaryTag">
                {options.map((o, index) => (
                  <option defaultValue={o.value} key={index}>
                    {o.text}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="otherTags">
            <span>TAGS SEPERATED BY COMMA, (LIKE TECH STACK OR INDUSTRY)</span>
            <div>
              <input
                type="text"
                name="otherTags"
                id="otherTags"
                placeholder="Tags seperated by comma"
              />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="location">
            <span>Job is restricted to what location?</span>
            <div>
              <input
                type="text"
                name="location"
                id="location"
                defaultValue="Worldwide"
              />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="color">
            <span>Company Theme</span>
            <div>
              <div className="file">
                <input type="color" name="color" id="color" />
              </div>
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="min">
            <span>Minimum Salary (in USD)</span>
            <div>
              <select name="min" id="min">
                {levels.map((l) => (
                  <option value={l} key={"min-" + l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="max">
            <span>Maximum salary (in USD)</span>
            <div>
              <select name="max" id="max">
                {levels.map((l) => (
                  <option value={l} key={"max-" + l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            <span>Job Description</span>
            <div>
              <Md name="description" />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="apply">
            <span>How to Apply</span>
            <div>
              <Md name="apply" />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="applyUrl">
            <span>Apply URl</span>
            <div>
              <input
                type="url"
                name="applyUrl"
                id="applyUrl"
                placeholder="https://"
              />
            </div>
          </label>
        </div>
        <div>
          <label>
            <button className="btn" type="submit">
              Post Job for $597
            </button>
          </label>
        </div>
      </div>
    </form>
  );
}
