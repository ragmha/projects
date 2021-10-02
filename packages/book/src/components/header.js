import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Books
            </a>
          </div>
        </div>
        </nav>
     </div>
    );
  }
}
