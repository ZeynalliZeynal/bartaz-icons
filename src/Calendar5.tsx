import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar5 = (props: SVGProps<SVGSVGElement>) => (
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
      d='M4.308 9.758h15.4M15.497 3.36v2.843M8.517 3.36v2.843'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.44}
      d='M15.666 4.725H8.35c-2.538 0-4.122 1.413-4.122 4.01v7.82c0 2.64 1.584 4.085 4.122 4.085h7.308c2.545 0 4.122-1.42 4.122-4.019V8.736c.008-2.598-1.57-4.011-4.114-4.011'
      clipRule='evenodd'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.44}
      d='m10.605 13.576-1.373 2.8M14.533 13.576l-1.373 2.8'
    />
  </svg>
);
export default SvgCalendar5;
