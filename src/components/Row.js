'use strict';

import React, {Component} from 'react';
import injectSheet from 'react-jss';

const styles = {
  row: {
    marginLeft: '-15px',
    marginRight: '-15px',
    '&:before, &:after': {
      content: '" "',
      display: 'table'
    },
    '&:after': {
      clear: 'both'
    }
  }
};

@injectSheet(styles)
export default class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.row}>
        {this.props.children}
      </div>
    );
  }
}
