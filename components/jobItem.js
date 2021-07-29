import Markdown from "react-markdown";
import { useQuery } from "./../contexts/query";
export default function JobItem({ j, style }) {
  const ctx = useQuery();
  return (
    <div style={style}>
      <div>
        <div>
          <div>
            <figure>
              <p>
                <img src="https://bulma.io/images/placeholders/64x64.png" />
              </p>
            </figure>
            <div>
              <h3>{j.company}</h3>
              <h2>
                <strong>{j.position}</strong>
              </h2>
              <div>
                <p>
                  <button>{j.location}</button>
                </p>

                <p>
                  <button>
                    ${j.min} - ${j.max}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            {j.otherTags &&
              j.otherTags.map((bt, index) => (
                <button
                  className="button is-light"
                  key={index * Math.random() * Date.now()}
                  style={{ cursor: "pointer" }}
                  onClick={() => ctx.setSearchTerms((s) => [...s, bt])}
                >
                  {bt}
                </button>
              ))}
            <a className="button is-primary" href={j.applyUrl} target="_blank">
              Apply
            </a>
          </div>
        </div>
      </div>
      <div>
        <Markdown children={`${j.description}`} />

        <div>
          <a href={j.applyUrl} target="_blank">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
