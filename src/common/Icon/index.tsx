import React, {CSSProperties} from 'react';
import '../../utils/icon-svg.js'
import './index.less'

interface IconProps extends React.SVGAttributes<SVGElement>{
  className?:string,
  iconName?:string,
  spin?:boolean,
  style?:CSSProperties,
}

const Icon:React.FC<IconProps> = (props) => {
  return (
    <svg className='wk-icon' style={{width:'1rem'}}>
      <use xlinkHref="#icon-setting"/>
    </svg>
  );
};

export default Icon;
