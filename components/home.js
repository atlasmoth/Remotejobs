import { useState } from "react";
import styles from "./home.module.css";
import Search from "./search";
import { queryContext } from "./../contexts/query";
import Joblist from "./joblist";

export default function HomeComponent() {
  const [searchTerms, setSerchTerms] = useState([]);

  return (
    <queryContext.Provider value={{ searchTerms, setSerchTerms }}>
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
            <Search setSerchTerms={setSerchTerms} />
          </div>
        </header>
        <Joblist />
      </div>
    </queryContext.Provider>
  );
}
