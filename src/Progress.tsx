import * as React from 'react';
import type { SVGProps } from 'react';
const SvgProgress = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d='M12 3a9 9 0 1 1-6.364 15.364'
    />
  </svg>
);
export default SvgProgress;
