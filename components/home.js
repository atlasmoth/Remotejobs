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
    console.log(
      searchTerms
        .map((s) => s.toLowerCase().trim())
        .includes(text.toLowerCase().trim())
    );
    if (!searchTerms.find(text)) {
      console.log(searchTerms, text);
      setSearchTerms((s) => [...s, text]);
    }
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
        <Tags terms={searchTerms} />
        <Joblist />
      </div>
    </queryContext.Provider>
  );
}
