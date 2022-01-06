---
title: Button 按钮
order: 1
group:
  title: 通用
  order: 4

---

## Button
普通Button
```tsx
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
危险按钮

```tsx
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
