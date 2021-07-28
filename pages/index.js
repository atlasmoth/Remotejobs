import { useState } from "react";

export default function Home() {
  return <Test />;
}

const Test = (props) => {
  const [name] = useState(props.name);
  return <p>Hello {name}</p>;
};
Test.defaultProps = {
  name: "Anonymous",
};
