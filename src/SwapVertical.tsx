import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwapVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d='m9.334 20-3.2-3.2m0 0 3.2-3.2m-3.2 3.2h9.6a3.2 3.2 0 0 0 3.2-3.2v-1.067M5.067 11.467V10.4a3.2 3.2 0 0 1 3.2-3.2h9.6m0 0-3.2 3.2m3.2-3.2-3.2-3.2'
    />
  </svg>
);
export default SvgSwapVertical;
