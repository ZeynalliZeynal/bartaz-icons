import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path fill='#fff' d='M2 23.47h21v-21H2z' />
  </svg>
);
export default SvgGift;
