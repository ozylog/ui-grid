'use strict';

import React, {Component} from 'react';
import injectSheet from 'react-jss';

const styles = {
  column: {
    boxSizing: 'border-box',
    minHeight: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'relative',
    float: 'left'
  }
};

for (const type of ['xs', 'sm', 'md', 'lg']) {
  let section = styles;

  switch (type) {
  case 'sm':
    styles['@media (min-width: 768px)'] = {};
    section = styles['@media (min-width: 768px)'];
    break;
  case 'md':
    styles['@media (min-width: 992px)'] = {};
    section = styles['@media (min-width: 992px)'];
    break;
  case 'lg':
    styles['@media (min-width: 1200px)'] = {};
    section = styles['@media (min-width: 1200px)'];
    break;
  default:
    break;
  }

  for (let i = 1; i <= 12; i++) {
    const value = `${i / 12}%`;

    section[`column-${type}-${i}`] = {
      width: value
    };
    section[`column-${type}Offset-${i}`] = {
      marginLeft: value
    };
    section[`column-${type}Push-${i}`] = {
      left: value
    };
    section[`column-${type}Pull-${i}`] = {
      right: value
    };
  }
}

@injectSheet(styles)
export default class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: {},
      push: {}
    };
  }

  render() {
    const {classes} = this.props;
    const classNameArr = [classes.column];
    const allowedClassName = [
      'xs', 'xsOffset', 'xsPull', 'xsPush',
      'sm', 'smOffset', 'smPull', 'smPush',
      'md', 'mdOffset', 'mdPull', 'mdPush',
      'lg', 'lgOffset', 'lgPull', 'lgPush'
    ];

    for (const attr in this.props) {
      if (allowedClassName.indexOf(attr) > -1) classNameArr.push(`column-${attr}-${this.props[attr]}`);
    }

    const className = classNameArr.join(' ');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
