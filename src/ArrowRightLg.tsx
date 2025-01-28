import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRightLg = (props: SVGProps<SVGSVGElement>) => (
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
      d='M3 12h18m0 0-5-5m5 5-5 5'
    />
  </svg>
);
export default SvgArrowRightLg;
