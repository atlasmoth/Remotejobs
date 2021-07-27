import Form from "./form";

export default function Board() {
  return (
    <div className="board">
      <div className="banner">
        <div>
          <h1>RemoteOk</h1>
        </div>
        <div>
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
