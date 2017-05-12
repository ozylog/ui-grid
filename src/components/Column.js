'use strict';

import React, {Component} from 'react';
import './../styles/column.css';

export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classArr = [];

    for (const attr in this.props) {
      if (attr !== 'children') classArr.push(`col-${attr}-${this.props[attr]}`);
    }

    const className = classArr.join(' ');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}