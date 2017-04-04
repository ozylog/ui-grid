'use strict';

import React, {Component} from 'react';
import './../styles/gridRow.css';

export default class GridRow extends Component {
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
