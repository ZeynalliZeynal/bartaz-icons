import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckedX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill='#F04438' />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m16 8-8 8m0-8 8 8'
    />
  </svg>
);
export default SvgCheckedX;
