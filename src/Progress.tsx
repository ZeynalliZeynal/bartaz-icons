import * as React from 'react';
import type { SVGProps } from 'react';
const SvgProgress = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d='M12 3a9 9 0 1 1-6.364 15.364'
    />
  </svg>
);
export default SvgProgress;
