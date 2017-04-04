# @ozylog/ui-grid
Bootstrap grid react components

[![Travis](https://img.shields.io/travis/ozylog/ui-grid.svg)](https://travis-ci.org/ozylog/ui-grid) [![npm](https://img.shields.io/npm/dt/@ozylog/ui-grid.svg)](https://www.npmjs.com/package/@ozylog/ui-grid)

## Installation
```npm install @ozylog/ui-grid --save```

## Usage

### GridContainer
```
<GridContainer />
```
**Props in `[]` are optional**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|[width]       |`string`|`undefined`|Width Container. e.g. '100%', '800px'     |

### GridRow
```
<GridRow />
```

### GridCol
```
<GridCol />
```

See [Bootstrap 3 Grid System](http://getbootstrap.com/css/#grid) for more details. Bootstrap Col Class format: `col-[attr]-[attrValue]`. This is how to implement it in this react component: `<GridCol [attr]=[attrValue] />`. e.g. `<GridCol md='4' mdOffset='4' />`

## Usage Example
```javascript
'use strict';

import React, {Component} from 'react';
import {GridContainer, GridRow, GridCol} from '@ozylog/ui-grid';

export default class TestContainer extends Component {
  render() {
    return (
      <div className='Test'>
        <GridContainer>
          <GridRow>
            <GridCol md='4' mdOffset='4'>
              Hello World!
            </GridCol>
          </GridRow>
        </GridContainer>
      </div>
    );
  }
}
```

## License
MIT
