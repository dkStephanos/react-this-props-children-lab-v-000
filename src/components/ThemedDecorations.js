// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div> 
      );
    });
 
    return (
      <div className="themed-decoration">
        {childrenWithWrapperDiv}        
      </div>      
    );
  }
}