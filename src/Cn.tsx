import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#CN_svg__a)'>
      <path
        fill='#D80027'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12'
      />
      <path
        fill='#FFDA44'
        d='m6.567 7.301 1.036 3.188h3.352l-2.71 1.973 1.036 3.188-2.714-1.969-2.714 1.969 1.041-3.188L2.18 10.49H5.53zM14.226 18.585l-.792-.975-1.172.454.68-1.054-.792-.98 1.214.323.684-1.054.066 1.256 1.218.323-1.176.45zM15.802 15.725l.375-1.2-1.027-.726 1.257-.019.37-1.2.408 1.19 1.256-.013-1.008.75.403 1.19-1.026-.726zM17.925 8.807l-.553 1.13.9.876-1.242-.178-.553 1.125-.216-1.238-1.247-.178 1.116-.586-.216-1.242.9.877zM14.26 5.385l-.095 1.252 1.168.473-1.224.3-.089 1.256-.66-1.068-1.224.3.81-.961-.665-1.064 1.167.473z'
      />
    </g>
    <defs>
      <clipPath id='CN_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCn;
