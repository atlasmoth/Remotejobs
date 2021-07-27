import React from "react";
import * as ReactDOM from "react-dom";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

export default function Md(props) {
  return (
    <MdEditor
      style={{ height: "30vh" }}
      renderHTML={(text) => mdParser.render(text)}
      view={{ menu: true, md: true, html: false }}
      name={props.name}
    />
  );
}
