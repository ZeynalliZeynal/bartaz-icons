import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinus2 = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18'
      clipRule='evenodd'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15.299 12.002h-6.6'
    />
  </svg>
);
export default SvgMinus2;
