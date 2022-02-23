import React, { Component } from 'react'
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
          
            <div className="footer mt-2">
                  <footer className="main-footer fixed-bottom">
    <strong>Copyright © 2020-2021 <a href="https://ur.ac.rw/">University of Rwanda</a>.</strong>
    &nbsp;&nbsp;All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0.0
    </div>
  </footer>
            </div>
        )
    }
}
