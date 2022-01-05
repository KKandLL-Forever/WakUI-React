import React from 'react';

export interface IHelloProps {
  /**
   * 可以这样写属性描述
   * @description       也123
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           helloClassName
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性
}

const Hello: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Hello;
