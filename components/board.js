import Form from "./form";
import Link from "next/link";

export default function Board() {
  return (
    <div className="board">
      <div className="banner">
        <div>
          <h1>
            <Link href="/">
              <a>RemoteOk</a>
            </Link>
          </h1>
        </div>
        <div className="remotely">
          <h2>Hire Remotely</h2>
        </div>
        <div>
          <button className="btn">Buy a bundle</button>
        </div>
      </div>
      <main className="main">
        <Form />
      </main>
    </div>
  );
}
