import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d='M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3zM16 15v4q0 3-3 3h-2q-3 0-3-3v-4z'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d='M21 10v5q0 3-3 3h-2v-3H8v3H6q-3 0-3-3v-5q0-3 3-3h12q3 0 3 3M17 15H7M7 11h3'
    />
  </svg>
);
export default SvgPrinter;
