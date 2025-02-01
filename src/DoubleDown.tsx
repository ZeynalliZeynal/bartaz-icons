import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDoubleDown = (props: SVGProps<SVGSVGElement>) => (
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
      d='M16.363 13 12 18l-4.364-5M16.363 6 12 11 7.636 6'
    />
  </svg>
);
export default SvgDoubleDown;
