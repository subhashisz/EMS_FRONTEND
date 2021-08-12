import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div>
              <a href="https://www.google.com" className="navbar-brand">
                EMS
              </a>
            </div>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
