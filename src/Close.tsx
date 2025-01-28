import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill='#F1F3FA' />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m15 9-6 6m0-6 6 6'
    />
  </svg>
);
export default SvgClose;
