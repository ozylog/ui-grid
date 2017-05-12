'use strict';

import React, {Component} from 'react';
import './../styles/container.css';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {width} = this.props;
    const style = {};

    if (width) style.width = width;

    return (
      <div className='container' style={style}>
        {this.props.children}
      </div>
    );
  }
}