---
title: Button 按钮
order: 1
group:
  title: 通用
  order: 4

---

## Button

```tsx
import React from 'react';
import { Button } from 'WakUI-React';

export default () => {
  return(
    <>
      <Button>Default</Button>
      <Button type='primary'>Primary</Button>
      <Button type='dashed'>Dashed</Button>
      <Button danger >Danger</Button>
      <Button danger type='primary'>Danger</Button>
      <Button danger type='dashed'>Danger</Button>
      <Button danger type='text'>Danger</Button>
      <Button danger type='link'>Danger</Button>
    </>
  )
}


```
<API></API>
