import React from 'react';
import ReactDOM from 'react-dom';

export default class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1 className="invitation-header">You've been invited!</h1>
        <div className="invitation-body">{this.props.children}</div>
      </div>
    );
  }
}