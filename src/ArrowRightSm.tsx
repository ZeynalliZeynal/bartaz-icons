import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRightSm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M17 12H7m0 0 4 4m-4-4 4-4'
    />
  </svg>
);
export default SvgArrowRightSm;
