import React, { Component, PureComponent } from 'react';

export default class Id extends PureComponent<any, any> {
  state: any;

  constructor(props: any) {
    super(props);
    this.state = {
      name: {
        name: 123,
      },
    };
  }

  xx = () => {
    this.setState({
      name: {
        name: 123,
      },
    });
  };

  render() {
    console.log(123);
    return (
      <div id="xx" onClick={this.xx}>
        {this.state.name.name}
      </div>
    );
  }
}
