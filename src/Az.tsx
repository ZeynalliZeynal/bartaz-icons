import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#AZ_svg__a)'>
      <path
        fill='#D80027'
        d='M24 12c0-1.468-.265-2.874-.747-4.174L12 7.304.745 7.826A12 12 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.253-.522c.482-1.3.747-2.706.747-4.174'
      />
      <path
        fill='#6DA544'
        d='M12 24c5.16 0 9.558-3.257 11.254-7.826H.747C2.442 20.744 6.84 24 12 24'
      />
      <path
        fill='#338AF3'
        d='M.747 7.825h22.507C21.558 3.255 17.16 0 12 0S2.442 3.256.747 7.825'
      />
      <path
        fill='#F0F0F0'
        d='M12.376 14.844a2.844 2.844 0 1 1 1.353-5.346 3.5 3.5 0 1 0 0 5.004 2.8 2.8 0 0 1-1.353.342'
      />
      <path
        fill='#F0F0F0'
        d='m14.564 10.03.376 1.06 1.016-.483-.483 1.015 1.06.377-1.06.377.483 1.015-1.016-.482-.376 1.059-.377-1.06-1.015.483.482-1.015-1.059-.377 1.06-.377-.483-1.015 1.015.483z'
      />
    </g>
    <defs>
      <clipPath id='AZ_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAz;
