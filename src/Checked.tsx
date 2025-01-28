import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill='#17B26A' />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m17.182 9-7 7L7 12.818'
    />
  </svg>
);
export default SvgChecked;
