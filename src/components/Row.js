'use strict';

import React, {Component} from 'react';
import './../styles/row.css';

export default class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        {this.props.children}
      </div>
    );
  }
}
