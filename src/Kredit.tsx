import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKredit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill='#155EEF' />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.6}
      d='m16.21 7.79-8.42 8.42M8.691 10.195a1.504 1.504 0 1 0 0-3.007 1.504 1.504 0 0 0 0 3.007M15.309 16.813a1.504 1.504 0 1 0 0-3.008 1.504 1.504 0 0 0 0 3.008'
    />
  </svg>
);
export default SvgKredit;
