import { useEffect, useRef, useState } from "react";
import { useQuery } from "../contexts/query";
import JobItem from "./JobItem";

export default function Joblist() {
  const { searchTerms } = useQuery();
  const [jobs, setJobs] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [currId, setCurrId] = useState();

  const getCurr = (key) => key === currId;
  const sentinelRef = useRef();

  useEffect(() => {
    setPageNum(0);
    setJobs([]);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        setPageNum((p) => p + 1);
      }
    }, options);
    observer.observe(sentinelRef.current);
    const currObjt = sentinelRef.current;
    return () => observer.unobserve(currObjt);
  }, [searchTerms]);

  useEffect(() => {
    fetch(`/api/jobs/?query=${JSON.stringify(searchTerms)}&page=${pageNum}`)
      .then((res) => res.json())
      .then(({ docs }) => setJobs((j) => [...j, ...docs]));
  }, [pageNum]);

  return (
    <>
      <section>
        <div>
          <div>
            {jobs.map((j, index) => {
              let style = { cursor: "pointer" };
              if (jobs.length - index === 1) {
                style["marginBottom"] = "150px";
              }

              return (
                <JobItem
                  j={j}
                  style={style}
                  key={j._id}
                  getCurr={getCurr}
                  setCurrId={setCurrId}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div ref={sentinelRef} style={{ height: "100px" }}></div>
    </>
  );
}
