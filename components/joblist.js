import { useEffect, useRef, useState } from "react";
import { useQuery } from "../contexts/query";
import JobItem from "./jobItem";

export default function Joblist({}) {
  const { searchTerms } = useQuery();
  const [jobs, setJobs] = useState([]);
  const [pageNum, setPageNum] = useState(1);

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
    const terms = searchTerms.reduce((acc, curr) => {
      return acc + `&terms=${curr}`;
    }, ``);

    fetch(`/api/jobs?page=${pageNum}${terms}`)
      .then((res) => res.json())
      .then(({ docs }) => setJobs((j) => [...j, ...docs]))
      .catch((err) => console.log(err));
  }, [pageNum]);

  return (
    <>
      <section className="joblist">
        <div>
          <div>
            {jobs.map((j, index) => {
              let style = {};
              if (jobs.length - index === 1) {
                style["marginBottom"] = "150px";
              }

              return <JobItem j={j} style={style} key={j._id} />;
            })}
          </div>
        </div>
      </section>
      <div ref={sentinelRef} style={{ height: "100px" }}></div>
    </>
  );
}
