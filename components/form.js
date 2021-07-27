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

export default function Form() {
  return (
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
        <label htmlFor="url">
          <span>Company logo</span>
          <div>
            <div className="file">
              <input
                type="file"
                name="url"
                id="url"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="min">
          <span>Minimum Salary (in USD)</span>
          <div>
            <input
              type="range"
              name="min"
              id="min"
              min="0"
              max="200000"
              step="10000"
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="max">
          <span>Maximum salary (in USD)</span>
          <div>
            <input
              type="range"
              name="max"
              id="max"
              min="0"
              max="200000"
              step="10000"
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="description">
          <span>Job Description</span>
        </label>
      </div>
    </div>
  );
}
