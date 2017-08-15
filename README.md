# @ozylog/ui-grid
React UI Grid with react-jss

[![Travis](https://img.shields.io/travis/ozylog/ui-grid.svg)](https://travis-ci.org/ozylog/ui-grid) [![npm](https://img.shields.io/npm/dt/@ozylog/ui-grid.svg)](https://www.npmjs.com/package/@ozylog/ui-grid)

## Installation
```
npm install @ozylog/ui-grid --save
```

## Usage

### Container
```
<Container />
```

### Row
```
<Row />
```

### Column
```
<Column />
```
See [Bootstrap 3 Grid System](http://getbootstrap.com/css/#grid) for more details. Bootstrap Col Class format: `col-[attr]-[attrValue]`. This is how to implement it in this react component: `<Column [attr]=[attrValue] />`. e.g. `<Column md='4' mdOffset='4' />`
attr: [ 'xs', 'xsOffset', 'xsPull', 'xsPush', 'sm', 'smOffset', 'smPull', 'smPush', 'md', 'mdOffset', 'mdPull', 'mdPush', 'lg', 'lgOffset', 'lgPull', 'lgPush' ]

## Usage Example
```javascript
'use strict';

import React, {Component} from 'react';
import {Container, Row, Column} from '@ozylog/ui-grid';

export default class TestContainer extends Component {
  render() {
    return (
      <div className='Test'>
        <Container>
          <Row>
            <Column md='4' mdOffset='4' xs='2' xsPush='1' lgPull='2'>
              Hello World!
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}
```

## License
MIT
