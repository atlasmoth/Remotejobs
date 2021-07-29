import styles from "./home.module.css";
import Search from "./search";

export default function HomeComponent() {
  return (
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
          <Search />
        </div>
      </header>
    </div>
  );
}
