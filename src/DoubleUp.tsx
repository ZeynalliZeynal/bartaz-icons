import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDoubleUp = (props: SVGProps<SVGSVGElement>) => (
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
      d='M16.363 11 12 6l-4.364 5M16.363 18 12 13l-4.364 5'
    />
  </svg>
);
export default SvgDoubleUp;
