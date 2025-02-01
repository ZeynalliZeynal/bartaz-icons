import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6.67 3.82c.12.08.25.11.38.11.25 0 .5-.13.65-.37.21-.36.1-.82-.26-1.03L13 12.68c-.31-.18-.61-.71-.61-1.07v-4.1c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.1c0 .89.57 1.9 1.34 2.36z'
      clipRule='evenodd'
      opacity={0.4}
    />
  </svg>
);
export default SvgClock;
