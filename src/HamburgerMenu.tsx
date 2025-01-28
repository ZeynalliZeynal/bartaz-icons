import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.44}
      d='M4.32 18.975h15.36M4.32 5.535h15.36M4.32 12.255h15.36'
    />
  </svg>
);
export default SvgHamburgerMenu;
