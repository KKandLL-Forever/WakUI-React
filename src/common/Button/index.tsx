import React, {ReactEventHandler} from 'react';
import './style/index.less'
import {classHandle} from '../../utils/classNameHandle'

interface IButtonProps {
  /**
   * @description       将按钮宽度调整为其父宽度的选项
   * @default           false
   */
  block?: boolean;
  /**
   * @description       设置危险按钮
   * @default           false
   */
  danger?: boolean;
  /**
   * @description       按钮失效状态
   * @default           false
   */
  disable?: boolean;
  /**
   * @description       幽灵属性，使按钮背景透明
   * @default           false
   */
  ghost?: boolean;
  /**
   * @description       点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   * @default           -
   */
  href?:string;
  /**
   * @description       设置 button 原生的 type 值，可选值请参考 HTML 标准
   * @default           false
   */
  htmlType?: string;
  // icon?:
  /**
   * @description       设置按钮载入状态
   * @default           false
   */
  loading?: boolean;
  /**
   * @description       设置按钮形状
   * @default           default
   */
  shape?: 'default' | 'circle' | 'round';
  /**
   * @description       设置按钮大小
   * @default           middle
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * @description       相当于 a 链接的 target 属性，href 存在时生效
   * @default           -
   */
  target?: string;
  /**
   * @description       设置按钮类型
   * @default           default
   */
  type?:'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * @description       点击按钮时的回调
   * @default           -
   */
  onClick?: ReactEventHandler;
  className?:string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {danger,type,className} = props
  // console.log(props);
  // const defaultProps:IButtonProps = {
  //   block:false,
  //   danger:false,
  //   disable: false,
  //   ghost:false,
  //   loading: false,
  //   shape:'default',
  //   size:'middle',
  //   type:'default'
  // }
  const componentName = 'btn'
  const btnClassName = classHandle(componentName,'',[type,className],danger)
  const btnDanger = classHandle(componentName,{type,danger})

  console.log(btnDanger,'123')
  //danger的按钮单独渲染
  if (props.danger) {
    return(
      <>
        <button className={btnDanger}>
          <span className={'wk-btn-inner'}>{props.children}</span>
        </button>
      </>
    )
  }
  return(
    <>
      <button className={btnClassName}>
        <span className={'wk-btn-inner'}>{props.children}</span>
      </button>
    </>
  )
};

export default Button;
