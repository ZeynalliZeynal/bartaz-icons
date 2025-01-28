import * as React from 'react';
import type { SVGProps } from 'react';
const SvgManat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      stroke='currentColor'
      strokeWidth={0.2}
      d='M6.287 10.823c1.239-2.045 2.941-3.406 4.84-3.711l-.337 11.465-.003.102h2.231l-.003-.102-.24-11.465c1.899.312 3.598 1.674 4.833 3.717 1.259 2.083 2.029 4.866 2.029 7.932 0 .31-.016.62-.033.934l-.005.105h2.045l.007-.093c.033-.43.049-.861.049-1.309 0-3.43-.994-6.552-2.62-8.875-1.608-2.296-3.839-3.816-6.342-4.069l-.03-1.256-.003-.098H11.23l-.003.098-.03 1.257C6.193 6.013 2.3 11.622 2.3 18.398c0 .448.016.878.049 1.31l.007.092h1.931l-.005-.105a18 18 0 0 1-.032-.934c0-3.066.774-5.853 2.037-7.938Z'
    />
  </svg>
);
export default SvgManat;
