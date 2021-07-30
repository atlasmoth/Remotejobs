import { useState } from "react";
import styles from "./../styles/home.module.css";
import Search from "./search";
import { queryContext } from "./../contexts/query";
import Joblist from "./joblist";
import Link from "next/link";
import Tags from "./tags";

export default function HomeComponent() {
  const [searchTerms, setSearchTerms] = useState([]);
  const updateSearchTerms = (text) => {
    setSearchTerms((s) => [...new Set([...s, text])]);
  };
  const removeTag = (text) => {
    setSearchTerms((s) => [...s.filter((i) => i !== text)]);
  };
  return (
    <queryContext.Provider
      value={{ searchTerms, setSearchTerms, updateSearchTerms }}
    >
      <div className={styles.home}>
        <header className={styles.header}>
          <div className="banner">
            <div>
              <div className="buttons">
                <button>RSS</button>
                <button>API</button>
              </div>
            </div>
            <div>
              <h1>
                <Link href="/">
                  <a>RemoteOk</a>
                </Link>
              </h1>
            </div>
            <div>
              <button className="btn">
                <Link href="/remotely">
                  <a>Post Job</a>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.main}>
            <Search setSearchTerms={setSearchTerms} />
          </div>
        </header>
        <Tags terms={searchTerms} removeTag={removeTag} />
        <Joblist />
      </div>
    </queryContext.Provider>
  );
}
