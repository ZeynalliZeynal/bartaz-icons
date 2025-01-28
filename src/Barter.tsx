import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarter = (props: SVGProps<SVGSVGElement>) => (
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
      d='M11.636 15.362 9 17.998l2.636 2.635M12.365 8.634l2.636-2.636-2.636-2.635'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15 6H9a6 6 0 0 0-6 6c0 1.912.897 3.611 2.29 4.71M9 18h6a6 6 0 0 0 6-6 5.99 5.99 0 0 0-2.29-4.71'
    />
  </svg>
);
export default SvgBarter;
