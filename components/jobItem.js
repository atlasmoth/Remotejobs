import { useState } from "react";
import Markdown from "react-markdown";
import { useQuery } from "./../contexts/query";

export default function JobItem({ j, style }) {
  const ctx = useQuery();
  const [showMarkdown, setShowMarkdown] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      setShowMarkdown((s) => !s);
    }
  };
  return (
    <div className="jobItem" style={{ ...style }}>
      <div className="header-tab" onClick={handleClick}>
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
                  ctx.updateSearchTerms(tag);
                }}
              >
                {tag}
              </button>
            ))}
        </div>

        <div className="header-apply">
          <button className="btn">
            <a target="_blank" href={j.applyUrl}>
              Apply
            </a>
          </button>
        </div>
      </div>

      {showMarkdown && (
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            padding: "2rem",
          }}
        >
          <Markdown children={`${j.description}`} />
          <Markdown children={`${j.apply}`} />
          <h1>Location</h1>
          <p>{j.location}</p>
          <div className="apply">
            <button className="btn">
              <a href={j.applyUrl} target="_blank">
                {" "}
                Apply
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
