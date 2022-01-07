import React, {CSSProperties} from 'react';
import '../../utils/icon-svg.js'
import './index.less'
import {classHandle} from "../../utils/classNameHandle";

interface IconProps extends React.SVGAttributes<SVGElement>{
  className?:string,
  iconName?:string,
  spin?:boolean,
  style?:CSSProperties,
}

const Icon:React.FC<IconProps> = (props) => {
  const {className,iconName,spin,style} = props
  const componentName = 'icon'
  const iconClass = classHandle(componentName,'',{spin})
  console.log(iconClass,'iconClass');


  return (
    <svg className={iconClass}>
      <use xlinkHref={`#icon-${iconName}`}/>
    </svg>
  );
};

export default Icon;
