import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#1D2636'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.44}
      d='M16.645 3.36a2.591 2.591 0 1 1 .001 5.183 2.591 2.591 0 0 1 0-5.183M6.278 9.408a2.591 2.591 0 1 1 0 5.183 2.591 2.591 0 0 1 0-5.183M16.645 15.456a2.591 2.591 0 1 1 .001 5.183 2.591 2.591 0 0 1 0-5.183'
      clipRule='evenodd'
    />
    <path
      stroke='#1D2636'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.44}
      d='m8.515 13.304 5.9 3.44m-.008-9.488-5.893 3.439'
    />
  </svg>
);
export default SvgShare;
