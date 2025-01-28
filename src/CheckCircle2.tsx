import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckCircle2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m15.993 10.222-4.618 4.618a.746.746 0 0 1-1.06 0l-2.31-2.309a.75.75 0 0 1 1.06-1.06l1.78 1.778 4.087-4.088a.75.75 0 1 1 1.061 1.061'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCheckCircle2;
