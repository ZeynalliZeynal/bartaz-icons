import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpRightMd = (props: SVGProps<SVGSVGElement>) => (
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
      d='M7 17 17 7m0 0H9m8 0v8'
    />
  </svg>
);
export default SvgArrowUpRightMd;
