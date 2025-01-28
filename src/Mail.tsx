import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      d='M5 5.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zM2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M2.376 6.584a.75.75 0 0 1 1.04-.208L12 12.099l8.584-5.723a.75.75 0 1 1 .832 1.248l-9 6a.75.75 0 0 1-.832 0l-9-6a.75.75 0 0 1-.208-1.04'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMail;
