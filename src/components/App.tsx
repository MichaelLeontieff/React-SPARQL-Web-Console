import React, { Component } from 'react';
import BaseEditor from "./BaseEditor";
import HostInformation from './HostInformation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app_app-container">
          <div className="app_app-header-container">
            <div className="row">
              <div className="col-sm-1 align-self-center">
                <div className="app_app-header-title-container">
                  <h1 className="app_app-header">RQL</h1><h6 className="app_app-sub-header">V2</h6>
                </div>
              </div>

              <div className="col-sm-11 align-self-center">
                <div className="app_host-information-container">
                  <HostInformation></HostInformation>
                </div>
              </div>
            </div>
          </div>
          <div className="app__query-container">
            <BaseEditor></BaseEditor>
          </div>
      </div>
    );
  }
}

export default App;
