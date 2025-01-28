import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStore = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.59}
      d='M8.807 7.76c0 1.754-1.486 3.177-3.176 3.177S2.208 9.466 2.455 7.76c.13-.902.557-2.323.93-3.46a2.61 2.61 0 0 1 2.486-1.799h12.188c1.126 0 2.125.719 2.482 1.786.38 1.139.816 2.566.947 3.473.247 1.706-1.485 3.177-3.175 3.177s-3.177-1.423-3.177-3.177'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.59}
      d='M8.795 6.766v.993a3.176 3.176 0 0 0 6.352 0v-.993M3.866 13.387v3.521c0 2.691 1.676 4.593 4.37 4.593h7.705c2.694 0 4.371-1.902 4.371-4.593v-3.521'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.59}
      d='M9.198 21.5v-3.306a2.773 2.773 0 0 1 5.546 0V21.5M16.706 13.976h-.068m.053.274a.276.276 0 1 1 0-.552.276.276 0 0 1 0 .552'
    />
  </svg>
);
export default SvgStore;
