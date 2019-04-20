import React, { Component } from 'react';

import YASQE from "yasgui-yasqe";

import 'yasgui-yasqe/dist/yasqe.min.css';

class Editor extends Component {

  public container;
  public yasqe;

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
    this.yasqe = YASQE(this.container);

    console.log(this.yasqe);
  }
}

export default Editor;
