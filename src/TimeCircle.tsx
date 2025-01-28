import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='M15.573 15.814a.76.76 0 0 1-.384-.105l-3.926-2.342a.75.75 0 0 1-.365-.645V7.675a.75.75 0 0 1 1.5 0v4.621l3.56 2.123a.752.752 0 0 1-.385 1.395'
    />
  </svg>
);
export default SvgTimeCircle;
