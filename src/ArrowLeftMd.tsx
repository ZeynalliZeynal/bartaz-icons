import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeftMd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M5 12h14m0 0-6-6m6 6-6 6'
    />
  </svg>
);
export default SvgArrowLeftMd;
