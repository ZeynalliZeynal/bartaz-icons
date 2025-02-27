import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#TR_svg__a)'>
      <path
        fill='#D80027'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12'
      />
      <path
        fill='#F0F0F0'
        d='m14.509 9.805.984 1.357 1.595-.517L16.102 12l.984 1.357-1.594-.519-.986 1.356.001-1.677L12.913 12l1.595-.518z'
      />
      <path
        fill='#F0F0F0'
        d='M11.822 15.39a3.391 3.391 0 1 1 1.613-6.374 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408'
      />
    </g>
    <defs>
      <clipPath id='TR_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTr;
