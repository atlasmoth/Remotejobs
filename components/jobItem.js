import Markdown from "react-markdown";

export default function JobItem({ j, style, getCurr, setCurrId }) {
  return (
    <div style={style} onClick={(e) => setCurrId(j._id)}>
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
            {j.otherTags.map((bt) => (
              <button
                className="button is-light"
                key={Math.random() * Math.random()}
              >
                {bt}
              </button>
            ))}
            {getCurr(j._id) && (
              <a
                className="button is-primary"
                href={j.applyUrl}
                target="_blank"
              >
                Apply
              </a>
            )}
          </div>
        </div>
      </div>
      {getCurr(j._id) && (
        <div>
          <Markdown children={`${j.description}`} />

          <div>
            <a href={j.applyUrl} target="_blank">
              Apply
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
