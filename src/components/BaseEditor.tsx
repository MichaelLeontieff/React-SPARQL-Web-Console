import React, { Component } from 'react';

import CodeMirror from "codemirror";

import 'codemirror/lib/codemirror.css';

class BaseEditor extends Component {

  public container;
  public editor;

  render() {
    return (
      <div className="Editor">
        <div id="editor-container"></div>
      </div>
    );
  }

  componentDidMount() {
    // instantiate editor
    this.container = document.querySelector("#editor-container");
    this.editor = CodeMirror(this.container, { 
      value: "testing",
      mode: "javascript",
      lineNumbers: true,
      theme: "eclipse"
    });
  }
}

export default BaseEditor;