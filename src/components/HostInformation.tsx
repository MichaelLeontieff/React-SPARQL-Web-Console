import React, { Component } from 'react';

import './HostInformation.css';

class HostInformation extends Component {
  render() {
    return (
        <div className="host-information">
            <div className="row">
                {/* Host */}
                <div className="col-sm-10 align-self-center">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Host</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    
                </div>
                {/* User */}
                <div className="col-sm-2 align-self-center">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">User</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default HostInformation;
