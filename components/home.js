import { useEffect, useState } from "react";
import styles from "./../styles/home.module.css";
import Search from "./search";
import { queryContext } from "./../contexts/query";
import Joblist from "./joblist";

export default function HomeComponent({ docs }) {
  const [searchTerms, setSearchTerms] = useState([]);

  return (
    <queryContext.Provider value={{ searchTerms, setSearchTerms }}>
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
              <h1>RemoteOk</h1>
            </div>
            <div>
              <button>Health Insurance</button>
            </div>
          </div>
          <div className={styles.main}>
            <Search setSearchTerms={setSearchTerms} />
          </div>
        </header>
        <Joblist docs={docs} />
      </div>
    </queryContext.Provider>
  );
}
