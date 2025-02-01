import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBoardMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d='M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3M11.139 12h5.283m-8.844 0h.305m3.256-3.96h5.283m-8.844 0h.305m3.256 7.919h5.283m-8.844 0h.305'
    />
  </svg>
);
export default SvgBoardMenu;
