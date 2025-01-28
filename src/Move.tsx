import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMove = (props: SVGProps<SVGSVGElement>) => (
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
      d='M4.32 8.535h15.36M4.32 15.255h15.36'
    />
  </svg>
);
export default SvgMove;
