import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#RU_svg__a)'>
      <path
        fill='#F0F0F0'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12'
      />
      <path
        fill='#0052B4'
        d='M23.254 16.173c.482-1.3.746-2.706.746-4.173s-.264-2.874-.746-4.174H.747A12 12 0 0 0 0 12c0 1.467.265 2.873.747 4.173L12 17.217z'
      />
      <path
        fill='#D80027'
        d='M12 24c5.16 0 9.558-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24'
      />
    </g>
    <defs>
      <clipPath id='RU_svg__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRu;
