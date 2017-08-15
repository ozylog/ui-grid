'use strict';

import React, {Component} from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  '@media (min-width: 768px)': {
    container: {
      width: '750px'
    }
  },
  '@media (min-width: 992px)': {
    container: {
      width: '970px'
    }
  },
  '@media (min-width: 1200px)': {
    container: {
      width: '1170px'
    }
  }
};

@injectSheet(styles)
export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {width, classes} = this.props;
    const style = {};

    if (width) style.width = width;

    return (
      <div className={classes.container} style={style}>
        {this.props.children}
      </div>
    );
  }
}

