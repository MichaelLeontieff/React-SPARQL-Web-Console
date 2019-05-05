import React, { Component } from 'react';
import BaseEditor from "./BaseEditor";
import HostInformation from './HostInformation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app_app-container">
        <HostInformation></HostInformation>
        <div className="app__query-container">
          <BaseEditor></BaseEditor>
        </div>
      </div>
    );
  }
}

export default App;
