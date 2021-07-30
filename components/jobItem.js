import Markdown from "react-markdown";
import { useQuery } from "./../contexts/query";
export default function JobItem({ j }) {
  const ctx = useQuery();
  const handleClick = () => {};
  return (
    <div className="jobItem">
      <div className="header-tab">
        <div className="header-img">
          <img
            src="https://via.placeholder.com/40/ca1146/ca1146"
            alt="avatar"
          />
        </div>
        <div className="header-details">
          <p>{j.company}</p>
          <p>
            <strong>{j.position}</strong>
          </p>
          <p>
            <button className="location">{j.location}</button>
            <button className="location">
              💰 $
              {j.min.toString().substr(0, j.min.toString().lastIndexOf("000"))}{" "}
              k - $
              {j.max.toString().substr(0, j.max.toString().lastIndexOf("000"))}k
            </button>
          </p>
        </div>
        <div className="header-buttons">
          {j.otherTags &&
            j.otherTags.map((tag) => (
              <button
                key={Math.random() * Date.now()}
                onClick={() => {
                  ctx.setSearchTerms((s) => [...s, tag]);
                }}
              >
                {tag}
              </button>
            ))}
        </div>
        <div className="header-tag">📌 10d</div>
        <div className="header-apply">
          <button className="btn">Apply</button>
        </div>
      </div>
    </div>
  );
}

{
  /* <Markdown children={`${j.description}`} /> */
}
