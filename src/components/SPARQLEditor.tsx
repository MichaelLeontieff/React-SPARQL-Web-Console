import React, { Component } from 'react';

import YASQE from "yasgui-yasqe";

import 'yasgui-yasqe/dist/yasqe.min.css';

class SPARQLEditor extends Component {

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
    this.editor = YASQE(this.container);
  }
}

export default SPARQLEditor;
