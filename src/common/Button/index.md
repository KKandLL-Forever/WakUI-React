---
title: Button 按钮
order: 1
group:
  title: 通用
  order: 4

---

## Button
## 代码示例

```tsx
/**
 * title: 普通类型
 * desc: 普通按钮有五种类型：主要按钮、默认按钮、虚线按钮、文字按钮、链接按钮
 */
import React from 'react';
import { Button } from 'WakUI-React';

export default () => {
  return(
    <>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='text'>Text</Button>
      <Button type='link'>Link</Button>
    </>
  )
}
```


```tsx
/**
 * title: danger类型
 * desc: danger按钮同普通按钮,共五种按钮
 */

import React from 'react';
import { Button } from 'WakUI-React';

export default () => {
  return(
    <>
      <Button danger type='primary'>Danger</Button>
      <Button danger >Danger</Button>
      <Button danger type='dashed'>Dashed</Button>
      <Button danger type='text'>Text</Button>
      <Button danger type='link'>Link</Button>
    </>
  )
}
```

<API></API>
