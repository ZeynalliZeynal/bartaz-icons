import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12.756 15.693a.75.75 0 0 1-1.5 0v-4.299a.75.75 0 0 1 1.5 0zM11.25 8.291a.75.75 0 0 1 1.5 0c0 .414-.336.782-.75.782s-.75-.305-.75-.719z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgInfoCircle;
